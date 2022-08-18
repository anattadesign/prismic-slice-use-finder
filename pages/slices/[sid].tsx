import { Box } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import PagesScreen from "../../src/screens/Pages";
const title = `${process.env.NEXT_PUBLIC_PROJECT_NAME} Prismic Pages`
const description = `${process.env.NEXT_PUBLIC_PROJECT_NAME} Prismic Pages that have slices added`
const logoImage = process.env.NEXT_PUBLIC_PROJECT_LOGO_IMAGE;


const Home: NextPage = () => {
  return (
    <Box>
      <Head>
      <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href={logoImage} />
      </Head>

      <main>
        <PagesScreen />
      </main>
    </Box>
  );
};

export default Home;
