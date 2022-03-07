/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { css } from 'styled-components'

import { ThemeProvider } from '../../../../themes'
import { ReactFlowProps, StyledDropboxProps } from '../../types'

type Props = ReactFlowProps & ThemeProvider // or extend own props

export const StyledDnDContainer = styled.div<Props>`
  ${({ type = 'default' }) =>
    type !== 'default' &&
    css`
      display: flex;
      gap: 15px;
      width: 100%;
      height: 100%;

      > div {
        border: 1px solid ${({ theme }) => theme.colors.light[300]};
      }
    `}
`

export const StyledDropbox = styled.div<StyledDropboxProps>`
  position: relative;
  width: calc(100% - 350px);
  height: 100%;

  // inside the dropbox
  .react-flow__node {
    width: 300px;
    border: 1px solid #eee;
    padding: 0;
    margin: 0;
  }

  .question {
    margin-bottom: 0;
  }

  div.reactflow-div {
    ${({ dragStart = false }) =>
      dragStart &&
      css`
        background: rgba(236, 236, 236, 0.5);
      `}
  }

  div.initial {
    ${({ dragStart = false }) =>
      dragStart &&
      css`
        & {
          background: rgba(236, 236, 236, 0.5);
        }

        h2 {
          background: ${({ theme }) => theme.colors.primary[100]};
          color: #ffffff;
          background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23FFFFFFFF' stroke-width='4' stroke-dasharray='10' stroke-dashoffset='21' stroke-linecap='butt'/%3e%3c/svg%3e");
        }
      `}
  }

  .react-flow__edge-path-selector:hover + .react-flow__edge-path,
  .react-flow__edge-path:hover {
    stroke: #555;
    cursor: pointer;
    padding: 20px;
  }

  .reactflow-connector > path {
    stroke-width: 2;
  }

  // svg edge
  .react-flow__edges {
    z-index: 10;
  }

  .validationflow .react-flow__handle-connecting {
    background: #028d61;
  }

  [class*='react-flow__node-'].selected,
  [class*='react-flow__node-']:hover {
    border: 1px solid #777;
    box-shadow: none;
  }

  .save-btn-div {
    position: absolute;
    bottom: 15px;
    right: 15px;
    z-index: 30;
  }
`

export const StyledSidebar = styled.div`
  width: 350px;
  overflow: auto;
  height: 100%;

  &::-webkit-scrollbar {
    width: 3px;
    background: ${({ theme }) => theme.colors.primary[50]};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary[200]};
  }

  > div {
    margin: 15px 15px 0;
  }

  .react-flow-sidebar-options {
    display: flex;
    flex-direction: column;
    margin-top: 7px;
    margin-bottom: 7px;
  }

  [class*='react-flow__node-'] {
    width: auto;
    text-align: left;
    border: none;
    padding: 0;
  }
`

export const StyledInitialElement = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 99;
  justify-content: center;
  pointer-events: none;

  h2 {
    color: #c4c4c4ff;
    line-height: 200px;
    width: 500px;
    max-width: 90%;
    text-align: center;

    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23C4C4C4FF' stroke-width='4' stroke-dasharray='10' stroke-dashoffset='21' stroke-linecap='butt'/%3e%3c/svg%3e");
    border-radius: 13px;
  }
`

export const StyledCustomNodeContainer = styled.div`
  .custom-node-handle {
    z-index: 99;
    border: none;
    border-radius: 50%;
    width: 0.85rem;
    height: 0.85rem;
    background: #00e59e;
  }

  .center-left {
    margin-left: -3px;
  }

  .top-right {
    top: 30%;
    margin-right: -3px;
  }

  .bottom-right {
    top: 70%;
    margin-right: -3px;
  }
`

export interface StyledContainerProps {
  hasRule: boolean
  pointerPosition?: 'left' | 'center' | 'right'
}

const getPointerPosition = ({ pointerPosition = 'right' }) => {
  if (pointerPosition === 'left') return 'flex-start'
  if (pointerPosition === 'center') return 'center'
  if (pointerPosition === 'right') return 'flex-end'
}

export const StyledContainer = styled.div<StyledContainerProps>`
  position: relative;
  top: -10px;
  left: 10px;
  display: flex;
  flex-direction: column;
  align-items: ${getPointerPosition};

  .custom-edge-icon-btn {
    border-radius: 50%;
    background: ${({ hasRule }) => (hasRule ? '#00e59e' : '#98A2B3')};
  }

  .custom-edige-card {
    position: relative;
    top: 10px;
    width: 350px;
    max-width: 350px;
    padding: 20px;
    align-items: flex-start;

    .btm-btns {
      display: flex;
      justify-content: flex-end;
      gap: 5px;
    }
  }
`
