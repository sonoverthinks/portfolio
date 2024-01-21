import { useRouter } from "next/router";
import { useEffect } from "react";

const About = () => {
  const { push } = useRouter();
  useEffect(() => {
    push("/");
  });
  return <div>about</div>;
};

export default About;
