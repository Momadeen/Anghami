import { useState } from 'react';
import { Box, Flex, Icon, Link, Text } from '@chakra-ui/react';
import { BsPlayFill, BsThreeDots } from 'react-icons/bs';
import { Skeleton, SkeletonText } from '@chakra-ui/skeleton';

const TrackCard = ({
  songImg,
  songTitle,
  artist,
  artistID,
  withOutPlay,
  loading,
  ...props
}) => {
  const [showplay, setShowPlay] = useState(false);
  return (
    <Flex flexDirection="column">
      <Link href="#" w="100%" height="100%">
        {loading ? (
          <Flex flexDirection="column" mr="1em">
            <Skeleton
              w={['6em', '8em', '10em', '200px']}
              height={['6em', '8em', '10em', '200px']}
              borderRadius="1em"
            />
            <Flex flexDirection="column" mt="0.3em">
              <SkeletonText mt="4" noOfLines={1} spacing="2" />
              <SkeletonText mt="2" noOfLines={1} w="50%" />
            </Flex>
          </Flex>
        ) : (
          <Box
            w={['6em', '8em', '10em', '200px']}
            height={['6em', '8em', '10em', '200px']}
            position="relative"
            overflow="hidden"
            borderRadius="1em"
            onMouseEnter={() => setShowPlay(true)}
            onMouseLeave={() => setShowPlay(false)}
            {...props}
          >
            <Flex
              h="100%"
              w="100%"
              position="absolute"
              bottom="0"
              right="0"
              left="0"
              zIndex="100"
              d={showplay ? 'block' : 'none'}
            >
              {!withOutPlay ? (
                <>
                  <Flex
                    w="100%"
                    height="90%"
                    alignContent="center"
                    alignItems="flex-end"
                    justifyContent="center"
                    zIndex="999"
                    transition="0.2s all ease-in-out"
                  >
                    <Flex
                      alignContent="center"
                      alignItems="center"
                      justifyContent="center"
                      w="30px"
                      height="30px"
                      bg="brand.100"
                      borderRadius="50%"
                      cursor="pointer"
                      marginRight="1em"
                      _hover={{ transform: 'scale(1.3)' }}
                    >
                      <Icon color="icon.100" as={BsPlayFill} />
                    </Flex>
                    <Flex
                      alignContent="center"
                      alignItems="center"
                      justifyContent="center"
                      w="30px"
                      height="30px"
                      bg="icon.100"
                      borderRadius="50%"
                      cursor="pointer"
                      _hover={{ transform: 'scale(1.3)' }}
                    >
                      <Icon color="icon.200" as={BsThreeDots} />
                    </Flex>
                  </Flex>
                </>
              ) : null}
              <Box
                opacity="0.4"
                position="absolute"
                top="0"
                bg="bg.black"
                h="100%"
                w="100%"
                zIndex="-1"
              />
            </Flex>
            <Box
              w="100%"
              bgImage={`url(${songImg})`}
              bgRepeat="no-repeat"
              bgSize="102%"
              bgPosition="50%"
              h="100%"
              transition="0.4s all ease-in-out"
              transform={showplay && 'scale(1.1) translateX(10px)'}
            />
          </Box>
        )}

        <Flex flexDirection="column" mt="0.3em">
          <Text fontSize="0.8em" color="text.100">
            {songTitle}
          </Text>
          <Text
            href={`/artist/${artistID}`}
            as={Link}
            fontSize="0.8em"
            color="text.200"
          >
            {artist}
          </Text>
        </Flex>
      </Link>
    </Flex>
  );
};

export default TrackCard;
