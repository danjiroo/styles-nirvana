/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import { useTable, useSortBy, useRowSelect } from 'react-table'

import ReactTable from './Shell/Table'

import { ExtendedColumns, TableProps } from './types'
import { StyledSortIconContainer, StyledTable } from './styles'
import { Icon } from '../'

const { Header, Row, Cell, Body } = ReactTable

const Table: React.FC<TableProps> = (props) => {
  const { columns = [], data = [] } = props

  const [updatedColumns, setUpdatedColumns] = useState<ExtendedColumns[]>([])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setHiddenColumns,
    getToggleAllRowsSelectedProps,
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

  const gotColumns = () => {
    if (columns.length) {
      columns.map((column) => {
        if (!column.show) {
          setHiddenColumns((prev) => [...prev, column.id])
        }
      })

      const updatedColumns = columns.filter(
        (column) => column.id !== 'selection' && column.id !== 'actions'
      )

      setUpdatedColumns(updatedColumns)
    }
  }

  useEffect(gotColumns, [columns])

  const showSelectionColumn =
    columns?.find((column) => column.id === 'selection')?.show ?? false

  return (
    <StyledTable {...getTableProps()} {...props} showSelection={false}>
      <Header>
        {headerGroups.map((headerGroup) => (
          <Row {...headerGroup.getHeaderGroupProps()}>
            {showSelectionColumn && (
              <Cell header className='selection'>
                <input type='checkbox' {...getToggleAllRowsSelectedProps()} />
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
          prepareRow(row)
          return (
            <Row {...row.getRowProps()}>
              {showSelectionColumn && (
                <Cell className='selection'>
                  <input type='checkbox' {...row.getToggleRowSelectedProps()} />
                </Cell>
              )}

              {row.cells.map((cell) => (
                <Cell {...cell.getCellProps()}>{cell.render('Cell')}</Cell>
              ))}
            </Row>
          )
        })}
      </Body>
    </StyledTable>
  )
}

export default Table
