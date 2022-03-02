/* eslint-disable indent */
import styled from 'styled-components'
import { ThemeProvider } from '../../themes/types'

import { IconProps } from './types'

type StyleIconProps = IconProps & ThemeProvider

export const StyledIconContainer = styled.div<StyleIconProps>`
  position: relative;
  width: ${({ size = 'md', theme }) => theme.icon[size].height}px;
`

export const StyledIconDiv = styled.div<StyleIconProps>`
  width: ${({ size = 'md', theme }) => theme.icon[size].height}px;
  height: ${({ size = 'md', theme }) => theme.icon[size].height}px;
  cursor: ${({ clickable = false }) => (clickable ? 'pointer' : 'default')};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: ${({ disabled = false }) => (disabled ? 0.6 : 1)};

  > svg {
    width: 100%;
    height: 100%;
    stroke: ${({ color = 'primary', colorWeight = 'DEFAULT', theme }) =>
      theme.colors[color][colorWeight]};
  }

  > svg:hover {
    stroke: ${({ color = 'primary', theme, hoverable, disabled }) =>
      hoverable && !disabled && theme.colors[color][300]};
  }
`

export const StyledIconReference = styled.div`
  h1 {
    color: ${({ theme }) => theme.colors.primary.DEFAULT};
  }
  h2 {
    text-transform: uppercase;
  }
  ul {
    margin: 0 0 60px 0;
    padding: 30px 0 20px 30px;
    color: rgba(0, 0, 0, 0.5);
    border: 1px solid #d8e0e5;
    border-radius: 3px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  ul li {
    margin: 0 30px 20px 0;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  ul input {
    margin: 0;
    padding: 8px;
    line-height: 16px;
    font-size: 15px;
    width: 150px;
    height: 40px;
    border: 1px solid #bbbbbb;
    border-radius: 5px;
    background: #fff;
    outline: 0;
    cursor: pointer;
  }
  ul input:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary[200]};
    -webkit-box-shadow: inset 0 0 3px
      ${({ theme }) => theme.colors.primary[200]};
    box-shadow: inset 0 0 3px ${({ theme }) => theme.colors.primary[200]};
  }
  ul input:hover {
    -webkit-box-shadow: inset 0 0 3px
      ${({ theme }) => theme.colors.primary[200]};
    box-shadow: inset 0 0 3px ${({ theme }) => theme.colors.primary[200]};
  }
`
