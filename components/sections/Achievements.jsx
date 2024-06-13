import React from 'react';
import {
  Box,
  chakra,
  Divider,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';

import { BsPerson } from 'react-icons/bs';
import { FaGamepad } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';

function StatsCard(props) {
  const {
    title, stat, icon, link,
  } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py="5"
      shadow="xl"
      border="1px solid"
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded="lg"
    >
      <Flex justifyContent="space-between">
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight="medium" isTruncated>
            {title}
          </StatLabel>
          <NextLink href={link} passHref>
            <Link textUnderlineOffset={6} isExternal>
              <StatNumber fontSize="2xl" fontWeight="medium">
                {stat}
              </StatNumber>
            </Link>
          </NextLink>
        </Box>
        <Box
          my="auto"
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent="center"
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function BasicStatistics() {
  return (
    <Box maxW="7xl" px={{ base: 8, sm: 16 }} mx="auto">
      <Divider />
      <chakra.h1
        textAlign="center"
        fontSize="4xl"
        my={8}
        fontWeight="bold"
      >
        Other things I have done...
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }} mb={16}>
        <StatsCard
          title="1 Year - Gilbert, Arizona. "
          stat="AFS Intercultural Exchange."
          link="https://www.afs.cl/"
          icon={<GoLocation size="3em" />}
        />
        <StatsCard
          title="GameJam"
          stat="8th place at JamCraft."
          link="https://t4g1.itch.io/crossbow-hero"
          icon={<FaGamepad size="3em" />}
        />
        <StatsCard
          title="Technovation Chile"
          stat="Mentored Girls on building Apps."
          link="https://technovation.cl/"
          icon={<BsPerson size="3em" />}
        />
      </SimpleGrid>
      <Divider />
    </Box>
  );
}
