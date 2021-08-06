import { useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { CodeContext } from "App/App";

const useAuth = () => {
  const code = useContext(CodeContext);
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  // const cookies = useMemo(() => {
  //   const allCookies = decodeURIComponent(document.cookie)?.split(";");
  //   const accessTokenCookie = allCookies[1]?.split("accessToken=")[1];

  //   return accessTokenCookie;
  // }, []);

  const clientId = "40e38ee535784944aec08d2ae67a7281";
  const clientSecret = "6722df18357c443bad279c55b1d1b1c2";

  useEffect(() => {
    (async () => {
      const result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
        },
        body: "grant_type=client_credentials",
      });

      const data = await result.json();
      setAccessToken(data?.access_token);
      setRefreshToken(data?.refreshToken);
      setExpiresIn(data?.expires_in);
      window.history.pushState({}, null, "/home");
      return data;
    })();
  }, []);

  // to get access token with code

  // useEffect(() => {
  //   axios
  //     .post("http://localhost:3001/login", {
  //       code,
  //     })
  //     .then((res) => {
  //       setAccessToken(res?.data?.accessToken);
  //       setRefreshToken(res?.data?.refreshToken);
  //       setExpiresIn(res?.data?.expiresIn);
  //       window.history.pushState({}, null, "/home");
  //       document.cookie = `accessToken=${res?.data?.accessToken}`;
  //       document.cookie = `code=${code}`;
  //     })
  //     .catch(() => (window.location = "/login"));
  // }, [code]);

  // get refresh token

  // useEffect(() => {
  //   if (!refreshToken || !expiresIn) return;
  //   if (refreshToken) {
  //     const interval = setInterval(() => {
  //       axios
  //         .post("http://localhost:3001/refresh", {
  //           refreshToken,
  //         })
  //         .then((res) => {
  //           setAccessToken(res?.data?.accessToken);
  //           setExpiresIn(res?.data?.expiresIn);
  //         })
  //         .catch(() => (window.location = "/login"));
  //     }, (expiresIn - 60) * 1000);
  //     return () => clearInterval(interval);
  //   }
  // }, [expiresIn, refreshToken]);

  return accessToken;
};

export default useAuth;
