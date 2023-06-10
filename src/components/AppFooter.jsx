import React from "react";
import Link from "next/link";
import { YoutubeIcon, LinkedinIcon, TwitterIcon } from "./svgComponents";

const DIMENSION = 25;

const AppFooter = () => {
  return (
    <ul className="flex items-center self-start justify-between gap-4 mt-5 text-3xl text-gray-700">
      <li>
        <Link href="/">
          <div className="w-[25px] text-primary hover:text-secondary">
            <TwitterIcon />
          </div>
        </Link>
      </li>
      <li>
        <Link href="/">
          <div className="w-[25px] text-primary hover:text-secondary">
            <LinkedinIcon />
          </div>
        </Link>
      </li>
      <li>
        <Link href="/">
          <div className="w-[25px] text-primary hover:text-secondary">
            <YoutubeIcon />
          </div>
        </Link>
      </li>
    </ul>
  );
};

export default AppFooter;
