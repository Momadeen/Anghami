import { Box, Flex, Text, Img } from '@chakra-ui/react';

const LatestReleaseCard = ({
  src,
  trackName,
  artist,
  releaseDate
}) => (
  <Flex borderRadius="8px" bg="bg.300" w="25em" height="10em" padding="1em">
    <Img src={src} alt="track image" />
    <Flex
      justifyContent="space-between"
      flexDirection="column"
      marginLeft="1em"
    >
      <Box
        borderRadius="5px"
        border="1px solid"
        borderColor="border.300"
        textAlign="center"
      >
        <Text fontSize="0.8em" color="text.100">SONG</Text>
      </Box>
      <Flex flexDirection="column">
        <Text color="text.100">{trackName}</Text>
        <Text color="text.300">{artist}</Text>
      </Flex>
      <Text fontSize="0.7em" color="text.100">{releaseDate}</Text>
    </Flex>
  </Flex>
);

export default LatestReleaseCard;
