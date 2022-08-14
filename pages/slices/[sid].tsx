import { Box } from "@chakra-ui/react";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import PagesScreen from "../../src/screens/Pages";
import { serverEndPoint } from "../../src/utils/server";

type Page = {
  url: string;
  title: any;
};

type PageProps = {
  pages: Page[];
};

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const sliceId = params?.sid as string;
  const currentLocale = req.cookies.locale;

  const pages: any = await fetch(
    `${serverEndPoint}/api/slices/${sliceId}?lang=${currentLocale}`
  ).then((response) => response.json());

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
