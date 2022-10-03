import { ButtonStylesParams, MantineTheme } from '@mantine/core'

export const ButtonTheme = {
  styles: (theme: MantineTheme, param: ButtonStylesParams) => ({
    root: {
      transition: 'background ease-in-out 200ms',
      '&:hover': {
        backgroundColor: theme.fn.lighten(
          theme.fn.themeColor(param.color),
          0.2
        ),
      },
    },
  }),
}
