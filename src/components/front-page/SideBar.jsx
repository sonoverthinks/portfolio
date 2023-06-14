import React from "react";
import Link from "next/link";
import SideBarBlogContent from "./SideBarBlogContent";
import { nanoid } from "nanoid";

const SideBar = ({ recentBlogs }) => {
  return (
    <div className="text-base p-7 lg:row-span-2 bg-midnight group">
      <Link
        href="/blogs"
        className="text-2xl font-bold text-whisper group-hover:text-primary"
      >
        Latest Blogs
      </Link>
      <ul className="mt-6 ">
        {recentBlogs.map((blog, index) => {
          return (
            <SideBarBlogContent
              key={nanoid()}
              slug={blog.slug}
              title={blog.title}
              description={blog.description}
              border={index + 1 < recentBlogs.length}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
