import { Box, BoxProps } from '@mantine/core'
import { MutableRefObject } from 'react'

export interface LongCardProps {
  children: React.ReactNode
  height: string | number
  width?: string | number
}

export function LongCard(props: LongCardProps & BoxProps) {
  return (
    <Box sx={{ width: 'auto', height: 'auto' }}>
      <Box
        {...props}
        sx={(theme) => ({
          backgroundColor: theme.colors.gray[9],
          height: props.height,
          width: props.width || '80%',
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
