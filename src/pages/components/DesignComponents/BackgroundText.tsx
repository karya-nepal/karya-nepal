import { Box, Text, TextProps } from '@mantine/core'

export const BackgroundText: React.FC<
  { opacity: number; bottom?: number } & TextProps
> = ({ opacity = 100, bottom, ...props }) => {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 10,
        bottom,
        position: 'absolute',
        width: '100%',
        zIndex: -1,
      }}
    >
      {[1, 2, 3, 4, 5].map((_, i) => (
        <Text
          key={i}
          style={{
            opacity: `${opacity}%`,
          }}
          {...props}
        >
          karya nepal
        </Text>
      ))}
    </Box>
  )
}
