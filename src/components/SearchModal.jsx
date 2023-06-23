import React from "react";
import { EnterIcon } from "./svgComponents";
import Link from "next/link";
import { useKeyPress } from "@/hooks/useKeyPress";
import { useEffect } from "react";
import { navItems } from "@/data";

const SearchModal = ({
  searchText,
  setSearchText,
  searchResults,
  toggleSearchBar,
}) => {
  const exitModal = useKeyPress("Escape");
  useEffect(() => {
    setSearchText("");
    toggleSearchBar();
  }, [exitModal]);
  return (
    <div
      className="fixed top-0 left-0 z-10 w-full h-full bg-white/30 backdrop-blur-md"
      onClick={toggleSearchBar}
    >
      <div className="mx-auto mt-[100px] flex flex-col items-start w-full max-w-[600px] overflow-hidden rounded-md divide-y-2">
        <input
          type="text"
          placeholder="search..."
          autoFocus
          className="flex items-center justify-between w-full px-3 py-4 text-base border-none outline-none bg-neutral-licorice text-whisper"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        {searchResults.map((item) => {
          const link = `/blog/${item.slug}`;
          console.log(typeof item.createdAt);
          return (
            <Link
              className="flex flex-col items-start w-full gap-2 p-3 bg-neutral-licorice group"
              href={link}
              key={item._id}
            >
              <p className="w-full text-base group-hover:text-primary text-whisper">
                {item.title}
              </p>
              {/* <p className="text-sm line-clamp-1 text-whisper">
          {item.description}
        </p> */}
              <div className="flex justify-between w-full text-neutral-lavenderGray">
                <p className="flex gap-2 text-sm">
                  <span>{item.readingTime}</span>
                  {/* <span>{item.totalViews} views</span> */}
                  {/* <span>{item.createdAt}</span> */}
                </p>
                <div className="w-5 mr-3 transition-all duration-150 group-hover:translate-x-2">
                  <EnterIcon />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SearchModal;
