import { Box } from "@mui/material";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import SlicesScreen from "../src/screens/Slices";
import { Slices } from "../src/types";
import { serverEndPoint } from "../src/utils/server";

type PageProps = {
  data: Slices;
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const currentLocale = req.cookies.locale;

  const response = await fetch(
    `${serverEndPoint}/api/slices?lang=${currentLocale}`
  ).then((response) => response.json());

  return { props: { data: response } };
};

const Home: NextPage<PageProps> = ({ data }) => {
  return (
    <Box>
      <Head>
        <title>FS Prismic Slices</title>
        <meta name="description" content="Four-sigmatic Prismic Slices" />
        <link rel="icon" href="/mushroom.png" />
      </Head>

      <main>
        <SlicesScreen slices={data} />
      </main>
    </Box>
  );
};

export default Home;
