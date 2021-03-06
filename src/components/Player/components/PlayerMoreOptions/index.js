import { Divider, Flex, Icon, Text } from '@chakra-ui/react';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { MdDevicesOther, MdOndemandVideo } from 'react-icons/md';
import { VscSymbolKeyword } from 'react-icons/vsc';
import { FiVolume1, FiVolume2, FiVolume } from 'react-icons/fi';
import { RiArrowDropUpLine } from 'react-icons/ri';

import VolumeSlider from './VolumeSlider';

const options = [
  { icon: VscSymbolKeyword, title: 'lyrics' },
  { icon: MdOndemandVideo, title: 'video' },
  { icon: RiArrowDropUpLine, title: 'queue' },
];

const PlayMoreOptions = () => {
  const [volumePer, setVolumePer] = useState(50);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  const onVolumeClick = useCallback(() => {
    if (volumePer !== 0) setVolumePer(0);
    if (volumePer === 0) setVolumePer(50);
  }, [volumePer]);

  useEffect(() => {
    const input = document.getElementById('inputVolume');

    input.addEventListener('mouseover', () => {
      setShowVolumeSlider(true);
    });
    input.addEventListener('mouseleave', () => {
      setShowVolumeSlider(false);
    });
  }, []);

  const VolumeIcon = useMemo(() => {
    if (volumePer === 0) return FiVolume;
    if (volumePer >= 1 && volumePer < 50) return FiVolume1;
    if (volumePer >= 50) return FiVolume2;
  }, [volumePer]);

  return (
    <Flex
      marginX="0.5em"
      flexBasis={['0%', '0%', '0%', '30%']}
      width={['0%', '0%', '0%', '30%']}
      maxWidth={['0%', '0%', '0%', '30%']}
      paddingY="1em"
    >
      <Flex
        justifyContent="space-between"
        height="100%"
        w="100%"
        alignItems="center"
      >
        <Flex marginX="1.5vw">
          <Icon
            fontSize="1.2vw"
            color="icon.100"
            as={MdDevicesOther}
            cursor="pointer"
          />
        </Flex>
        <Divider borderColor="white" orientation="vertical" />
        <Flex id="inputVolume" marginX="2em" position="relative" w="2em">
          <Icon
            onClick={onVolumeClick}
            as={VolumeIcon}
            color="icon.100"
            fontSize="1.2vw"
            cursor="pointer"
          />
          {showVolumeSlider && (
            <VolumeSlider setVolumePer={setVolumePer} value={volumePer} />
          )}
        </Flex>
        <Divider borderColor="white" orientation="vertical" />
        <Flex h="100%" alignItems="center">
          {options?.map((option, i) => (
            <>
              <Flex
                borderRadius="8px"
                _hover={{ bg: 'hover.100' }}
                marginX="0.5em"
                padding="0.6em"
                cursor="pointer"
              >
                {option?.title === 'queue' ? (
                  <>
                    <Text
                      fontWeight="600"
                      fontSize="0.7vw"
                      color="text.100"
                      textTransform="uppercase"
                    >
                      {option?.title}
                    </Text>
                    <Icon
                      fontSize="1.1vw"
                      color="icon.100"
                      marginX="0.3em"
                      as={option?.icon}
                    />
                  </>
                ) : (
                  <>
                    <Icon
                      fontSize="1.1vw"
                      color="icon.100"
                      cursor="pointer"
                      marginX="0.3em"
                      as={option?.icon}
                    />
                    <Text
                      fontWeight="600"
                      fontSize="0.7vw"
                      color="text.100"
                      textTransform="uppercase"
                    >
                      {option?.title}
                    </Text>
                  </>
                )}
              </Flex>
              {i !== 2 && (
                <Divider borderColor="white" orientation="vertical" />
              )}
            </>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PlayMoreOptions;
