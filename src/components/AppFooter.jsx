import React from "react";
import Link from "next/link";
import Image from "next/image";
import twitterIcon from "@/image/twitterIcon.svg";
import youtubeIcon from "@/image/youtubeIcon.svg";
import linkedinIcon from "@/image/linkedinIcon.svg";

const DIMENSION = 25;

const AppFooter = () => {
  return (
    <ul className="flex items-center self-start justify-between gap-4 mt-2 text-3xl text-gray-700">
      <li>
        <Link href="/">
          <Image
            src={twitterIcon}
            width={DIMENSION}
            height={DIMENSION}
            alt="twitter link"
          ></Image>
        </Link>
      </li>
      <li>
        <Link href="/">
          <Image
            src={linkedinIcon}
            width={DIMENSION}
            height={DIMENSION}
            alt="linkedin link"
          ></Image>
        </Link>
      </li>
      <li>
        <Link href="/">
          <Image
            src={youtubeIcon}
            width={DIMENSION}
            height={DIMENSION}
            alt="youtube link"
          ></Image>
        </Link>
      </li>
    </ul>
  );
};

export default AppFooter;
