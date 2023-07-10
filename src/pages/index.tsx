import { useTheme } from '@emotion/react'
import { Box, Text, Flex, Stack, Button, Space } from '@mantine/core'
import type { NextPage } from 'next'
import Head from 'next/head'
import { GetInTouchSimple } from '../components/GetInTouchSimple'
import { HeroSection } from '../components/DesignComponents/HeroSection'
import { LongCard } from '../components/DesignComponents/LongCard'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/DesignComponents/Navbar'

const Home: NextPage = () => {
  const industry_buttons = [
    {
      label: 'Hospitality',
    },
    {
      label: 'Hospitality',
    },
    {
      label: 'Hospitality',
    },
    {
      label: 'Hospitality',
    },
    {
      label: 'Hospitality',
    },
    {
      label: 'Hospitality',
    },
  ]

  return (
    <div>
      <Head>
        <title>Karya Nepal - WIP</title>
      </Head>

      <Navbar />
      <Space h={30} />
      <HeroSection />
      <LongCard height='auto' pb='3rem'>
        <Box w='95%' m={'0 auto'}>
          <Flex direction='row' gap={10} justify={'space-evenly'}>
            <Stack w='40%'>
              <Text weight={800} size={50}>
                For Workers
              </Text>
              <Text size='xl'>
                Start working with top companies and gain control over your
                work.
              </Text>
              <Flex direction={'row'} justify={'space-between'} w={'65%'}>
                <Button mt={20} w='fit-content' color='accent' size='md'>
                  sign up
                </Button>
                <Button mt={20} w='fit-content' color='gray.8' size='md'>
                  learn more
                </Button>
              </Flex>
            </Stack>
            <Stack w={'40%'} mt={20}>
              <Box>
                <Text size={'xl'} weight='bold'>
                  More Opportunities
                </Text>
                <Text mt={5}>
                  We provide millions of hours of regular casual work every year
                  to over 15,000 Users.
                </Text>
              </Box>
              <Space />
              <Box>
                <Text size={'xl'} weight='bold'>
                  You are in control
                </Text>
                <Text mt={5}>
                  Choose when, where and how much you work, all through a free
                  mobile app.
                </Text>
              </Box>
            </Stack>
          </Flex>
        </Box>
      </LongCard>

      <LongCard height='auto' pb='3rem'>
        <Box w='95%' m={'0 auto'}>
          <Flex direction='row' gap={10} justify={'space-evenly'}>
            <Stack w='40%'>
              <Text size={50} weight={800}>
                For Business
              </Text>
              <Text size='xl'>
                Hire temporary and casual staff without the quality tradeoff or
                high cost of traditional agencies.
              </Text>
              <Flex direction={'row'} justify={'space-between'} w={'65%'}>
                <Button mt={20} w='fit-content' color='accent' size='md'>
                  sign up
                </Button>
                <Button mt={20} w='fit-content' color='gray.8' size='md'>
                  learn more
                </Button>
              </Flex>
            </Stack>
            <Stack w={'40%'} mt={20}>
              <Box>
                <Text size={'xl'} weight='bold'>
                  More reliable and productive staff
                </Text>
                <Text mt={5}>
                  We personally screen every Sidekick and use live performance
                  data to hold staff accountable and curate our workforce.
                </Text>
              </Box>
              <Space />
              <Box>
                <Text size={'xl'} weight='bold'>
                  Pay less for more
                </Text>
                <Text mt={5}>
                  We provide everything your agency does, plus all the upsides
                  our technology delivers, all at reduced rates.
                </Text>
              </Box>
            </Stack>
          </Flex>
        </Box>
      </LongCard>

      <LongCard height={'100%'} p='5rem'>
        <GetInTouchSimple />
      </LongCard>

      <Footer
        data={[
          {
            title: 'About',
            links: [
              { label: 'Our services', link: '' },
              { label: 'About karya', link: '' },
              { label: 'Privacy Policy', link: '' },
              { label: 'Terms of use', link: '' },
            ],
          },

          {
            title: 'Community',
            links: [
              { label: 'Join Discord', link: '' },
              { label: 'Follow on Twitter', link: '' },
              { label: 'Email newsletter', link: '' },
            ],
          },
          {
            title: 'Other',
            links: [
              { label: 'Blog', link: '' },
              { label: 'Careers', link: '' },
            ],
          },
        ]}
      />
    </div>
  )
}

export default Home
