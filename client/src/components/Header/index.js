import { Box, Flex } from "@chakra-ui/react";
import Avatar from "components/Avatar";
import useAuth from "hooks/useAuth";
import Input from "../Input";
import Community from "./components/Community";
import MoreOptions from "./components/MoreOptions";
import PrevNextButtons from "./components/PrevNextButtons";

const Header = () => {
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
            src="https://www.thewrap.com/wp-content/uploads/2020/08/Lucifer-4.jpg"
            plus
          />
        </Box>
        <MoreOptions />
      </Flex>
    </Box>
  );
};

export default Header;
