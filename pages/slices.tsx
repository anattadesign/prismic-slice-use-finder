import { Box } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import SlicesScreen from "../src/screens/Slices";
const title = `${process.env.NEXT_PUBLIC_PROJECT_NAME} Prismic Slices`
const logoImage = process.env.NEXT_PUBLIC_PROJECT_LOGO_IMAGE;


const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <link rel="icon" href={logoImage} />
      </Head>

      <main>
        <SlicesScreen />
      </main>
    </Box>
  );
};

export default Home;
