import React from 'react';
import {
  ChakraProvider,
  extendTheme,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import Head from 'next/head';
import Navbar from '../components/Navbar';

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

function MyApp({ Component, pageProps }) {
  const gray = useColorModeValue('gray.200', 'gray.800');

  return (
    <>
      <Head>
        <title>Diego Cattarinich Clavel</title>
        <meta property="og:title" content="Diego Cattarinich Clavel" />
        <meta
          name="description"
          content="Resume and Portfolio. Currently looking for Software Development Internships."
        />
        <meta
          property="og:description"
          content="Resume and Portfolio. Currently looking for Software Development Internships."
        />
        <meta property="og:image" content="https://me.catta.dev/me.jpeg" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:url" content="https://me.catta.dev/" />
      </Head>
      <ChakraProvider theme={extendTheme({ config })} bg={gray}>
        <Flex direction="column">
          <Navbar />
          <Flex grow={1} alignSelf="center" direction="column" w="full">
            <Component {...pageProps} />
          </Flex>
        </Flex>
      </ChakraProvider>
    </>
  );
}
export default MyApp;
