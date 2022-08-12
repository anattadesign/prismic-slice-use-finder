import { Box } from "@chakra-ui/react";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { getAllPages } from "../../requests/getSlicePages";
import PagesScreen from "../../screens/Pages";

type Page = {
  url: string;
  title: any;
};

type PageProps = {
  pages: Page[];
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const sliceId = context?.params?.sid as string;

  const pages: any = await getAllPages(sliceId);

  return { props: { pages } };
};

const Home: NextPage<PageProps> = ({ pages }) => {
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
        <PagesScreen pages={pages} />
      </main>
    </Box>
  );
};

export default Home;
