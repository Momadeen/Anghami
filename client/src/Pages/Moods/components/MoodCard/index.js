import { useMemo } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

const colors = [
  '#03B2A7',
  '#408EEA',
  '#88B6CE',
  '#F99024',
  '#D6A403',
  '#AF6CD2',
  '#BA0162',
  '#020644',
  '#B73313',
  '#391876',
  '#27CA9A',
];
const MoodCard = ({ mood }) => {
  const cardBg = useMemo(() => colors[
    Math?.floor(Math?.random() * colors?.length)
  ], []);
  return (
    <Flex
      cursor="pointer"
      flexBasis="19%"
      marginRight="0.7em"
      marginBottom="0.7em"
      overflow="hidden"
      borderRadius="1em"
      position="relative"
    >
      <Flex
        transition="0.3s all ease-in-out"
        w="100%"
        h="100%"
        _hover={{ transform: 'scale(1.1)' }}
      >
        <Box
          position="absolute"
          h="100%"
          w="100%"
          top="0"
          left="0"
          bg={cardBg}
          opacity="0.4"
        />

        <Flex
          alignItems="center"
          justifyContent="center"
          w="100%"
          h="100%"
          paddingY="3em"
          bg={`url(${mood?.icons[0]?.url})`}
          bgRepeat="no-repeat"
          bgSize="cover"
        >
          <Text
            zIndex="10"
            fontSize="1.5em"
            color="text.100"
            fontWeight="500"
          >
            {mood?.name}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MoodCard;
