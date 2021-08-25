import { Flex } from '@chakra-ui/react';
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/slider';

// eslint-disable-next-line no-unused-vars
const VolumeSlider = ({ value, setVolumePer }) => (
  <Flex
    position="absolute"
    bottom="10px"
    left="0"
    bg="bg.100"
    w="1.5em"
    height="10em"
    justifyContent="center"
    paddingY="10px"
    borderRadius="8px"
  >
    <Slider
      aria-label="slider-ex-3"
      defaultValue={value}
      orientation="vertical"
      value={value}
      onChange={(e) => setVolumePer(e)}
      step="1"
    >
      <SliderTrack>
        <SliderFilledTrack bg="brand.100" />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  </Flex>
);

export default VolumeSlider;
