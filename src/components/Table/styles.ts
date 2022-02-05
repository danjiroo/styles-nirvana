/* eslint-disable indent */
import styled, { css } from 'styled-components'

import ReactTable from './Shell/Table'
import { TableProps, TableColumn } from './types'

export const getResponsiveHeaders = ({ columns }: TableProps) => {
  const headers = css`
    ${columns?.map(
      (column: TableColumn, i: number) =>
        `&:nth-child(${i + 1}):before {
            content: '${column.Header}';
          }`
    )}
  `

  return headers.join(';')
}

// export const StyledTableDivTest = styled.div`
//   overflow-y: auto;
//   height: 400px;
// `

export const StyledTable = styled(ReactTable)`
  border-spacing: 1;
  border-collapse: collapse;
  background: white;
  border-radius: 6px;
  width: 100%;
  max-width: 100%;
  /* margin: 0 auto; */
  position: relative;

  * {
    position: relative;
  }

  thead {
    position: sticky;
    top: 0;
    z-index: 10;
  }

  thead tr {
    height: 60px;
    background: #f5f5f5;
    font-size: 16px;
  }

  tbody {
    tr {
      height: 48px;
      /* border-bottom: 1px solid #e3f1d5; */
      &:last-child {
        border: 0;
      }
    }
  }

  th {
    color: #2d346d;
    font-weight: bold;
  }

  td,
  th {
    padding-left: 8px;
    text-align: left;
    &.l {
      text-align: right;
    }
    &.c {
      text-align: center;
    }
    &.r {
      text-align: center;
    }
  }

  @media screen and (max-width: 35.5em) {
    display: block;
    > *,
    tr,
    td,
    th {
      display: block;
    }

    thead {
      display: none;
    }
    tbody tr {
      height: auto;
      padding: 8px 0;
      td {
        padding-left: 45%;
        margin-bottom: 12px;
        &:last-child {
          margin-bottom: 0;
        }
        &:before {
          position: absolute;
          font-weight: 700;
          width: 40%;
          left: 10px;
          top: 0;
        }

        ${getResponsiveHeaders}
      }
    }
  }
`
