import { Box, Button, Heading, theme } from "@chakra-ui/react";
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
type Page = {
  url: string;
  title: any;
};

type ScreenProps = {
  pages: Page[];
};

const Header = () => {
  const router = useRouter();
  const { sid } = router.query;

  const getSliceName = () => {
    if (sid && typeof sid === "string") {
      return sid.replaceAll("_", " ");
    }
  };

  return (
    <Heading as="h3" size="lg" p={8}>
      All Prismic pages which has{" "}
      <Box display={"inline-block"} textTransform={"capitalize"} color={"teal"}>
        {getSliceName()}
      </Box>{" "}
      slice.
    </Heading>
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

  return (
    <>
      <Header />
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
                All the pages which has <strong>{sid}</strong> in Prismic on
                &nbsp;
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
