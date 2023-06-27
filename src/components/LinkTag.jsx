import React from "react";
import Link from "next/link";

const LinkTag = ({ href, title, primary = true }) => {
  return (
    <Link
      className={`${
        primary
          ? "px-4 py-1 text-sm rounded-full md:text-base bg-midnight text-whisper hover:bg-primary hover:text-midnight"
          : "hover:cursor-pointer py-[1px] px-1 text-md lg:text-base text-midnight hover:text-primary dark:text-primary dark:hover:text-whisper underline"
      }`}
      href={href}
    >
      {title}
    </Link>
  );
};

export default LinkTag;
