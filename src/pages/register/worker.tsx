import { Flex, Text, Container, Title } from '@mantine/core'
import { NextPage } from 'next'

const RegisterForWorker: NextPage = () => {
  return (
    <div>
      <Flex direction={'row'} justify='space-around' h={'100vh'}>
        <Container
          sx={(theme) => ({
            padding: 10,
            backgroundColor: theme.colors.gray[8],
            width: '100%',
            height: '100%',
          })}
        >
          <Title order={2}>Lets get started!</Title>
        </Container>
        <Container    
          sx={(theme) => ({
            width: '100%',
          })}
        >
        <Text
        variant = "gradient"
        ta = "center"
        gradient = {{from: "blue", to: "red"}}
        weight = {900}
        fz = {50}
        >
          Karya Nepal
        </Text>
        <Text size='xs' color='dimmed' sx={(theme)=>({
          marginTop: 5,
          [theme.fn.smallerThan('sm')]: {
          marginTop: theme.spacing.xs,
          textAlign: 'center',
          }
        })}>
            Becoming the catalyst for employees and employers and give new
            horizon to employment.
          </Text>
        </Container>
      </Flex>
    </div>
  )
}

export default RegisterForWorker
