import { ChakraProvider } from "@chakra-ui/react";
import { createContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "../theme";
import "./App.css";
import Routes from "./routes";

const code = new URLSearchParams(window.location.search).get("code");
export const CodeContext = createContext();

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CodeContext.Provider value={code}>
        <Router>
          <Routes />
        </Router>
      </CodeContext.Provider>
    </ChakraProvider>
  );
}

export default App;
