import useGetViews from "@/hooks/useGetViews";
import axios from "axios";
import { nanoid } from "nanoid";
import { useEffect } from "react";
import LinkTag from "../LinkTag";
const BlogHead = ({
  title,
  createdAt,
  readingTime,
  totalViews,
  customID,
  tags,
}) => {
  // GET
  const { data: views, mutate } = useGetViews(customID, totalViews);
  // POST
  useEffect(() => {
    const url = `/api/views/${customID}`;
    // useEffect callback function cannot be an async function so we use iife function
    //
    (async () => {
      try {
        await axios.post(url);
        mutate();
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-wrap items-center w-full gap-3 justify-normal">
        <LinkTag href="/" title="all" primary={false} />
        {tags.map((tag) => (
          <LinkTag key={nanoid()} href={`/tags/${tag}`} title={tag} />
        ))}
      </div>
      <div className="text-[33px] md:text-[36px] lg:text-[38px] leading-[43px] md:leading-[47px] lg:leading-[49px] font-bold text-light-charcoal dark:text-neutral-whisper mt-4">
        {title}
      </div>
      <div className="flex gap-3 mt-2 text-sm text-neutral-nickel dark:text-whisper">
        <span>{createdAt}</span>·<span>{readingTime}</span>·
        <span>{views} views</span>
      </div>
    </div>
  );
};

export default BlogHead;
