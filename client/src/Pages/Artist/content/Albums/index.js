import { Flex } from '@chakra-ui/react';
import { TrackCard } from 'components/Cards';
import useGetSingleArtist from 'hooks/useGetSingleArtist';
import { useParams } from 'react-router';

const AlbumsComponent = () => {
  const { id } = useParams();
  const { albums } = useGetSingleArtist({ id });

  return (
    <Flex
      flexDirection="row"
      flexWrap="wrap"
      mb="2em"
      w="100%"
    >
      {albums?.map(album => (
        <TrackCard
          marginBottom="1em"
          w={['50%', '50%', '50%', '25%']}
          artistID={album?.artists[0].id}
          artist={album?.artists[0].name}
          songTitle={album?.name}
          songImg={album?.images[1]?.url}
        />
      ))}
    </Flex>
  );
};

export default AlbumsComponent;
