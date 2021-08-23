import { Flex, Text } from '@chakra-ui/react';
import Button from 'components/Button';
import { IoMdRefresh } from 'react-icons/io';

const Container = ({ title, children }) => (
  <Flex
    flexDirection="column"
    justifyContent="flex-start"
    padding="0.5em"
    borderRadius="0.5em"
    bg="bg.100"
    w="100%"
    mb=".3em"
  >
    <Flex
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Text
        fontWeight="700"
        fontSize="0.8em"
        color="text.100"
      >
        {title}
      </Text>
      {title === 'Stories' && (
        <Button
          IconName={IoMdRefresh}
          borderRadius="1em"
          type="ghost"
        >
          Refresh
        </Button>
      )}
    </Flex>
    <Flex mt="1em" flexDirection="column">
      {children}
    </Flex>
  </Flex>
);

export default Container;
