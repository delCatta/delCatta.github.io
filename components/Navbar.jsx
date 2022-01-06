/* eslint-disable react-hooks/rules-of-hooks */

import { ReactNode } from 'react'
import NextLink from 'next/link'

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue, useColorMode,
  Stack,
  Image
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, ExternalLinkIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'

// const Links = ['Home', 'About',"Works", 'Contact'];
const Links = []

const NavLink = ({ children }) => {
  let href = children.toLowerCase()
  if (children == 'Home') href = '/'
  return (
    <NextLink href={href}>
      <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
          textDecoration: 'none',
          bg: useColorModeValue('gray.200', 'gray.700')
        }}>
        {children}
      </Link>
    </NextLink>
  )
}

export default function withAction() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const gray = useColorModeValue('gray.100', 'gray.900')
  const imagebg = useColorModeValue('gray.300', 'gray.600')

  return (
    <>
      <Flex bg={gray} h={16} p={4} alignSelf={'center'} shadow={'lg'} w={'full'} justifyContent={'space-between'} position={'fixed'} zIndex={10}>
        {/* <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            /> */}
        <Flex spacing={8} alignItems={'center'}>
          <NextLink href={'/'}>
            <Link>
              <Image
                borderRadius='20%'
                objectFit='cover'
                bg={imagebg}
                boxSize='50px'
                src="icon.png"
                alt='Diego Cattarinich'
              /></Link>
          </NextLink>
          <Flex
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Flex>
        </Flex>
        <Flex alignItems={'center'}>
          <Button onClick={toggleColorMode} size={'md'}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Flex>

      {/* {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null} */}
    </>
  )
}
