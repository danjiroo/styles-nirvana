/* eslint-disable no-use-before-define */
import React from 'react'

import { iconArray } from './IconList'
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
    <div className={`icon icon-${name}`}></div>
    <input type='text' readOnly value={name} />
  </li>
)

const IconReference: React.FC<IconReferenceProps> = (props) => (
  <StyledIconReference>
    <h1>Icon Reference</h1>
    <h2>CSS mapping</h2>
    <ul className='glyphs css-mapping'>
      {iconArray.map((name: string) => (
        <List key={name} name={name} {...props} />
      ))}
    </ul>
  </StyledIconReference>
)

export default IconReference
