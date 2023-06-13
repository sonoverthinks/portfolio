import React from "react";
import connectDB from "@/mongoose/connectDB";
import Blog from "@/mongoose/models/Blog";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import BlogPreviewList from "@/components/blog-preview/BlogPreviewList";

const Blogs = ({ topBlogs, recentBlogs }) => {
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
  const showAllTop = () => {
    setShownTopCards(topBlogs.length);
  };
  const showAllRecent = () => {
    setShownRecentCards(recentBlogs.length);
  };
  return (
    <div className="mt-[70px] w-full [&>*]:mt-5 text-midnight dark:text-whisper">
      <div>
        <div className="flex items-center gap-5 justify-normal">
          <p className="text-xl">MOST RECENT BLOGS </p>
          <CustomButton
            primary={false}
            handleClick={showAllRecent}
            disabled={shownRecentCards >= recentBlogs.length}
          >
            View All
          </CustomButton>
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
          <CustomButton
            primary={false}
            handleClick={showAllTop}
            disabled={shownTopCards >= recentBlogs.length}
          >
            View All
          </CustomButton>
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

export default Blogs;

export const getStaticProps = async () => {
  // connect to db
  await connectDB();
  // get the top blogs and most recent blogs
  const limit = 3;
  const project = {
    _id: 0,
    _v: 0,
    content: 0,
  };
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
