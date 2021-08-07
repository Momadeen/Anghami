import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  Input as InputChakra,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import useContent from "hooks/useContent";
import { useEffect, useState } from "react";
import Suggestion from "./Suggestion";

const Input = ({ placeholder, withSuggestion }) => {
  const [search, setSearch] = useState("");

  const content = useContent({ search });

  const [isFocus, setFocus] = useState(false);

  useEffect(() => {
    const input = document.getElementById("input");
    document.addEventListener("mousedown", (e) => {
      if (input.contains(e?.target)) {
        setFocus(true);
      } else {
        setFocus(false);
      }
    });
  }, []);

  return (
    <Flex position="relative" id="input" minW="20em" marginX="2em" flexGrow="1">
      <Flex>
        <form>
          <InputGroup maxWidth="25em" minWidth="20em">
            <InputChakra
              borderRadius="2em"
              h="2em"
              border="1px solid"
              borderColor="border.search"
              outline="none"
              focusBorderColor="none"
              bg="input.100"
              padding=".3em 1em .5em"
              placeholder={placeholder}
              autoComplete="false"
              color="text.100"
              _hover={{ border: "none", outline: "none" }}
              _placeholder={{ color: "placeholder", fontSize: "0.8em" }}
              onChange={(e) => setSearch(e?.target?.value)}
            />
            <InputRightElement width="4.5rem" h="2em">
              <SearchIcon color="icon.100" h="100%" size="sm" />
            </InputRightElement>
          </InputGroup>
        </form>
        {isFocus && withSuggestion ? (
          <Suggestion content={content} setFocus={setFocus} search={search} />
        ) : null}
      </Flex>
    </Flex>
  );
};

export default Input;
