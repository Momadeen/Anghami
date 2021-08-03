import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import useAuth from "./useAuth";

const spotifyApi = new SpotifyWebApi({
  clientId: "40e38ee535784944aec08d2ae67a7281",
});

const useContent = ({ search }) => {
  const [content, setContent] = useState([]);
  const accessToken = useAuth();
  console.log(content);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!search) return setContent([]);
    if (!accessToken) return;

    let cancel = false;

    spotifyApi.searchTracks(search).then((res) => {
      if (cancel) return;
      setContent(
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
    return () => (cancel = true);
  }, [accessToken, search]);

  return content;
};

export default useContent;
