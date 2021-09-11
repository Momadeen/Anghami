import { Flex } from '@chakra-ui/react';
import Tabs from '../Tabs';
import Routes from './routes';

const ArtistContent = () => (
  <Flex
    flexBasis="75%"
    h="100%"
    w="100%"
    flexDirection="column"
    overflow="hidden"
  >
    <Tabs />
    <Routes />
  </Flex>
);

export default ArtistContent;
