import {
  createStyles,
  Title,
  Button,
  Group,
  Text,
  Box,
  Space,
  Container,
} from '@mantine/core'
import Image from 'next/image'

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
  },

  content: {
    maxWidth: 580,
    marginRight: theme.spacing.xl * 2,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 48,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({
      variant: 'light',
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
  image: {
    flex: 1,
    display: 'flex',
    justifyContent: 'end',

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },
}))

export function HeroSection() {
  const { classes } = useStyles()
  return (
    <Box style={{ width: '80%', margin: '0 auto' }}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            <span className={classes.highlight}>Reinventing</span> casual and{' '}
            <br /> temporary staffing
          </Title>
          <Space h='xl' />
          <Text color='dimmed' mt='md'>
            We’re using technology to dramatically improve the way labour hire
            works for businesses and workers.
          </Text>
          <Space h='xl' />
          <Group mt={30} spacing={50}>
            <Button color='gray.8' size='md' className={classes.control}>
              for worker
            </Button>
            <Button size='md' color='gray.8' className={classes.control}>
              for bussiness
            </Button>
          </Group>
        </div>
        <Container className={classes.image}>
          <Image
            layout='fixed'
            src='/assests/people_network.png'
            alt='people'
            width={400}
            height={400}
          />
        </Container>
      </div>
    </Box>
  )
}
