import { Box, Button } from "@chakra-ui/react";
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
import Header from "../components/Header";
import { Slices } from "../types";
import { getCurrentLocale } from "../utils/currentLocale";
import { useRouter } from "next/router";

type ScreenProps = {
  slices: Slices;
};

const SlicesScreen = ({ slices }: ScreenProps) => {
  const router = useRouter();

  const handleClick = (sliceName: string) => {
    router.push(`/slices/${sliceName}?lang=${getCurrentLocale()}`);
  };

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
                    <Button
                      colorScheme="messenger"
                      variant="link"
                      onClick={() => handleClick(slice.name)}
                    >
                      <Box textTransform={"capitalize"}>
                        {slice.name.replaceAll("_", " ")}
                      </Box>
                    </Button>
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

export default SlicesScreen;
