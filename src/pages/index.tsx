import { useTheme } from '@emotion/react'
import {
  Box,
  Text,
  Flex,
  Stack,
  Button,
  Space,
  Grid,
  ThemeIcon,
} from '@mantine/core'
import type { NextPage } from 'next'
import { NodeNextRequest } from 'next/dist/server/base-http/node'
import Head from 'next/head'
import { BackgroundText } from './components/DesignComponents/BackgroundText'
import { HeroSection } from './components/DesignComponents/HeroSection'
import { LongCard } from './components/DesignComponents/LongCard'
import { Footer } from './components/Footer'

const TestIcon = () => {
  return (
    <ThemeIcon bg={'none'} size='xl'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='48'
        height='48'
        viewBox='0 0 48 48'
        fill='none'
      >
        <path
          d='M18.6578 48C18.3889 48 18.138 47.896 17.9474 47.708C17.7587 47.52 17.6544 47.268 17.6544 47C17.6544 46.732 17.7587 46.482 17.9474 46.292L19.7214 44.522L12.8961 40.354L6.22534 47.672C6.03469 47.88 5.76376 48 5.4828 48C5.23194 48 4.99313 47.908 4.8085 47.74C4.3991 47.37 4.36899 46.736 4.74026 46.328L11.7643 38.624C11.9389 37.298 12.6513 30.45 9.28178 26.664C8.70782 26.02 8.72387 25.062 9.3179 24.436C9.83367 23.874 10.5381 23.574 11.3529 23.574C11.4893 23.574 11.6278 23.582 11.7703 23.6C14.2247 23.896 17.0804 26.716 19.6091 31.336C19.8338 31.746 20.1329 31.998 20.5262 32.11C20.6787 32.154 20.8513 32.176 21.0339 32.176C21.5878 32.176 22.2461 31.976 22.8863 31.612C24.1606 30.888 25.6939 29.61 27.1749 28.376C29.4427 26.486 31.7827 24.534 33.7735 24.032C34.4779 23.854 35.1542 23.764 35.7843 23.764C37.4621 23.764 38.8388 24.42 39.4669 25.522C39.9445 26.36 39.8723 27.28 39.2823 27.868L22.0394 45.044L19.3662 47.71C19.1776 47.896 18.9267 48 18.6578 48ZM21.1804 43.07L37.7511 26.564C37.743 26.548 37.735 26.528 37.723 26.508C37.5644 26.23 36.9784 25.76 35.7843 25.76C35.3228 25.76 34.813 25.83 34.2671 25.968C32.7239 26.358 30.5625 28.158 28.4713 29.9C26.916 31.196 25.3126 32.532 23.8797 33.346C22.9264 33.888 21.943 34.176 21.04 34.176C20.6707 34.176 20.3115 34.128 19.9783 34.034C19.0652 33.776 18.3287 33.174 17.847 32.294C15.2763 27.596 12.8359 25.744 11.5295 25.586C11.4693 25.578 11.4111 25.574 11.3549 25.574C11.2324 25.574 11.1261 25.592 11.0338 25.628C14.4795 29.812 14.0882 36.206 13.7992 38.56L21.1804 43.07Z'
          fill='white'
        ></path>
        <path
          d='M1.00343 24C0.449536 24 0 23.552 0 23C0 22.448 0.449536 22 1.00343 22H3.84915C3.84915 11.768 11.7441 3.118 21.9109 2.106V1C21.9109 0.448 22.3604 0 22.9143 0C23.4682 0 23.9177 0.448 23.9177 1V2C34.9835 2 43.9863 10.972 43.9863 22H46.9966C47.5505 22 48 22.448 48 23C48 23.552 47.5505 24 46.9966 24H1.00343ZM41.9794 22C41.9794 12.074 33.8778 4 23.9177 4C13.9577 4 5.85601 12.074 5.85601 22H41.9794Z'
          fill='#41C6F1'
        ></path>
      </svg>
    </ThemeIcon>
  )
}

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

      <HeroSection />
      <LongCard height='25vw'>
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
              <Button mt={20} w='fit-content' color='gray.8' size='md'>
                learn more
              </Button>
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

      <LongCard height='50vw'>
        <Box w='95%' m={'0 auto'}>
          <Flex direction='row' gap={10} justify={'space-evenly'}>
            <Stack w='40%'>
              <Text weight={800} size={50}>
                For Business
              </Text>
              <Text size='xl'>
                Hire temporary and casual staff without the quality tradeoff or
                high cost of traditional agencies.
              </Text>
              <Button mt={20} w='fit-content' color='gray.8' size='md'>
                learn more
              </Button>
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
          <Text m='0 auto' w={'87%'} color={'gray.5'} weight={'bold'} mt={50}>
            CHOOSE YOUR INDUSTRY
          </Text>
          <Space h='xl' />
          <Grid w='90%' m='0 auto'>
            {industry_buttons.map((e, i) => (
              <Grid.Col key={i} span={4}>
                <Button
                  leftIcon={<TestIcon />}
                  sx={(_) => ({
                    border: '6px solid #262626',
                    width: '15rem',
                    height: '5rem',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: _.colors.dark[9],
                    },
                  })}
                  variant='outline'
                >
                  {e.label}
                </Button>
              </Grid.Col>
            ))}
          </Grid>
        </Box>
      </LongCard>

      <Footer
        data={[
          {
            title: 'About',
            links: [
              { label: 'Our services', link: '' },
              { label: 'About karya', link: '' },
              { label: 'Privacy', link: '' },
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
