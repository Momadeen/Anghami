import {
  Slider as ChakraSlider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
} from '@chakra-ui/react';

const Slider = () => (
  <Box
    w="80%"
    left="3.5vw"
    position="absolute"
    bottom="0.5em"
  >
    <ChakraSlider
      aria-label="slider-ex-1"
      defaultValue={30}
    >
      <SliderTrack>
        <SliderFilledTrack bg="brand.100" />
      </SliderTrack>
      <SliderThumb bg="brand.100" />
    </ChakraSlider>
  </Box>
);

export default Slider;
