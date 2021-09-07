import { Flex } from '@chakra-ui/react';
import LatestReleases from '../LatestReleases';
import PopularSongs from '../PopularSongs';

const All = () => (
  <Flex w="100%" flexDirection="column">
    <LatestReleases />
    <PopularSongs />
  </Flex>
);

export default All;
