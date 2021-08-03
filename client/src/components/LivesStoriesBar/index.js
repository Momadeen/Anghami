import { Flex } from "@chakra-ui/react";
import Lives from "./Lives";
import OurLinks from "./OurLinks";
import Stories from "./Stories";

const LivesStoriesBar = () => {
  return (
    <Flex flexDirection="column" h="100vh" w="100%" bg="bg.400" padding="0.3em">
      <Lives />
      <Stories />
      <OurLinks />
    </Flex>
  );
};

export default LivesStoriesBar;
