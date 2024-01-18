import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";

const PageLayout = ({ children }) => {
  return (
    <div className="relative flex flex-col items-center justify-start w-full h-auto min-h-screen px-10 font-space-mono bg-light-ghost-white">
      <AppHeader />
      {children}
      <AppFooter />
    </div>
  );
};

export default PageLayout;
