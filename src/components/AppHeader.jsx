import { useEffect, useState } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import Link from "next/link";
import { useTheme } from "next-themes";

import { SearchIcon } from "./svgComponents";
import { FlashIcon } from "./svgComponents";
import { navItems } from "@/data";
import { useComboKeyPress } from "@/hooks/useKeyPress";
import { useToggle } from "@/hooks/useToggle";
import SearchModal from "./SearchModal";
import SearchButton from "./header/SearchButton";
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from "./svgComponents";

const AppHeader = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchBar, toggleSearchBar] = useToggle();
  const [sideNav, toggleSideNav] = useToggle();
  const combo = useComboKeyPress("k");
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    toggleSearchBar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [combo]);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  return (
    <div className="fixed z-30 flex items-center justify-between w-full max-w-[800px] p-3 font-space-mono text-light-teal-blue dark:text-white bg-light-ghost-white">
      {/* <div className="">
        <SearchButton toggleSearchBar={toggleSearchBar} />
        {searchBar && (
          <SearchModal
            searchResults={searchResults}
            searchText={searchText}
            setSearchText={setSearchText}
            toggleSearchBar={toggleSearchBar}
          />
        )}
      </div> */}

      {/* <div
          className="z-20 w-8 h-auto lg:hidden hover:cursor-pointer"
          onClick={toggleSideNav}
        >
          {!sideNav ? <MenuIcon /> : <CloseIcon />}
        </div> */}
      <div>
        <ul className="items-center hidden gap-4 text-[18px] leading-[33px] font-normal lg:flex ">
          {navItems.map((item) => (
            <li key={nanoid()} className="hover:cursor-pointer">
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <div className="w-[18px] hover:text-midnight hover:cursor-pointer">
            <FlashIcon />
          </div>
          <p className="text-[13px]">[Ctrl J]</p>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-[18px] hover:text-midnight hover:cursor-pointer">
            <SearchIcon />
          </div>
          <p className="text-[13px]">[Ctrl K]</p>
        </div>
        <p className="text-[15px]" onClick={toggleTheme}>
          light/dark
        </p>
      </div>

      {/* {sideNav && (
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
              <li onClick={toggleTheme}>
                <div className="w-8 h-auto hover:cursor-pointer hover:text-primary">
                  {theme === "dark" ? <SunIcon /> : <MoonIcon />}
                </div>
              </li>
            </ul>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default AppHeader;
