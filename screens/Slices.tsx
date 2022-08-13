import { Box, Button, Heading } from "@chakra-ui/react";
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
import Link from "next/link";

type ScreenProps = {
  slices: string[];
};

const Header = () => {
  return (
    <Heading as="h3" size="lg" p={8}>
      All Prismic slices.
    </Heading>
  );
};

const slicesScreen = ({ slices }: ScreenProps) => {
  return (
    <>
      <Header />
      <Box p={8}>
        <TableContainer>
          <Table variant="striped" colorScheme="blackAlpha">
            <TableCaption>
              <>
                All the slices present in the Prismic on &nbsp;
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                })}
              </>
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Slice name</Th>
              </Tr>
            </Thead>
            <Tbody>
              {slices.map((slice: string) => (
                <Tr key={slice}>
                  <Td>
                    <Link href={`/slices/${slice}`}>
                      <a>
                        <Button colorScheme="messenger" variant="link">
                          {slice}
                        </Button>
                      </a>
                    </Link>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default slicesScreen;
