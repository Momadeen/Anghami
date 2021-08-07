import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import useAuth from "./useAuth";

var spotifyApi = new SpotifyWebApi({
  clientId: "40e38ee535784944aec08d2ae67a7281",
  clientSecret: "6722df18357c443bad279c55b1d1b1c2",
  redirectUri: "http://localhost:3000/callback",
});

const useContent = ({ search }) => {
  const [content, setContent] = useState([]);
  const accessToken = useAuth();

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  // for search
  useEffect(() => {
    if (!search) return setContent([]);
    if (!accessToken) return;

    spotifyApi.searchTracks(search).then((res) => {
      setContent(
        res?.body?.tracks?.items?.map((track) => {
          console.log({ track });
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

  // New Release in EGYPT
  // useEffect(() => {
  //   spotifyApi.getNewReleases({ limit: 20, offset: 0, country: "EG" }).then(
  //     function (data) {
  //       console.log(data.body);
  //     },
  //     function (err) {
  //       console.log("Something went wrong!", err);
  //     }
  //   );
  // }, [accessToken]);

  // Moods
  // useEffect(() => {
  //   spotifyApi
  //     .getCategories({
  //       limit: 30,
  //       offset: 0,
  //       country: "SE",
  //       locale: "sv_SE",
  //     })
  //     .then(
  //       function (data) {
  //         console.log(data.body);
  //       },
  //       function (err) {
  //         console.log("Something went wrong!", err);
  //       }
  //     );
  // }, []);

  // Artists related to Amr Diab
  // useEffect(() => {
  //   spotifyApi.getArtistRelatedArtists("5abSRg0xN1NV3gLbuvX24M").then(
  //     function (data) {
  //       console.log(data.body);
  //     },
  //     function (err) {
  //       console.log(err);
  //     }
  //   );
  // }, []);

  return content;
};

export default useContent;
