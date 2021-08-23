import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#8D00F2',
    },
    bg: {
      100: '#181818',
      200: '#1B1B1B',
      300: '#272727',
      black: '#000',
      400: '#282828',
    },
    text: {
      100: '#E8E8E8',
      200: '#565656',
      300: '#8a8a8a',
    },
    input: {
      100: '#4C4C4C',
    },
    icon: {
      100: '#E8E8E8',
      200: '#565656',
    },
    border: {
      100: '#303030',
      200: '#1c1c1c',
      search: '#6a6a6a',
    },
    hover: {
      100: '#404040',
      200: '#212121',
    },
    shadow: {
      100: '0 0 17px -5px rgb(0 0 0 / 61%)',
      200: '0 0 0 2px #8D00F2',
    },
    placeholder: '#a8a8a8',
  },
});

export default theme;
