import { Box, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BsPlayFill, BsThreeDots } from "react-icons/bs";

const Card = ({ song, withOutPlay, ...props }) => {
  const [showplay, setShowPlay] = useState(false);
  return (
    <Flex flexDirection="column">
      <Link w="100%" height="100%">
        <Box
          w="190px"
          position="relative"
          overflow="hidden"
          height="190px"
          borderRadius="1em"
          onMouseEnter={() => setShowPlay(true)}
          onMouseLeave={() => setShowPlay(false)}
          {...props}
        >
          <Flex
            h="100%"
            w="100%"
            position="absolute"
            bottom="0"
            right="0"
            left="0"
            d={showplay ? "block" : "none"}
          >
            {!withOutPlay && (
              <>
                <Flex
                  w="100%"
                  height="90%"
                  alignContent="center"
                  alignItems="flex-end"
                  justifyContent="center"
                >
                  <Flex
                    alignContent="center"
                    alignItems="center"
                    justifyContent="center"
                    w="30px"
                    height="30px"
                    bg="brand.100"
                    borderRadius="50%"
                    cursor="pointer"
                    marginRight="1em"
                  >
                    <Icon color="icon.100" as={BsPlayFill} />
                  </Flex>
                  <Flex
                    alignContent="center"
                    alignItems="center"
                    justifyContent="center"
                    w="30px"
                    height="30px"
                    bg="icon.100"
                    borderRadius="50%"
                    cursor="pointer"
                  >
                    <Icon color="icon.200" as={BsThreeDots} />
                  </Flex>
                </Flex>
                <Box opacity="0.4" position="absolute" top="0" bg="bg.black" h="100%" w="100%" />
              </>
            )}
          </Flex>
          <Box
            w="100%"
            bgImage="url(https://artwork.angham.me//webp/?id=141468771&size=640)"
            bgRepeat="no-repeat"
            bgSize="102%"
            bgPosition="50%"
            h="100%"
            transition="0.4s all ease-in-out"
            transform={showplay && "scale(1.1) translateX(10px)"}
          />
        </Box>
        <Flex flexDirection="column" mt="0.3em">
          <Text fontSize="0.8em" color="text.100">
            {song?.name}
          </Text>
          <Text fontSize="0.6em" color="text.200">
            {song?.singer}
          </Text>
        </Flex>
      </Link>
    </Flex>
  );
};

export default Card;
