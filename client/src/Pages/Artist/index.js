import { Flex, Grid } from '@chakra-ui/react';
import Helmet from 'components/Helmet';
import useGetSingleArtist from 'hooks/useGetSingleArtist';
import React from 'react';
import { useParams } from 'react-router';
import ArtistBar from './components/ArtistBar';

const Artist = () => {
  const { id } = useParams();
  const { artist } = useGetSingleArtist({ id });
  console.log(artist);

  return (
    <>
      <Helmet title={artist?.name} />
      <Grid height="100%" w="100%" templateColumns="1fr 3fr">
        <ArtistBar artist={artist} />
        <Flex>hello2</Flex>
      </Grid>
    </>
  );
};

export default Artist;
