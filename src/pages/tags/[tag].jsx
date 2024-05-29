import connectDB from "@/mongoose/connectDB";
import Blog from "@/mongoose/models/Blog";
import LinkTag from "@/components/LinkTag";
import Article from "@/components/Title";

const Tag = ({ blogs }) => {
  return (
    <div className="px-3 w-full max-w-[800px] mt-[70px] mx-auto flex flex-col items-start gap-3">
      <div className="flex flex-wrap items-center w-full gap-3 justify-normal">
        <LinkTag href="/" title="all" />
      </div>
      <div className="flex flex-col w-full gap-2 mt-3">
        {blogs.map((blog) => {
          return <Article key={blog.customID} blog={blog} />;
        })}
      </div>
    </div>
  );
};
export const getStaticProps = async ({ params: { tag } }) => {
  await connectDB();
  const project = {
    _id: 0,
    _v: 0,
    content: 0,
  };
  const results = await Blog.find({ tags: tag }, project);

  const blogs = results.map((blog) => {
    const blogObject = blog.toObject();
    blogObject.createdAt = blogObject.createdAt.toLocaleDateString("en-US");
    return blogObject;
  });

  return {
    props: { blogs },
  };
};

// nextjs needs to know the possible values of slug so that it can create the static routes and pages
export const getStaticPaths = async () => {
  await connectDB();
  let tagArray = [];

  const project = {
    _id: 0,
    _v: 0,
    content: 0,
  };
  // find all docs
  const docs = await Blog.find({}, project);

  // extract all the tags
  docs.forEach((doc) => {
    // const blogObject = doc.toObject();
    tagArray.push(doc.tags);
  });
  // get the unique tags
  const uniqueTags = [...[...new Set(tagArray.flat())]];

  // create the possible paths
  const paths = uniqueTags.map((tag) => ({
    params: {
      tag: tag,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default Tag;
