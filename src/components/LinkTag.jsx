import React from "react";
import Link from "next/link";

const LinkTag = ({ href, title, primary = true }) => {
  return (
    <Link
      className={`px-3 py-1 text-[12px] rounded-full bg-light-charcoal dark:bg-dark-zodiac-blue text-light-ghost-white hover:bg-light-blue dark:hover:bg-dark-blue`}
      href={href}
    >
      {title}
    </Link>
  );
};

export default LinkTag;
