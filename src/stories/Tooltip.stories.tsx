import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useRef } from 'react'

import { Tooltip, Card, Image, Button, Container } from '../'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = (args) => {
  const child1Ref = useRef(null)
  const button1Ref = useRef(null)

  return (
    <Container size='xs'>
      <div>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <p>Sample Component - clickable tooltip from scratch</p>
        <p>still a work in progress</p>
      </div>

      <Tooltip {...args} ref={child1Ref} id='tooltip_1'>
        <Card>
          <h2>Tooltip Card Title</h2>
          <Image alt='' src='' />
          <Button label='inside a card btn' />
        </Card>
      </Tooltip>
      <Button
        label='show tooltip_1 card'
        id='button_1'
        ref={button1Ref}
        onClick={() => child1Ref.current.handleClick(button1Ref)}
      />
    </Container>
  )
}

export const Default = Template.bind({})
Default.args = {}
