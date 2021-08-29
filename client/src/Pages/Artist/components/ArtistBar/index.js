import { Flex, Avatar, Text, Divider } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';
import { GoVerified } from 'react-icons/go';
import { HiDotsVertical } from 'react-icons/hi';
import convertNumber from 'helpers/convertNumbers';
import Button from 'components/Button';

const ArtistBar = ({ artist }) => (
  <Flex bg="transparent" height="100%">
    <Flex flexDirection="column">
      <Avatar
        border="2px solid #303030"
        w="10em"
        h="10em"
        src={artist?.images[0]?.url}
      />
      <Flex alignItems="center" w="100%" mt="0.5em">
        <Text fontSize="1.5em" color="text.100" fontWeight="900">
          {artist?.name}
        </Text>
        <Icon mt="5px" marginLeft="5px" color="blue.600" as={GoVerified} />
        <Icon
          marginLeft="1em"
          w="2em"
          h="2em"
          cursor="pointer"
          color="icon.100"
          as={HiDotsVertical}
        />
      </Flex>
      <Flex mt="1em" w="100%">
        <Text fontWeight="700" fontSize="0.8em" color="text.300">
          {convertNumber(artist?.followers?.total)}
        </Text>
        <Text
          marginLeft="4px"
          fontWeight="600"
          fontSize="0.8em"
          color="text.300"
        >
          FOLLOWERS
        </Text>
        <Divider
          marginX="0.5em"
          borderColor="border.100"
          orientation="vertical"
        />
        <Text fontWeight="700" fontSize="0.8em" color="text.300">
          100M
        </Text>
        <Text
          marginLeft="4px"
          fontWeight="600"
          fontSize="0.8em"
          color="text.300"
        >
          PLAYS
        </Text>
      </Flex>
      <Flex justifyContent="space-around" mt="1em">
        <Button fontSize="1.8em" borderRadius="25px" type="primary">
          Play
        </Button>
        <Button fontSize="1.8em" borderRadius="25px" type="ghost">
          Follow
        </Button>
      </Flex>
    </Flex>
  </Flex>
);

export default ArtistBar;
