import { MDXRemote } from "next-mdx-remote";
import connectDB from "@/mongoose/connectDB";
import { serialize } from "next-mdx-remote/serialize";
import components from "@/components/MDX/MDXComponents";
import Project from "@/mongoose/models/Project";

const ProjectPage = ({ mdxSource }) => {
  return (
    <div className="w-full max-w-[800px] mt-[70px] flex flex-col items-start gap-4 px-3 mb-[70px]">
      <div className="w-full mt-1">
        <MDXRemote {...mdxSource} components={components} />
      </div>
    </div>
  );
};

export const getStaticProps = async ({ params: { slug } }) => {
  await connectDB();

  const project = {
    _id: 0,
    __v: 0,
  };

  const result = await Project.findOne({ slug }, project);
  const { content } = result.toObject();
  const mdxSource = await serialize(content, {
    mdxOptions: {},
  });
  // blogData.createdAt = createdAt.toLocaleDateString("en-US");

  return {
    props: { mdxSource },
  };
};

export const getStaticPaths = async () => {
  await connectDB();
  const slugs = await Project.find({}, "slug");
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

export default ProjectPage;
