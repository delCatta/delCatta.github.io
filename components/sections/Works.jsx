
import NextLink from 'next/link'
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Image,
  Link, Divider,
  HStack,
  VStack,
  useColorModeValue
} from '@chakra-ui/react'
import {
  SiFlutter,
  SiStrapi,
  SiRubyonrails,
  SiDigitalocean,
  SiDotnet,
  SiUnity
} from 'react-icons/si'
import { CheckIcon } from '@chakra-ui/icons'

export default function GridListWithHeading () {
  const business = [
    {
      title: 'Peregrine',
      site: 'https://peregrinetelemetry.com',
      external: true,
      date: '2021-Present',
      image: '/clients/peregrine.png',
      text: 'Concurrent Freelancing. Droplets, Flutter Web Apps & Scripting.',
      tools: [{ icon: SiFlutter, site: 'https://flutter.dev', bgcolor: 'blue.700' }, { icon: SiStrapi, site: 'https://strapi.io', bgcolor: 'purple.700' }, { icon: SiRubyonrails, site: 'https://rubyonrails.org/', bgcolor: 'red.700' }, { icon: SiDigitalocean, site: 'https://digitalocean.com/', bgcolor: 'blue.700' }]
    },
    {
      title: 'Usercode',
      site: 'https://apps.apple.com/us/app/app-tivate/id1571535977',
      external: true,
      date: 'May - Aug 2021',
      image: '/clients/usercode.png',
      text: 'Given the design, I Developed mobile version of Apptivate.',
      tools: [{ icon: SiFlutter, site: 'https://flutter.dev', bgcolor: 'blue.700' }]
    },
    {
      title: 'AC3E',
      site: 'https://ac3e.usm.cl/',
      external: true,
      date: 'Aug - Dec 2021',
      image: '/clients/ac3e.png',
      text: 'Internship customizing design for OptiKey.',
      tools: [{ icon: SiDotnet, site: 'https://docs.microsoft.com/es-es/dotnet/core/whats-new/dotnet-6', bgcolor: 'orange.700' }]
    },
    {
      title: 'Ment',
      site: '#',
      external: false,
      date: 'Currently working on this...',
      image: useColorModeValue('/projects/mentdark.svg', '/projects/ment.svg'),
      text: 'Project under construction, so a bit private for now!',
      tools: [{ icon: SiFlutter, site: 'https://flutter.dev', bgcolor: 'blue.700' }, { icon: SiRubyonrails, site: 'https://rubyonrails.org/', bgcolor: 'red.700' }, { icon: SiDigitalocean, site: 'https://digitalocean.com/', bgcolor: 'blue.700' }]
    },
    {
      title: 'Clarinich App',
      site: 'https://play.google.com/store/apps/details?id=com.thechileankink.clarinich.com&hl=es_CL&gl=US',
      external: true,
      date: 'Jan - Nov 2020',
      image: '/projects/clarinich.png',
      fit: 'cover',
      text: "App to request service information for clients for my dad's company.",
      tools: [{ icon: SiFlutter, site: 'https://flutter.dev', bgcolor: 'blue.700' }, { icon: SiStrapi, site: 'https://strapi.io', bgcolor: 'purple.700' }]
    },
    {
      title: 'Reformados',
      site: 'https://play.google.com/store/apps/details?id=com.thechileankink.Reformados&hl=es&gl=US',
      external: true,
      date: "Chile's social outbreak. Oct 2019",
      image: '/projects/reformados.png',
      fit: 'cover',
      text: 'Made this questionnaire App to inform about our Constitution.',
      tools: [{ icon: SiUnity, site: 'https://unity.com/', bgcolor: 'yellow.700' }]
    }
  ]
  return (
    <Flex direction={'column'} py={16}>

    <Box px={{ base: 0, md: 16 }} maxW={'7xl'} mb={16}>
      <Stack spacing={4} as={Flex} textAlign={'center'}>
        <Heading fontSize={'3xl'}>Clients and Personal Projects</Heading>
      </Stack>

      <Flex mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {business.map((feature) => (
            <Flex key={feature.id} align={'top'}>
              <Flex color={'green.400'} px={2} maxW={'75px'} maxH={'75px'}>
                <NextLink href={feature.site} passHref>
                  <Link isExternal={feature.external}>
                    <Image
                    borderRadius='full'
                    w={'full'}
                    objectFit={feature.fit || 'contain'}
                    src={feature.image}
                    alt={feature.title + ' Logo'}
                    /></Link>
                </NextLink>
              </Flex>
              <Flex align={'start'} direction={'column'}>
              <NextLink href={feature.site} passHref mb={2}>
                <Link isExternal={feature.external}>
                <Text fontWeight={600}>{feature.title}</Text>
                </Link>
              </NextLink>

                <Text
                mb={2}
                maxW={'xs'}
                color={'gray.600'}>{feature.text}</Text>
                <Flex mb={2}>
                  {feature.tools.map((tool) =>
                    <NextLink href={tool.site} key={tool.site} passHref>
                      <Link isExternal={feature.external}>
                        <Flex
                          w={8}
                          mr={2}
                          h={8}
                          align={'center'}
                          justify={'center'}
                          rounded={'full'}
                          bg={tool.bgcolor}>
                          <Icon as={tool.icon} color={tool.bgcolor.split('.')[0] + '.200'} w={5} h={5} />
                      </Flex>
                    </Link>
                  </NextLink>
                  )}
                </Flex>
                <Text fontSize={'xs'}>{feature.date}</Text>
              </Flex>
            </Flex>
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  </Flex>
  )
}
