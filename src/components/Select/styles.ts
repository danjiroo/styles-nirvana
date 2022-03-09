/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { css } from 'styled-components'

import { ThemeProvider } from '../../themes'
import { SelectProps } from './types'

const getStyles = (props: SelectProps & ThemeProvider) => {
  const { label, error } = props

  return css`
    .select-component {
      margin: ${label && !error
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
  padding-left: ${({ icon }: any) => (icon ? 5 : 0)}px;
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
  }
`
