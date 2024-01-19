import React from "react";
import Link from "next/link";
import { YoutubeIcon, LinkedinIcon, TwitterIcon } from "./svgComponents";

// const DIMENSION = 25;

const AppFooter = () => {
  return (
    <ul className="flex items-center justify-between gap-4 mt-auto mb-2 text-3xl [&>*]:text-light-teal-blue">
      <li>
        <Link href="/">
          <div className="w-[25px] hover:text-light-blue hover:dark:text-dark-blue">
            <TwitterIcon />
          </div>
        </Link>
      </li>
      <li>
        <Link href="/">
          <div className="w-[25px] hover:text-light-blue hover:dark:text-dark-blue">
            <LinkedinIcon />
          </div>
        </Link>
      </li>
      <li>
        <Link href="/">
          <div className="w-[25px] hover:text-light-blue hover:dark:text-dark-blue">
            <YoutubeIcon />
          </div>
        </Link>
      </li>
      <li>
        <p className="text-base text-neutral-nickel">© 2023 Son Dao</p>
      </li>
    </ul>
  );
};

export default AppFooter;
