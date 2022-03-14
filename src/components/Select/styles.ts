/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { css, keyframes } from 'styled-components'

import { ThemeProvider } from '../../themes'
import { SelectProps } from './types'

const getStyles = (props: SelectProps & ThemeProvider) => {
  const { label, error, animatedLabel = false } = props

  return css`
    .select-component {
      margin: ${animatedLabel
        ? 0
        : label && !error
        ? '15px 0'
        : label && error
        ? '25px 0'
        : !label && error
        ? '0 0 25px'
        : '5px 0'};
    }

    .select-label {
      top: ${label && !error ? '-5px' : label && error ? '5px' : 0};
    }
    .select-error {
      bottom: ${label && !error ? '-5px' : label && error ? '5px' : 0};
    }
  `
}

export const StyledSelectContainer = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  .select-icon-container {
    padding-right: 5px;
    margin-top: ${({ label, error }: any) => (!label && error ? '-25px' : 0)};
  }

  > * {
    transition: all 0.2s ease;
  }
`

export const StyledField = styled.div<any>`
  position: relative;
  width: 100%;
  font-size: 80%;

  ${getStyles}

  .select-label {
    font-size: 12px;
    position: absolute;
  }

  span.select-error {
    color: ${({ theme }) => theme.colors.danger.DEFAULT};
    font-size: 12px;
    position: absolute;
    bottom: 2px;
  }

  span.select-required {
    color: ${({ theme }) => theme.colors.danger.DEFAULT};
    font-size: 12px;
    position: relative;
    bottom: 0;
  }

  div[class*='-control'] {
    min-height: ${({ theme, size = 'xl' }) => theme.size[size].height};
    max-height: ${({ theme, size = 'xl' }) => theme.size[size].height};
    border-radius: ${({ theme }) => theme.border.radius};
  }

  div[class*='IndicatorsContainer'] {
    min-height: ${({ theme, size = 'xl' }) => theme.size[size].height};
    max-height: ${({ theme, size = 'xl' }) => theme.size[size].height};
  }

  div[class*='ValueContainer'] {
    top: -1px;
    padding-left: ${({ innerIcon = false }) => (innerIcon ? '40px' : '5px')};
  }

  .select-icon-container.inner-icon {
    position: absolute;
    top: 50%;
    z-index: 10;
    left: 10px;
    transform: translateY(-50%);
    opacity: 0.1;
  }
`

interface LabelProps {
  isInputActive: boolean
}

const move = keyframes`
  0% { 
    transform: translate(2.4rem, 0.5rem);
    background-color: white;
  }
  20%{
    opacity: .2;
  }
  40% {  
    transform: translate(2.4rem, -.8rem);
    background-color: white;
  }
  100% {  
    transform: translate(2.4rem, -.4rem);
    background-color: white;
    opacity: 1;
  }
`

const moveRerverse = keyframes`
  0% { 
    transform: translate(2.4rem, 0.8rem);
    background-color: white;
    opacity: 1;
  }
  20%{
    transform: translate(2.4rem, -.8rem);
    background-color: white;
  }

  100% {  
    transform: translate(2.4rem, .78rem);
    background-color: white;
  }
`

const inactive_input = css`
  color: ${({ theme }) => theme.colors.dark[50]};
  padding-right: 1rem;
  animation: ${moveRerverse} 0.8s cubic-bezier(0.25, 0, 0.01, 1) forwards;
`

const active_input = css`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary[300]};
  animation: ${move} 0.6s cubic-bezier(0.25, 0, 0.01, 1) forwards;
`

const getLabelStyles = ({ isInputActive }: any): any => {
  if (isInputActive) return active_input
  if (!isInputActive) return inactive_input
}

export const Label = styled.label<LabelProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  outline: none;
  border: none;
  padding: 0rem 0.3rem 0 0.3rem;
  margin: 0;
  z-index: 100;

  &:hover {
    cursor: text;
  }
  box-sizing: border-box;
  font-size: small;

  ${getLabelStyles}
`
