import { Box, Flex, Stack, Button, Space, Text } from '@mantine/core'

export interface LongCardProps {
  children: React.ReactNode
  height: string | number
}

export function LongCard(props: LongCardProps) {
  return (
    <Box sx={{ widht: 'auto', height: 'auto' }}>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.colors.gray[9],
          height: props.height,
          width: '80%',
          margin: '0 auto',
          marginTop: 40,
          borderRadius: 40,
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          padding: 20,
          paddingTop: 30,
        })}
      >
        <Box w='95%' m={'0 auto'}>
          {props.children}
        </Box>
      </Box>
    </Box>
  )
}
