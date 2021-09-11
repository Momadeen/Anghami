import { Flex, Icon, Text } from '@chakra-ui/react';
import { BsPlayFill, BsShuffle } from 'react-icons/bs';
import { TiArrowRepeat } from 'react-icons/ti';
import { BiSkipPrevious, BiSkipNext } from 'react-icons/bi';
import Slider from '../Slider';

const TrackSlider = () => (
  <Flex
    position="relative"
    flexBasis={['50%', '50%', '50%', '40%']}
    width={['50%', '50%', '50%', '40%']}
    maxWidth={['50%', '50%', '50%', '40%']}
  >
    <Flex w="95%" justifyContent="space-around">
      <Text
        fontSize={['2.5vw', '2vw', '2vw', '0.8vw']}
        margin="2em 1em"
        color="text.200"
      >
        0:00
      </Text>
      <Flex align="center" mb="1em">
        <Icon
          color="icon.100"
          marginX="0.5em"
          fontSize={['2vw', '2vw', '2vw', '1.3vw']}
          as={TiArrowRepeat}
          cursor="pointer"
        />
        <Icon
          cursor="pointer"
          color="icon.100"
          fontSize={['2vw', '2vw', '2vw', '1.3vw']}
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
          fontSize={['2vw', '2vw', '2vw', '1.5vw']}
          as={BiSkipNext}
          marginX="0.5em"
        />
        <Icon
          cursor="pointer"
          color="icon.100"
          marginX="0.5em"
          fontSize={['2vw', '2vw', '2vw', '1.3vw']}
          as={BsShuffle}
        />
      </Flex>
      <Text
        fontSize={['2.5vw', '2vw', '2vw', '0.8vw']}
        margin="2em 1em"
        color="text.200"
      >
        4:15
      </Text>
    </Flex>
    <Slider />
  </Flex>
);

export default TrackSlider;
