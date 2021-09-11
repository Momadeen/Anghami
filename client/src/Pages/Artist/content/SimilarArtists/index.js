import { Box, Flex } from '@chakra-ui/react';
import { ArtistCard } from 'components/Cards';
import useGetSingleArtist from 'hooks/useGetSingleArtist';
import { useParams } from 'react-router';

const SimilarArtists = () => {
  const { id } = useParams();
  const { artistsRelated } = useGetSingleArtist({ id });
  return (
    <Flex
      flexDirection="row"
      flexWrap="wrap"
      mb="2em"
      w="100%"
    >
      {artistsRelated?.map(artist => (
        <Box marginRight="1em" mb="1em">
          <ArtistCard artist={artist} />
        </Box>
      ))}
    </Flex>
  );
};

export default SimilarArtists;
