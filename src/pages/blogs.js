import connectDB from "@/mongoose/connectDB";
import Blog from "@/mongoose/models/Blog";
import { nanoid } from "nanoid";
import Link from "next/link";
import LinkTag from "@/components/LinkTag";

const Blogs = ({ recentBlogs, tagFrequency }) => {
  const tags = Object.entries(tagFrequency);
  return (
    <div className="w-full max-w-[1000px] mt-[100px] mx-auto flex flex-col items-start gap-3">
      <div className="flex flex-wrap items-center w-full gap-3 px-5 py-3 justify-normal">
        {tags.map((pair) => {
          return (
            <LinkTag
              key={nanoid()}
              href={`/tags/${pair[0]}`}
              title={`${pair[0]} (${pair[1]})`}
            />
          );
        })}
      </div>
      {recentBlogs.map((blog) => {
        const link = `/blog/${blog.slug}`;
        return (
          <Link
            href={link}
            className="w-full p-5 text-midnight dark:bg-midnight group"
            key={nanoid()}
          >
            <div className="flex items-center gap-4 text-sm flex-normal text-neutral-nickel dark:text-neutral-lavenderGray">
              <span>{blog.createdAt}</span>
              <span>{blog.readingTime}</span>
              <span>{blog.totalViews} views</span>
            </div>
            <p className="mt-1 text-3xl font-bold group-hover:text-primary dark:group-hover:text-primary dark:text-whisper">
              {blog.title}
            </p>
            <p className="text-xl leading-[33px] text-typo-bistre dark:text-neutral-lavenderGray line-clamp-3 md:line-clamp-2">
              {blog.description}
            </p>
            <div className="flex items-center gap-2 text-base flex-normal">
              {blog.tags.map((tag) => (
                // <Link
                //   className="hover:cursor-pointer py-[1px] px-1 text-sm text-primary underline hover:text-secondary"
                //   key={nanoid}
                //   href={`/tags/${tag}`}
                // >
                //   {tag}
                // </Link>
                <LinkTag
                  key={nanoid()}
                  href={`/tags/${tag}`}
                  title={tag}
                  primary={false}
                />
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
  const project = {
    _id: 0,
    _v: 0,
    content: 0,
  };

  const recentBlogsResult = await Blog.find({}, project).sort("-createdAt");

  const tagFrequency = {};
  const tagArray = [];

  const recentBlogs = recentBlogsResult.map((blog) => {
    const blogObject = blog.toObject();
    tagArray.push(blogObject.tags);
    blogObject.createdAt = blogObject.createdAt.toDateString();
    return blogObject;
  });

  for (const tag of tagArray.flat()) {
    tagFrequency[tag] = tagFrequency[tag] ? tagFrequency[tag] + 1 : 1;
  }
  const uniqueTags = [...[...new Set(tagArray.flat())]];

  return {
    props: { recentBlogs, tagFrequency },
  };
};
