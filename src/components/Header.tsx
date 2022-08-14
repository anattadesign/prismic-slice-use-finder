import { Text } from "@chakra-ui/react";
import * as React from "react";
import Locales from "./Locales";

type HeaderProps = {
  title: string | React.ReactNode;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <>
      <Text fontSize="4xl" p={8} pb={0}>
        {title}
      </Text>
      <Locales />
    </>
  );
};

export default Header;
