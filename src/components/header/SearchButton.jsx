import React from "react";
import Image from "next/image";
// import searchIcon from "@/image/searchIcon.svg";
// import Search from "@/image/SearchIcon";
// import { SearchIcon } from "@/image";
import { SearchIcon } from "../svgComponents";

// import { ReactComponent as MyIcon } from "@/image/searchIcon.svg";
const DIMENSION = 18;

const SearchButton = ({ toggleSearchBar }) => {
  return (
    <button
      className="w-[200px] md:w-[250px] lg:w-[300px] xl:w-[400px] flex items-center justify-between px-2 py-1 rounded-md border-[2px] border-slate-300 hover:border-slate-300 group text-slate-400 hover:text-primary"
      onClick={toggleSearchBar}
    >
      <div className="flex items-center gap-1">
        <div className="w-[18px] h-auto">
          <SearchIcon />
        </div>
        <p className="text-sm font-normal dark:text-offWhite md:text-sm">
          search...
        </p>
      </div>
      <div className="hidden lg:flex items-center justify-center gap-1 [&>*]:px-2 [&>*]:bg-slate-200 text-offWhite font-bold [&>*]:rounded-sm [&>*]:border-slate-200 [&>*]:border-[1px] drop-shadow-sm group-hover:[&>*]:bg-primary">
        <span className="">ctrl</span>
        <span>K</span>
      </div>
    </button>
  );
};

export default SearchButton;
