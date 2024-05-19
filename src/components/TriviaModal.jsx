// import axios from "axios";
import { useState, useEffect } from "react";
import { Divider } from "./svgComponents";
import { useKeyPress } from "@/hooks/useKeyPress";
import { FlashIcon } from "./svgComponents";
import { Loader } from "./svgComponents";

const TriviaModal = ({ setTriviaModal }) => {
  const [trivia, setTrivia] = useState({});

  const newTrivia = useKeyPress("n");
  const fetchTrivia = async () => {
    try {
      const res = await fetch("/api/trivia");
      const data = await res.json();
      setTrivia(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTrivia();
  }, [newTrivia]);

  return (
    <div className="fixed top-0 left-0 items-center w-full h-full bg-light-ghost-white/30 backdrop-blur-md">
      <div
        onClick={() => {
          setTriviaModal((prev) => {
            return !prev;
          });
        }}
        className="absolute w-full h-full"
      ></div>
      <div className="flex flex-col items-center gap-3 relative mx-auto mt-[100px] w-full max-w-[600px] bg-light-charcoal rounded-md p-6 overflow-visible">
        {trivia ? (
          <div>
            <p className="lg:text-[17px] lg:leading-[33px] text-light-ghost-white line-clamp-5 text-center overflow-y-auto capitalize">
              {trivia?.content}
            </p>
          </div>
        ) : (
          <Loader />
        )}

        <div className="mt-5 mb-10">
          <Divider />
        </div>
        <div
          className="hover:cursor-pointer flex items-center justify-center absolute bottom-[-1.5em] left-[50%] translate-x-[-50%] rounded-full hover:shadow-blue w-14 h-14 bg-light-blue px-4 py-4"
          onClick={fetchTrivia}
        >
          <div className="w-[18px] text-light-ghost-white">
            <FlashIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TriviaModal;
