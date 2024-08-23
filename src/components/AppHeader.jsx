import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Link from "next/link";
import { useTheme } from "next-themes";
import extractCurrentPath from "@/utils/extractCurrentPath";
import { SearchIcon } from "./svgComponents";
import { FlashIcon } from "./svgComponents";
import { navItems } from "@/data";
import { useComboKeyPress } from "@/hooks/useKeyPress";
import SearchModal from "./SearchModal";
import TriviaModal from "./TriviaModal";

const AppHeader = () => {
  const [modal, setModal] = useState({
    search: false,
    trivia: false,
  });
  const toggleSearch = () => {
    setModal((prev) => {
      return {
        search: !prev.search,
        trivia: false,
      };
    });
  };
  const toggleTrivia = () => {
    setModal((prev) => {
      return {
        search: false,
        trivia: !prev.trivia,
      };
    });
  };
  const [currentPath, setCurrentPath] = useState("");
  const [searchModal, setSearchModal] = useState(false);
  const [triviaModal, setTriviaModal] = useState(false);
  useComboKeyPress("k", setSearchModal);
  useComboKeyPress("j", setTriviaModal);

  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  useEffect(() => {
    setCurrentPath(extractCurrentPath(window.location.pathname));
    return () => {
      setCurrentPath("");
    };
  });

  return (
    <div className="fixed z-30 flex items-center justify-between w-full max-w-[800px] p-3 dark:text-white bg-light-ghost-white dark:bg-dark-mirage">
      <div>
        <ul className="items-center gap-4 text-[18px] leading-[33px] font-normal flex">
          {navItems.map((item) => (
            <li
              key={nanoid()}
              className={`hover:cursor-pointer hover:text-light-blue dark:hover:text-dark-blue ${
                currentPath === item.href
                  ? "text-light-blue dark:text-dark-blue"
                  : ""
              }`}
            >
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-3">
        <div
          onClick={() => {
            // setTriviaModal((prev) => {
            //   return !prev;
            // });
            setTriviaModal((prev) => {
              return !prev;
            });
            toggleTrivia();
          }}
          className="flex items-center gap-1 hover:cursor-pointer hover:text-light-blue dark:hover:text-dark-blue"
        >
          <div className="w-[18px] text-light-blue">
            <FlashIcon />
          </div>
          <p className="hidden md:block text-[12px]">[Ctrl J]</p>
        </div>
        <div
          onClick={() => {
            // setSearchModal((prev) => {
            //   return !prev;
            // });
            setSearchModal((prev) => {
              return !prev;
            });
            // toggleSearch();
          }}
          className="flex items-center gap-1 hover:cursor-pointer hover:text-light-blue dark:hover:text-dark-blue"
        >
          <div className="w-[18px] text-light-blue">
            <SearchIcon />
          </div>
          <p className="hidden md:block text-[12px]">[Ctrl K]</p>
        </div>
        <p className="ml-2 md:ml-3 hover:cursor-pointer" onClick={toggleTheme}>
          <span
            className={
              theme === "light"
                ? "text-[15px] underline-offset-4 decoration-2"
                : "text-[12px]"
            }
          >
            light
          </span>
          /
          <span
            className={
              theme === "dark"
                ? "text-[15px] underline-offset-4 decoration-2"
                : "text-[12px]"
            }
          >
            dark
          </span>
        </p>
        {searchModal && <SearchModal setSearchModal={setSearchModal} />}
        {triviaModal && <TriviaModal setTriviaModal={setTriviaModal} />}
      </div>
    </div>
  );
};

export default AppHeader;
