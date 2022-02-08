import styled, { css } from 'styled-components'
import { ThemeProvider } from '../../themes'

interface StyledContainerProps {
  size: string
}

interface GetContainerStyles extends ThemeProvider, StyledContainerProps {}

const getContainerStyles = (props: GetContainerStyles) => {
  const { theme, size = 'sm' } = props
  const { size: new_size } = theme
  console.log('StyledContainer', props)

  if (size) {
    return css`
      //@ts-ignore
      width: ${new_size[size]};
    `
  }
  return css`
    width: 100%;
  `
}

export const StyledContainer = styled.div<StyledContainerProps>`
  ${getContainerStyles}/* background-color: red; */
`
