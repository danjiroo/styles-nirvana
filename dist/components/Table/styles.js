"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledTableAndPaginationContainer = exports.StyledPagination = exports.StyledSortIconContainer = exports.StyledTable = exports.StyledTableContainer = exports.getResponsiveHeaders = void 0;
/* eslint-disable indent */
const styled_components_1 = __importStar(require("styled-components"));
const Table_1 = __importDefault(require("./Shell/Table"));
const getResponsiveHeaders = ({ columns }) => {
    const headers = (0, styled_components_1.css) `
    ${columns === null || columns === void 0 ? void 0 : columns.map((column, i) => `&:nth-child(${i + 1}):before {
            content: '${column.Header}';
          }`)}
  `;
    return headers.join(';');
};
exports.getResponsiveHeaders = getResponsiveHeaders;
exports.StyledTableContainer = styled_components_1.default.div `
  position: relative;
  overflow: auto;
`;
exports.StyledTable = (0, styled_components_1.default)(Table_1.default) `
  border-spacing: 1;
  border-collapse: collapse;
  background: white;
  border-radius: ${({ theme }) => theme.border.radius};
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
    font-size: ${({ theme }) => theme.text.size.md.fontSize};
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

        ${exports.getResponsiveHeaders}
      }
    }
  }
`;
exports.StyledSortIconContainer = styled_components_1.default.span `
  display: inline-block;
  vertical-align: middle;
  padding-left: 10px;
`;
exports.StyledPagination = styled_components_1.default.div `
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
      border-radius: ${({ theme }) => theme.border.radius};
      font-size: 13px;
    }
  }

  .active-page {
    background: ${({ theme }) => theme.colors.primary[50]};
    padding: 5px;
    border-radius: ${({ theme }) => theme.border.radius};
  }

  .inactive,
  .active-page {
    width: auto;
  }
`;
exports.StyledTableAndPaginationContainer = styled_components_1.default.div `
  width: 100%;
`;
