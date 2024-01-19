import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import PageLayout from "@/components/PageLayout";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </ThemeProvider>
  );
}

/* 
Frontend:
Nextjs
tailwind
swr

Backend:
Nextjs api routes
mongodb

Steps:
1. setup environment
  1. Build app header
  2. Create Blog Preview Card
  3. Layout 

2. Homepage UI
3. Understand SSG
4. Setup mdx, database, and make homepage static
5. generate static blog page
6. style blog page
7. build the view counter
8. Implement autocomplete blog
9. Deploy
*/
