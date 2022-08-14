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
import { Slices } from "../types";
import { getCurrentLocale } from "../utils/currentLocale";

type ScreenProps = {
  slices: Slices;
};

const locale = getCurrentLocale();

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
              {slices.map((slice) => (
                <Tr key={slice.id}>
                  <Td>
                    <Link href={`/slices/${slice.name}?lang=${locale}`}>
                      <a>
                        <Button colorScheme="messenger" variant="link">
                          <Box textTransform={"capitalize"}>
                            {slice.name.replaceAll("_", " ")}
                          </Box>
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
