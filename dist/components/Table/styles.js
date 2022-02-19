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
exports.StyledTable = exports.getResponsiveHeaders = void 0;
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
exports.StyledTable = (0, styled_components_1.default)(Table_1.default) `
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

        ${exports.getResponsiveHeaders}
      }
    }
  }
`;
