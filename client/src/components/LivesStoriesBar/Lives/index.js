import Container from "../Container";
import img1 from "images/lives/1.jfif";
import img2 from "images/lives/2.jfif";
import img3 from "images/lives/3.jfif";
import img4 from "images/lives/4.jfif";
import img5 from "images/lives/5.jfif";
import img6 from "images/lives/6.jfif";
import { Flex, Text } from "@chakra-ui/layout";
import Avatar from "components/Avatar";

const lives = [
  { img: img1, name: "Top" },
  { img: img2, name: "Egypt" },
  { img: img3, name: "Pop" },
  { img: img4, name: "Lebanese" },
  { img: img5, name: "Lo-fi" },
  { img: img6, name: "Rock" },
];

const Lives = () => (
  <Container title="Live Radio">
    <Flex
      flexDirection="column"
      overflowX="hidden"
      overflowY="auto"
      willChange="scroll-postion"
      height="15em"
    >
      {lives?.map((live) => (
        <Flex
          my="0.1em"
          alignItems="center"
          cursor="pointer"
          w="100%"
          padding="0.5em"
        >
          <Avatar w="3em" h="3em" src={live?.img} type="live" />
          <Text
            marginLeft="0.8em"
            fontWeight="500"
            fontSize="0.9em"
            color="text.100"
          >
            {live?.name}
          </Text>
        </Flex>
      ))}
    </Flex>
  </Container>
);

export default Lives;
