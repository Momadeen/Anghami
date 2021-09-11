import { useEffect, useState } from 'react';
import spotifyApi from './spotifyApi';
import useAuth from './useAuth';

const useContent = () => {
  const [content, setContent] = useState({});
  const accessToken = useAuth();

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    (async () => {
      await spotifyApi.setAccessToken(accessToken);
      // New Release in EGYPT
      spotifyApi
        .getNewReleases({
          limit: 20,
          offset: 0,
          country: 'EG',
        })
        .then(
          (data) => {
            setContent((prev) => ({
              ...prev,
              newRelase: data?.body?.albums?.items,
            }));
          },
          (err) => {
            // eslint-disable-next-line no-console
            console.log('Something went wrong!', err);
          }
        );

      // Artists related to Amr Diab
      spotifyApi
        .getArtistRelatedArtists('5abSRg0xN1NV3gLbuvX24M')
        .then(
          (data) => {
            setContent((prev) => ({
              ...prev,
              artists: data?.body?.artists,
            }));
          },
          (err) => {
            // eslint-disable-next-line no-console
            console.log(err);
          }
        );

      spotifyApi
        .getArtistTopTracks('5abSRg0xN1NV3gLbuvX24M', 'EG')
        .then(
          (data) => {
            setContent((prev) => ({
              ...prev,
              tracksEG: data?.body?.tracks,
            }));
          },
          (err) => {
            // eslint-disable-next-line no-console
            console.log('Something went wrong!', err);
          }
        );
    })();
  }, [accessToken]);

  // Moods || Categories

  useEffect(() => {
    spotifyApi.setAccessToken(accessToken);
    spotifyApi
      .getCategories({
        limit: 30,
        offset: 0,
        country: 'EG',
      })
      .then(
        (data) => {
          setContent((prev) => ({
            ...prev,
            moods: data?.body?.categories?.items,
          }));
        },
        (err) => {
          // eslint-disable-next-line no-console
          console.log('Something went wrong!', err);
        }
      );
  }, [accessToken]);

  return content;
};

export default useContent;
