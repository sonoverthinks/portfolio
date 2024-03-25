import { MDXRemote } from "next-mdx-remote";
import connectDB from "@/mongoose/connectDB";
import Blog from "@/mongoose/models/Blog";
import { serialize } from "next-mdx-remote/serialize";
// import MdxComponents from "@/components/MDX/MdxComponents";
import BlogHead from "@/components/blog-page/BlogHead";
import components from "@/components/MDX/MDXComponents";

const BlogPage = ({ mdxSource, blogData }) => {
  return (
    <div className="w-full max-w-[800px] mt-[70px] flex flex-col items-start gap-4 px-3">
      <BlogHead {...blogData} />
      <div className="w-full mt-1">
        <MDXRemote {...mdxSource} components={components} />
      </div>
    </div>
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
  const mdxSource = await serialize(content, {
    mdxOptions: {
      // rehypePlugins: [[rehypeImgSize, { dir: "public" }]],
    },
  });
  blogData.createdAt = createdAt.toLocaleDateString("en-US");

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
