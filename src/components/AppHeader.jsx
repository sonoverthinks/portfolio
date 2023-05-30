import Image from "next/image";
import SearchButton from "./header/SearchButton";
import menuIcon from "@/image/menuIcon.svg";
import searchIcon from "@/image/searchIcon.svg";

const AppHeader = ({ toggleSearchBar }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <a href="#" className="text-xl font-semibold md:text-2xl lg:text-3xl">
        <span className="text-sky-500">Son</span>Dao_
      </a>
      {/* <div className="md:hidden [&>*]:w-6 [&>*]:h-6 [&>*]:hover:cursor-pointer flex justify-center items-center gap-8">
        <Image src={searchIcon} alt="menu" />
      </div> */}
      <div className="">
        <SearchButton toggleSearchBar={toggleSearchBar} />
      </div>
      <div className="flex items-center gap-5 md:gap-10 lg:gap-20">
        <Image
          className="w-6 h-6 hover:cursor-pointer lg:hidden"
          src={menuIcon}
          alt="menu"
        />
        <ul className="hidden gap-10 text-lg font-normal lg:flex">
          <li className="">
            <a href="#">Blog</a>
          </li>
          <li className="">
            <a href="#">Portfolio</a>
          </li>
          <li className="">
            <a href="#">About</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppHeader;
