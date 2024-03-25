import useGetViews from "@/hooks/useGetViews";
// import { nanoid } from "nanoid";
import Link from "next/link";
import { RightArrowIcon } from "../svgComponents";

const BlogPreviewCard = ({
  title,
  slug,
  createdAt,
  readingTime,
  totalViews,
  customID,
  tags,
}) => {
  const { data: views } = useGetViews(customID, totalViews);
  const link = `/blog/${slug}`;
  return (
    <Link
      href={link}
      className="w-auto max-w-full h-auto hover:cursor-pointer hover:translate-y-[-2px] transition-all duration-500 shadow-md hover:shadow-lg group rounded-xl overflow-hidden dark:bg-neutral-licorice text-dark dark:text-whisper flex flex-col justify-between"
    >
      <div className="relative w-full p-4">
        <p className="text-xl font-bold">{title}</p>
        <div className="flex items-center w-full gap-3 mt-1 text-xs text-neutral-nickel dark:text-neutral-lavenderGray">
          <span>{createdAt}</span>
          <span>{readingTime}</span>
          <span>{views} views</span>
        </div>
        {tags.map((tag) => (
          <buton
            className="mr-3 text-sm underline hover:cursor-pointer text-primary hover:text-secondary"
            key={tag}
          >
            {tag}
          </buton>
        ))}
      </div>
      <div className="self-end w-6 mb-3 mr-5 transition-all duration-500 group-hover:translate-x-2">
        <RightArrowIcon />
      </div>
    </Link>
  );
};

export default BlogPreviewCard;
