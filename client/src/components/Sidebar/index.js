import { Flex, Img, List, ListItem } from "@chakra-ui/react";

import logo from "images/logo.png";

import explore from "images/explore.png";
import exploreSelected from "images/exploreSelected.png";
import dj from "images/personaldj.png";
import djSelected from "images/personaldjSelected.png";
import podcasts from "images/podcasts.png";
import podcastsSelected from "images/podcastsSelected.png";
import library from "images/library.png";
import librarySelected from "images/librarySelected.png";
import upload from "images/upload.png";
import uploadSelected from "images/uploadSelected.png";
import { Link, useLocation } from "react-router-dom";
import Item from "./item";

const links = [
  { title: "Explore", img: explore, active: exploreSelected, url: "/home" },
  {
    title: "Mood & Genre",
    img: dj,
    active: djSelected,
    url: "/personal-dj",
  },
  {
    title: "Podcasts",
    img: podcasts,
    active: podcastsSelected,
    url: "/podcasts",
  },
  {
    title: "Your Library",
    img: library,
    active: librarySelected,
    url: "/mymusic",
  },
  {
    title: "Upload your music",
    img: upload,
    active: uploadSelected,
    url: "/upload-music",
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <Flex
      position="fixed"
      top="0"
      bottom="0"
      w="6em"
      left="0"
      bg="bg.300"
      borderRight="1px solid"
      borderColor="border.100"
      flexDirection="column"
      flexWrap="nowrap"
    >
      <List>
        <ListItem
          as={Link}
          d="flex"
          flexDirection="column"
          alignContent="center"
          padding="1em"
          alignItems="center"
          to="/home"
        >
          <Img
            objectFit="contain"
            w="3.5em"
            height="3.5em"
            src={logo}
            alt="link"
          />
        </ListItem>
        {links?.map((link) => (
          <Item link={link} pathname={pathname} />
        ))}
      </List>
    </Flex>
  );
};

export default Sidebar;
