import { Flex, Icon } from '@chakra-ui/react';
import { BsPeopleFill } from 'react-icons/bs';
import { FaCommentDots } from 'react-icons/fa';
import { GoBell } from 'react-icons/go';

const Community = () => (
  <Flex
    margin="0 .5em"
    flexDirection="row"
    alignItems="center"
  >
    <Icon
      cursor="pointer"
      margin="0 .5em"
      color="icon.100"
      as={FaCommentDots}
    />
    <Icon
      cursor="pointer"
      margin="0 .5em"
      color="icon.100"
      as={BsPeopleFill}
    />
    <Icon
      cursor="pointer"
      margin="0 .5em"
      color="icon.100"
      as={GoBell}
    />
  </Flex>
);

export default Community;
