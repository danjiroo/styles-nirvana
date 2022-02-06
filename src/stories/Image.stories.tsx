/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Story, Meta } from '@storybook/react'
import styled from 'styled-components'

import { Image } from '../'
import { ImageProps } from '../components/Image/types'

export default {
  title: 'Components/Image',
  component: Image,
  argTypes: {},
  args: {},
} as Meta<ImageProps>

const Template: Story<ImageProps> = (args) => (
  <StyledDiv className='this_is_the_styled_div'>
    <Image {...args} />
  </StyledDiv>
)

export const Default = Template.bind({})
Default.args = {
  isLoading: true,
  rounded: true,
  // src: 'https://tinypng.com/images/example-orig.png',
  src: '',
  alt: 'panda pando',
}

const StyledDiv = styled.div`
  width: 300px;
`
