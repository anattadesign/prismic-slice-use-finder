import { Box } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import SlicesScreen from "../src/screens/Slices";

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>FS Prismic Slices</title>
        <meta name="description" content="Four-sigmatic Prismic Slices" />
        <link rel="icon" href="/mushroom.png" />
      </Head>

      <main>
        <SlicesScreen />
      </main>
    </Box>
  );
};

export default Home;
