import { nanoid } from "nanoid";
import BlogPreviewCard from "./BlogPreviewCard";
import CustomButton from "../CustomButton";
import Link from "next/link";

const BlogPreviewList = ({ blogs }) => {
  const handleClick = () => {
    alert("I was clicked");
  };
  return (
    <div className="flex flex-col items-center w-full mt-5">
      <div className="flex items-center gap-5">
        <p className="mx-auto text-3xl font-bold">Latest Blogs</p>
        <CustomButton primary={false}>View All</CustomButton>
      </div>
      <div className="grid gap-[30px] mt-5 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => {
          return <BlogPreviewCard {...blog} key={nanoid()} />;
        })}
      </div>
      <Link href="/blogs" className="mx-auto mt-5"></Link>
    </div>
  );
};

export default BlogPreviewList;
