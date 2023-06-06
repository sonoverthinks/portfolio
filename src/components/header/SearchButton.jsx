import React from "react";
import Image from "next/image";
import searchIcon from "@/image/searchIcon.svg";

// import { ReactComponent as MyIcon } from "@/image/searchIcon.svg";
const DIMENSION = 20;

const SearchButton = ({ toggleSearchBar }) => {
  return (
    <button
      className="w-[200px] md:w-[250px] lg:w-[300px] xl:w-[400px] flex items-center justify-between p-1 lg:p-2 rounded-md border-2  border-slate-100 hover:border-slate-300 focus:border-first group"
      onClick={toggleSearchBar}
    >
      <div className="flex items-center gap-1">
        <Image
          src={searchIcon}
          width={DIMENSION}
          height={DIMENSION}
          alt="search"
          className=""
        />
        <p className="text-sm font-normal text-gray-500 dark:text-offWhite md:text-sm">
          search...
        </p>
      </div>
      <div className="hidden lg:flex items-center justify-center gap-1 [&>*]:px-2 [&>*]:py-[1px] [&>*]:bg-grayishBlue text-offWhite font-bold [&>*]:rounded-sm [&>*]:border-slate-200 [&>*]:border-[1px] drop-shadow-sm group-hover:[&>*]:bg-second">
        <span className="">ctrl</span>
        <span>K</span>
      </div>
    </button>
  );
};

export default SearchButton;
