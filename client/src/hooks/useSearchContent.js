import { useEffect, useState } from "react";
import spotifyApi from "./spotifyApi";
import useAuth from "./useAuth";

const useSearchContent = ({ search }) => {
  const [searchContent, setSearchContent] = useState([]);
  const accessToken = useAuth();

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  // for search
  useEffect(() => {
    if (!search) return setSearchContent([]);
    if (!accessToken) return;

    spotifyApi.searchTracks(search).then((res) => {
      setSearchContent(
        res?.body?.tracks?.items?.map((track) => {
          const smallestAlbumImage = track?.album?.images?.reduce(
            (smallest, image) => {
              if (image?.height < smallest?.height) return image;
              return smallest;
            },
            track?.album?.images[0]
          );

          return {
            artist: track?.artists[0]?.name,
            title: track?.name,
            uri: track?.uri,
            albumUrl: smallestAlbumImage?.url,
          };
        })
      );
    });
  }, [accessToken, search]);

  return searchContent;
};

export default useSearchContent;
