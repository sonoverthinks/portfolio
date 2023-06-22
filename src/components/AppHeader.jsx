import { navItems } from "@/data";
import axios from "axios";
import { nanoid } from "nanoid";
import Link from "next/link";
import { useEffect, useState } from "react";
import SearchModal from "./SearchModal";
import SearchButton from "./header/SearchButton";
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from "./svgComponents";

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
          <SearchModal
            searchResults={searchResults}
            searchText={searchText}
            setSearchText={setSearchText}
            toggleSearchBar={toggleSearchBar}
            setSearchText={setSearchText}
          />
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
