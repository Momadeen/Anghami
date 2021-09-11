import {
  Flex,
  Img,
  Icon,
  Text,
  Grid
} from '@chakra-ui/react';
import { BiCloudDownload } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdOndemandVideo } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';

const TrackRow = ({ track }) => (
  <Grid
    templateColumns="repeat(4, 1fr)"
    w="100%"
    alignItems="center"
    justifyContent="center"
    alignContent="center"
    cursor="pointer"
    _hover={{ bg: 'bg.300' }}
    role="group"
  >
    <Flex alignItems="center">
      <Img
        w="3em"
        h="3em"
        borderRadius="5px"
        src={track?.album?.images[0]?.url}
        mr="1em"
      />
      <Icon
        mr="0.5em"
        color="icon.100"
        as={AiOutlineHeart}
      />
      <Icon
        mr="0.5em"
        color="icon.100"
        as={BiCloudDownload}
      />
      <Text
        fontSize="0.8em"
        color="text.100"
        fontWeight="600"
      >
        {track?.name}
      </Text>
    </Flex>
    <Flex
      fontSize="0.8em"
      justifyContent="center"
      marginLeft="3em"
    >
      <Text color="text.100" fontWeight="600">
        {track?.artists[0]?.name}
      </Text>
    </Flex>
    <Flex
      fontSize="0.8em"
      justifyContent="center"
      marginLeft="1em"
    >
      <Text color="text.100" fontWeight="400">
        {track?.album?.name}
      </Text>
    </Flex>
    <Flex
      _groupHover={{ display: 'flex' }}
      display="none"
      justifyContent="flex-end"
      marginRight="2em"
    >
      <Icon
        mr="0.5em"
        color="icon.100"
        fontSize="1.2em"
        as={MdOndemandVideo}
      />
      <Icon
        mr="0.5em"
        color="icon.100"
        fontSize="1.2em"
        as={BsThreeDots}
      />
    </Flex>
  </Grid>
);

export default TrackRow;
