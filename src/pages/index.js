// import { Redirect } from "next";
import matter from "gray-matter";
import readingTime from "reading-time";

import { triviaData } from "@/data";
import connectDB from "@/mongoose/connectDB";
import Blog from "@/mongoose/models/Blog";
import Trivia from "@/mongoose/models/Trivia";
// import Note from "@/mongoose/models/Note";
import readBlogFiles from "@/utils/readBlogs";
import getBlogFileNames from "@/utils/getBlogFileNames";
// import readNoteFiles from "@/utils/readNotes";
// import getNoteFileNames from "@/utils/getNoteFileNames";
import LinkTag from "@/components/LinkTag";
import Article from "@/components/Article";

const Home = ({ recentBlogs, tagFrequency }) => {
  const tags = Object.entries(tagFrequency);
  return (
    <main className="px-3 relative mt-[70px] w-full max-w-[800px] h-auto flex flex-col gap-3">
      <div className="flex flex-wrap items-center w-full gap-3 justify-normal">
        {tags.map((pair) => {
          return (
            <LinkTag
              key={pair[0]}
              href={`/tags/${pair[0]}`}
              title={`${pair[0]}`}
            />
          );
        })}
      </div>
      <div className="flex flex-col gap-2 mt-3">
        {recentBlogs.map((blog) => {
          return <Article key={blog.customID} blog={blog} />;
        })}
      </div>
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

  const triviaBulkUpdateArray = triviaData.map((trivia) => ({
    updateOne: {
      filter: { customID: trivia.customID },
      update: {
        $set: trivia,
      },
      upsert: true,
      setDefaultOnInsert: true,
    },
  }));
  await Trivia.bulkWrite(triviaBulkUpdateArray);

  // NOTESSSS
  // const noteNames = getNoteFileNames();

  // const allParsedNotes = noteNames.map((fileName) => {
  //   const slug = fileName.replace(".mdx", "");
  //   const parsedFile = readNoteFiles(fileName);
  //   const { data, content } = matter(parsedFile);
  //   data.slug = slug;
  //   data.content = content;
  //   return data;
  // });

  // const noteBulkUpdateArray = allParsedNotes.map((note) => ({
  //   updateOne: {
  //     filter: { customID: note.customID },
  //     update: {
  //       $set: note,
  //     },
  //     upsert: true,
  //     setDefaultOnInsert: true,
  //   },
  // }));
  // await Note.bulkWrite(noteBulkUpdateArray);

  const project = {
    _id: 0,
    _v: 0,
    content: 0,
  };
  // get the most recent blogs
  const limit = 5;
  const recentBlogsResult = await Blog.find({}, project)
    .sort("-createdAt")
    .limit(limit);

  const tagFrequency = {};
  const tagArray = [];

  const recentBlogs = recentBlogsResult.map((blog) => {
    const blogObject = blog.toObject();
    tagArray.push(blogObject.tags);
    blogObject.createdAt = blogObject.createdAt.toLocaleDateString("en-US");
    return blogObject;
  });

  for (const tag of tagArray.flat()) {
    tagFrequency[tag] = tagFrequency[tag] ? tagFrequency[tag] + 1 : 1;
  }

  return {
    props: { recentBlogs, tagFrequency },
  };
};
