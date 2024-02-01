import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

import { useKeyPress } from "@/hooks/useKeyPress";
import { EnterIcon } from "./svgComponents";

const SearchModal = ({ setModal }) => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const exitModal = useKeyPress("Escape");

  useEffect(() => {
    setSearchText("");
    setModal((prevModalState) => {
      return {
        trivia: false,
        search: !prevModalState.search,
      };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exitModal]);

  useEffect(() => {
    (async () => {
      if (!searchText) {
        setSearchResults([]);
        return false;
      }

      const { data } = await axios.get("/api/search", {
        params: {
          query: searchText,
        },
      });

      setSearchResults(data);
      console.log(searchResults);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-light-ghost-white/30 backdrop-blur-md">
      <div
        className="absolute w-full h-full"
        onClick={() => {
          setModal((prevModalState) => {
            return {
              trivia: false,
              search: !prevModalState.search,
            };
          });
        }}
      ></div>
      <div className="mx-auto mt-[100px] flex flex-col items-start w-full max-w-[600px] overflow-hidden rounded-md gap-2">
        <input
          type="text"
          placeholder="search..."
          autoFocus
          className="flex items-center justify-between w-full px-3 py-4 text-[17px] border-none rounded-md outline-none dark:bg-light-ghost-white bg-light-charcoal dark:text-light-charcoal text-light-ghost-white"
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
              className="z-50 flex flex-col items-start w-full gap-2 p-3 rounded-md bg-light-charcoal group"
              href={link}
              key={item._id}
            >
              <div
                className="w-full h-auto"
                onClick={() => {
                  setModal((prevModalState) => {
                    return {
                      trivia: false,
                      search: !prevModalState.search,
                    };
                  });
                }}
              >
                <p className="w-full text-base text-light-ghost-white">
                  {item.title}
                </p>

                <div className="flex justify-between w-full text-light-teal-blue group-hover:text-light-blue">
                  <p className="flex gap-2 text-sm">
                    <span>{item.readingTime}</span>
                  </p>
                  <div className="w-5 mr-3 transition-all duration-150 group-hover:translate-x-2">
                    <EnterIcon />
                  </div>
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
