// import img1 from "images/lives/1.jfif";
import { Flex, Text } from '@chakra-ui/layout';
import Avatar from 'components/Avatar';
import img2 from 'images/lives/2.jfif';
import img3 from 'images/lives/3.jfif';
import img4 from 'images/lives/4.jfif';
import img5 from 'images/lives/5.jfif';
import img6 from 'images/lives/6.jfif';
import Container from '../Container';

const stories = [
  {
    img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F04%2Few_resize_1920x1080-2000.jpg',
    name: 'Mohammed Hassanien',
    time: '2mins',
  },
  { img: img2, name: 'Hesham Madboly', time: '16h' },
  { img: img3, name: 'Kassab', time: '18h' },
  { img: img4, name: 'Topaz', time: '9mins' },
  { img: img5, name: 'Tarek Gbr', time: '20mins' },
  { img: img6, name: 'Rostom', time: '1day' },
  {
    img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F04%2Few_resize_1920x1080-2000.jpg',
    name: 'Mohammed Hassanien',
    time: '2mins',
  },
  {
    img: 'https://www.tvinsider.com/wp-content/uploads/2021/05/lucifer-515-tom-ellis-1014x570.jpg',
    name: 'Hesham Madboly',
    time: '16h',
  },
  {
    img: 'https://www.biography.com/.image/t_share/MTE5NTU2MzE2NjUyOTk2MTA3/9th-annual-ves-awards---red-carpet.jpg',
    name: 'Kassab',
    time: '18h',
  },
  { img: img4, name: 'Topaz', time: '9mins' },
  {
    img: 'https://images.pexels.com/photos/3170635/pexels-photo-3170635.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Tarek Gbr',
    time: '20mins',
  },
  { img: img6, name: 'Rostom', time: '1day' },
  {
    img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F04%2Few_resize_1920x1080-2000.jpg',
    name: 'Mohammed Hassanien',
    time: '2mins',
  },
  {
    img: 'https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    name: 'Hesham Madboly',
    time: '16h',
  },
  { img: img3, name: 'Kassab', time: '18h' },
  { img: img4, name: 'Topaz', time: '9mins' },
  { img: img5, name: 'Tarek Gbr', time: '20mins' },
  { img: img6, name: 'Rostom', time: '1day' },
];

const Stories = () => (
  <Container title="Stories">
    <Flex
      flexDirection="column"
      overflowX="hidden"
      overflowY="auto"
      willChange="scroll-postion"
      height="15em"
    >
      {stories?.map((live) => (
        <Flex
          my="0.1em"
          alignItems="center"
          cursor="pointer"
          w="100%"
          padding="0.2em"
        >
          <Avatar hasStories w="3em" h="3em" src={live?.img} />
          <Flex flexDirection="column" marginLeft="0.8em">
            <Text fontWeight="500" fontSize="0.9em" color="text.100">
              {live?.name}
            </Text>
            <Text fontWeight="500" fontSize="0.6em" color="text.200">
              {live?.time}
            </Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  </Container>
);

export default Stories;
