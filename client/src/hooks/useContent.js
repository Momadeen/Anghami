import { useEffect, useState } from "react";
import spotifyApi from "./spotifyApi";
import useAuth from "./useAuth";

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
      spotifyApi.getNewReleases({ limit: 20, offset: 0, country: "EG" }).then(
        (data) => {
          setContent((prev) => ({
            ...prev,
            newRelase: data?.body?.albums?.items,
          }));
        },
        function (err) {
          console.log("Something went wrong!", err);
        }
      );

      // Artists related to Amr Diab
      spotifyApi.getArtistRelatedArtists("5abSRg0xN1NV3gLbuvX24M").then(
        (data) => {
          setContent((prev) => ({ ...prev, artists: data?.body?.artists }));
        },
        function (err) {
          console.log(err);
        }
      );

      spotifyApi.getArtistTopTracks("5abSRg0xN1NV3gLbuvX24M", "EG").then(
        (data) => {
          setContent((prev) => ({ ...prev, tracksEG: data?.body?.tracks }));
        },
        function (err) {
          console.log("Something went wrong!", err);
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
        country: "EG"
      })
      .then(
        function (data) {
          console.log(data.body);
        },
        function (err) {
          console.log("Something went wrong!", err);
        }
      );
  }, []);

  return content;
};

export default useContent;
