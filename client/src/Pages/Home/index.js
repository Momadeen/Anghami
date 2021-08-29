import { Box, Flex, Text } from '@chakra-ui/react';
import Card from 'components/Cards';
import ArtistCard from 'components/Cards/ArtistCard';
import Carousel from 'components/Carousel';
import Helmet from 'components/Helmet';
import useContent from 'hooks/useContent';

const Home = () => {
  const content = useContent();
  return (
    <>
      <Helmet title="Anghami - The Sound of Freedom" />
      <Flex id="home" flexDirection="column" w="100%" h="100%">
        <Text fontWeight="600" fontSize="2em" color="text.100">
          Explore
        </Text>
        <Flex flexDirection="column">
          <Flex flexDirection="column" mt="2em">
            <Text fontWeight="600" fontSize="1.5em" color="text.100">
              New Release
            </Text>
            <Flex mt="1em">
              <Carousel>
                {content?.newRelase?.map((newSong) => (
                  <Box mr="1em">
                    <Card
                      artist={newSong?.artists[0]?.name}
                      songTitle={newSong?.name}
                      songImg={newSong?.images[1]?.url}
                    />
                  </Box>
                ))}
              </Carousel>
            </Flex>
          </Flex>

          <Flex flexDirection="column" mt="2em">
            <Text fontWeight="600" fontSize="1.5em" color="text.100">
              Most Popular Amr Diab
            </Text>
            <Flex mt="1em">
              <Carousel>
                {content?.tracksEG?.map((newSong) => (
                  <Box mr="1em">
                    <Card
                      artist={newSong?.artists[0]?.name}
                      songTitle={newSong?.name}
                      songImg={newSong?.album?.images[1]?.url}
                    />
                  </Box>
                ))}
              </Carousel>
            </Flex>
          </Flex>
          <Flex flexDirection="column" mt="2em">
            <Text fontWeight="600" fontSize="1.5em" color="text.100">
              Top Arabic Artists
            </Text>
            <Flex mt="1em">
              <Carousel>
                {content?.artists?.map((artist) => (
                  <Box mr="2em">
                    <ArtistCard artist={artist} />
                  </Box>
                ))}
              </Carousel>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
