import React from "react";
import Image from "next/image";
import Link from "next/link";
import useGetViews from "@/hooks/useGetViews";
import { RightArrowIcon } from "../svgComponents";
import { nanoid } from "nanoid";

const handleClick = () => {};

const BlogPreviewCard = ({
  banner,
  title,
  description,
  slug,
  altText,
  createdAt,
  readingTime,
  totalViews,
  customID,
  tags,
}) => {
  const { data: views } = useGetViews(customID, totalViews);
  const link = `/blog/${slug}`;
  return (
    <Link
      href={link}
      className="w-auto max-w-full h-auto hover:cursor-pointer hover:translate-y-[-2px] transition-all duration-500 shadow-md hover:shadow-xl group rounded-xl overflow-hidden bg-whisper dark:bg-neutral-licorice text-dark dark:text-whisper flex flex-col justify-between"
      onClick={handleClick}
    >
      {/* <div className="relative w-full h-auto">
        <Image
          src={banner}
          alt={altText}
          width={850}
          height={600}
          style={{ width: "100%", height: "auto" }}
        />
      </div> */}
      <div className="relative w-full p-4">
        <p className="text-xl font-bold ">{title}</p>
        <div className="flex items-center w-full gap-2 mt-2 text-xs text-gray-500 dark:text-neutral-lavenderGray flex-start">
          <span>{createdAt}</span>
          <span>{readingTime}</span>
          <span>{views} views</span>
        </div>
        {/* <p className="mt-4 text-base text-gray-500 dark:text-neutral-lavenderGray">
          {description}
        </p> */}
        {tags.map((tag) => (
          <button
            className="hover:cursor-pointer py-[1px] px-1 text-sm text-primary underline hover:text-secondary"
            key={nanoid}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="self-end w-6 mb-3 mr-5 transition-all duration-500 group-hover:translate-x-2">
        <RightArrowIcon />
      </div>
      {/* <div className="flex items-center justify-between w-full px-3 py-2 border-t-[2px] group-hover:text-tertiary1">
        <span className="font-semibold">READ BLOG</span>
        <div className="w-5 transition-all duration-150 group-hover:translate-x-1 group-hover:text-primary">
          <RightArrowIcon />
        </div>
      </div> */}
    </Link>
  );
};

export default BlogPreviewCard;
