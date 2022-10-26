import {
  VStack,
  Box,
  Button,
  Flex,
  Container,
  Heading,
  Image,
  Text,
  Grid,
  chakra,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

import { pulse } from '../animations';
import Luffy from '../84463.jpg';

import { motion, isValidMotionProp } from 'framer-motion';
import Popup from './popup';

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and the children prop to be forwarded.
   * All other chakra props not matching the motion props will still be forwarded.
   */
  shouldForwardProp: prop => isValidMotionProp(prop) || prop === 'children',
});

const GRID_DATA = [
  {
    title: 'Super Duper Title',
    img: Luffy,
  },
  {
    title: 'Super Duper Title 2',
    img: Luffy,
  },
  {
    title: 'Super Duper Title 3',
    img: Luffy,
  },
  {
    title: 'Super Duper Title 4',
    img: Luffy,
  },
  {
    title: 'Super Duper Title 5',
    img: Luffy,
  },
];

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxW={'full'} p={0} h={'100vh'}>
      <Box
        bgColor={'gray.400'}
        w="100%"
        h={24}
        display="flex"
        alignItems={'center'}
        shadow={'md'}
      >
        <Button
          ml={10}
          color={'white'}
          bgColor={'purple.500'}
          size="sm"
          _hover={{ bg: 'purple.700' }}
          onClick={onOpen}
        >
          Open Popup
        </Button>
      </Box>

      <Flex h={'full'}>
        <Box bg={'red.200'} w={48} textAlign="center">
          <Heading fontSize={'xl'} my={14}>
            Some Title
          </Heading>

          <VStack spacing={6}>
            <Button
              bg={'red.500'}
              color="white"
              size="sm"
              animation={`${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`}
              _hover={{
                bg: 'red.500',
                borderBottom: '2px',
                borderColor: 'red.700',
              }}
            >
              Option One
            </Button>

            <ChakraBox
              animate={{
                translateY: ['-25%', '0%', '-25%'],
                animationTimingFunction: [
                  'cubic-bezier(0.8,0,1,1)',
                  'cubic-bezier(0,0,0.2,1)',
                  'cubic-bezier(0.8,0,1,1)',
                ],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              bg={'pink.500'}
              color="white"
              size="sm"
              px={2}
              py={1}
              fontWeight="semibold"
              borderRadius={'md'}
              _hover={{
                bg: 'pink.500',
                borderBottom: '2px',
                borderColor: 'pink.700',
              }}
            >
              Option One
            </ChakraBox>
            <Button
              bg={'orange.500'}
              color="white"
              size="sm"
              _hover={{
                bg: 'orange.500',
                borderBottom: '2px',
                borderColor: 'orange.700',
              }}
            >
              Option One
            </Button>
          </VStack>
        </Box>

        <Box flex="1" m={4}>
          <Box
            border={'2px'}
            borderColor={'green.100'}
            shadow={'lg'}
            borderRadius="md"
            p={2}
          >
            <Flex justifyItems={'center'} alignItems={'center'}>
              <Text flexShrink={1}>{text}</Text>
              <Image
                display={{ base: 'none', md: 'inline' }}
                src={Luffy}
                // w={'full'}
                // h={'full'}
                borderRadius="full"
                flexShrink={0}
                w={40}
                h={40}
              />
            </Flex>

            <Button
              bg={'green.400'}
              color="white"
              w={'full'}
              size={'xs'}
              mt={10}
              fontSize="md"
              fontWeight={'bold'}
              _hover={{}}
            >
              Join Now
            </Button>
          </Box>

          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            }}
            gap={4}
            mt={20}
            placeItems={'center'}
          >
            {GRID_DATA.map(data => (
              <Box
                border={'1px'}
                shadow={'lg'}
                w={'fit-content'}
                _hover={{ transform: 'scale(1.1)' }}
                cursor={'crosshair'}
              >
                <Image src={data.img} w={48} m={0} />
                <Heading fontSize="medium" textAlign="center" py={2}>
                  {data.title}
                </Heading>
              </Box>
            ))}
          </Grid>
        </Box>
      </Flex>

      {isOpen && <Popup close={onClose} />}
    </Container>
  );
}

const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
