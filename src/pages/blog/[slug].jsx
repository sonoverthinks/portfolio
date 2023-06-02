import React from "react";
import connectDB from "@/mongoose/connectDB";
import Blog from "@/mongoose/models/Blog";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
// import MdxComponents from "@/components/MDX/MdxComponents";

const BlogPage = ({ mdxSource, blogData }) => {
  return (
    <>
      <MDXRemote {...mdxSource} />
    </>
  );
};

export default BlogPage;

export const getStaticProps = async ({ params: { slug } }) => {
  await connectDB();

  const project = {
    _id: 0,
    __v: 0,
  };

  const result = await Blog.findOne({ slug }, project);
  const { content, createdAt, ...blogData } = result.toObject();
  const mdxSource = await serialize(content);
  blogData.createdAt = createdAt.toDateString();

  return {
    props: { mdxSource, blogData },
  };
};
export const getStaticPaths = async () => {
  await connectDB();
  const slugs = await Blog.find({}, "slug");
  const paths = slugs.map((item) => ({
    params: {
      slug: item.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
