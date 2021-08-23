import { Flex, Img, Link } from '@chakra-ui/react';
import Button from 'components/Button';
import logo from 'images/logo.png';

const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=40e38ee535784944aec08d2ae67a7281&response_type=code&redirect_uri=http://localhost:3000/callback&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state';

const Login = () => (
  <Flex
    alignContent="center"
    alignItems="center"
    justifyContent="center"
    h="100vh"
    w="100vw"
    bg="bg.100"
    flexDirection="column"
  >
    <Img
      objectFit="contain"
      w="6em"
      height="6em"
      mb="2em"
      src={logo}
      alt="link"
    />
    <Button p="1.4em 2em" type="primary">
      <Link fontSize="2em" href={AUTH_URL}>
        Login With Anghami
      </Link>
    </Button>
  </Flex>
);

export default Login;
