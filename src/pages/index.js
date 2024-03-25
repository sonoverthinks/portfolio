import matter from "gray-matter";
import readingTime from "reading-time";
import { triviaData } from "@/data";
import connectDB from "@/mongoose/connectDB";
import Blog from "@/mongoose/models/Blog";
import Trivia from "@/mongoose/models/Trivia";
import readBlogFiles from "@/utils/readBlogs";
import getBlogFileNames from "@/utils/getBlogFileNames";
import LinkTag from "@/components/LinkTag";
import Article from "@/components/Article";

const Home = ({ recentBlogs, uniqueTags }) => {
  return (
    <main className="px-3 relative mt-[70px] w-full max-w-[800px] h-auto flex flex-col gap-3">
      <div className="flex flex-wrap items-center w-full gap-3 justify-normal">
        {uniqueTags.map((tag) => {
          return <LinkTag key={tag} href={`/tags/${tag}`} title={`${tag}`} />;
        })}
      </div>
      <div className="flex flex-col gap-2 mt-3">
        {recentBlogs.map((blog) => {
          return <Article key={blog.customID} blog={blog} />;
        })}
      </div>
    </main>
  );
};

export default Home;

export const getStaticProps = async () => {
  // connect to db
  await connectDB();

  // BLOGSSSS
  // get all the file names
  const blogNames = getBlogFileNames();
  // read each file, update reading time, text, and append the content to the gray matter data
  const allParsedBlogs = blogNames.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const parsedFile = readBlogFiles(fileName);
    const { data, content } = matter(parsedFile);
    data.readingTime = readingTime(content).text;
    data.slug = slug;
    data.content = content;
    return data;
  });

  const blogOperations = allParsedBlogs.map((blog) => ({
    updateOne: {
      filter: { customID: blog.customID },
      update: {
        $set: blog,
      },
      upsert: true,
      setDefaultOnInsert: true,
    },
  }));
  await Blog.bulkWrite(blogOperations);

  const triviaBulkUpdateArray = triviaData.map((trivia) => ({
    updateOne: {
      filter: { customID: trivia.customID },
      update: {
        $set: trivia, // apends new fields to existing document
      },
      upsert: true, // if true, creates a new document if no document matches the filter
      setDefaultOnInsert: true,
    },
  }));
  await Trivia.bulkWrite(triviaBulkUpdateArray);

  const project = {
    _id: 0,
    _v: 0,
    content: 0,
  };
  // get the most recent blogs and unique tags
  const limit = 5;
  const allTags = [];
  const recentBlogsResult = await Blog.find({}, project)
    .sort("-createdAt")
    .limit(limit);
  const recentBlogs = recentBlogsResult.map((blog) => {
    const blogObject = blog.toObject();
    allTags.push(blogObject.tags);
    blogObject.createdAt = blogObject.createdAt.toLocaleDateString("en-US");
    return blogObject;
  });
  const uniqueTags = [...new Set(allTags.flat())];

  return {
    props: { recentBlogs, uniqueTags },
  };
};
