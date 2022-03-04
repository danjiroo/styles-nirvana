import styled from 'styled-components'

import { ThemeProvider } from '../../../../themes'

type Props = ThemeProvider // or extend own props

export const StyledDnDContainer = styled.div<Props>`
  display: flex;
  gap: 15px;
  width: 100%;
  height: 100%;

  > div {
    border: 1px solid ${({ theme }) => theme.colors.light[300]};
  }
`

export const StyledDropbox = styled.div`
  position: relative;
  width: 70%;
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

  /* [class*='react-flow__node-'].selected,
  [class*='react-flow__node-']:hover {
    border: none;
    box-shadow: none;
  } */
`

export const StyledSidebar = styled.div`
  width: 30%;
  overflow: auto;
  height: 100%;

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

    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='13' ry='13' stroke='%23C4C4C4FF' stroke-width='6' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 13px;
  }
`
