import React from 'react'

import { Icon } from '../'

import { StyledPagination } from './styles'
import { TableProps } from './types'

import { usePagination } from './usePagination'

type DefaultPaginationProps = Pick<
  TableProps,
  'options' | 'actions' | 'isLoading'
>

const DefaultPagination: React.FC<DefaultPaginationProps> = ({
  options,
  actions,
  isLoading,
}) => {
  const { onNext, onPrevious, onJumpToFirst, onJumpToLast, onJumpToPage } =
    actions

  const { pageSize = 1 } = options?.config?.initialState ?? {}
  const { currentPage = 0, totalResultCount = 1 } = options?.pagination ?? {}

  const paginationRange = usePagination({
    currentPage: currentPage + 1,
    pageSize,
    siblingCount: 1,
    totalCount: totalResultCount,
  })

  const lastPage = paginationRange?.[paginationRange.length - 1]

  const handleJumptToFirst = () => {
    if (currentPage === 0) return

    onJumpToFirst()
  }
  const handlePrevious = () => {
    if (currentPage === 0) return

    onPrevious()
  }
  const handleJumptToPage = (pageNumber: number) => {
    onJumpToPage(pageNumber)
  }
  const handleNext = () => {
    if (currentPage + 1 === lastPage) return

    onNext()
  }
  const handleJumpToLast = () => {
    if (currentPage + 1 === lastPage) return

    onJumpToLast()
  }

  return (
    <StyledPagination isLoading={isLoading}>
      <Icon
        iconName='chevrons-left'
        onClick={handleJumptToFirst}
        color='dark'
        colorWeight='50'
        disabled={isLoading || currentPage === 0}
        hoverable={!isLoading || currentPage !== 0}
        clickable={!isLoading || currentPage !== 0}
      />
      <Icon
        iconName='chevron-left'
        onClick={handlePrevious}
        color='dark'
        colorWeight='50'
        disabled={isLoading || currentPage === 0}
        hoverable={!isLoading || currentPage !== 0}
        clickable={!isLoading || currentPage !== 0}
      />
      {paginationRange?.map((pageNumber: number | string) => {
        if (pageNumber === 'DOTS') {
          return (
            <Icon
              key={pageNumber}
              iconName='more-horizontal'
              color='dark'
              colorWeight='50'
            />
          )
        }

        return (
          <Icon
            key={pageNumber}
            iconName={String(pageNumber)}
            onClick={() => handleJumptToPage(Number(pageNumber) - 1)}
            color='dark'
            colorWeight='50'
            className={
              Number(pageNumber) - 1 === currentPage ? 'active-page' : ''
            }
            disabled={isLoading}
            hoverable={!isLoading}
            clickable={!isLoading}
          />
        )
      })}
      <Icon
        iconName='chevron-right'
        onClick={handleNext}
        color='dark'
        colorWeight='50'
        disabled={isLoading || currentPage + 1 === lastPage}
        hoverable={!isLoading || currentPage + 1 !== lastPage}
        clickable={!isLoading || currentPage + 1 !== lastPage}
      />
      <Icon
        iconName='chevrons-right'
        onClick={handleJumpToLast}
        color='dark'
        colorWeight='50'
        disabled={isLoading || currentPage + 1 === lastPage}
        hoverable={!isLoading || currentPage + 1 !== lastPage}
        clickable={!isLoading || currentPage + 1 !== lastPage}
      />
      <div className='current-page'>
        page
        <span>{isLoading ? '...' : currentPage + 1}</span>
      </div>
    </StyledPagination>
  )
}

export default DefaultPagination
