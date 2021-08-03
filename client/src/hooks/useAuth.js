import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CodeContext } from "App/App";

const useAuth = () => {
  const code = useContext(CodeContext);
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    axios
      .post("http://localhost:3001/login", {
        code,
      })
      .then((res) => {
        setAccessToken(res?.data?.accessToken);
        setRefreshToken(res?.data?.refreshToken);
        setExpiresIn(res?.data?.expiresIn);
        window.history.pushState({}, null, "/home");
      })
      .catch(() => (window.location = "/login"));
  }, [code]);

  useEffect(() => {
    if (!refreshToken || !expiresIn) return;
    if (refreshToken) {
      const interval = setInterval(() => {
        axios
          .post("http://localhost:3001/refresh", {
            refreshToken,
          })
          .then((res) => {
            setAccessToken(res?.data?.accessToken);
            setExpiresIn(res?.data?.expiresIn);
          })
          .catch(() => (window.location = "/login"));
      }, (expiresIn - 60) * 1000);
      return () => clearInterval(interval);
    }
  }, [expiresIn, refreshToken]);

  return accessToken;
};

export default useAuth;
