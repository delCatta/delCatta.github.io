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

// const Links = ['Home', 'About',"Works", 'Contact'];
const Links = [];

const NavLink = ({ children }) => {
  let href = children.toLowerCase();
  if (children === 'Home') href = '/';
  return (
    <NextLink href={href}>
      <Link
        px={2}
        py={1}
        rounded="md"
        _hover={{
          textDecoration: 'none',
          bg: useColorModeValue('gray.200', 'gray.700'),
        }}
      >
        {children}
      </Link>
    </NextLink>
  );
};

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
      <Flex spacing={8} alignItems="center">
        <NextLink href="/">
          <Link
            // fontFamily={"Grandiflora One"}
            fontSize="3xl"
            fontWeight={100}
          >
            me.catta.dev
          </Link>
        </NextLink>
        <Flex as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
          {Links.map((link) => (
            <NavLink key={link}>{link}</NavLink>
          ))}
        </Flex>
      </Flex>
      <Flex alignItems="center">
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
