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
import Link from "next/link";
import Header from "../components/Header";

type ScreenProps = {
  slices: string[];
};

const slicesScreen = ({ slices }: ScreenProps) => {
  return (
    <>
      <Header title="All Prismic slices" />
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
