import BlogPreviewList from "@/components/BlogPreviewList";
import connectDB from "@/mongoose/connectDB";

const Home = () => {
  return <BlogPreviewList />;
};

export default Home;

export const getStaticProps = async () => {
  await connectDB();
  return {
    props: {},
  };
};
