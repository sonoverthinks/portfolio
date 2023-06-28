import React from "react";
import connectDB from "@/mongoose/connectDB";
import NoteModel from "@/mongoose/models/Note";

const Note = () => {
  return <div>Hello</div>;
};

export default Note;

export const getStaticPaths = async () => {
  await connectDB();
  const notes = await NoteModel.find({}, "slug");
  const paths = notes.map((item) => ({
    params: {
      note: item.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async () => {
  return {
    props: {},
  };
};
