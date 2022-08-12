import { Box, Center, Heading, theme } from "@chakra-ui/react";
import * as React from "react";

const HomeScreen = () => {
  return (
    <Box
      height={"100vh"}
      backgroundImage="/coffee-hero.jpg"
      backgroundSize="cover"
      backgroundRepeat={"no-repeat"}
      color="white"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box>
        <Heading as="h1" size="4xl" noOfLines={1}>
          Excited to see the slices!
        </Heading>
        <Heading as="h3" size="lg">
          <Center>
            <Heading as="h3" size="lg" color={theme.colors.blue["400"]}>
              Click anywhere!
            </Heading>
          </Center>
        </Heading>
      </Box>
    </Box>
  );
};

export default HomeScreen;
