import { Box, Divider, Flex } from '@chakra-ui/react';

import TrackInfo from './components/TrackInfo';
import TrackSlider from './components/TrackSlider';
import PlayerMoreOptions from './components/PlayerMoreOptions';

const Player = () => (
  <Box
    w="100%"
    position="fixed"
    zIndex="999"
    bottom="0"
    left="0"
  >
    <Flex
      height="5em"
      bg="bg.black"
      justifyContent="flex-start"
    >
      <TrackInfo />
      <Divider
        borderColor="border.100"
        orientation="vertical"
      />
      <TrackSlider />
      <Divider
        borderColor="border"
        orientation="vertical"
      />
      <PlayerMoreOptions />
    </Flex>
  </Box>
);

export default Player;
