import { VStack } from '@chakra-ui/react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Intro from '../components/sections/Intro'
import Works from '../components/sections/Works'
import About from '../components/sections/About'
import Contact from '../components/sections/Contact'
import Achievements from '../components/sections/Achievements'
export default function Home() {
  return (
    <VStack>
      <Intro></Intro>
      <About></About>
      <Achievements></Achievements>
      <Works></Works>
      <Contact></Contact>
    </VStack>
  );
}
