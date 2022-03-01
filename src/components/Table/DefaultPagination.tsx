/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import { Icon } from '../'

import { StyledPagination } from './styles'

interface DefaultPaginationProps {
  [key: string]: any
}

const DefaultPagination: React.FC<DefaultPaginationProps> = (props) => {
  const {
    canPreviousPage,
    canNextPage,
    // pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    // setPageSize,
    pageIndex,
    // pageSize,
    range,
    setRange,
    paginationRange,
  } = props
  const createRange = (start: number, end: number) => {
    const length = end - start + 1

    return Array.from({ length }, (_, num) => num + start)
  }

  return (
    <StyledPagination>
      <Icon
        iconName='chevrons-left'
        onClick={() => {
          gotoPage(0)
          canPreviousPage &&
            setRange({
              start: 1,
              end: paginationRange ?? 1,
            })
        }}
        disabled={!canPreviousPage}
        color='dark'
        colorWeight='50'
        clickable
        hoverable
      />
      <Icon
        iconName='chevron-left'
        onClick={() => {
          previousPage()
          canPreviousPage &&
            range.start !== 1 &&
            setRange({
              start: range.start - 1,
              end: range.end - 1,
            })
        }}
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
          onClick={() => gotoPage(page - 1)}
          color='dark'
          colorWeight='50'
          clickable
          hoverable
          className={page === pageIndex + 1 ? 'active-page' : ''}
        />
      ))}
      <Icon
        iconName='chevron-right'
        onClick={() => {
          nextPage()
          canNextPage &&
            range.end !== pageCount &&
            setRange({
              start: range.start + 1,
              end: range.end + 1,
            })
        }}
        disabled={!canNextPage}
        color='dark'
        colorWeight='50'
        clickable
        hoverable
      />
      <Icon
        iconName='chevrons-right'
        onClick={() => {
          gotoPage(pageCount - 1)
          canNextPage &&
            setRange({
              start: pageCount - paginationRange,
              end: pageCount,
            })
        }}
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
