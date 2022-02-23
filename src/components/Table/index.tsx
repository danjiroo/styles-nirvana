/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useTable, useSortBy } from 'react-table'

import ReactTable from './Shell/Table'

import { TableProps } from './types'
import { StyledSortIconContainer, StyledTable } from './styles'
import { Icon } from '../'

const { Header, Row, Cell, Body } = ReactTable

const Table: React.FC<TableProps> = (props) => {
  const { columns = [], data = [] } = props

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    )

  return (
    <StyledTable {...getTableProps()} {...props}>
      <Header>
        {headerGroups.map((headerGroup) => (
          <Row {...headerGroup.getHeaderGroupProps()}>
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
