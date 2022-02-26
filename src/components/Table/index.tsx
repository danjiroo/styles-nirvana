/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import { useTable, useSortBy, useRowSelect } from 'react-table'

import ReactTable from './Shell/Table'

import { ExtendedColumns, TableProps } from './types'
import { StyledSortIconContainer, StyledTable } from './styles'
import { Icon } from '../'

import ActionColumn from './ActionColumn'

const { Header, Row, Cell, Body } = ReactTable

const Table: React.FC<TableProps> = (props) => {
  const { columns = [], data = [] } = props

  const [updatedColumns, setUpdatedColumns] = useState<ExtendedColumns[]>(
    columns ?? []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setHiddenColumns,
    getToggleAllRowsSelectedProps,
    selectedFlatRows,
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
        (column) => column.id !== 'selection' && column.id !== 'actions'
      )

      setUpdatedColumns(updatedColumns)
    }
  }

  useEffect(onColumnsUpdate, [])

  console.log('@@selectedFlatRows', selectedFlatRows)

  const checkboxColumn = columns.find((column) => column.id === 'selection')
  const actionColumn = columns.find((column) => column.id === 'actions')

  return (
    <StyledTable {...getTableProps()} {...props}>
      <Header>
        {headerGroups.map((headerGroup) => (
          <Row {...headerGroup.getHeaderGroupProps()}>
            {checkboxColumn?.show && (
              <ActionColumn
                header
                actionType='checkbox'
                getToggleAllRowsSelectedProps={getToggleAllRowsSelectedProps}
              />
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
            {actionColumn?.show && (
              <ActionColumn
                header
                headerTitle={actionColumn.Header as string}
              />
            )}
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
                <ActionColumn
                  actionType='checkbox'
                  getToggleRowSelectedProps={getToggleRowSelectedProps}
                />
              )}

              {row.cells.map((cell) => (
                <Cell {...cell.getCellProps()}>{cell.render('Cell')}</Cell>
              ))}

              {actionColumn?.show && <ActionColumn />}
            </Row>
          )
        })}
      </Body>
    </StyledTable>
  )
}

export default Table
