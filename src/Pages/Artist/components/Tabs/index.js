import { Box, Flex, Text } from '@chakra-ui/react';
import { useCallback, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router';

const tabs = [
  { title: 'All', id: '1', status: 'all' },
  { title: 'Latest Releases', id: '2', status: 'latest' },
  { title: 'Popular Songs', id: '3', status: 'popular' },
  { title: 'Albums', id: '4', status: 'albums' },
  { title: 'Similar Artists', id: '5', status: 'artists' },
];

const Tabs = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const onClickTab = useCallback((id) => {
    const path = pathname.split('/');
    const link = `/${path[1]}/${path[2]}/${id}`;
    history.push(link);
  }, []);

  const ActiveTab = useMemo(() => {
    const currentTab = pathname.split('/')[3];
    return currentTab;
  }, [pathname]);

  return (
    <Flex flexDirection="row">
      {tabs?.map((tab) => (
        <Box
          onClick={() => onClickTab(tab?.id)}
          borderRadius="5px"
          padding="5px 15px"
          marginRight="15px"
          bg={ActiveTab === tab?.id ? '#fff' : 'bg.400'}
          cursor="pointer"
        >
          <Text fontSize="0.9em" fontWeight={ActiveTab === tab?.id && '500'} color={ActiveTab === tab?.id ? '#000' : 'text.200'}>
            {tab?.title}
          </Text>
        </Box>
      ))}
    </Flex>
  );
};

export default Tabs;
