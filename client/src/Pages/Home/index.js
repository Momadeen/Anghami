import { Box, Flex, Text, Image } from '@chakra-ui/react';
import { TrackCard } from 'components/Cards';
import ArtistCard from 'components/Cards/ArtistCard';
import Carousel from 'components/Carousel';
import Helmet from 'components/Helmet';
import useContent from 'hooks/useContent';
import { useHistory } from 'react-router';

const upcoming = [
  {
    href: 'artist/5abSRg0xN1NV3gLbuvX24M/1',
    image:
      'https://amrdiab.net/wp-content/uploads/2020/08/AmrDiabVodafonelive.jpg'
  },
  {
    href: 'artist/6bb9VI1PpPTEmdgcgjTppX/1',
    image:
      'https://angimg.akamaized.net/presets/social/social?id=145368100&title=%D8%AA%D9%83&subtitle=%D9%85%D8%AD%D9%85%D8%AF+%D8%AD%D9%85%D8%A7%D9%82%D9%8A&dominantcolor=b4b4b4'
  },
  {
    href: 'artist/68rvMwPL0yMbYR5cv0pzCR/1',
    image:
      'https://angimg.akamaized.net/presets/social/social?id=60930999&title=%D9%86%D8%A7%D8%B5%D9%8A%D9%81+%D8%B2%D9%8A%D8%AA%D9%88%D9%86+%D8%A7%D9%86%D8%BA%D8%A7%D9%85%D9%8A+%D8%B3%D8%B4%D9%86%D8%B2&subtitle=%D9%86%D8%A7%D8%B5%D9%8A%D9%81+%D8%B2%D9%8A%D8%AA%D9%88%D9%86&dominantcolor=999b9b'
  },
  {
    href: 'artist/6bb9VI1PpPTEmdgcgjTppX/1',
    image:
      'https://see.news/wp-content/uploads/2021/02/maxresdefault-3.jpg'
  }
];

const Home = () => {
  const content = useContent();
  const history = useHistory();
  return (
    <>
      <Helmet title="Anghami - The Sound of Freedom" />
      <Flex
        id="home"
        flexDirection="column"
        w="100%"
        h="100%"
      >
        <Text
          fontWeight="600"
          fontSize="2em"
          color="text.100"
        >
          Explore
        </Text>
        <Flex mt="2em" flexDirection="column">
          <Flex>
            {upcoming?.map(track => (
              <Box
                borderRadius="10px"
                w="18em"
                marginRight="1em"
                height="7em"
                overflow="hidden"
                cursor="pointer"
                onClick={() => history.push(track?.href)}
              >
                <Image
                  objectFit="cover"
                  src={track?.image}
                  _hover={{ transform: 'scale(1.1)' }}
                  transition="0.2s all ease-in-out"
                />
              </Box>
            ))}
          </Flex>
          <Flex flexDirection="column" mt="2em">
            <Text
              fontWeight="600"
              fontSize="1.5em"
              color="text.100"
            >
              New Release
            </Text>
            <Flex mt="1em">
              <Carousel>
                {content?.newRelase?.length
                  ? content?.newRelase?.map(newTrack => (
                    <Box mr="1em">
                      <TrackCard
                        artistID={
                            newTrack?.artists[0]?.id
                          }
                        artist={
                            newTrack?.artists[0]?.name
                          }
                        songTitle={newTrack?.name}
                        songImg={newTrack?.images[1]?.url}
                      />
                    </Box>
                  ))
                  : Array(8).fill(<TrackCard loading />)}
              </Carousel>
            </Flex>
          </Flex>

          <Flex flexDirection="column" mt="2em">
            <Text
              fontWeight="600"
              fontSize="1.5em"
              color="text.100"
            >
              Most Popular Amr Diab
            </Text>
            <Flex mt="1em">
              <Carousel>
                {content?.tracksEG?.length
                  ? content?.tracksEG?.map(trackEg => (
                    <Box mr="1em">
                      <TrackCard
                        artistID={trackEg?.artists[0]?.id}
                        artist={trackEg?.artists[0]?.name}
                        songTitle={trackEg?.name}
                        songImg={
                            trackEg?.album?.images[1]?.url
                          }
                      />
                    </Box>
                  ))
                  : Array(8).fill(<TrackCard loading />)}
              </Carousel>
            </Flex>
          </Flex>
          <Flex flexDirection="column" mt="2em">
            <Text
              fontWeight="600"
              fontSize="1.5em"
              color="text.100"
            >
              Top Arabic Artists
            </Text>
            <Flex mt="1em">
              <Carousel>
                {content?.artists?.map(artist => (
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
