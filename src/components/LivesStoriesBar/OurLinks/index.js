import {
  Flex,
  Link,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import links from 'constants/lives';

const OurLinks = () => (
  <Flex w="100%" flexDirection="column">
    <List d="flex" flexWrap="wrap">
      {links?.map((link) => (
        <ListItem m="0.3em">
          <Link
            color="text.300"
            fontSize="0.8em"
            href={link?.href}
          >
            {link?.title}
          </Link>
        </ListItem>
      ))}
    </List>
    <Text color="text.300" fontSize="0.8em">
      © 2021 Anghami
    </Text>
  </Flex>
);

export default OurLinks;
