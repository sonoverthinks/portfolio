import React from "react";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import { useToggle } from "@/hooks/useToggle";
import { useKeyPress } from "@/hooks/useKeyPress";
import { useEffect } from "react";

const PageLayout = ({ children }) => {
  const [searchBar, toggleSearchBar] = useToggle();
  const [isDark, toggleIsDark] = useToggle();
  const [sideNav, toggleSideNav] = useToggle();
  const combo = useKeyPress("k");

  useEffect(() => {
    toggleSearchBar();
    console.log(combo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [combo]);
  useEffect(() => {
    localStorage.setItem("current-theme", isDark ? "dark" : "light");
  }, [isDark]);
  return (
    <div
      className={`font-inter relative flex flex-col items-center justify-start w-full h-auto min-h-screen px-5 ${
        isDark ? "dark bg-neutral-navy" : ""
      }`}
    >
      <AppHeader
        isDark={isDark}
        toggleIsDark={toggleIsDark}
        toggleSearchBar={toggleSearchBar}
        sideNav={sideNav}
        toggleSideNav={toggleSideNav}
      />
      {children}
      {/* <AppFooter /> */}
    </div>
  );
};

export default PageLayout;
