import { Box, Text } from '@mantine/core'
import type { NextPage } from 'next'
import Head from 'next/head'
import { BackgroundText } from './components/DesignComponents/BackgroundText'
import { HeroSection } from './components/DesignComponents/HeroSection'
import { Footer } from './components/Footer'

const Home: NextPage = () => {
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
