import { Box, Flex } from '@chakra-ui/react';
import Carousel from 'components/Carousel';
import useGetSingleArtist from 'hooks/useGetSingleArtist';
import { useParams } from 'react-router';
import LatestReleaseCard from './components/LatestReleaseCard';

const LatestReleases = () => {
  const { id } = useParams();
  const { lastAlbum, artist } = useGetSingleArtist({
    id
  });
  return (
    <Flex mb="2em" w="100%">
      <Carousel>
        {lastAlbum?.map(track => (
          <Box mr="1em">
            <LatestReleaseCard
              src={artist?.images[0]?.url}
              trackName={track?.name}
              releaseDate="Sep 2"
              artist={track?.artists[0]?.name}
            />
          </Box>
        ))}
      </Carousel>
    </Flex>
  );
};

export default LatestReleases;
