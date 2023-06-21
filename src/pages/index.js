import BlogPreviewList from "@/components/blog-preview/BlogPreviewList";
import {
  YoutubeIcon,
  TwitterIcon,
  LinkedinIcon,
} from "@/components/svgComponents";
import connectDB from "@/mongoose/connectDB";
import Blog from "@/mongoose/models/Blog";
import readBlogFiles from "@/utils/ReadBlogFiles";
import getFileNames from "@/utils/getFileNames";
import matter from "gray-matter";
import Link from "next/link";
import readingTime from "reading-time";
const Home = ({ recentBlogs }) => {
  return (
    <main className="relative mt-[100px] w-full max-w-[1300px] h-auto text-midnight dark:text-whisper">
      <p className="text-3xl font-semibold">
        Hi,{" "}
        <span className="relative inline-block duration-100 before:block before:absolute before:top-8 hover:before:top-0 before:bottom-0 before:-inset-1 before:bg-primary before:transition-all">
          <Link
            href="/about"
            className="relative text-midnight dark:text-whisper hover:text-whisper dark:hover:text-midnight"
          >
            I am Son
          </Link>
        </span>
      </p>
      <p className="flex flex-col text-6xl leading-[90px] text-midnight dark:text-whisper my-3">
        <span className="">
          I{" "}
          <span className="relative inline-block before:block before:absolute before:top-3 before:bottom-3 before:inset-0 before:-skew-y-3 before:bg-secondary">
            <Link
              href="/blogs"
              className="relative text-whisper hover:text-midnight"
            >
              make
            </Link>
          </span>{" "}
          websites,
        </span>
        <span>
          and{" "}
          <span className="relative inline-block before:block before:absolute before:top-3 before:bottom-3 before:inset-0 before:skew-y-3 before:bg-secondary">
            <Link
              href="/blogs"
              className="relative text-whisper hover:text-midnight"
            >
              write
            </Link>
          </span>{" "}
          related content.
        </span>
      </p>
      <p className="text-xl font-semibold">
        Check out my Youtube for guitar covers!
      </p>
      <div className="flex gap-3 mt-5">
        <Link href="/" className="hover:text-primary w-[40px]">
          <YoutubeIcon />
        </Link>
        <Link href="/" className="hover:text-primary w-[40px]">
          <TwitterIcon />
        </Link>
        <Link href="/" className="hover:text-primary w-[40px]">
          <LinkedinIcon />
        </Link>
      </div>
      <div className="w-full">
        <BlogPreviewList blogs={recentBlogs} />
      </div>
      <div className="w-full mt-6">
        <BlogPreviewList blogs={recentBlogs} />
      </div>
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
