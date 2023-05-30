import { nanoid } from "nanoid";
import BlogPreviewCard from "./blog-preview/BlogPreviewCard";

const BlogPreviewList = () => {
  return (
    <div className="w-full mt-5">
      {/* <h3 className="text-3xl font-bold">Latest Blogs</h3> */}
      <div className="grid gap-5 mt-5 md:grid-cols-2 lg:grid-cols-3 [&>*]:mx-auto lg:px-10 xl:px-[250px]">
        {Array(6)
          .fill(0)
          .map(() => {
            return <BlogPreviewCard key={nanoid()} />;
          })}
      </div>
    </div>
  );
};

export default BlogPreviewList;
