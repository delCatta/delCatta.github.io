import React from 'react'
import Head from 'next/head'
import {
  Flex, Spacer, VStack, Container, useColorModeValue, Box
} from '@chakra-ui/react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout ({ children }) {
  const gray = useColorModeValue('gray.200', 'gray.800')
  return (
    <>
      <Head>
        <title>Diego</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      </Head>
      <Flex direction="column" minH={'100vh'} bg={gray}>
        <Navbar />
        <Flex grow={1} alignSelf={'center'} direction="column" w={'full'}>
          {children}
        </Flex>
        <Footer></Footer>
      </Flex>
    </>
  )
}
