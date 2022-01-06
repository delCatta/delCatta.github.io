import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout';
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={extendTheme({ config })}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
export default MyApp