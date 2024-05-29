import components from "@/components/MDX/MDXComponents";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
// import readMdxFile from "@/utils/readMdxFile";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import AppFooter from "@/components/AppFooter";
import Image from "next/image";

const About = ({ mdxSource, data }) => {
  // console.log("🚀 ~ About ~ mdxSource:", mdxSource);
  return (
    <>
      <div className="px-3 relative mt-[70px] w-full max-w-[800px] h-auto flex flex-row gap-6 justify-between">
        <div className="min-w-[250px] h-[333px] bg-sky-100 rounded-md hidden sm:block relative overflow-hidden drop-shadow-lg brightness-75">
          <Image src="/son_selfie34.jpg" alt="selfie" fill />
        </div>
        <div className="w-auto mr-auto">
          <MDXRemote {...mdxSource} components={components} />
        </div>
      </div>
      <AppFooter />
    </>
  );
};

export async function getStaticProps() {
  const mdxPath = path.join(process.cwd(), "src/about/about.mdx");
  const source = fs.readFileSync(mdxPath, "utf8");
  const { data, content } = matter(source);
  const mdxSource = await serialize(content, {
    mdxOptions: {},
  });
  return {
    props: {
      mdxSource,
      data,
    },
  };
}

export default About;
