import {
  Slider as ChakraSlider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
} from "@chakra-ui/react";

const Slider = () => (
  <Box w="80%" left="3.5em"  position="absolute" bottom="0.5em">
    <ChakraSlider colorScheme="pink" aria-label="slider-ex-1" defaultValue={30}>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </ChakraSlider>
  </Box>
);

export default Slider;
