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
  width: 70%;
  height: 100%;

  // inside the dropbox
  .react-flow__node {
    width: 300px;
    border: 1px solid #eee;
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
    gap: 5px;
  }

  [class*='react-flow__node-'] {
    width: auto;
    text-align: left;
    border: none;
    padding: 0;
  }
`
