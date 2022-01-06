import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'

export default function Success () {
  return (
    <Box mx={{ base: 0, md: 10 }}
        mt={{ base: 5, md: 0 }}
        flex={1}
        bg={useColorModeValue('white', 'gray.700')}
        borderRadius="lg"
        p={8}
        color={useColorModeValue('gray.700', 'whiteAlpha.900')}
        shadow="base">
    <Box textAlign="center" py={10} px={6}>
      <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Email Sent!
      </Heading>
      <Text color={'gray.500'}>
        Thanks for reaching out! I will reply as soon as possible.
      </Text>
    </Box>
    </Box>
  )
}
