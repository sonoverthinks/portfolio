import BlogPreviewList from "@/components/BlogPreviewList";
import connectDB from "@/mongoose/connectDB";
import getFileNames from "@/utils/getFileNames";
import readBlogFiles from "@/utils/ReadBlogFiles";
import matter from "gray-matter";
import readingTime from "reading-time";
import Blog from "@/mongoose/models/Blog";
import CustomButton from "@/components/CustomButton";
import { useState } from "react";

const Home = ({ topBlogs, recentBlogs }) => {
  const [shownTopCards, setShownTopCards] = useState(1);
  const [shownRecentCards, setShownRecentCards] = useState(1);
  const incrementTopCards = () => {
    setShownTopCards((prev) => prev + 1);
    console.log(shownTopCards);
  };
  const incrementRecentCards = () => {
    setShownRecentCards((prev) => prev + 1);
    console.log(shownTopCards);
  };
  return (
    <div className="mt-[70px] w-full [&>*]:mt-5 text-midnight dark:text-whisper">
      <div>
        <div className="flex items-center gap-5 justify-normal">
          <p className="text-xl">MOST RECENT BLOGS </p>
          <CustomButton primary={false}>View All</CustomButton>
        </div>
        <BlogPreviewList blogs={recentBlogs.slice(0, shownRecentCards)} />
        <div className="flex justify-center w-full mt-5">
          <CustomButton
            disabled={shownRecentCards >= recentBlogs.length}
            handleClick={incrementRecentCards}
          >
            Load More
          </CustomButton>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-5 justify-normal">
          <p className="text-xl">MOST VIEWED BLOGS </p>
          <CustomButton primary={false}>View All</CustomButton>
        </div>
        <BlogPreviewList blogs={topBlogs.slice(0, shownTopCards)} />
        <div className="flex justify-center w-full mt-5">
          <CustomButton
            disabled={shownTopCards >= recentBlogs.length}
            handleClick={incrementTopCards}
          >
            Load More
          </CustomButton>
        </div>
      </div>
    </div>
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
