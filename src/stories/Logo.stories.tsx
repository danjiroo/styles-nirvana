/* eslint-disable no-use-before-define */
import { ComponentStory, ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

import { Logo } from '../'

export default {
  title: 'Components/Logo',
  component: Logo,
  argTypes: {},
  args: {
    orientation: 'horizontal',
  },
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = (args) => (
  <ParentLogoContainer>
    <Logo {...args} />
  </ParentLogoContainer>
)

export const Default = Template.bind({})
Default.args = {
  src: 'https://www.pngfind.com/pngs/m/493-4934627_storybook-icon-ddf01037-storybook-js-hd-png-download.png',
}

const ParentLogoContainer = styled.div`
  width: 200px;
`
