import React, { useState } from 'react';

import {
  AiFillHeart,
  AiOutlineCloudDownload,
  AiOutlineShareAlt,
  AiOutlineHeart,
} from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useCurrentWidth } from 'react-socks';
import { Flex, Text } from '@chakra-ui/layout';
import { Img } from '@chakra-ui/image';
import Icon from '@chakra-ui/icon';

const TrackInfo = () => {
  const [like, setLike] = useState(false);
  const onClickLike = () => setLike((prev) => !prev);

  const width = useCurrentWidth();
  return (
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
            fontSize={['0.7em', '0.7em', '0.8em', '0.9em']}
            color="text.100"
            fontWeight="600"
          >
            Zayaha Meen
          </Text>
          <Text
            fontSize={['0.6em', '0.6em', '0.7em', '0.8em']}
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
  );
};

export default TrackInfo;
