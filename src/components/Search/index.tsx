/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useRef, useState } from 'react'

import { Input, RaySpinner } from '../'

import { StyledInputContainer, StyledSearch } from './styles'
import { SearchProps } from './types'

import SearchResults from './SearchResults'

const Search: React.FC<SearchProps> = (props) => {
  // This is kinda messy; since this is still temporary
  const [isSearching, setIsSearching] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [searchText, setSearchText] = useState('')

  const ref = useRef(null)

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

  const handleSearching = () => {
    if (!searchText) {
      setIsSearching(false)
    } else {
      setIsSearching(true)
    }
  }

  // still needs fixing
  const handleSearchResult = () => {
    const sampleTimer = setTimeout(() => {
      setShowResults(true)
      setIsSearching(false)
    }, 2000)

    return () => {
      clearTimeout(sampleTimer)
    }
  }

  const handleClickOutside = () => {
    // TODO types
    const handleClick = (e: any) => {
      // @ts-ignore
      if (ref.current && !ref.current.contains(e.target)) {
        setShowResults(false)
      }
    }

    document.addEventListener('click', handleClick, true)

    return () => {
      document.removeEventListener('click', handleClick, true)
    }
  }

  useEffect(handleSearching, [searchText])
  useEffect(handleSearchResult, [isSearching])
  useEffect(handleClickOutside, [])

  return (
    <div {...props} ref={ref}>
      <h2>Test Search</h2>
      <p>
        This is still in progress, need to have Input component modified before
        this.
      </p>
      <StyledInputContainer ref={ref}>
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
        {isSearching && (
          <RaySpinner
            className='search-spinner'
            size={'xs'}
            rayHeight={6}
            rayWidth={4}
          />
        )}
      </StyledInputContainer>
      {showResults && !!searchText && (
        <SearchResults
          results={sampleResults}
          handleClick={(data) =>
            alert(`Clicked searched item: ${JSON.stringify(data)}`)
          }
        />
      )}
    </div>
  )
}

export default Search
