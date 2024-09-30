import Link from "next/link";
import Image from "next/image";

const ProjectTitle = ({ data, source }) => {
  const link = `/${source}/${data.slug}`;

  return (
    <Link className="flex gap-5 group" href={link}>
      <Image
        alt={data.thumbnailSmall}
        src={data.thumbnailSmall}
        height={86}
        width={86}
        className="self-center rounded-sm md:hidden"
      />
      <Image
        alt={data.thumbnailBig}
        src={data.thumbnailBig}
        height={165}
        width={250}
        className="self-center hidden rounded-sm md:block"
      />
      <div className="flex flex-col w-full">
        <div className="text-xl font-semibold text-dark-mirage dark:text-white dark:hover:text-dark-blue group-hover:text-light-blue">
          {data.title}
        </div>
        <p className="hidden md:block md:px-0 italic text-neutral-nickel dark:text-neutral-whisper lg:text-[15px] lg:leading-[22px] md:text-[13px] md:leading-[19px] text-[12px] leading-[17px]">
          {data.subTitle}
        </p>
        <p className="mt-3 md:px-0 italic lg:text-[15px] lg:leading-[22px] md:text-[13px] md:leading-[19px] text-[12px] leading-[17px] text-light-charcoal dark:text-neutral-gray">
          {data.createdAt}
        </p>
      </div>
    </Link>
  );
};

export default ProjectTitle;
