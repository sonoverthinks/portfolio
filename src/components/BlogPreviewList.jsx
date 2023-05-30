import { nanoid } from "nanoid";
import BlogPreviewCard from "./blog-preview/BlogPreviewCard";

const BlogPreviewList = () => {
  return (
    <div className="w-full mt-5">
      <h3 className="text-3xl font-bold">Latest Blogs</h3>
      <div className="grid md:grid-cols-2 2xl:grid-cols-4 [&>*]:mx-auto mt-5 gap-5">
        {Array(4)
          .fill(0)
          .map(() => {
            return <BlogPreviewCard key={nanoid()} />;
          })}
      </div>
    </div>
  );
};

export default BlogPreviewList;
