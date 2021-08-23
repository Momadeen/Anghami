import {
  Box, Flex, Img, Text,
} from '@chakra-ui/react';
import Button from 'components/Button';
import convertNumber from 'helpers/convertNumbers';

const ArtistCard = ({
  artistImg,
  artistName,
  followers,
}) => (
  <Flex
    cursor="pointer"
    paddingY="0.5em"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
  >
    <Box
      w={['6em', '6em', '8em', '10em']}
      h={['6em', '6em', '8em', '10em']}
    >
      <Img
        objectFit="cover"
        src={artistImg}
        alt="artist"
        rounded="full"
        w="100%"
        h="100%"
        transition="0.2s all ease-in-out"
        _hover={{ transform: 'scale(1.1)' }}
      />
    </Box>
    <Text mt="0.5em" fontWeight="500" color="text.100">
      {artistName}
    </Text>
    <Text
      fontSize="0.8em"
      fontWeight="500"
      color="text.100"
    >
      {convertNumber(followers)}
    </Text>
    <Button mt="0.5em" type="primary">
      Follow
    </Button>
  </Flex>
);

export default ArtistCard;
