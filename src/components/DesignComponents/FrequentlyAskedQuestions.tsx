import {
  createStyles,
  Accordion,
  Grid,
  Col,
  Container,
  Title,
  Text,
  Space,
} from '@mantine/core'
import next from 'next'
import image from './image.svg'
import Image from 'next/image'

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
  },

  title: {
    marginBottom: theme.spacing.md,
    paddingLeft: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  item: {
    fontSize: theme.fontSizes.sm,
    color: 'white',
  },
}))

const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.'

export const FrequentlyAskedQuestions = () => {
  const { classes } = useStyles()
  return (
    <div className={classes.wrapper}>
      <Container size='lg'>
        <Text size={50} weight={900}>
          Frequently Asked Questions
        </Text>
        <Space h={50} />
        <Grid id='faq-grid' gutter={20}>
          <Col span={10} md={6}>
            {/* <Image src={image.src} alt='Frequently Asked Questions' /> */}
            <Image
              layout='fixed'
              src='/assests/faq.svg'
              alt='people'
              width={400}
              height={400}
            />
          </Col>
          <Col span={12} md={6}>
            <Accordion
              chevronPosition='right'
              defaultValue='reset-password'
              variant='separated'
            >
              <Accordion.Item className={classes.item} value='reset-password'>
                <Accordion.Control>
                  How can I reset my password?
                </Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value='another-account'>
                <Accordion.Control>
                  Can I create more that one account?
                </Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value='newsletter'>
                <Accordion.Control>
                  How can I subscribe to monthly newsletter?
                </Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value='credit-card'>
                <Accordion.Control>
                  Do you store credit card information securely?
                </Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value='payment'>
                <Accordion.Control>
                  What payment systems to you work with?
                </Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Grid>
      </Container>
    </div>
  )
}
