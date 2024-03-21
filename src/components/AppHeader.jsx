import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Link from "next/link";
import { useTheme } from "next-themes";
import extractCurrentPath from "@/utils/extractCurrentPath";
import { SearchIcon } from "./svgComponents";
import { FlashIcon } from "./svgComponents";
import { navItems } from "@/data";
import { useComboKeyPress } from "@/hooks/useKeyPress";
import { useToggle } from "@/hooks/useToggle";
import SearchModal from "./SearchModal";
import TriviaModal from "./TriviaModal";

const AppHeader = () => {
  const [currentPath, setCurrentPath] = useState("");
  const [modal, setModal] = useState({
    search: false,
    trivia: false,
  });
  // const [sideNav, toggleSideNav] = useToggle();
  const comboK = useComboKeyPress("k");
  const comboJ = useComboKeyPress("j");
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

  useEffect(() => {
    if (comboJ) {
      setModal((prevModalState) => {
        return {
          trivia: !prevModalState.trivia,
          search: false,
        };
      });
    }
  }, [comboJ]);

  useEffect(() => {
    if (comboK) {
      setModal((prevModalState) => {
        return {
          trivia: false,
          search: !prevModalState.search,
        };
      });
    }
  }, [comboK]);

  return (
    <div className="fixed z-30 flex items-center justify-between w-full max-w-[800px] p-3 text-light-teal-blue dark:text-white bg-light-ghost-white dark:bg-dark-mirage">
      {/* <div
          className="z-20 w-8 h-auto lg:hidden hover:cursor-pointer"
          onClick={toggleSideNav}
        >
          {!sideNav ? <MenuIcon /> : <CloseIcon />}
        </div> */}
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
            setModal((prevModalState) => {
              return {
                trivia: !prevModalState.trivia,
                search: false,
              };
            });
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
            setModal((prevModalState) => {
              return {
                trivia: false,
                search: !prevModalState.search,
              };
            });
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
        {modal.search && <SearchModal setModal={setModal} />}
        {modal.trivia && <TriviaModal setModal={setModal} />}
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
