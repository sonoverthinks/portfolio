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
      {/* <div className="flex items-center gap-3"> */}
      <p className="mx-auto text-3xl font-bold">Latest Blogs</p>
      {/* </div> */}
      <div className="grid gap-[50px] mt-5 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => {
          return <BlogPreviewCard {...blog} key={nanoid()} />;
        })}
      </div>
      <Link href="/blogs" className="mx-auto mt-5">
        <CustomButton primary={false}>View All</CustomButton>
      </Link>
    </div>
  );
};

export default BlogPreviewList;
