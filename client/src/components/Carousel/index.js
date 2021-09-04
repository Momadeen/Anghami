import {
  useCallback,
  useMemo,
  useState,
  useRef
} from 'react';
import { Flex, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  RiArrowDropRightLine,
  RiArrowDropLeftLine
} from 'react-icons/ri';

const Carousel = ({ children }) => {
  const [translate, setTranslate] = useState(0);
  const MotionContainer = motion(Flex);
  const containerRef = useRef();

  const eachCardWidth =
    containerRef?.current?.scrollWidth / children?.length;

  const maxWidth = useMemo(
    () => eachCardWidth * children?.length,
    [children, eachCardWidth]
  );
  const jump = useMemo(
    () => eachCardWidth * 3,
    [eachCardWidth]
  );

  const onClick = useCallback(
    arrow => {
      if (arrow === 'right') {
        if (Math.abs(translate) + jump + 500 > maxWidth) {
          setTranslate(0);
        } else {
          setTranslate(translate - jump);
        }
      } else {
        if (translate === 0) return;
        setTranslate(translate + jump);
      }
    },
    [jump, translate, maxWidth]
  );

  return (
    <Flex w="100%" position="relative" overflow="hidden">
      <Flex w="0" zIndex="100" alignItems="center">
        <MotionContainer
          w="2em"
          h="2em"
          borderRadius="50%"
          bg="bg.100"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => onClick('left')}
          animate={{
            visibility:
              translate === 0 || translate > 0
                ? 'hidden'
                : 'visible'
          }}
        >
          <Icon
            fontSize="2em"
            color="icon.100"
            as={RiArrowDropLeftLine}
          />
        </MotionContainer>
      </Flex>
      <Flex
        transitionDuration="5s"
        transform={`translate3d(${translate}px, 0px,0px)`}
        w="97%"
        transition="transform 330ms ease-in-out"
        id="container"
        ref={containerRef}
      >
        {children}
      </Flex>
      <Flex w="0" zIndex="100" alignItems="center">
        <MotionContainer
          w="2em"
          h="2em"
          borderRadius="50%"
          bg="bg.100"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          onClick={() => onClick('right')}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          animate={{
            visibility:
              Math.abs(translate) >= maxWidth
                ? 'hidden'
                : 'visible'
          }}
        >
          <Icon
            fontSize="2em"
            color="icon.100"
            as={RiArrowDropRightLine}
          />
        </MotionContainer>
      </Flex>
    </Flex>
  );
};

export default Carousel;
