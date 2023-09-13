// import img1 from "images/lives/1.jfif";
import { Flex, Text } from '@chakra-ui/layout';
import Avatar from 'components/Avatar';
import stories from 'constants/stories';
import Container from '../Container';

const Stories = () => (
  <Container title="Stories">
    <Flex
      flexDirection="column"
      overflowX="hidden"
      overflowY="auto"
      willChange="scroll-postion"
      height="15em"
    >
      {stories?.map((live) => (
        <Flex
          my="0.1em"
          alignItems="center"
          cursor="pointer"
          w="100%"
          padding="0.2em"
        >
          <Avatar hasStories w="3em" h="3em" src={live?.img} />
          <Flex flexDirection="column" marginLeft="0.8em">
            <Text fontWeight="500" fontSize="0.9em" color="text.100">
              {live?.name}
            </Text>
            <Text fontWeight="500" fontSize="0.6em" color="text.200">
              {live?.time}
            </Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  </Container>
);

export default Stories;
