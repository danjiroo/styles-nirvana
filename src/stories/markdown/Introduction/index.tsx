/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { linkTo } from '@storybook/addon-links'

import { ComponentDetails } from './List'
import { StyledComponentList, StyledCard } from './styles'
import { ComponentProps } from './types'

import { Modifiers } from '../../../components/GlobalStyles'
import { Icon, Logo, Themes } from '../../../'

const Component: React.FC<ComponentProps> = ({
  progress = 'pending',
  story_url,
  title,
  content,
  dev = 'Pending',
}) => (
  <StyledCard clickable handleClick={linkTo(`components-${story_url}`)}>
    <Icon
      iconName={
        progress === 'completed'
          ? 'check-circle'
          : progress === 'inprogress'
          ? 'target'
          : 'x-circle'
      }
      color={
        progress === 'completed'
          ? 'success'
          : progress === 'inprogress'
          ? 'primary'
          : 'danger'
      }
    />
    <span>
      <strong>{title}</strong>
      {content}
    </span>
    <i>{dev}</i>
  </StyledCard>
)

const ComponentList: React.FC = () => {
  const components = ComponentDetails.map((component) => (
    <Component key={component.title} {...component} />
  ))

  return (
    // added theme provider here since Introduction.mdx is not part of preview.js stories
    <ThemeProvider theme={Themes['base'] ?? {}}>
      <Modifiers />
      <StyledComponentList className='link-list'>
        {components}
      </StyledComponentList>
    </ThemeProvider>
  )
}

export default ComponentList
