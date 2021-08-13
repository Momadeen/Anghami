import { Flex, Text } from "@chakra-ui/react";
import useContent from "hooks/useContent";
import MoodCard from "./components/MoodCard";

const Moods = () => {
  const content = useContent();
  return (
    <Flex flexDirection="column" w="100%" h="100%">
      <Text fontWeight="600" fontSize="2em" color="text.100">
        Mood & Genre
      </Text>
      <Flex mt="2em" flexWrap="wrap" w="100%" flexDirection="row">
        {content?.moods?.map((mood) => (
          <MoodCard mood={mood} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Moods;
