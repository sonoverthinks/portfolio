import React from "react";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./svgComponents";

// const DIMENSION = 25;

const AppFooter = () => {
  return (
    <ul className="flex items-center justify-between gap-6 mt-auto mb-2 text-3xl [&>*]:text-light-teal-blue">
      <li>
        <Link href="https://twitter.com/sonoverthinks">
          <div className="w-[30px] hover:text-light-blue hover:dark:text-dark-blue">
            <TwitterIcon />
          </div>
        </Link>
      </li>
      <li>
        <Link href="/">
          <div className="w-[30px] hover:text-light-blue hover:dark:text-dark-blue">
            <LinkedinIcon />
          </div>
        </Link>
      </li>
      <li>
        <Link href="https://github.com/sonny-coding">
          <div className="w-[30px] hover:text-light-blue hover:dark:text-dark-blue">
            <GithubIcon />
          </div>
        </Link>
      </li>
    </ul>
  );
};

export default AppFooter;
