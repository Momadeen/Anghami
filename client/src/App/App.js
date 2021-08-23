import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { BreakpointProvider } from 'react-socks';
import theme from '../theme';
import './App.css';
import Routes from './routes';

// const code = new URLSearchParams(window.location.search).get("code");

// export const CodeContext = createContext();

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BreakpointProvider>
        <Router>
          <Routes />
        </Router>
      </BreakpointProvider>
    </ChakraProvider>
  );
}

export default App;
