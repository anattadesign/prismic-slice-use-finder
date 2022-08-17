import { Box } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import PagesScreen from "../../src/screens/Pages";

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>FS Prismic Pages</title>
        <meta
          name="description"
          content="Four-sigmatic Prismic pages which has a slice added"
        />
        <link rel="icon" href="/mushroom.png" />
      </Head>

      <main>
        <PagesScreen />
      </main>
    </Box>
  );
};

export default Home;
