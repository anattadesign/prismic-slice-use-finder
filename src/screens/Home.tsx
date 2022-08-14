import { Box, Button, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import * as React from "react";

const HomeScreen = () => {
  const [isLoading, onLoading] = React.useState(false);

  const buttonText = "See all slices";

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
        <Box w={"100px"}>
          <Image
            src="/mushroom.png"
            alt="mushroom"
            width="100px"
            objectFit="cover"
          />
        </Box>
        <Box pl={4}>
          <Text fontSize="2xl" maxW={96}>
            Welcome to Four-sigmatic Prismic Slices Dashboard.
          </Text>
          <Text textAlign={"right"}>
            <Link href={`/slices`}>
              <a>
                <Button
                  isLoading={isLoading}
                  loadingText={buttonText}
                  variant="solid"
                  colorScheme="teal"
                  onClick={() => onLoading(true)}
                >
                  {buttonText}
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
