import { navItems } from "@/data";
import { SunIcon, MoonIcon, CloseIcon, MenuIcon } from "./svgComponents";
import { nanoid } from "nanoid";
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
    <div className="fixed z-30 flex items-center justify-between w-full p-3 bg-white dark:bg-neutral-navy">
      <Link
        href="/"
        className="text-xl font-semibold text-dark md:text-2xl lg:text-3xl dark:text-whisper"
      >
        <span className="mr-1 text-primary">{"〈✎〉"}</span>
        Sonny
      </Link>
      <div className="">
        <SearchButton toggleSearchBar={toggleSearchBar} />
      </div>
      <div className="flex items-center gap-5 md:gap-10 lg:gap-20 text-dark dark:text-whisper">
        <div
          className="z-20 w-8 h-auto lg:hidden hover:cursor-pointer"
          onClick={toggleSideNav}
        >
          {!sideNav ? <MenuIcon /> : <CloseIcon />}
        </div>

        <ul className="items-center hidden gap-8 text-base font-normal lg:flex ">
          {navItems.map((item) => (
            <li
              key={nanoid()}
              className="text-dark dark:text-whisper hover:cursor-pointer hover:text-primary dark:hover:text-primary"
            >
              <Link href="/blogs">{item}</Link>
            </li>
          ))}
          <li onClick={toggleIsDark}>
            <div className="w-[25px] hover:cursor-pointer text-midnight hover:text-primary dark:text-whisper dark:hover:text-primary">
              {isDark ? <SunIcon /> : <MoonIcon />}
            </div>
          </li>
        </ul>
      </div>
      {sideNav && (
        <div className="fixed top-0 left-0 z-10 grid h-full min-w-full grid-cols-5">
          <div
            className="col-span-2 opacity-10 bg-dark"
            onClick={toggleSideNav}
          ></div>
          <div className={`col-span-3 pt-16 bg-whisper dark:bg-dark`}>
            <ul className="flex flex-col px-3 text-4xl gap-9">
              {navItems.map((item) => (
                <li
                  key={nanoid()}
                  className="hover:cursor-pointer dark:text-dark hover:text-primary dark:hover:text-primary"
                >
                  <Link href={"/blog"}>{item}</Link>
                </li>
              ))}
              <li onClick={toggleIsDark}>
                <div className="w-8 h-auto hover:cursor-pointer hover:text-primary">
                  {isDark ? <SunIcon /> : <MoonIcon />}
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppHeader;
