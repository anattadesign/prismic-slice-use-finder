import { Box, Button, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import * as React from "react";

const HomeScreen = () => {
  return (
    <Box
      height={"100vh"}
      backgroundImage="/coffee-small.jpg"
      backgroundSize="cover"
      backgroundRepeat={"no-repeat"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        backgroundColor={"white"}
        p={8}
        borderRadius={4}
        display="flex"
        shadow={1}
      >
        <Image
          src="/mushroom.png"
          alt="mushroom"
          width="100px"
          objectFit="cover"
        />
        <Box pl={4}>
          <Text fontSize="2xl">
            Welcome to Four-sigmatic Prismic Dashboard.
          </Text>
          <Text textAlign={"right"}>
            <Link href={`/slices`}>
              <a>
                <Button colorScheme="messenger" variant="link">
                  Lets get Started!
                </Button>
              </a>
            </Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeScreen;
