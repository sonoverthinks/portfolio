import React from "react";
import connectDB from "@/mongoose/connectDB";
import Blog from "@/mongoose/models/Blog";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import BlogPreviewList from "@/components/blog-preview/BlogPreviewList";
import Link from "next/link";
import { nanoid } from "nanoid";

const Blogs = ({ topBlogs, recentBlogs }) => {
  // const [shownTopCards, setShownTopCards] = useState(1);
  // const [shownRecentCards, setShownRecentCards] = useState(1);
  // const incrementTopCards = () => {
  //   setShownTopCards((prev) => prev + 1);
  //   console.log(shownTopCards);
  // };
  // const incrementRecentCards = () => {
  //   setShownRecentCards((prev) => prev + 1);
  //   console.log(shownTopCards);
  // };
  // const showAllTop = () => {
  //   setShownTopCards(topBlogs.length);
  // };
  // const showAllRecent = () => {
  //   setShownRecentCards(recentBlogs.length);
  // };
  return (
    <div className="w-full max-w-[1000px] mt-[100px] mx-auto flex flex-col items-start gap-3">
      {recentBlogs.map((blog) => {
        const link = `/blog/${blog.slug}`;
        return (
          <Link
            href={link}
            className="w-full p-5 text-midnight bg-whisper dark:bg-midnight"
            key={nanoid()}
          >
            <div className="flex items-center gap-4 text-sm flex-normal text-neutral-nickel dark:text-neutral-lavenderGray">
              <span>{blog.createdAt}</span>
              <span>{blog.readingTime}</span>
              <span>{blog.totalViews} views</span>
            </div>
            <p className="mt-1 text-3xl font-bold hover:text-primary dark:hover:text-primary dark:text-whisper">
              {blog.title}
            </p>
            <p className="text-xl leading-[33px] text-typo-bistre dark:text-neutral-lavenderGray">
              {blog.description}
            </p>
            <div className="flex items-center gap-2 text-base flex-normal">
              {blog.tags.map((tag) => (
                <button
                  className="hover:cursor-pointer py-[1px] px-1 text-sm text-primary underline hover:text-secondary"
                  key={nanoid}
                >
                  {tag}
                </button>
              ))}
            </div>
          </Link>
        );
      })}
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

/* 
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
*/
