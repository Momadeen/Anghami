import { Box, Divider, Flex, Icon, Img, Text } from "@chakra-ui/react";
import { useState } from "react";
import {
  AiFillHeart,
  AiOutlineCloudDownload,
  AiOutlineShareAlt,
  AiOutlineHeart,
} from "react-icons/ai";
import { BsThreeDotsVertical, BsPlayFill, BsShuffle } from "react-icons/bs";
import { TiArrowRepeat } from "react-icons/ti";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { useCurrentWidth } from "react-socks";
import Slider from "./components/Slider";

const Player = ({ song }) => {
  const [like, setLike] = useState(false);
  const onClickLike = () => setLike((prev) => !prev);

  const width = useCurrentWidth();
  return (
    <Box w="100%" position="fixed" zIndex="999" bottom="0" left="0">
      <Flex height="5em" bg="bg.black" justifyContent="flex-start">
        <Flex
          justifyContent="space-between"
          marginX="0.5em"
          flexBasis="30%"
          width="30%"
          maxWidth="30%"
        >
          <Flex alignItems="center">
            <Img
              w="3em"
              h="3em"
              borderRadius="5px"
              src="https://i.scdn.co/image/ab67616d0000b2730899722a645a8b3997128f26"
            />
            <Flex marginLeft="0.5em" flexDirection="column">
              <Text
                fontSize={["0.7em", "0.7em", "0.8em", "0.9em"]}
                color="text.100"
                fontWeight="600"
              >
                Zayaha Meen
              </Text>
              <Text
                fontSize={["0.6em", "0.6em", "0.7em", "0.8em"]}
                color="text.300"
                fontWeight="600"
              >
                Mohamed Hamaki
              </Text>
            </Flex>
          </Flex>
          <Flex justifyContent="center" alignItems="center">
            {width > 768 && (
              <>
                <Icon
                  cursor="pointer"
                  marginX="0.2em"
                  fontSize="1.5em"
                  color="icon.100"
                  as={like ? AiFillHeart : AiOutlineHeart}
                  onClick={onClickLike}
                />
                <Icon
                  cursor="pointer"
                  marginX="0.2em"
                  fontSize="1.5em"
                  color="icon.100"
                  as={AiOutlineCloudDownload}
                />
                <Icon
                  cursor="pointer"
                  marginX="0.2em"
                  fontSize="1.5em"
                  color="icon.100"
                  as={AiOutlineShareAlt}
                />
              </>
            )}

            <Icon
              cursor="pointer"
              marginX="0.2em"
              fontSize="1.5em"
              color="icon.100"
              as={BsThreeDotsVertical}
            />
          </Flex>
        </Flex>
        <Divider borderColor="border.100" orientation="vertical" />
        <Flex position="relative" flexBasis="40%" width="40%" maxWidth="40%">
          <Flex w="100%" justifyContent="space-between">
            <Text fontSize="0.8em" margin="2em 1em" color="text.200">
              0:00
            </Text>
            <Flex align="center" mb="1em">
              <Icon
                color="icon.100"
                marginX="0.5em"
                fontSize="1.8em"
                as={TiArrowRepeat}
                cursor="pointer"
              />
              <Icon
                cursor="pointer"
                color="icon.100"
                fontSize="2.2em"
                marginX="0.5em"
                as={BiSkipPrevious}
              />
              <Flex
                _hover={{ boxShadow: "0 0 0 2px #8D00F2" }}
                justifyContent="center"
                alignItems="center"
                bg="brand.100"
                w="2.5em"
                h="2.5em"
                rounded="full"
                cursor="pointer"
                marginX="0.5em"
              >
                <Icon
                  marginLeft="2px"
                  height="80%"
                  w="80%"
                  color="icon.100"
                  as={BsPlayFill}
                  cursor="pointer"
                />
              </Flex>
              <Icon
                cursor="pointer"
                color="icon.100"
                fontSize="2.2em"
                as={BiSkipNext}
                marginX="0.5em"
              />
              <Icon
                cursor="pointer"
                color="icon.100"
                marginX="0.5em"
                fontSize="1.2em"
                as={BsShuffle}
              />
            </Flex>
            <Text fontSize="0.8em" margin="2em 1em" color="text.200">
              4:15
            </Text>
          </Flex>
          <Slider />
        </Flex>
        <Divider borderColor="border" orientation="vertical" />
        <Flex flexBasis="30%" width="30%" maxWidth="30%">
          3
        </Flex>
      </Flex>
    </Box>
  );
};

export default Player;
