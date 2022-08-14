import { Box, Button, Text } from "@chakra-ui/react";
import * as React from "react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Header from "../components/Header";
type Page = {
  url: string;
  title: any;
};

type ScreenProps = {
  pages: Page[];
};

const Header_ = () => {
  const router = useRouter();
  const { sid } = router.query;

  const getSliceName = () => {
    if (sid && typeof sid === "string") {
      return sid.replaceAll("_", " ");
    }
  };

  return (
    <Text fontSize="4xl" p={8} pb={0}>
      All Prismic pages which has{" "}
      <Box display={"inline-block"} textTransform={"capitalize"} color={"teal"}>
        {getSliceName()}
      </Box>{" "}
      slice.
    </Text>
  );
};

const getName = (page: Page) => {
  try {
    const [content] = page.title;
    return content.text;
  } catch (err) {
    return page.url;
  }
};

const PagesScreen = ({ pages }: ScreenProps) => {
  const router = useRouter();
  const { sid } = router.query;

  const getDefaultContent = () => {
    const hasNoPage = pages && !pages.length;
    if (hasNoPage) {
      return (
        <Tr>
          <Td>This slice has not been added to any page yet!</Td>
        </Tr>
      );
    }
  };

  const getSliceName = () => {
    if (sid && typeof sid === "string") {
      return sid.replaceAll("_", " ");
    }
  };

  const getHeader = () => {
    const headerTitle = (
      <>
        All Prismic pages which has{" "}
        <Box
          display={"inline-block"}
          textTransform={"capitalize"}
          color={"teal"}
        >
          {getSliceName()}
        </Box>{" "}
        slice.
      </>
    );

    return <Header title={headerTitle} />;
  };

  return (
    <>
      {getHeader()}
      <Box p={8}>
        <Box textAlign={"right"}>
          <Button colorScheme="messenger" variant="link">
            <a href={"/slices"}>Back to slices</a>
          </Button>
        </Box>
        <TableContainer>
          <Table variant="striped" colorScheme="blackAlpha">
            <TableCaption>
              <>
                All the pages which has <strong>{getSliceName()}</strong> in
                Prismic on &nbsp;
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                })}
              </>
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Page name</Th>
              </Tr>
            </Thead>
            <Tbody>
              {pages.map((page: Page) => (
                <Tr key={page.url}>
                  <Td>
                    <Button colorScheme="messenger" variant="link">
                      <a href={page.url} target="_blank" rel="noreferrer">
                        {getName(page)}
                      </a>
                    </Button>
                  </Td>
                </Tr>
              ))}
              {getDefaultContent()}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default PagesScreen;
