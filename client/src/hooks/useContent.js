import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import useAuth from "./useAuth";

const spotifyApi = new SpotifyWebApi({
  clientId: "40e38ee535784944aec08d2ae67a7281",
});

const useContent = ({ search }) => {
  const [content, setContent] = useState([]);
  const [myLikedList, setLikedList] = useState([]);
  const accessToken = useAuth();

  /**
   * to get some artists
   * 
   *     spotifyApi.getArtistAlbums("6qqNVTkY8uBg9cP3Jd7DAH").then(
            function (data) {
            console.log("Artist albums", data.body);
        },
        function (err) {
        console.error(err);
        }
          );


   */

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

  // get my liked playlist

  // useEffect(() => {
  //   spotifyApi.setAccessToken(accessToken);

  //   spotifyApi.getMySavedTracks().then(
  //     (data) => {
  //       setLikedList(
  //         data?.body?.items?.map((track) => {
  //           const smallestAlbumImage = track?.track?.album?.images?.reduce(
  //             (smallest, image) => {
  //               if (image?.height < smallest?.height) return image;
  //               return smallest;
  //             },
  //             track?.album?.images[0]
  //           );
  //           console.log(track)
  //           return {
  //             artist: track?.track?.artists[0]?.name,
  //             title: track?.track?.name,
  //             uri: track?.track?.uri,
  //             albumUrl: smallestAlbumImage?.url,
  //           };
  //         })
  //       );
  //     },
  //     (err) => {
  //       console.log("Something went wrong!", err);
  //     }
  //   );
  // }, [accessToken]);

  return content;
};

export default useContent;
