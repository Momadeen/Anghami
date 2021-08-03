import { Button as ChakraButton, Icon, Text } from "@chakra-ui/react";
import { useMemo } from "react";

const Button = ({ type, children, IconName, ...props }) => {
  const style = useMemo(() => {
    let bg = "";
    let bgHover = "";
    if (type === "ghost") {
      bg = "hsla(0,0%,82.7%,.28)";
      bgHover = "hsla(0,0%,82.7%,.58)";
    }
    if (type === "primary") {
      bg = "brand.100";
      bgHover = "hsla(0,0%,82.7%,.58)";
    }

    return { bg, bgHover };
  }, [type]);
  return (
    <ChakraButton
      bg={style?.bg}
      transition="0.5s all ease-in-out"
      color="text.100"
      padding="0.5em 1em"
      height="1.6em"
      {...props}
      _hover={{ bg: style?.bgHover }}
    >
      <Text marginRight="0.5em" fontSize="0.6em">
        {children}
      </Text>
      {IconName && <Icon as={IconName} />}
    </ChakraButton>
  );
};

export default Button;
