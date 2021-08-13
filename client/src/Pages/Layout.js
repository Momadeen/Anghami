import { Box, Flex, Grid } from "@chakra-ui/react";
import Header from "components/Header";
import LivesStoriesBar from "components/LivesStoriesBar";
import Player from "components/Player";
import Sidebar from "components/Sidebar";
import { useCurrentWidth } from "react-socks";

const Layout = ({ children }) => {
  const width = useCurrentWidth();

  return (
    <Flex flexDirection="row" w="100vw" h="100vh">
      <Header />
      <Sidebar />
      <Box
        bg="bg.100"
        w="100%"
        h="100%"
        padding="3em 0 0 6em"
        overflow="hidden"
      >
        <Grid templateColumns={width < 768 ? "1fr" : "4fr 1fr"}>
          <Box
            h="95vh"
            overflowX="hidden"
            overflowY="auto"
            padding="1.2em 1em 1.2em 1.5em"
            w="100%"
          >
            <Box overflowX="hidden" minH="95vh">
              {children}
            </Box>
          </Box>
          {width > 768 && <LivesStoriesBar />}
        </Grid>
      </Box>
      <Player />
    </Flex>
  );
};

export default Layout;
