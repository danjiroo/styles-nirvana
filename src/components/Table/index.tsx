/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import { useTable, useSortBy, useRowSelect, usePagination } from 'react-table'

import ReactTable from './Shell/Table'

import { ExtendedColumns, TableProps } from './types'
import {
  StyledSortIconContainer,
  StyledTableContainer,
  StyledTable,
  StyledTableAndPaginationContainer,
} from './styles'
import { Checkbox, Icon } from '../'

import DefaultActionsColumn from './DefaultActionsColumn'
import DefaultPagination from './DefaultPagination'
import CustomComponentContainer from './CustomComponent'

const { Header, Row, Cell, Body } = ReactTable

const Table: React.FC<TableProps> = (props) => {
  const {
    columns = [],
    data = [],
    actions,
    options,
    isLoading = false,
    customComponent,
  } = props

  const { config } = options ?? {}
  const { enablePagination = true, initialState } = config ?? {}
  const { paginationRange, ...restInitialState } = initialState ?? {}

  const [updatedColumns, setUpdatedColumns] =
    useState<ExtendedColumns[]>(columns)

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    setHiddenColumns,
    getToggleAllRowsSelectedProps,
    rows,
    page,
  } = useTable(
    {
      columns: updatedColumns,
      data,
      initialState: restInitialState,
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
    options,
    actions,
    isLoading,
  }

  if (customComponent) {
    return (
      <StyledTableAndPaginationContainer>
        <CustomComponentContainer
          items={data}
          customComponent={customComponent}
        />
        {enablePagination && <DefaultPagination {...paginationProps} />}
      </StyledTableAndPaginationContainer>
    )
  }

  return (
    <StyledTableAndPaginationContainer>
      <StyledTableContainer className='table-container'>
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
                      className={
                        cell.column.id === 'actions' && 'table-actions'
                      }
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
      </StyledTableContainer>

      {enablePagination && <DefaultPagination {...paginationProps} />}
    </StyledTableAndPaginationContainer>
  )
}

export default Table
