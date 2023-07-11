import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import { themeColors } from '../theme/colors'
import { ButtonTheme } from '../theme/ButtonTheme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      theme={{
        colorScheme: 'dark',
        colors: themeColors,
        primaryColor: 'emerald-green',
        primaryShade: 4,
        fontFamily: 'Greycliff CF',
        white: '#EFE7DC',
        breakpoints: {
          xs: 500,
          sm: 800,
          md: 1000,
          lg: 1200,
          xl: 1400,
        },
        components: {
          Button: ButtonTheme,
        },
        globalStyles: (theme) => ({
          body: {
            background: theme.colors.dark[9],
          },
        }),
      }}
      withGlobalStyles
      withNormalizeCSS
      // withCSSVariables
    >
      <Component {...pageProps} />
    </MantineProvider>
  )
}

export default MyApp
