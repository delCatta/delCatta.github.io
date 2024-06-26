import React from 'react';
import NextLink from 'next/link';

import {
  Flex,
  Link,
  Button,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function withAction() {
  const { colorMode, toggleColorMode } = useColorMode();
  const gray = useColorModeValue('gray.100', 'gray.900');

  return (
    <Flex
      as="header"
      backgroundColor="rgba(255, 255, 255, 0.8)"
      backdropFilter="saturate(180%) blur(5px)"
      bg={gray}
      h={16}
      p={4}
      alignSelf="center"
      shadow="lg"
      w="full"
      justifyContent="space-between"
      zIndex={20}
      position="fixed"
      top={0}
      left={0}
      right={0}
    >
      {/* <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            /> */}
      <Flex
        spacing={8}
        alignItems="center"
        justifyContent="space-between"
        maxW="7xl"
        width="full"
        mx="auto"
      >
        <NextLink href="/">
          <Link
            // fontFamily={"Grandiflora One"}
            fontSize="3xl"
            fontWeight={100}
          >
            me.catta.dev
          </Link>
        </NextLink>
        <Button onClick={toggleColorMode} size="md">
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
    </Flex>

  /* { {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null} } */
  );
}
