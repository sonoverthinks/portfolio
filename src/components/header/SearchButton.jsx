import React from "react";
import Image from "next/image";
const DIMENSION = 20;

const SearchButton = ({ toggleSearchBar }) => {
  return (
    <button
      className="w-[400px] flex items-center justify-between py-2 px-3 rounded-md border-2 border-slate-100 focus:border-blue-200 hover:border-blue-200"
      onClick={toggleSearchBar}
    >
      <div className="flex items-center justify-center">
        <Image
          src={"./search.svg"}
          width={DIMENSION}
          height={DIMENSION}
          alt="search"
          className="mx-2"
        />
        <span className="text-base font-medium text-gray-500">
          Quick search...
        </span>
      </div>
      <div className="flex items-center justify-center gap-1 [&>*]:px-2 [&>*]:py-[1px] [&>*]:bg-[#edf2f7] text-slate-500 font-bold [&>*]:rounded-sm [&>*]:border-slate-200 [&>*]:border-[1px] drop-shadow-sm">
        <span>ctrl</span>
        <span>K</span>
      </div>
    </button>
  );
};

export default SearchButton;
