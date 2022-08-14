import { Box } from "@chakra-ui/react";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { getAllSlices } from "../src/requests/getAllSlices";
import SlicesScreen from "../src/screens/Slices";

type Slice = string;

type PageProps = {
  data: Slice[];
};

export const getServerSideProps: GetServerSideProps = async () => {
  const slices: any = await getAllSlices();

  return { props: { data: slices } };
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
