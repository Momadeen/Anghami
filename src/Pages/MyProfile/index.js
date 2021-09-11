import { Flex, Text, Icon, Link } from '@chakra-ui/react';
import HelmetComponent from 'components/Helmet';
import {
  AiFillLinkedin,
  AiFillGithub
} from 'react-icons/ai';
import ArtistBar from '../Artist/components/ArtistBar';

const MyProfile = () => (
  <>
    <HelmetComponent title="Mohammed Hassanien" />
    <Flex height="100%" w="100%">
      <ArtistBar userProfile />
      <Flex flexDirection="column">
        <Text
          color="text.100"
          fontSize="2em"
          fontWeight="600"
        >
          Links
        </Text>
        <Flex mt="2em">
          <Flex alignItems="center">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/hassanien97/"
            >
              <Icon mr="2em" w="3em" height="3em" color="icon.100" as={AiFillLinkedin} />
            </Link>
            <Link
              target="_blank"
              href="https://github.com/Momadeen?tab=repositories"
            >
              <Icon w="3em" height="3em" color="icon.100" as={AiFillGithub} />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  </>
);

export default MyProfile;
