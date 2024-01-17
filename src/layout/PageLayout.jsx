import { useToggle } from "@/hooks/useToggle";
import { useEffect } from "react";
import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";

const PageLayout = ({ children }) => {
  return (
    <div
      className={`font-openSans relative flex flex-col items-center justify-start w-full h-auto min-h-screen px-5 dark:bg-neutral-navy
      `}
    >
      <AppHeader />
      {children}
      <AppFooter />
    </div>
  );
};

export default PageLayout;
