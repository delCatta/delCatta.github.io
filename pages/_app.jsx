import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Head from "next/head";

// 2. Add your color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

function MyApp({ Component, pageProps }) {
  const gray = useColorModeValue("gray.200", "gray.800");

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Grandiflora+One&family=Salsa&display=swap"
          rel="stylesheet"
        />
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
