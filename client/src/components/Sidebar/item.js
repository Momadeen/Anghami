import { useMemo, useState } from 'react';
import { Img, ListItem, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Item = ({ pathname, link }) => {
  const [isHover, setHover] = useState(false);
  const isActive = useMemo(
    () => pathname === link?.url,
    [link?.url, pathname],
  );
  return (
    <ListItem
      as={Link}
      d="flex"
      flexDirection="column"
      alignContent="center"
      padding="0.59em"
      marginX="0.2em"
      marginY="1em"
      alignItems="center"
      bg={isActive && 'hover.100'}
      borderRadius="10px"
      to={link?.url}
      _hover={{ bg: 'hover.100' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Img
        objectFit="cover"
        w="1.2em"
        height="1.2em"
        src={isActive || isHover ? link?.active : link?.img}
        alt="link"
        mb="5px"
      />
      <Text
        textAlign="center"
        fontSize="0.75em"
        d="block"
        color={
          isActive || isHover ? 'text.100' : 'text.200'
        }
        fontWeight={isActive || isHover ? '700' : '600'}
      >
        {link?.title}
      </Text>
    </ListItem>
  );
};

export default Item;
