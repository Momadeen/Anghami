import { Divider, Flex, Icon, List, ListItem, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Link as LinkChakra } from "@chakra-ui/react";
import { Switch } from "@chakra-ui/react";
import { IoCloudyNightOutline } from "react-icons/io5";

const Options = ({ optionsList }) => (
  <Flex
    position="absolute"
    willChange="transform"
    top="0.4em"
    right="0"
    left="0"
    padding=".5em 0 0"
    border="1px solid"
    borderColor="border.200"
    minH="5em"
    width="14em"
    boxShadow="xs"
    bg="bg.300"
    transform="translate(-187px, 28px)"
    borderRadius="10px"
    flexDirection="column"
  >
    <Flex flexDirection="column" p="1em">
      <Text color="text.100" fontWeight="700">
        Mohammed Hassanien
      </Text>
      <LinkChakra
        color="text.300"
        as={Link}
        style={{ textDecoration: "none" }}
        _hover={{ fontWeight: "600" }}
        fontSize="14px"
      >
        View Profile
      </LinkChakra>
    </Flex>
    <Divider borderColor="border.200" borderWidth="1px" />
    <List>
      {optionsList?.anghamiList?.map((list) => (
        <ListItem
          p="0.2em 1em"
          _hover={{ bg: "hover.200" }}
          mb="10px"
          color="text.100"
        >
          <LinkChakra _hover={{ fontWeight: "600" }} fontSize="14px">
            {list?.name}
          </LinkChakra>
        </ListItem>
      ))}
    </List>
    <Divider borderColor="border.200" borderWidth="1px" />
    <List>
      {optionsList?.accountList?.map((list) => (
        <>
          <ListItem
            p="0.2em 1em"
            _hover={{ bg: "hover.200" }}
            my="5px"
            color="text.100"
          >
            {list?.icon}
            <LinkChakra _hover={{ fontWeight: "600" }} fontSize="14px">
              {list?.name}
            </LinkChakra>
          </ListItem>
          <Divider borderColor="border.200" borderWidth="1px" />
        </>
      ))}
    </List>
    <Flex p="0.8em 1em" w="100%" justifyContent="space-between">
      <Flex alignItems="center">
        <Icon color="icon.100" marginRight="0.5em" as={IoCloudyNightOutline} />
        <Text color="text.100" mb="0" fontSize="14px">
          Dark mode
        </Text>
      </Flex>

      <Switch colorScheme="pink" defaultChecked />
    </Flex>
  </Flex>
);

export default Options;
