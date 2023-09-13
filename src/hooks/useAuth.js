import { useEffect, useState } from 'react';

const useAuth = () => {
  const [accessToken, setAccessToken] = useState();

  const clientId = '40e38ee535784944aec08d2ae67a7281';
  const clientSecret = '6722df18357c443bad279c55b1d1b1c2';

  useEffect(() => {
    (async () => {
      const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
        },
        body: 'grant_type=client_credentials',
      });

      const data = await result.json();
      setAccessToken(data?.access_token);
      return data;
    })();
  }, []);

  return accessToken;
};

export default useAuth;
