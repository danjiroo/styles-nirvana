/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable indent */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from 'react'
import { useTable, useSortBy, useRowSelect, usePagination } from 'react-table'

import ReactTable from './Shell/Table'

import { ExtendedColumns, TableProps } from './types'
import { StyledSortIconContainer, StyledTable } from './styles'
import { Checkbox, Icon } from '../'

import DefaultActionsColumn from './DefaultActionsColumn'

const { Header, Row, Cell, Body } = ReactTable

const Table: React.FC<TableProps> = (props) => {
  const { columns = [], data = [] } = props

  const [updatedColumns, setUpdatedColumns] =
    useState<ExtendedColumns[]>(columns)

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    // selectedFlatRows,
    setHiddenColumns,
    getToggleAllRowsSelectedProps,

    // pagination react-table
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page
    // canPreviousPage,
    // canNextPage,
    // pageOptions,
    // pageCount,
    // gotoPage,
    // nextPage,
    // previousPage,
    // setPageSize,
    // state: { pageIndex, pageSize },
  } = useTable(
    {
      // @ts-ignore
      columns: updatedColumns,
      data,
      initialState: {
        hiddenColumns: [],
        // pageIndex: 2,
      },
    },
    useSortBy,
    // usePagination,
    useRowSelect
  )

  const onColumnsUpdate = () => {
    if (columns.length) {
      columns.map((column) => {
        if (!column.show) {
          // @ts-ignore
          setHiddenColumns((prev) => [...prev, column.id])
        }
      })

      const updatedColumns = columns.filter(
        ({ id, show }) => id !== 'selection' && show
      )

      setUpdatedColumns(updatedColumns)
    }
  }

  useEffect(onColumnsUpdate, [columns])

  const getColumn = (columnId: string) =>
    columns.find((column) => column.id === columnId)

  const checkboxColumn = getColumn('selection')
  const actionsColumn = getColumn('actions')

  const CheckboxColumnComponent: React.ElementType =
    checkboxColumn?.Cell ?? Checkbox

  const ActionsColumnComponent: React.ElementType = actionsColumn?.Cell
    ? actionsColumn?.Cell
    : DefaultActionsColumn

  return (
    <>
      <StyledTable {...getTableProps()} {...props}>
        <Header>
          {headerGroups.map((headerGroup) => (
            <Row {...headerGroup.getHeaderGroupProps()}>
              {checkboxColumn?.show && (
                <Cell header className='checkbox'>
                  <CheckboxColumnComponent
                    {...getToggleAllRowsSelectedProps?.()}
                  />
                </Cell>
              )}

              {headerGroup.headers.map((column) => (
                <Cell
                  header
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{ width: column.width }}
                >
                  {column.render('Header')}
                  <StyledSortIconContainer>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <Icon iconName='chevron-down' size='xs' />
                      ) : (
                        <Icon iconName='chevron-up' size='xs' />
                      )
                    ) : null}
                  </StyledSortIconContainer>
                </Cell>
              ))}
            </Row>
          ))}
        </Header>
        <Body {...getTableBodyProps()}>
          {rows.map((row) => {
            const { getToggleRowSelectedProps } = row
            prepareRow(row)
            return (
              <Row {...row.getRowProps()}>
                {checkboxColumn?.show && (
                  <Cell className='checkbox'>
                    <CheckboxColumnComponent
                      {...getToggleRowSelectedProps?.()}
                    />
                  </Cell>
                )}

                {row.cells.map((cell) => (
                  <Cell
                    className={cell.column.id === 'actions' && 'table-actions'}
                    {...cell.getCellProps()}
                    style={{
                      width: cell.column.width,
                    }}
                  >
                    {cell.column.id === 'actions' ? (
                      <ActionsColumnComponent {...cell} />
                    ) : (
                      cell.render('Cell')
                    )}
                  </Cell>
                ))}
              </Row>
            )
          })}
        </Body>
      </StyledTable>
      {/* 
      <div className='pagination'>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type='number'
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div> */}
    </>
  )
}

export default Table
