import React, { useEffect, useRef } from "react";
import CustomButton from "../CustomButton";
import Image from "next/image";
import {
  YoutubeIcon,
  TwitterIcon,
  LinkedinIcon,
  ChatBubbleIcon,
} from "../svgComponents";
import Typed from "typed.js";

const About = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Son", "a web developer", "a tech writer"],
      typeSpeed: 90,
      backSpeed: 60,
      startDelay: 600, // delay before loop
      backDelay: 500,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <section className="flex items-center justify-center w-full h-auto gap-3 p-3 lg:col-span-2 dark:bg-midnight">
      <div className="w-auto h-auto ">
        <Image
          src={"/profile.jpg"}
          width={400}
          height={400}
          alt="profile pic"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col items-start justify-between w-full gap-5">
        <p className="text-3xl font-bold text-midnight dark:text-whisper">
          I am <span className="text-4xl text-secondary" ref={el} />
        </p>
        <CustomButton primary={false}>
          <div className="w-[20px] text-secondary">
            <ChatBubbleIcon />
          </div>{" "}
          Let&apos;s talk
        </CustomButton>
        <p className="text-neutral-nickel dark:text-neutral-lavenderGray">
          I love working with others to create beautiful design solutions.
          I&apos;ve designed everything from brand illustrations to complete
          mobile apps.
        </p>

        <div className="flex items-center justify-center gap-4 text-primary">
          <a href="https://twitter.com/sonnyConnect">
            <div className="w-[40px] hover:text-secondary">
              <YoutubeIcon />
            </div>
          </a>
          <a href="https://twitter.com/sonnyConnect">
            <div className="w-[40px] hover:text-secondary">
              <TwitterIcon />
            </div>
          </a>
          <a href="https://twitter.com/sonnyConnect">
            <div className="w-[40px] hover:text-secondary">
              <LinkedinIcon />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
