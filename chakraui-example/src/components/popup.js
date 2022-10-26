import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  chakra,
  Flex,
  Box,
} from '@chakra-ui/react';

export default function Popup({ close }) {
  return (
    <Modal isOpen onClose={close}>
      <ModalOverlay />

      <ModalContent>
        <Flex pl={3} pt={4}>
          <Flex
            justifyContent={'center'}
            alignItems={'center'}
            h={12}
            w={12}
            rounded="full"
            bg={'red.100'}
            flexShrink={0}
          >
            <chakra.svg
              w={6}
              h={6}
              color={'red.600'}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </chakra.svg>
          </Flex>
          <Box>
            <ModalHeader pt={0}>Example Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </ModalBody>
          </Box>
        </Flex>

        <ModalFooter bg={'blackAlpha.100'}>
          <Button
            onClick={close}
            bg={'white'}
            border={'1px'}
            borderColor={'gray.300'}
          >
            Cancel
          </Button>
          <Button
            onClick={close}
            bg={'red.500'}
            color={'white'}
            border={'1px'}
            _hover={{ bg: 'red.600' }}
          >
            Deactivate
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
