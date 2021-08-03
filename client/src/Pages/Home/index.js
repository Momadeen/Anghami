import { Flex, Text } from "@chakra-ui/react";
import Card from "components/Card";

const Home = () => (
  <Flex flexDirection="column">
      <Text fontWeight="600" fontSize="2em" color="text.100">Explore</Text>
      <Card song={{name: 'Dont leave me', singer: 'Wael Kfoury'}} />
      <Card withOutPlay w="220px" height="220px" />
  </Flex>
);

export default Home;
