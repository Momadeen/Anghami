import { Box, Flex, Grid } from "@chakra-ui/react";
import Header from "components/Header";
import LivesStoriesBar from "components/LivesStoriesBar";
import Sidebar from "components/Sidebar";

const Layout = ({ children }) => (
  <Flex flexDirection="row" w="100vw" h="100vh">
    <Header />
    <Sidebar />
    <Box bg="bg.100" w="100%" h="100%" padding="3em 0 0 6em" overflow="hidden">
      <Grid templateColumns="4fr 1fr">
        <Box padding="1.2em 1.5em" w="100%">{children}</Box>
        <LivesStoriesBar />
      </Grid>
    </Box>
  </Flex>
);

export default Layout;
