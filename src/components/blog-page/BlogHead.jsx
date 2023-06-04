import React from "react";

const BlogHead = ({
  banner,
  title,
  altText,
  createdAt,
  readingTime,
  totalViews,
  customID,
}) => {
  return (
    <div className="flex items-center justify-center gap-3">
      {/* <div className="">{title}</div>
      <div>{createdAt}</div>
      <div>{readingTime}</div> */}
    </div>
  );
};

export default BlogHead;
