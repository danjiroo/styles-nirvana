/* eslint-disable no-use-before-define */
import React from 'react'

import { iconArr } from './IconList'
import Icon from './'
import { StyledIconReference } from './styles'

interface IconReferenceProps {
  handleClick: (iconName: string) => void
}

interface ListProps {
  name: string
  handleClick: (iconName: string) => void
}

const List: React.FC<ListProps> = ({ name, handleClick }) => (
  <li onClick={() => handleClick(name)}>
    <Icon iconName={name as string} color='dark' />
    <input type='text' readOnly value={name} />
  </li>
)

const IconReference: React.FC<IconReferenceProps> = (props) => (
  <StyledIconReference>
    <h1>Icon Reference</h1>
    <h2>SVG</h2>
    <ul>
      {iconArr.map((name: string) => (
        <List key={name} name={name} {...props} />
      ))}
    </ul>
  </StyledIconReference>
)

export default IconReference
