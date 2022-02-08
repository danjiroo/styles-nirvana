/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from 'react'

import { Input } from '../'

import { StyledSearch } from './styles'
import { SearchProps } from './types'

import SearchResults from './SearchResults'

const Search: React.FC<SearchProps> = (props) => {
  const [searchText, setSearchText] = useState('')

  // TODO : temp
  const sampleResults = [
    {
      id: '1',
      title: 'Sample Result 1',
    },
    {
      id: '2',
      title: 'Sample Result 2',
    },
    {
      id: '3',
      title: 'Sample Result 3',
    },
  ]

  return (
    <StyledSearch {...props}>
      <h2>Test Search</h2>
      <p>
        This is still in progress, need to have Input component modified before
        this.
      </p>
      <Input
        type='text'
        value={searchText}
        name='global-search'
        placeholder='Search anything...'
        actions={{
          handleChange: (data) => {
            console.log('Global Search', data)

            setSearchText(data?.value ?? '')
          },
        }}
      />
      <SearchResults
        results={sampleResults}
        handleClick={(data) =>
          alert(`Clicked searched item: ${JSON.stringify(data)}`)
        }
      />
    </StyledSearch>
  )
}

export default Search
