import React from "react";
import { SearchIcon } from "../svgComponents";

const SearchButton = ({ toggleSearchBar }) => {
  return (
    <button
      className="w-[200px] md:w-[250px] lg:w-[300px] xl:w-[400px] flex items-center justify-between px-2 py-2 rounded-md border-1 text-slate-400 dark:bg-neutral-licorice group bg-whisper"
      onClick={toggleSearchBar}
    >
      <div className="flex items-center gap-1">
        <div className="w-[18px] h-auto">
          <SearchIcon />
        </div>
        <p className="text-sm font-normal md:text-sm">search...</p>
      </div>
      <div className="hidden lg:flex items-center justify-center gap-1 [&>*]:px-2 [&>*]:bg-slate-200 text-offWhite font-bold [&>*]:rounded-sm [&>*]:border-slate-200 [&>*]:border-[1px] drop-shadow-sm group-hover:[&>*]:text-primary">
        <span className="">ctrl</span>
        <span>K</span>
      </div>
    </button>
  );
};

export default SearchButton;
