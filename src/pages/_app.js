import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import PageLayout from "@/components/PageLayout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>Son Dao - Web Developer | React & Next.js Specialist</title>
        <meta
          name="description"
          content="Personal website of Son Dao, a web developer specializing in React and Next.js. Explore my projects, articles, and insights on modern web development."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="web developer, React, Next.js, JavaScript, front-end development, tech writing"
        />
        <meta name="author" content="Son Dao" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </ThemeProvider>
  );
}
