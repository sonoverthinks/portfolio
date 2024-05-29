import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

const PageLayout = ({ children }) => {
  return (
    <div className="">
      <div className="relative flex flex-col items-center justify-start w-full min-h-screen antialiased bg-light-ghost-white font-source-code-pro dark:bg-dark-mirage">
        <AppHeader />
        {children}
        {/* <AppFooter /> */}
      </div>
    </div>
  );
};

export default PageLayout;
