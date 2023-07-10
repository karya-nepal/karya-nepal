import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
  createStyles,
  Box,
} from '@mantine/core'
import { useForm } from '@mantine/form'

const useInputStyles = createStyles((theme) => ({
  input: {
    background: theme.colors.gray[8],
  },
}))

export function GetInTouchSimple() {
  const { classes } = useInputStyles()

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  })

  return (
    <Box w='95%' m='0 auto'>
      <form onSubmit={form.onSubmit(() => {})}>
        <Title
          order={1}
          size={50}
          sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
          weight={900}
        >
          Get in touch
        </Title>

        <SimpleGrid
          cols={2}
          mt='xl'
          breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
        >
          <TextInput
            label='Name'
            placeholder='Your name'
            name='name'
            variant='filled'
            classNames={classes}
            {...form.getInputProps('name')}
          />
          <TextInput
            label='Email'
            placeholder='Your email'
            name='email'
            classNames={classes}
            variant='filled'
            {...form.getInputProps('email')}
          />
        </SimpleGrid>

        <TextInput
          label='Subject'
          placeholder='Subject'
          mt='md'
          classNames={classes}
          name='subject'
          variant='filled'
          {...form.getInputProps('subject')}
        />
        <Textarea
          mt='md'
          label='Message'
          placeholder='Your message'
          maxRows={10}
          minRows={5}
          autosize
          classNames={classes}
          name='message'
          variant='filled'
          {...form.getInputProps('message')}
        />

        <Group position='center' mt='xl'>
          <Button type='submit' size='md'>
            Send message
          </Button>
        </Group>
      </form>
    </Box>
  )
}
