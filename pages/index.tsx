import { Box } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "../src/screens/Home";

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>FS Prismic Dashboard</title>
        <meta name="description" content="Four-sigmatic Prismic dashboard" />
        <link rel="icon" href="/mushroom.png" />
      </Head>

      <main>
        <HomePage />
      </main>
    </Box>
  );
};

export default Home;
