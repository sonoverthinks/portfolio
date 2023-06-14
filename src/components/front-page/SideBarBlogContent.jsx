import React from "react";
import Link from "next/link";

const SideBarBlogContent = ({ title, description, slug, border }) => {
  const link = `/blog/${slug}`;
  return (
    <Link href={link} className="flex flex-col items-start w-full group/item">
      <span className="text-lg font-bold hover:cursor-pointer text-whisper group-hover/item:text-primary">
        {title}
      </span>
      <span className="text-sm text-neutral-lavenderGray">{description}</span>
      {border && (
        <span className="self-center my-3 w-full border-t-[1px] border-inherit break-words"></span>
      )}
    </Link>
  );
};

export default SideBarBlogContent;
