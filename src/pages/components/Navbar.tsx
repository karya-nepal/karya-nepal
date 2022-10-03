import { Box, Button, Group } from '@mantine/core'

export const NavBar = () => {
  return (
    <Group
      spacing={60}
      style={{ width: '80%', margin: 'auto' }}
      p={10}
      position='center'
      grow
    >
      <Button color={'gray.8'}>i want to hire</Button>
      <Button color={'gray.8'}>i want to work</Button>
      <Button color={'gray.8'}>about us</Button>
      <Button color={'gray.8'}>login</Button>
      <Button color={'gray.8'}>get started</Button>
    </Group>
  )
}
