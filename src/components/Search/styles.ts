import styled from 'styled-components'

import { SearchProps } from './types'

export const StyledSearch = styled.div<SearchProps>``

export const StyledInputContainer = styled.div`
  position: relative;

  > div {
    margin-bottom: 0;
  }

  .search-spinner {
    position: absolute;
    right: 5px;
    top: 5px;
  }
`

export const StyledResultsContainer = styled.ul`
  list-style: none;
  margin: 0 3px;
  padding: 0;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);

  li {
    padding: 10px 15px;
    font-size: 0.9em;
  }

  li:hover {
    background: #f7f7f7;
    color: #888888;
  }
`
