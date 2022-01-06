import { Box, Heading, Text, Button, useColorModeValue, Flex, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

import { HomeIcon } from '@chakra-ui/icons'

export default function NotFound () {
  const teal = useColorModeValue('teal.500', 'teal.200')
  return (
      <Flex grow={1} alignItems={'center'} justifyContent={'center'}>
        <Box textAlign="center" py={10} px={6}>
              <Heading
                display="inline-block"
                as="h2"
                size="2xl"
                bgColor={teal}
                backgroundClip="text">
                404
              </Heading>
              <Text fontSize="18px" mt={3} mb={2}>
                Page Not Found
              </Text>
              <Text color={'gray.500'} mb={6}>
                The page you are looking for does not seem to exist...
              </Text>

              <NextLink href='/' passHref>
                <Button
                            variant={'solid'}
                            colorScheme={'teal'}
                            bgGradient="linear(to-r, teal.300, teal.400)"
                            mr={4}
                            leftIcon={HomeIcon}>
                            Back to Home
                          </Button>
              </NextLink>

          </Box>
      </Flex>
  )
}
