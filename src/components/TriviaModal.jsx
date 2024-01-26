import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Divider } from "./svgComponents";

import { useKeyPress } from "@/hooks/useKeyPress";
import { FlashIcon } from "./svgComponents";

const TriviaModal = ({ toggleTrivia }) => {
  const exitModal = useKeyPress("Escape");
  useEffect(() => {
    toggleTrivia();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exitModal]);

  return (
    <div className="fixed top-0 left-0 z-10 items-center w-full h-full bg-light-ghost-white/30 backdrop-blur-md">
      <div className="flex flex-col items-center gap-3 relative mx-auto mt-[100px] w-full max-w-[600px] bg-light-charcoal rounded-md p-5 overflow-visible">
        <p className="lg:text-[19px] w-full font-semibold text-center capitalize text-light-blue">
          temporal dead zone
        </p>
        <p className="lg:text-[17px] lg:leading-[33px] text-light-ghost-white line-clamp-5 overflow-y-auto">
          A specific period in the execution of JavaScript code where variables
          declared with let and const exist but cannot be accessed or assigned
          any value. During this phase, accessing or using the variable will
          result in a ReferenceError.
        </p>
        <div className="mb-10">
          <Divider />
        </div>
        <div className="hover:cursor-pointer flex items-center justify-center absolute bottom-[-1.5em] left-[50%] translate-x-[-50%] rounded-full hover:shadow-blue w-14 h-14 bg-light-blue px-4 py-4">
          <div className="w-[18px] text-light-ghost-white">
            <FlashIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TriviaModal;
