import React from "react";
import Link from "next/link";
import { YoutubeIcon, LinkedinIcon, TwitterIcon } from "./svgComponents";

// const DIMENSION = 25;

const AppFooter = () => {
  return (
    <ul className="mt-[100px] mb-2 flex items-center justify-between gap-4 text-3xl text-gray-700">
      <li>
        <Link href="/">
          <div className="w-[25px] text-primary hover:text-midnight">
            <TwitterIcon />
          </div>
        </Link>
      </li>
      <li>
        <Link href="/">
          <div className="w-[25px] text-primary hover:text-midnight">
            <LinkedinIcon />
          </div>
        </Link>
      </li>
      <li>
        <Link href="/">
          <div className="w-[25px] text-primary hover:text-midnight">
            <YoutubeIcon />
          </div>
        </Link>
      </li>
      <li>
        <p className="text-base dark:text-whisper">© 2023 Son Dao</p>
      </li>
    </ul>
  );
};

export default AppFooter;
