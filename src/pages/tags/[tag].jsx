import React from "react";
import Blog from "@/mongoose/models/Blog";
import connectDB from "@/mongoose/connectDB";
import Link from "next/link";
import { nanoid } from "nanoid";
// import Tag as MyTag from "@/components/Tag";
import LinkTag from "@/components/LinkTag";

const Tag = ({ blogs }) => {
  return (
    <div className="w-full max-w-[1000px] mt-[100px] mx-auto flex flex-col items-start gap-3">
      <div className="flex flex-wrap items-center w-full gap-3 px-5 py-3 justify-normal">
        <LinkTag href="/blogs" title="all tags" />
      </div>
      {blogs.map((blog) => {
        const link = `/blog/${blog.slug}`;
        return (
          <Link
            href={link}
            className="w-full p-5 text-midnight dark:bg-midnight"
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
            <p className="text-xl leading-[33px] text-typo-bistre dark:text-neutral-lavenderGray line-clamp-3 md:line-clamp-2">
              {blog.description}
            </p>
            <div className="flex items-center gap-2 text-base flex-normal">
              {blog.tags.map((tag) => (
                <Link
                  className="hover:cursor-pointer py-[1px] px-1 text-sm text-primary underline hover:text-secondary"
                  key={nanoid}
                  href={`/tags/${tag}`}
                >
                  {tag}
                </Link>
              ))}
            </div>
          </Link>
        );
      })}
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
    blogObject.createdAt = blogObject.createdAt.toDateString();
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
