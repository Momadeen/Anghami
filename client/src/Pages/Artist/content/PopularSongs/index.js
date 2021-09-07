import { Divider, Flex, Text } from '@chakra-ui/react';
import useGetSingleArtist from 'hooks/useGetSingleArtist';
import { useParams } from 'react-router';
import TrackRow from './components/TrackRow';

const PopularSongs = () => {
  const { id } = useParams();
  const { topTracks } = useGetSingleArtist({
    id
  });
  console.log(topTracks);
  return (
    <Flex flexDirection="column" w="100%">
      <Text
        fontWeight="700"
        color="text.100"
        fontSize="1.5em"
      >
        Popluar Songs
      </Text>
      <Flex w="100%" mt="1em" flexDirection="column">
        {topTracks?.map(topTrack => (
          <>
            <TrackRow track={topTrack} />
            <Divider my="0.5em" borderColor="border.100" />
          </>
        ))}
      </Flex>
    </Flex>
  );
};

export default PopularSongs;
