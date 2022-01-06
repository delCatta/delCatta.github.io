import React from 'react';
import { VStack } from '@chakra-ui/react';
import Intro from '../components/sections/Intro';
import Works from '../components/sections/Works';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import Achievements from '../components/sections/Achievements';

export default function Home() {
  return (
    <VStack>
      <Intro />
      <About />
      <Achievements />
      <Works />
      <Contact />
    </VStack>
  );
}
