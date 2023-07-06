import React from "react";
import connectDB from "@/mongoose/connectDB";
import Link from "next/link";
import MyNote from "@/mongoose/models/Note";

const Note = ({ allNotes }) => {
  return (
    <li className="mt-[100px] flex flex-col [&>*]:mt-5">
      {allNotes.map((note) => {
        return (
          <Link key={note.customID} href={`/note/${note.slug}`}>
            {note.title}
          </Link>
        );
      })}
    </li>
  );
};

export const getStaticProps = async () => {
  await connectDB();
  const project = {
    _id: 0,
    // _v: 0,
    content: 0,
  };
  const results = await MyNote.find({}, project);

  const allNotes = results.map((note) => {
    const noteObj = note.toObject();
    noteObj.createdAt = noteObj.createdAt.toDateString();
    return noteObj;
  });

  return {
    props: { allNotes },
  };
};

export default Note;
