import { Box, Button, Flex, Space, Text } from '@mantine/core'

const linkButtonStyles = {
  background: 'transparent',

  ':hover': {
    background: 'transparent',
    textDecoration: 'underline',
  },
}

export const Navbar = () => {
  return (
    <Flex
      direction={'row'}
      justify={'space-between'}
      m={'auto'}
      w={'80%'}
      p='lg'
      bg='emerald-green'
      sx={() => ({
        borderBottomLeftRadius: '2rem',
        borderBottomRightRadius: '2rem',
      })}
    >
      <Flex direction={'row'}>
        <Text weight={900} size={22}>
          Karya Nepal
        </Text>
        <Button sx={linkButtonStyles} component='a'>
          I want to hire
        </Button>
        <Button sx={linkButtonStyles} component='a'>
          I want to work
        </Button>
        <Button sx={linkButtonStyles} component='a'>
          About us
        </Button>
      </Flex>

      <Flex direction='row' w='auto'>
        <Button
          variant='outline'
          sx={(theme) => ({
            color: 'white',
            borderColor: theme.colors['emerald-green'][2],
            ':hover': {
              textDecoration: 'underline',
            },
          })}
        >
          Login
        </Button>
        <Space w='md' />
        <Button
          variant='filled'
          sx={(theme) => ({
            color: 'white',

            background: theme.colors['emerald-green'][2],
            borderColor: theme.colors['emerald-green'][2],
            ':hover': {
              textDecoration: 'underline',
            },
          })}
        >
          Get Started
        </Button>
      </Flex>
    </Flex>
  )
}
