/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import spotifyApi from './spotifyApi';
import useAuth from './useAuth';

const useGetSingleArtist = ({ id }) => {
  const accessToken = useAuth();
  const [artistContent, setArtistContent] = useState([]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    (async () => {
      await spotifyApi.getArtist(id).then(
        data => {
          setArtistContent(prev => ({
            ...prev,
            artist: data?.body
          }));
        },
        err => {
          console.error(err);
        }
      );
      // Get an artist's top tracks
      spotifyApi.getArtistTopTracks(id, 'GB').then(
        data => {
          setArtistContent(prev => ({
            ...prev,
            topTracks: data?.body?.tracks
          }));
        },
        err => {
          console.error(err);
        }
      );

      // Artist Albums
      await spotifyApi.getArtistAlbums(id).then(
        data => {
          setArtistContent(prev => ({
            ...prev,
            albums: data?.body?.items
          }));
          // get last album
          spotifyApi
            .getAlbum(data?.body?.items[0]?.id, 'EG')
            .then(
              lastAlbumData => {
                setArtistContent(prev => ({
                  ...prev,
                  lastAlbum:
                    lastAlbumData?.body?.tracks?.items
                }));
              },
              err => {
                console.error(err);
              }
            );
        },
        err => {
          console.error(err);
        }
      );

      // Artists Related to artist
      spotifyApi.getArtistRelatedArtists(id).then(
        data => {
          setArtistContent(prev => ({
            ...prev,
            artistsRelated: data?.body?.artists
          }));
        },
        err => {
          // eslint-disable-next-line no-console
          console.log(err);
        }
      );
    })();
  }, [id, accessToken, spotifyApi]);

  return artistContent;
};

export default useGetSingleArtist;
