import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Flex, Icon, Switch, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex align="center">
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        size="md"
        colorScheme="purple"
      />
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}>
        <Icon
          as={colorMode === "dark" ? MoonIcon : SunIcon}
          color={colorMode === "dark" ? "yellow.300" : "yellow.500"}
          boxSize={6}
          ml={2}
        />
      </motion.div>
    </Flex>
  );
};

export default ColorModeSwitch;
