import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import extractCurrentPath from "@/utils/extractCurrentPath";
import { SearchIcon, FlashIcon } from "./svgComponents";
import { navItems } from "@/data";
import { useComboKeyPress } from "@/hooks/useKeyPress";
import SearchModal from "./SearchModal";
import TriviaModal from "./TriviaModal";

const AppHeader = () => {
  const [currentPath, setCurrentPath] = useState("");
  const [searchModal, setSearchModal] = useState(false);
  const [triviaModal, setTriviaModal] = useState(false);
  const { theme, setTheme } = useTheme();

  useComboKeyPress("k", () => setSearchModal((prev) => !prev));
  useComboKeyPress("j", () => setTriviaModal((prev) => !prev));

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  useEffect(() => {
    setCurrentPath(extractCurrentPath(window.location.pathname));
    return () => {
      setCurrentPath("");
    };
  });

  return (
    <div className="fixed z-30 flex items-center justify-between w-full max-w-[800px] p-3 dark:text-white bg-light-ghost-white dark:bg-dark-mirage">
      <nav>
        <ul className="flex items-center gap-2 md:gap-4 md:text-[18px] text-[16px] leading-[28px] md:leading-[33px] font-normal">
          {navItems.map(({ href, title }) => (
            <li
              key={href}
              className={`hover:cursor-pointer hover:text-light-blue dark:hover:text-dark-blue ${
                currentPath === href
                  ? "text-light-blue dark:text-dark-blue"
                  : ""
              }`}
            >
              <Link href={href}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-2">
        <HeaderIcon
          Icon={FlashIcon}
          onClick={() => setTriviaModal((prev) => !prev)}
          shortcut="J"
        />
        <HeaderIcon
          Icon={SearchIcon}
          onClick={() => setSearchModal((prev) => !prev)}
          shortcut="K"
        />
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        {searchModal && <SearchModal setSearchModal={setSearchModal} />}
        {triviaModal && <TriviaModal setTriviaModal={setTriviaModal} />}
      </div>
    </div>
  );
};

const HeaderIcon = ({ Icon, onClick, shortcut }) => (
  <div
    onClick={onClick}
    className="flex items-center gap-1 hover:cursor-pointer hover:text-light-blue dark:hover:text-dark-blue"
  >
    <div className="w-[18px] text-light-blue">
      <Icon />
    </div>
    <p className="hidden md:block text-[12px]">[Ctrl {shortcut}]</p>
  </div>
);

const ThemeToggle = ({ theme, toggleTheme }) => (
  <p className="hover:cursor-pointer" onClick={toggleTheme}>
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
);

export default AppHeader;
