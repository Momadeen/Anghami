import { Flex, Text } from "@chakra-ui/react";
import Card from "components/Cards";
import ArtistCard from "components/Cards/ArtistCard";
import useContent from "hooks/useContent";

const Home = () => {
  const content = useContent();
  console.log(content);
  return (
    <Flex flexDirection="column">
      <Text fontWeight="600" fontSize="2em" color="text.100">
        Explore
      </Text>
      <Flex flexDirection="column" mt="2em">
        <Text fontWeight="600" fontSize="1.5em" color="text.100">
          New Release
        </Text>
        <Flex mt="1em">
          {content?.newRelase?.map((newSong) => (
            <Card
              artist={newSong?.artists[0]?.name}
              songTitle={newSong?.name}
              songImg={newSong?.images[1]?.url}
            />
          ))}
        </Flex>
      </Flex>
      <Flex flexDirection="column" mt="2em">
        <Text fontWeight="600" fontSize="1.5em" color="text.100">
          Most Popular Amr Diab
        </Text>
        <Flex mt="1em">
          {content?.tracksEG?.map((newSong) => (
            <Card
              artist={newSong?.artists[0]?.name}
              songTitle={newSong?.name}
              songImg={newSong?.album?.images[1]?.url}
            />
          ))}
        </Flex>
      </Flex>
      <Flex flexDirection="column" mt="2em">
        <Text fontWeight="600" fontSize="1.5em" color="text.100">
          Top Arabic Artists
        </Text>
        <Flex mt="1em">
          {content?.artists?.map((artist) => (
            <ArtistCard
              artistImg={artist?.images[1]?.url}
              artistName={artist?.name}
              followers={artist?.followers?.total}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
