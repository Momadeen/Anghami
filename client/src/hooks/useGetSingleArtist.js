import { useMemo } from 'react';
import useContent from './useContent';

const useGetSingleArtist = ({ id }) => {
  const content = useContent();
  const getTheArtist = useMemo(
    () => content?.artists?.filter((artist) => artist?.id === id)[0],
    [content]
  );

  return { artist: getTheArtist };
};

export default useGetSingleArtist;
