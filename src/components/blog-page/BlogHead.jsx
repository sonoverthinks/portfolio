import React, { useEffect } from "react";
import { nanoid } from "nanoid";
import axios from "axios";
import useGetViews from "@/hooks/useGetViews";

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
  // console.log(tags);
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex items-center justify-center gap-3 mt-3">
        {tags.map((tag) => (
          <button
            className="px-3 py-2 text-base font-semibold transition-all duration-200 rounded-md bg-softOrange hover:bg-softRed"
            key={nanoid()}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="text-[56px] leading-[64px] font-bold text-darkBlue1 dark:text-offWhite mt-4">
        {title}
      </div>
      <div className="flex gap-4 text-sm text-lightBlue dark:text-white">
        <span>{createdAt}</span>
        <span>{readingTime}</span>
        <span>{views} views</span>
      </div>
    </div>
  );
};

export default BlogHead;
