import Link from "next/link";

const Title = ({ data, source }) => {
  const link = `/${source}/${data.slug}`;

  return (
    <Link
      className="flex flex-col items-start w-full gap-1 md:flex-row md:items-center md:justify-between group"
      // key={blog.customID}
      href={link}
    >
      <div className="flex flex-row items-center gap-1 w-full md:max-w-[80%] text-dark-mirage dark:text-white dark:hover:text-dark-blue group-hover:text-light-blue lg:text-[17px] lg:leading-[33px] md:text-[15px] md:leading-[30px] text-[14px] leading-[28px]">
        {data.title}
      </div>

      <p className="px-3 md:px-0 italic text-neutral-nickel lg:text-[15px] lg:leading-[22px] md:text-[13px] md:leading-[19px] text-[12px] leading-[17px]">
        {data.createdAt}
      </p>
    </Link>
  );
};

export default Title;
