import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Img, Text } from "@chakra-ui/react";

const Suggestion = ({ content }) => {
  return (
    <Flex
      id="search"
      position="absolute"
      top="2.5em"
      w="50%"
      overflowX="hidden"
      minH="5em"
      bg="bg.black"
      borderRadius="8px"
      boxShadow="0 3px 3px 0 rgb(0 0 0 / 14%), 0 4px 1.5px -3px rgb(0 0 0 / 12%), 0 2px 6px 0 rgb(0 0 0 / 20%)"
      maxHeight="35em"
      alignItems="center"
      justifyItems="center"
      justifyContent="center"
      alignContent="center"
      overflowY="scroll"
      height="20em"
    >
      {content?.length === 0 ? (
        <>
          <Text color="text.100" marginRight="10px">
            No recent searches
          </Text>
          <SearchIcon color="icon.100" />
        </>
      ) : (
        <Flex position="absolute" top="0px" w="100%" flexDirection="column">
          {content?.map((track) => (
            <Flex
              justifyContent="space-between"
              flexDirection="row"
              w="100%"
              padding=".5em 1em .3em"
              _hover={{ bg: "bg.200" }}
              alignItems="center"
              cursor="pointer"
            >
              <Flex alignContent="center" alignItems="center">
                <Img
                  w="3em"
                  h="3em"
                  borderRadius="0.5em"
                  src={track?.albumUrl}
                />
                <Text fontSize="0.8em" marginLeft="0.5em" fontWeight="600" color="text.100">
                  {track?.title}
                </Text>
              </Flex>
              <Text fontSize="0.8em" fontWeight="600" color="text.200">
                {track?.artist}
              </Text>
            </Flex>
          ))}
        </Flex>
      )}
    </Flex>
  );
};

export default Suggestion;
