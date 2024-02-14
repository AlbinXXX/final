import { Box, HStack, Image, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logoDark from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack padding="10px" paddingX={"35px"} justifyContent={"space-between"}>
      <Box>
        <SearchInput />
      </Box>
    </HStack>
  );
};

export default NavBar;
