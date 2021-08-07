import SpotifyWebApi from "spotify-web-api-node";

export default new SpotifyWebApi({
  clientId: "40e38ee535784944aec08d2ae67a7281",
  clientSecret: "6722df18357c443bad279c55b1d1b1c2",
  redirectUri: "http://localhost:3000/callback",
});
