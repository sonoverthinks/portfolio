import BlogPreviewList from "@/components/blog-preview/BlogPreviewList";
import {
  YoutubeIcon,
  TwitterIcon,
  LinkedinIcon,
} from "@/components/svgComponents";
import connectDB from "@/mongoose/connectDB";
import Blog from "@/mongoose/models/Blog";
import Note from "@/mongoose/models/Note";
import readBlogFiles from "@/utils/readBlogs";
import getBlogFileNames from "@/utils/getBlogFileNames";
import readNoteFiles from "@/utils/readNotes";
import getNoteFileNames from "@/utils/getNoteFileNames";
import matter from "gray-matter";
import Link from "next/link";
import readingTime from "reading-time";
import { RightArrowIcon } from "@/components/svgComponents";
const Home = ({ recentBlogs }) => {
  return (
    <main className="px-3 relative mt-[100px] w-full max-w-[800px] h-auto flex flex-col gap-3 font-space-mono">
      {recentBlogs.map((blog) => {
        const link = `/blog/${blog.slug}`;
        return (
          <Link
            className="flex items-center justify-between w-full group"
            key={blog.customID}
            href={link}
          >
            <div className="flex flex-row items-center gap-2 w-full max-w-[80%] text-light-teal-blue group-hover:text-light-blue text-[18px] leading-[33px]">
              <div className="w-3">
                <RightArrowIcon />
              </div>
              {blog.title}
            </div>
            <p className="italic text-neutral-nickel text-[15px] leading-[22px]">
              {blog.createdAt}
            </p>
          </Link>
        );
      })}
      {/* <div className="w-full">
        <BlogPreviewList blogs={recentBlogs} />
      </div>
      <div className="w-full mt-6">
        <BlogPreviewList blogs={recentBlogs} />
      </div> */}
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

  const blogBulkUpdateArray = allParsedBlogs.map((blog) => ({
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

  // NOTESSSS
  const noteNames = getNoteFileNames();

  const allParsedNotes = noteNames.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const parsedFile = readNoteFiles(fileName);
    const { data, content } = matter(parsedFile);
    data.slug = slug;
    data.content = content;
    return data;
  });

  const noteBulkUpdateArray = allParsedNotes.map((note) => ({
    updateOne: {
      filter: { customID: note.customID },
      update: {
        $set: note,
      },
      upsert: true,
      setDefaultOnInsert: true,
    },
  }));
  await Note.bulkWrite(noteBulkUpdateArray);

  const project = {
    _id: 0,
    _v: 0,
    content: 0,
  };
  // get the most recent blogs
  const limit = 3;
  const recentBlogsResult = await Blog.find({}, project)
    .sort("-createdAt")
    .limit(limit);

  const recentBlogs = recentBlogsResult.map((blog) => {
    const blogObject = blog.toObject();
    blogObject.createdAt = blogObject.createdAt.toLocaleDateString("en-US");
    return blogObject;
  });

  return {
    props: { recentBlogs },
  };
};
