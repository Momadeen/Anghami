import { Flex } from '@chakra-ui/react';
import AlbumsComponent from '../Albums';
import LatestReleases from '../LatestReleases';
import PopularSongs from '../PopularSongs';
import SimilarArtists from '../SimilarArtists';

const All = () => (
  <Flex w="100%" flexDirection="column">
    <LatestReleases />
    <PopularSongs />
    <AlbumsComponent />
    <SimilarArtists />
  </Flex>
);

export default All;
