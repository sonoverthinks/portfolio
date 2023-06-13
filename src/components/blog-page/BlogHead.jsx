import React, { useEffect } from "react";
import { nanoid } from "nanoid";
import axios from "axios";
import useGetViews from "@/hooks/useGetViews";
import Tag from "./Tag";

const BlogHead = ({
  banner,
  title,
  altText,
  createdAt,
  readingTime,
  totalViews,
  customID,
  tags,
}) => {
  // GET
  const { data: views, mutate } = useGetViews(customID, totalViews);
  // POST
  useEffect(() => {
    const url = `/api/views/${customID}`;
    (async () => {
      try {
        await axios.post(url);
        mutate();
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className="mt-[50px] flex flex-col justify-center w-full items-center">
      <div className="flex items-center justify-center gap-3 mt-3">
        {tags.map((tag) => (
          <Tag key={nanoid()} name={tag} />
        ))}
      </div>
      <div className="text-[56px] leading-[64px] font-bold text-midnight dark:text-whisper mt-4">
        {title}
      </div>
      <div className="flex gap-4 mt-2 text-sm text-lavenderGray dark:text-white">
        <span>{createdAt}</span>
        <span>{readingTime}</span>
        <span>{views} views</span>
      </div>
    </div>
  );
};

export default BlogHead;
