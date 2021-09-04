import { Flex } from '@chakra-ui/react';
import Helmet from 'components/Helmet';
import useGetSingleArtist from 'hooks/useGetSingleArtist';
import React from 'react';
import { useParams } from 'react-router';
import ArtistBar from './components/ArtistBar';
import ArtistContent from './components/ArtistContent';

const Artist = () => {
  const { id } = useParams();
  const { artist } = useGetSingleArtist({ id });

  return (
    <>
      <Helmet title={artist?.name} />
      <Flex
        height="100%"
        w="100%"
      >
        <ArtistBar artist={artist} />
        <ArtistContent />
      </Flex>
    </>
  );
};

export default Artist;
