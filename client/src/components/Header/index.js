import { Box, Flex } from '@chakra-ui/react';
import Avatar from 'components/Avatar';
import { useCallback } from 'react';
import { useHistory } from 'react-router';
import Input from '../Input';
import Community from './components/Community';
import MoreOptions from './components/MoreOptions';
import PrevNextButtons from './components/PrevNextButtons';

const Header = () => {
  const history = useHistory();
  const onClickAvatar = useCallback(() => {
    history.push('/me');
  }, []);
  return (
    <Box
      borderBottom="1px solid"
      borderColor="border.100"
      position="fixed"
      top="0"
      h="3em"
      right="0"
      left="6em"
      bg="bg.200"
      paddingX="1em"
      d="block"
      zIndex="100"
    >
      <Flex
        alignItems="center"
        flexDirection="row"
        flexWrap="nowrap"
        alignContent="stretch"
        justifyContent="flex-start"
        justifyItems="center"
        height="100%"
      >
        <PrevNextButtons />

        <Input
          withSuggestion
          placeholder="Search for songs, artists, lyrics, playlists"
        />

        <Community />
        <Box margin="0 0.5em">
          <Avatar
            onClick={onClickAvatar}
            src="https://scontent.fcai19-1.fna.fbcdn.net/v/t39.30808-6/241461566_2991174581202357_4982347963610507391_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=mgOpXYFi5mgAX9Gajm6&_nc_ht=scontent.fcai19-1.fna&oh=18f74b3d41e5e111f346f621052bc545&oe=613D38EE"
            plus
          />
        </Box>
        <MoreOptions />
      </Flex>
    </Box>
  );
};

export default Header;
