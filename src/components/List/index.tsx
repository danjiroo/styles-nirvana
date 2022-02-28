import React from 'react'

import { ListProps } from './types'
import { StyledList } from './styles'

const List: React.FC<ListProps> = (props) => {
  const { list = [] } = props

  return (
    <StyledList {...props}>
      {list?.map(({ component, id }) => (
        <li key={id}>{component}</li>
      ))}
    </StyledList>
  )
}

export default List
