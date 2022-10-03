import {
  Box,
  Button,
  Container,
  Grid,
  Group,
  SimpleGrid,
  Stack,
  Text,
} from '@mantine/core'
import type { NextPage } from 'next'
import Head from 'next/head'
import { BackgroundText } from './components/DesignComponents/BackgroundText'
import { NavBar } from './components/Navbar'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Karya Nepal - WIP</title>
      </Head>

      {/* Background -- karya nepal --  */}
      <BackgroundText weight={500} size={30} opacity={80} color='dark.8' />
      <BackgroundText
        weight={500}
        mt={50}
        size={30}
        opacity={30}
        color='dark.8'
      />

      <BackgroundText
        bottom={10}
        weight={500}
        size={30}
        opacity={80}
        color='dark.8'
      />
      <BackgroundText
        weight={500}
        bottom={60}
        size={30}
        opacity={30}
        color='dark.8'
      />

      {/* --------------- */}
      <Box mt={20}>
        <Text align='center' weight={'bolder'} size={70}>
          karya
        </Text>
      </Box>
      {/* <NavBar /> */}
      <Box p={20} style={{ width: '80%', margin: '0 auto' }}>
        <SimpleGrid mt={30} cols={2}>
          <Stack>
            <Box>
              <Text weight={500} size={40}>
                Reinventing casual and temporary staffing
              </Text>
            </Box>
            <Text weight={400} mt={20} color='dark.4'>
              We are using technology to dramatically improve the way labour
              hire works for businesses and workers.
            </Text>
            <Group spacing={50} grow mt={30} style={{ width: '70%' }}>
              <Button size='lg' p={10} color='gray.8'>
                for bussiness
              </Button>
              <Button size='lg' p={10} color='gray.8'>
                for worker
              </Button>
            </Group>
          </Stack>
          <Container>
            <Image
              layout='fixed'
              alt='people network'
              src='/assests/people_network.png'
              width={370}
              height={370}
            />
          </Container>
        </SimpleGrid>
      </Box>
    </div>
  )
}

export default Home
