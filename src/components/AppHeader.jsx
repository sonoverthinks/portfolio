import { navItems } from "@/data";
import closeIcon from "@/image/closeIcon.svg";
import menuIcon from "@/image/menuIcon.svg";
import moonIcon from "@/image/moonIcon.svg";
import sunIcon from "@/image/sunIcon.svg";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import SearchButton from "./header/SearchButton";

const AppHeader = ({
  toggleSearchBar,
  isDark,
  toggleIsDark,
  sideNav,
  toggleSideNav,
}) => {
  return (
    <div className="flex items-center justify-between w-full">
      <Link
        href="/"
        className="text-xl font-semibold md:text-2xl lg:text-3xl dark:text-offWhite"
      >
        <span className="dark:text-darkBlue text-fourth">My</span>Portfolio_
      </Link>
      <div className="">
        <SearchButton toggleSearchBar={toggleSearchBar} />
      </div>
      <div className="flex items-center gap-5 md:gap-10 lg:gap-20">
        <Image
          className="z-20 w-8 h-8 hover:cursor-pointer lg:hidden"
          src={!sideNav ? menuIcon : closeIcon}
          alt="menu"
          onClick={toggleSideNav}
        />

        <ul className="items-center hidden gap-8 text-base font-normal lg:flex ">
          {navItems.map((item) => (
            <li
              key={nanoid()}
              className="text-darkBlue2 dark:text-offWhite hover:cursor-pointer dark:hover:text-second hover:text-fourth"
            >
              <Link href="/blog">{item}</Link>
            </li>
          ))}
          <li onClick={toggleIsDark}>
            <Image
              className="w-5 h-5 hover:cursor-pointer"
              src={isDark ? sunIcon : moonIcon}
              alt="menu"
            />
          </li>
        </ul>
      </div>
      {sideNav && (
        <div className="fixed top-0 left-0 z-10 grid h-full min-w-full grid-cols-5">
          <div
            className="col-span-2 opacity-10 bg-darkBlue3"
            onClick={toggleSideNav}
          ></div>
          <div className="col-span-3 pt-16 bg-white">
            <ul className="flex flex-col px-3 text-4xl gap-9">
              {navItems.map((item) => (
                <li
                  key={nanoid()}
                  className="hover:cursor-pointer hover:text-sky-500"
                >
                  <Link href={"/blog"}>{item}</Link>
                </li>
              ))}
              <li onClick={toggleIsDark}>
                <Image
                  className="w-8 h-8 hover:cursor-pointer"
                  src={isDark ? sunIcon : moonIcon}
                  alt="menu"
                />
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppHeader;
