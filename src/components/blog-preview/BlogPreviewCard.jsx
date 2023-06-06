import React from "react";
import Image from "next/image";
import ArrowRight from "@/image/ArrowRight.svg";
import Link from "next/link";
import useGetViews from "@/hooks/useGetViews";

const handleClick = () => {
  // alert("Clicked");
};

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
}) => {
  const { data: views } = useGetViews(customID, totalViews);
  const link = `/blog/${slug}`;
  return (
    <Link
      href={link}
      className="w-auto max-w-[592px] h-auto hover:cursor-pointer hover:translate-y-[-5px] transition-all duration-500 shadow-md hover:shadow-xl group rounded-lg overflow-hidden bg-white text-first"
      onClick={handleClick}
    >
      <div className="relative w-full h-auto">
        <Image
          src={banner}
          alt={altText}
          // fill={true}
          width={850}
          height={600}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="w-full p-3">
        <div className="flex items-center w-full gap-2 text-xs text-gray-500 flex-start">
          <span>{createdAt}</span>
          <span>{readingTime}</span>
          <span>{views} views</span>
        </div>
        <p className="text-2xl font-bold ">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="flex items-center justify-between w-full px-3 py-2 border-t-[2px] group-hover:border-t-second">
        <span className="font-semibold">READ BLOG</span>
        <Image
          className="transition-all duration-150 group-hover:translate-x-1"
          src={ArrowRight}
          width={20}
          height={20}
          alt="arrow"
        />
      </div>
    </Link>
  );
};

export default BlogPreviewCard;
