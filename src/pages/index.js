import BlogPreviewList from "@/components/BlogPreviewList";
import connectDB from "@/mongoose/connectDB";
import getFileNames from "@/utils/getFileNames";
import readBlogFiles from "@/utils/ReadBlogFiles";
import matter from "gray-matter";
import readingTime from "reading-time";
import Blog from "@/mongoose/models/Blog";

const Home = ({ topBlogs, recentBlogs }) => {
  return (
    <>
      <h1>TOP BLOGS</h1>
      <BlogPreviewList blogs={topBlogs} />
      <h1>RECENT BLOGS</h1>
      <BlogPreviewList blogs={recentBlogs} />
    </>
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
  const limit = 1;
  const topBlogsResult = await Blog.find({}, project)
    .sort("-totalViews")
    .limit(limit);
  const recentBlogsResult = await Blog.find({}, project)
    .sort("-createdAt")
    .limit(limit);

  // convert mongoose objects to normal objects
  const topBlogs = topBlogsResult.map((blog) => {
    const blogObject = blog.toObject();
    blogObject.createdAt = blogObject.createdAt.toDateString();
    return blogObject;
  });
  const recentBlogs = recentBlogsResult.map((blog) => {
    const blogObject = blog.toObject();
    blogObject.createdAt = blogObject.createdAt.toDateString();
    return blogObject;
  });

  return {
    props: { topBlogs, recentBlogs },
  };
};
