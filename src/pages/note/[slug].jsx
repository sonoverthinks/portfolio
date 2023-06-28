import React from "react";
import connectDB from "@/mongoose/connectDB";
import NoteModel from "@/mongoose/models/Note";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import components from "@/components/MDX/MDXComponents";

const Note = ({ mdxSource }) => {
  return (
    <div className="w-full mt-[100px] columns-1 md:columns-2 xl:columns-3 gap-3 auto-rows-max">
      <MDXRemote {...mdxSource} components={components} />
    </div>
  );
};

export default Note;

export const getStaticPaths = async () => {
  await connectDB();
  const slugs = await NoteModel.find({}, "slug");
  const paths = slugs.map((item) => ({
    params: {
      slug: item.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async ({ params: { slug } }) => {
  await connectDB();

  const project = {
    _id: 0,
    __v: 0,
  };

  const result = await NoteModel.findOne({ slug }, project);
  const { content, createdAt, ...noteData } = result.toObject();
  const mdxSource = await serialize(content, {});
  noteData.createdAt = createdAt.toDateString();
  return {
    props: { mdxSource },
  };
};
