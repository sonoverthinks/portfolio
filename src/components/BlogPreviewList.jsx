import { nanoid } from "nanoid";
import BlogPreviewCard from "./blog-preview/BlogPreviewCard";
import CustomButton from "./CustomButton";
import { RightArrowIcon } from "./svgComponents";

const BlogPreviewList = ({ blogs }) => {
  const handleClick = () => {
    alert("I was clicked");
  };
  return (
    <div className="w-full mt-5">
      {/* <h3 className="text-3xl font-bold">Latest Blogs</h3> */}
      <div className="grid gap-5 mt-5 md:grid-cols-2 lg:grid-cols-3 [&>*]:mx-auto lg:px-10 xl:px-[250px]">
        {blogs.map((blog) => {
          return <BlogPreviewCard {...blog} key={nanoid()} />;
        })}
      </div>
    </div>
  );
};

export default BlogPreviewList;
