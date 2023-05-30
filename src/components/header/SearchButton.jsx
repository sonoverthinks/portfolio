import React from "react";
import Image from "next/image";
import searchIcon from "@/image/searchIcon.svg";
const DIMENSION = 30;

const SearchButton = ({ toggleSearchBar }) => {
  return (
    <button
      className="w-[200px] md:w-[250px] lg:w-[300px] xl:w-[400px] flex items-center justify-between p-1 lg:p-2 rounded-md border-2 border-slate-100 focus:border-blue-200 hover:border-blue-200"
      onClick={toggleSearchBar}
    >
      <div className="flex gap-1">
        <Image
          src={searchIcon}
          width={DIMENSION}
          height={DIMENSION}
          alt="search"
          className=""
        />
        <span className="text-sm font-medium text-gray-500 md:text-sm">
          search...
        </span>
      </div>
      <div className="hidden xl:flex items-center justify-center gap-1 [&>*]:px-2 [&>*]:py-[1px] [&>*]:bg-[#edf2f7] text-slate-500 font-bold [&>*]:rounded-sm [&>*]:border-slate-200 [&>*]:border-[1px] drop-shadow-sm">
        <span>ctrl</span>
        <span>K</span>
      </div>
    </button>
  );
};

export default SearchButton;
