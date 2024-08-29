import React from "react";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./svgComponents";

const socialLinks = [
  { href: "https://twitter.com/sonoverthinks", Icon: TwitterIcon },
  { href: "/", Icon: LinkedinIcon },
  { href: "https://github.com/sonny-coding", Icon: GithubIcon },
];

const SocialLink = ({ href, Icon }) => (
  <li>
    <Link href={href}>
      <div className="w-[30px] hover:text-light-blue hover:dark:text-dark-blue">
        <Icon />
      </div>
    </Link>
  </li>
);

const AppFooter = () => (
  <ul className="flex items-center justify-between gap-6 mt-auto mb-2 text-3xl [&>*]:text-light-teal-blue">
    {socialLinks.map((link, index) => (
      <SocialLink key={index} {...link} />
    ))}
  </ul>
);

export default AppFooter;
