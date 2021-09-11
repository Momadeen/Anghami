import {
  Flex,
  Avatar,
  Text,
  Divider
} from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';
import { GoVerified } from 'react-icons/go';
import { HiDotsVertical } from 'react-icons/hi';
import convertNumber from 'helpers/convertNumbers';
import Button from 'components/Button';

const ArtistBar = ({ artist, userProfile }) => (
  <Flex bg="transparent" height="100%" flexBasis="25%">
    <Flex
      justifyContent="center"
      alignContent="center"
      flexDirection="column"
    >
      <Avatar
        border="2px solid #303030"
        w="13em"
        h="13em"
        src={
          userProfile
            ? 'https://scontent.fcai19-1.fna.fbcdn.net/v/t39.30808-6/241461566_2991174581202357_4982347963610507391_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=mgOpXYFi5mgAX9Gajm6&_nc_ht=scontent.fcai19-1.fna&oh=18f74b3d41e5e111f346f621052bc545&oe=613D38EE'
            : artist?.images[0]?.url
        }
      />
      <Flex alignItems="center" w="100%" mt="0.5em">
        <Text
          fontSize="1.5em"
          color="text.100"
          fontWeight="900"
        >
          {userProfile
            ? 'Mohammed Hassanein'
            : artist?.name}
        </Text>
        {!userProfile && (
          <Icon
            mt="5px"
            marginLeft="5px"
            color="blue.600"
            as={GoVerified}
          />
        )}

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
        <Text
          fontWeight="700"
          fontSize="0.8em"
          color="text.300"
        >
          {convertNumber(artist?.followers?.total) || '400'}
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
        <Text
          fontWeight="700"
          fontSize="0.8em"
          color="text.300"
        >
          {userProfile ? '150' : '100M'}
        </Text>
        <Text
          marginLeft="4px"
          fontWeight="600"
          fontSize="0.8em"
          color="text.300"
        >
          {userProfile ? 'Following' : 'PLAYS'}
        </Text>
      </Flex>
      <Flex justifyContent="space-between" mt="1em">
        {userProfile ? (
          <Button w="100%" fontSize="2em" type="ghost">Edit Profile</Button>
        ) : (
          <>
            <Button
              fontSize="1.8em"
              borderRadius="25px"
              type="primary"
            >
              Play
            </Button>
            <Button
              fontSize="1.8em"
              borderRadius="25px"
              type="ghost"
            >
              Follow
            </Button>
          </>
        )}
      </Flex>
    </Flex>
  </Flex>
);

export default ArtistBar;
