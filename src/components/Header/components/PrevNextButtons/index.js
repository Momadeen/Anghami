import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';

const PrevNextButtons = () => (
  <Flex
    flexDirection="row"
    alignContent="center"
    alignItems="center"
  >
    <ChevronLeftIcon
      color="icon.200"
      w="1.6em"
      height="1.6em"
    />
    <ChevronRightIcon
      color="icon.200"
      w="1.6em"
      height="1.6em"
    />
  </Flex>
);

export default PrevNextButtons;
