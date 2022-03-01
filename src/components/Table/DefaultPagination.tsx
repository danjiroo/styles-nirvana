/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useState } from 'react'

import { Icon } from '../'

import { StyledPagination } from './styles'

interface DefaultPaginationProps {
  [key: string]: any
}

const DefaultPagination: React.FC<DefaultPaginationProps> = ({
  canPreviousPage,
  canNextPage,
  pageCount,
  gotoPage,
  nextPage,
  previousPage,
  pageIndex,
  paginationRange,
  pagination,
  actions,
  // pageOptions,
  // pageSize,
  // setPageSize,
}) => {
  const {
    handleNext,
    handlePrevious,
    handleJumpToFirst,
    handleJumptToLast,
    handleJumpToPage,
    handleChecked,
  } = actions
  const { currentPage, currentResultCount, totalPageCount, totalResultCount } =
    pagination ?? {}

  const endRange =
    paginationRange > totalPageCount ? totalPageCount : paginationRange

  const [range, setRange] = useState({
    start: 1,
    end: endRange,
  })

  const createRange = (start: number, end: number) => {
    const length = end - start + 1

    return Array.from({ length }, (_, num) => num + start)
  }

  const handlers = {
    goToPage: useCallback((page: number) => {
      handleJumpToPage()
      gotoPage(page - 1)
    }, []),

    jumpToFirst: useCallback(() => {
      handleJumpToFirst()

      gotoPage(0)
      canPreviousPage &&
        setRange({
          start: 1,
          end: endRange ?? 1,
        })
    }, []),

    previous: useCallback(() => {
      handlePrevious()

      previousPage()
      canPreviousPage &&
        range.start !== 1 &&
        setRange({
          start: range.start - 1,
          end: range.end - 1,
        })
    }, []),

    next: () =>
      useCallback(() => {
        handleNext()

        nextPage()
        canNextPage &&
          range.end !== pageCount &&
          setRange({
            start: range.start + 1,
            end: range.end + 1,
          })
      }, []),

    jumpToLast: useCallback(() => {
      handleJumptToLast()

      gotoPage(pageCount - 1)
      canNextPage &&
        setRange({
          start: pageCount - endRange,
          end: pageCount,
        })
    }, []),
  }

  return (
    <StyledPagination>
      <Icon
        iconName='chevrons-left'
        onClick={handlers.jumpToFirst}
        disabled={!canPreviousPage}
        color='dark'
        colorWeight='50'
        clickable
        hoverable
      />
      <Icon
        iconName='chevron-left'
        onClick={handlers.previous}
        disabled={!canPreviousPage}
        color='dark'
        colorWeight='50'
        clickable
        hoverable
      />
      {createRange(range.start, range.end)?.map((page) => (
        <Icon
          key={page}
          iconName={String(page)}
          onClick={() => handlers.goToPage(page)}
          color='dark'
          colorWeight='50'
          clickable
          hoverable
          className={page === pageIndex + 1 ? 'active-page' : ''}
        />
      ))}
      <Icon
        iconName='chevron-right'
        onClick={handlers.next}
        disabled={!canNextPage}
        color='dark'
        colorWeight='50'
        clickable
        hoverable
      />
      <Icon
        iconName='chevrons-right'
        onClick={handlers.jumpToLast}
        disabled={!canNextPage}
        color='dark'
        colorWeight='50'
        clickable
        hoverable
      />
      <div className='current-page'>
        page
        <span>{pageIndex + 1}</span>
      </div>
    </StyledPagination>
  )
}

export default DefaultPagination
