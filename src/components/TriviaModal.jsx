import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";

import { useKeyPress } from "@/hooks/useKeyPress";
import { FlashIcon } from "./svgComponents";

const TriviaModal = ({ toggleTrivia }) => {
  const exitModal = useKeyPress("Escape");
  useEffect(() => {
    toggleTrivia();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exitModal]);

  return (
    <div className="fixed top-0 left-0 z-10 w-full h-full bg-white/30 backdrop-blur-md">
      <div className="relative mx-auto mt-[100px] flex flex-col items-start w-full max-w-[600px] bg-light-charcoal rounded-md p-5 overflow-visible">
        <p className="lg:text-[17px] lg:leading-[33px] text-light-ghost-white">
          Most things look better when you put them in a circle.
        </p>
        <div>divider</div>
        <div className="flex items-center justify-center absolute bottom-[-1.5em] left-[50%] translate-x-[-50%] rounded-full cursor-pointer hover:shadow-light-blue w-14 h-14 bg-light-blue px-4 py-4">
          <div className="w-[18px] text-light-ghost-white">
            <FlashIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TriviaModal;
