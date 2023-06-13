import connectDB from "@/mongoose/connectDB";
import Blog from "@/mongoose/models/Blog";
import readBlogFiles from "@/utils/ReadBlogFiles";
import getFileNames from "@/utils/getFileNames";
import matter from "gray-matter";
import readingTime from "reading-time";

const Home = ({ recentBlogs }) => {
  return (
    <main className="mt-[70px] w-full h-auto text-midnight dark:text-whisper grid gap-2 lg:grid-cols-3 lg:grid-rows-3">
      <div className="lg:col-span-2 lg:row-span-2">
        <p>Blogs</p>
      </div>
      <div className="lg:row-span-2 bg-midnight">Blogs</div>
      <div className="">First Project</div>
      <div className="">Second Project</div>
      <div className="">Third Project</div>
    </main>
  );
};

export default Home;

export const getStaticProps = async () => {
  // connect to db
  await connectDB();

  // get all the file names
  const fileNames = getFileNames();
  // read each file, update reading time, text, and append the content to the gray matter data
  const allParsedData = fileNames.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const parsedFile = readBlogFiles(fileName);
    // console.log(parsedFile);
    const { data, content } = matter(parsedFile);
    data.readingTime = readingTime(content).text;
    data.slug = slug;
    data.content = content;
    return data;
  });

  const blogBulkUpdateArray = allParsedData.map((blog) => ({
    updateOne: {
      filter: { customID: blog.customID },
      update: {
        $set: blog,
      },
      upsert: true,
      setDefaultOnInsert: true,
    },
  }));
  await Blog.bulkWrite(blogBulkUpdateArray);

  const project = {
    _id: 0,
    _v: 0,
    content: 0,
  };

  // get the top blogs and most recent blogs
  const limit = 3;
  const recentBlogsResult = await Blog.find({}, project)
    .sort("-createdAt")
    .limit(limit);

  const recentBlogs = recentBlogsResult.map((blog) => {
    const blogObject = blog.toObject();
    blogObject.createdAt = blogObject.createdAt.toDateString();
    return blogObject;
  });

  return {
    props: { recentBlogs },
  };
};
