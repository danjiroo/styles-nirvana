import React from 'react'

import { StyledResultsContainer } from './styles'

// import SearchResultItem from './SearchResultItem'
import { SearchResultsProps } from './types'

const SearchResults: React.FC<SearchResultsProps> = ({
  results = [],
  handleClick,
}) => {
  const lists = results?.map((result) => {
    const { id, title = 'Sample Title' } = result

    return (
      <li key={id} onClick={() => handleClick(result)}>
        {title}
      </li>
    )
  })

  return <StyledResultsContainer>{lists}</StyledResultsContainer>
}

export default SearchResults
