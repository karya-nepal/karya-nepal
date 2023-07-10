import { Box, Flex, Text } from '@mantine/core'

export const Navbar = () => {
  return (
    <Flex
      direction={'row'}
      justify={'space-between'}
      m={'auto'}
      w={'80%'}
      p='lg'
      bg='emerald-green.0'
      sx={(theme) => ({
        borderBottomLeftRadius: '2rem',
        borderBottomRightRadius: '2rem',
      })}
    >
      <Text weight={'bolder'} size={22}>
        Karya Nepal
      </Text>
      <Text weight={'bolder'} size={22}>
        sign in
      </Text>
    </Flex>
  )
}
