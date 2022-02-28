/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable indent */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from 'react'
import { useTable, useSortBy, useRowSelect } from 'react-table'

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
    rows,
    prepareRow,
    setHiddenColumns,
    getToggleAllRowsSelectedProps,
    // selectedFlatRows,
  } = useTable(
    {
      // @ts-ignore
      columns: updatedColumns,
      data,
      initialState: {
        hiddenColumns: [],
      },
    },
    useSortBy,
    useRowSelect
  )

  const onColumnsUpdate = () => {
    if (columns.length) {
      columns.map((column) => {
        if (!column.show) {
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

  const CheckboxColumnComponent = checkboxColumn?.Cell ?? Checkbox

  const ActionsColumnComponent = actionsColumn?.Cell
    ? actionsColumn?.Cell
    : DefaultActionsColumn

  return (
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
                  <CheckboxColumnComponent {...getToggleRowSelectedProps?.()} />
                </Cell>
              )}

              {row.cells.map((cell) => (
                <Cell
                  className={cell.column.id === 'actions' && 'table-actions'}
                  {...cell.getCellProps()}
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
  )
}

export default Table
