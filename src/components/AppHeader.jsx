import React from "react";
// import Image from "next/image";
import SearchButton from "./header/SearchButton";

const AppHeader = ({ toggleSearchBar }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <a href="#" className="text-3xl font-semibold">
        <span className="text-sky-500">My</span>Portfolio_
      </a>
      <div className="flex items-center gap-20">
        <SearchButton toggleSearchBar={toggleSearchBar} />
        <ul className="flex gap-10 text-lg font-normal">
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
      {/* <Image src={"./next.svg"} width={20} height={20} alt="pic"></Image> */}
    </div>
  );
};

export default AppHeader;
