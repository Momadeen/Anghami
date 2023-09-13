import { Flex, Text } from '@chakra-ui/layout';
import Avatar from 'components/Avatar';
import lives from 'constants/lives';
import Container from '../Container';

const Lives = () => (
  <Container title="Live Radio">
    <Flex
      flexDirection="column"
      overflowX="hidden"
      overflowY="auto"
      willChange="scroll-postion"
      height="15em"
    >
      {lives?.map((live) => (
        <Flex
          my="0.1em"
          alignItems="center"
          cursor="pointer"
          w="100%"
          padding="0.5em"
        >
          <Avatar
            w="3em"
            h="3em"
            src={live?.img}
            type="live"
          />
          <Text
            marginLeft="0.8em"
            fontWeight="500"
            fontSize="0.9em"
            color="text.100"
          >
            {live?.name}
          </Text>
        </Flex>
      ))}
    </Flex>
  </Container>
);

export default Lives;
