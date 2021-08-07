import { Flex, Img, Text } from "@chakra-ui/react";
import Button from "components/Button";
import convertNumber from "helpers/convertNumbers";

const ArtistCard = ({ artistImg, artistName, followers }) => (
  <Flex flexDirection="column" alignItems="center" justifyContent="center">
    <Img
      objectFit="cover"
      src={artistImg}
      alt="artist"
      w="10em"
      h="10em"
      rounded="full"
      transition="0.2s all ease-in-out"
      _hover={{ transform: "scale(1.1)" }}
    />
    <Text fontWeight="500" color="text.100">
      {artistName}
    </Text>
    <Text fontSize="0.8em" fontWeight="500" color="text.100">
      {convertNumber(followers)}
    </Text>
    <Button type="primary">Follow</Button>
  </Flex>
);

export default ArtistCard;
