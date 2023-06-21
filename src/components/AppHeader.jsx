import { navItems } from "@/data";
import { SunIcon, MoonIcon, CloseIcon, MenuIcon } from "./svgComponents";
import { nanoid } from "nanoid";
import Link from "next/link";
import SearchButton from "./header/SearchButton";
import { useState, useEffect } from "react";
import axios from "axios";

const AppHeader = ({
  toggleSearchBar,
  isDark,
  toggleIsDark,
  sideNav,
  toggleSideNav,
  searchBar,
}) => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    (async () => {
      if (!searchText) {
        setSearchResults([]);
        return false;
      }

      const { data } = await axios.get("/api/search", {
        params: {
          query: searchText,
        },
      });

      setSearchResults(data);
      console.log(searchResults);
    })();
  }, [searchText]);
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
        {searchBar && (
          <div
            className="fixed top-0 left-0 z-10 w-full h-full bg-white/30 backdrop-blur-lg"
            // onClick={toggleSearchBar}
          >
            <div className="mx-auto mt-[100px] flex flex-col items-start w-full max-w-[600px]">
              <input
                type="text"
                placeholder="search..."
                autoFocus
                className="flex items-center justify-between w-full px-3 py-4 text-base border-none rounded-md outline-none bg-neutral-licorice text-whisper"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              />
              {searchResults.map((item) => (
                <Link
                  className="w-full rounded-md bg-neutral-licorice"
                  href="/"
                  key={item._id}
                >
                  <p className="w-full text-lg text-whisper">{item.title}</p>
                  <p className="flex gap-2 text-whisper">
                    <span>{item.readingTime}</span>
                    <span>{item.totalViews}</span>
                    <span></span>
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center gap-5 md:gap-10 lg:gap-20 text-dark dark:text-whisper">
        <div
          className="z-20 w-8 h-auto lg:hidden hover:cursor-pointer"
          onClick={toggleSideNav}
        >
          {!sideNav ? <MenuIcon /> : <CloseIcon />}
        </div>

        <ul className="items-center hidden gap-8 text-lg font-normal lg:flex ">
          {navItems.map((item) => (
            <li
              key={nanoid()}
              className="text-dark dark:text-whisper hover:cursor-pointer hover:text-primary dark:hover:text-primary"
            >
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
          <li
            onClick={toggleIsDark}
            className="p-3 rounded-full bg-whisper dark:bg-neutral-licorice hover:cursor-pointer"
          >
            <div className="w-[20px] text-midnight hover:text-primary dark:text-whisper dark:hover:text-primary">
              {isDark ? <SunIcon /> : <MoonIcon />}
            </div>
          </li>
        </ul>
      </div>
      {sideNav && (
        <div className="fixed top-0 left-0 z-10 grid w-full h-full grid-cols-5">
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
                  <Link href={item.href}>{item.title}</Link>
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
