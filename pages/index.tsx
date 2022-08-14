import { Box } from "@chakra-ui/react";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { getAllLocales } from "../src/requests/getAllLocales";
import HomePage from "../src/screens/Home";
import { HomeScreenProps } from "../src/types";

export const getServerSideProps: GetServerSideProps = async () => {
  const locales: any = await getAllLocales();

  return { props: { locales } };
};

const Home: NextPage<HomeScreenProps> = ({ locales }) => {
  return (
    <Box>
      <Head>
        <title>FS Prismic Dashboard</title>
        <meta name="description" content="Four-sigmatic Prismic dashboard" />
        <link rel="icon" href="/mushroom.png" />
      </Head>

      <main>
        <HomePage locales={locales} />
      </main>
    </Box>
  );
};

export default Home;
