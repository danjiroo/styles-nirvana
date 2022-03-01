/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable indent */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from 'react'
import { useTable, useSortBy, useRowSelect, usePagination } from 'react-table'

import ReactTable from './Shell/Table'

import { ExtendedColumns, TableProps } from './types'
import {
  StyledSortIconContainer,
  StyledTableContainer,
  StyledTable,
} from './styles'
import { Checkbox, Icon } from '../'

import DefaultActionsColumn from './DefaultActionsColumn'
import DefaultPagination from './DefaultPagination'

const { Header, Row, Cell, Body } = ReactTable

const Table: React.FC<TableProps> = (props) => {
  const {
    columns = [],
    data = [],
    initialState = {},
    config = {},
    pagination,
    actions,
  } = props
  const { enablePagination = true, paginationRange = 5 } = config

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
    page, // Instead of using 'rows', we'll use page, which has only the rows for the active page
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns: updatedColumns,
      data,
      initialState,
      // manualPagination: true,
      // pageCount: props.pagination?.totalCount,
    },
    useSortBy,
    usePagination,
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

  const paginationProps = {
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    pageIndex,
    pageSize,
    paginationRange,
    pagination,
    actions,
  }

  return (
    <StyledTableContainer>
      <StyledTable {...getTableProps()}>
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
          {(enablePagination ? page : rows).map((row) => {
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

      {enablePagination && <DefaultPagination {...paginationProps} />}
    </StyledTableContainer>
  )
}

export default Table
