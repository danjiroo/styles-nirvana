import React from 'react'
import { useTable } from 'react-table'

import ReactTable from './Shell/Table'

import { TableProps } from './types'
import { StyledTable } from './styles'

const { Header, Row, Cell, Body } = ReactTable

const Table: React.FC<TableProps> = (props) => {
  const { columns = [], data = [] } = props

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    })

  return (
    <StyledTable {...getTableProps()} {...props}>
      <Header>
        {headerGroups.map((headerGroup) => (
          <Row {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Cell header {...column.getHeaderProps()}>
                {column.render('Header')}
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
