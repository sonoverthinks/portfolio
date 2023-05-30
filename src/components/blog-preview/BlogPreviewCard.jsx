import React from "react";
import Image from "next/image";
import cat from "@/image/cat.jpg";
import ArrowRight from "@/image/ArrowRight.svg";

const handleClick = () => {
  alert("Clicked");
};

const BlogPreviewCard = () => {
  return (
    <div
      className="w-[360px] h-auto hover:cursor-pointer hover:translate-y-[-5px] transition-all duration-500 shadow-md hover:shadow-xl group rounded-lg overflow-hidden"
      onClick={handleClick}
    >
      <div className="relative w-full h-[200px]">
        <Image src={cat} alt="cat" fill />
      </div>
      <div className="w-full p-3">
        <div className="flex items-center w-full gap-2 text-xs text-gray-500 flex-start">
          <span>Jan 18, 2002</span>
          <span>100 views</span>
          <span>4 min read</span>
        </div>
        <p className="text-xl font-bold">How to create beautiful blog</p>
        <p className="text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex items-center justify-between w-full px-3 py-2 border-[1px] border-t-slate-300">
        <span className="font-semibold">READ BLOG</span>
        <Image
          className="transition-all duration-150 group-hover:translate-x-1"
          src={ArrowRight}
          width={20}
          height={20}
          alt="arrow"
        />
      </div>
    </div>
  );
};

export default BlogPreviewCard;
