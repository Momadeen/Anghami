import {
  Box,
  Divider,
  Flex,
  Icon,
  Text,
} from '@chakra-ui/react';

import { BsPlayFill, BsShuffle } from 'react-icons/bs';
import { TiArrowRepeat } from 'react-icons/ti';
import { BiSkipPrevious, BiSkipNext } from 'react-icons/bi';
import Slider from './components/Slider';
import TrackInfo from './components/TrackInfo';

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
      <Flex
        position="relative"
        flexBasis="40%"
        width="40%"
        maxWidth="40%"
      >
        <Flex w="95%" justifyContent="space-around">
          <Text
            fontSize="0.8em"
            margin="2em 1em"
            color="text.200"
          >
            0:00
          </Text>
          <Flex align="center" mb="1em">
            <Icon
              color="icon.100"
              marginX="0.5em"
              fontSize="1.8em"
              as={TiArrowRepeat}
              cursor="pointer"
            />
            <Icon
              cursor="pointer"
              color="icon.100"
              fontSize="2.2em"
              marginX="0.5em"
              as={BiSkipPrevious}
            />
            <Flex
              _hover={{ boxShadow: '0 0 0 2px #8D00F2' }}
              justifyContent="center"
              alignItems="center"
              bg="brand.100"
              w="2.5em"
              h="2.5em"
              rounded="full"
              cursor="pointer"
              marginX="0.5em"
            >
              <Icon
                marginLeft="2px"
                height="80%"
                w="80%"
                color="icon.100"
                as={BsPlayFill}
                cursor="pointer"
              />
            </Flex>
            <Icon
              cursor="pointer"
              color="icon.100"
              fontSize="2.2em"
              as={BiSkipNext}
              marginX="0.5em"
            />
            <Icon
              cursor="pointer"
              color="icon.100"
              marginX="0.5em"
              fontSize="1.2em"
              as={BsShuffle}
            />
          </Flex>
          <Text
            fontSize="0.8em"
            margin="2em 1em"
            color="text.200"
          >
            4:15
          </Text>
        </Flex>
        <Slider />
      </Flex>
      <Divider
        borderColor="border"
        orientation="vertical"
      />
      <Flex flexBasis="30%" width="30%" maxWidth="30%">
        3
      </Flex>
    </Flex>
  </Box>
);

export default Player;
