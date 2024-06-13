import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  SiFlutter,
  SiNextdotjs,
  SiRubyonrails,
} from 'react-icons/si';

import React from 'react';

const Feature = ({ text, icon, iconBg }) => (
  <Stack direction="row" align="center">
    <Flex
      w={8}
      h={8}
      align="center"
      justify="center"
      rounded="full"
      bg={iconBg}
    >
      {icon}
    </Flex>
    <Text fontWeight={600}>{text}</Text>
  </Stack>
);

export default function SplitWithImage() {
  return (
    <Flex w="full" direction="column" alignItems="center" justifyContent="center">
      <Flex py={12} px={{ base: 8, sm: 16 }} maxW="7xl">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform="uppercase"
              color={useColorModeValue('white', 'teal.300')}
              fontWeight={600}
              fontSize="sm"
              bg={useColorModeValue('teal.300', 'teal.700')}
              p={2}
              alignSelf="flex-start"
              rounded="md"
            >
              About Me
            </Text>
            <Heading>Hello There!</Heading>
            <Text color={useColorModeValue('gray.600', 'gray.400')} fontSize="lg">
              I thrive on creating efficient and innovative solutions. Some of the frameworks I use are:
            </Text>
            <Stack
              spacing={4}
              divider={(
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              )}
            >
              <Feature
                icon={
                  <Icon as={SiFlutter} color="blue.500" w={5} h={5} />
                }
                iconBg={useColorModeValue('blue.100', 'blue.900')}
                text="Flutter"
              />
              <Feature
                icon={<Icon as={SiNextdotjs} color="yellow.500" w={5} h={5} />}
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text="Next JS"
              />
              <Feature
                icon={
                  <Icon as={SiRubyonrails} color="red.500" w={5} h={5} />
                }
                iconBg={useColorModeValue('red.100', 'red.900')}
                text="Ruby on Rails"
              />
            </Stack>
          </Stack>
          <Container>
            <Image
              rounded="md"
              w="full"
              maxH={350}
              opacity={useColorModeValue(1, 0.8)}
              alt="Picture of Diego in the Snow."
              src="me.jpeg"
              objectFit="cover"
            />
          </Container>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
