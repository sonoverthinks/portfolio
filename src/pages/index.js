import React, { useEffect } from "react";
import { useToggle } from "@/hooks/useToggle";
import { useKeyPress } from "@/hooks/useKeyPress";
import AppHeader from "@/components/AppHeader";
import BlogPreviewList from "@/components/BlogPreviewList";

const Home = () => {
  return <BlogPreviewList />;
};

export default Home;
