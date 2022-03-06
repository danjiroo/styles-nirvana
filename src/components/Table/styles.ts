/* eslint-disable indent */
import styled, { css } from 'styled-components'

import ReactTable from './Shell/Table'
import { TableProps, ExtendedColumns } from './types'

export const getResponsiveHeaders = ({ columns }: TableProps) => {
  const headers = css`
    ${columns?.map(
      (column: ExtendedColumns, i: number) =>
        `&:nth-child(${i + 1}):before {
            content: '${column.Header}';
          }`
    )}
  `

  return headers.join(';')
}

export const StyledTableContainer = styled.div`
  position: relative;
`

export const StyledTable = styled(ReactTable)`
  border-spacing: 1;
  border-collapse: collapse;
  background: white;
  border-radius: 6px;
  width: 100%;
  max-width: 100%;
  /* margin: 0 auto; */
  position: relative;

  /* * {
    position: relative;
  } */

  thead {
    position: sticky;
    top: 0;
    z-index: 10;
    background: ${({ theme }) => theme.colors.light[100]};
    border-bottom: 1px solid #cccccc;

    // ! tbody scroll
    display: block;
    /* width: calc(100% - 1em); */
  }

  thead tr {
    height: 60px;
    font-size: 16px;
  }

  tbody {
    // ! tbody scroll
    display: block;
    overflow: auto;

    height: calc(100vh - 420px);

    tr {
      height: 48px;
      &:last-child {
        border: 0;
      }
    }
  }

  tbody tr:hover {
    background: ${({ theme }) => theme.colors.primary[50]};
    transition: all 0.2s linear;
  }

  tr {
    // ! tbody scroll
    display: table;
    width: 100%;
    table-layout: fixed;
  }

  th {
    color: ${({ theme }) => theme.colors.primary[300]};
    font-weight: bold;
    font-size: ${({ theme }) => theme.text.size.md.fontSize}px;
  }

  td {
    color: ${({ theme }) => theme.colors.dark[50]};
  }

  th.checkbox,
  td.checkbox {
    width: 70px;
    top: -9px;
    position: relative;
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
      position: relative;
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

export const StyledSortIconContainer = styled.span`
  display: inline-block;
  vertical-align: middle;
  padding-left: 10px;
`

export const StyledPagination = styled.div<Pick<TableProps, 'isLoading'>>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 30px 0;
  position: relative;
  color: ${({ theme }) => theme.colors.dark[50]};

  .current-page {
    position: absolute;
    right: 15px;

    > span {
      border: 1px solid #cccccc;
      padding: 7px 14px;
      margin-left: 10px;
      border-radius: 5px;
      font-size: 13px;
    }
  }

  .active-page {
    background: ${({ theme }) => theme.colors.primary[50]};
    padding: 17px;
    border-radius: 5px;
  }
`
