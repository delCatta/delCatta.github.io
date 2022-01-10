import React from 'react';
import Head from 'next/head';
import {
  Flex, useColorModeValue,
} from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  const gray = useColorModeValue('gray.200', 'gray.800');
  return (
    <>
      <Head>
        <title>Diego Cattarinich Clavel</title>
        <meta property="og:title" content="Diego Cattarinich Clavel" />
        <meta name="description" content="Resume and Portfolio. Currently looking for Software Development Internships." />
        <meta property="og:description" content="Resume and Portfolio. Currently looking for Software Development Internships." />
        <meta property="og:image" content="https://me.catta.dev/snow-small.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:url" content="https://me.catta.dev/" />

      </Head>
      <Flex direction="column" minH="100vh" bg={gray}>
        <Navbar />
        <Flex grow={1} alignSelf="center" direction="column" w="full">
          {children}
        </Flex>
        <Footer />
      </Flex>
    </>
  );
}
