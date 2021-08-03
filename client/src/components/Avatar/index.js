import { Flex, Avatar as ChakraAvatar, Text, Icon } from "@chakra-ui/react";
import { useMemo } from "react";
import { FcFilm } from "react-icons/fc";
import "./Avatar.css";

const Avatar = ({ type, src, plus, hasStories, size, ...props }) => {
  const style = useMemo(() => {
    let border = "1px solid #fff";
    let borderColor = "text.100";
    let badge = "linear-gradient(90deg,#e13f8c 0,#9d2ad5 46%,#517bdd)";

    if (type === "live") {
      border = "2px solid transparent";
      badge = "linear-gradient(90deg, rgb(208, 35, 12), rgb(255, 153, 87))";
    }

    if (hasStories) {
      border = "2px solid rgb(217, 45, 119)";
    }

    return {
      border,
      borderColor,
      badge,
    };
  }, [hasStories, type]);

  return (
    <Flex position="relative">
      <ChakraAvatar
        border={style?.border}
        borderColor={style?.borderColor}
        src={src}
        alt="avatar"
        size="sm"
        cursor="pointer"
        zIndex="10"
        className={type === "live" && "ring"}
        {...props}
      />
      {plus || type === "live" ? (
        <Flex
          bg={style?.badge}
          position="absolute"
          bottom="-6px"
          textAlign="center"
          borderRadius="10px"
          left={type === "live" ? "-5px" : "0"}
          right="0"
          zIndex="10"
          justifyContent="center"
          w={type === "live" ? "140%" : "100%"}
          alignItems="center"
        >
          {type === "live" && <Icon fontSize="0.8em" as={FcFilm} />}
          <Text fontSize="8px" color="text.100">
            {type === "live" ? "24/7" : "PLUS"}
          </Text>
        </Flex>
      ) : null}
    </Flex>
  );
};

export default Avatar;
