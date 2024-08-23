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
      <div className="px-3 relative mt-[70px] lg:mt-[100px] w-full max-w-[800px] h-auto text-[17px] mb-5">
        <div className="flex flex-col items-center justify-center gap-5 lg:flex-row">
          <div className="lg:max-w-[50%]">
            <p className="text-[25px] font-bold">Full-Stack Web Developer</p>
            <p className="">
              I&apos;m a skilled web developer with a passion for creating
              modern, responsive, and user-friendly websites. With expertise in
              technologies like React, Next.js, and Tailwind CSS, I strive to
              deliver high-quality, visually appealing, and functional web
              applications.
            </p>
          </div>
          <div className="lg:max-w-[50%]">
            <div className="mt-0">
              <p className="font-bold">Front-end Expertise</p>
              <p>
                Proficient in building modern, responsive user interfaces using
                React, Next.js, and Tailwind CSS.
              </p>
            </div>
            <div className="mt-5">
              <p className="font-bold">Back-end Experience</p>
              <p>
                Experienced in developing server-side logic and integrating with
                databases using Next.js and Node.js.
              </p>
            </div>
            <div className="mt-5">
              <p className="font-bold">Responsive Design</p>
              <p>
                Ensuring my web applications are optimized for a seamless user
                experience across all devices and screen sizes.
              </p>
            </div>
          </div>
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
