/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { css } from 'styled-components'
import { Theme } from './types'
interface StyledInputProps {
  theme?: Theme | null
}

const default_input_styles = css`
  background-color: 'none';
  outline-color: #5cd176;
  border-color: gray;
  border-radius: 6px;
`

const GetStyledInputStyles = ({ theme }: any): any => {
  const { background_color, outline_color, border_radius } = theme
  if (theme === 'none') return default_input_styles
  if (theme)
    return css`
      background-color: ${background_color};
      outline-color: ${outline_color};
      border-radius: ${border_radius};
    `
}

export const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  line-height: 40px;
  padding-left: 1.4rem;
  margin: 0;
  max-width: 100%;
  box-sizing: border-box;
  ${GetStyledInputStyles}
`
interface TextAreaProps {}
export const TextArea = styled.textarea<TextAreaProps>`
  width: 100%;
  height: 200px;
  outline-color: #5cd176;
  padding: 1.4rem;
  margin: 0;
  max-width: 100%;
  box-sizing: border-box;
  resize: none;
`

interface LabelProps {
  is_input_active: boolean
}
const inactive_input = css`
  background-color: none;
  font-size: medium;
  color: #a3a3a3;
`

const active_input = css`
  font-size: small;
  font-weight: 700;
  background-color: #fff;
  color: #5c5c5c;
`

const getLabelStyles = ({ is_input_active }: any): any => {
  if (is_input_active) return active_input
  if (!is_input_active) return inactive_input
}
export const Label = styled.label<LabelProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  outline: none;
  border: none;
  padding: 0.2rem 0.6rem 0.2rem 0.6rem;
  margin: 0;
  z-index: 1;
  transform: ${({ is_input_active }) =>
    is_input_active ? `translate(.8rem, -.7rem)` : `translate(1rem, .5rem)`};
  transition: transform 0.4s cubic-bezier(0.23, 0, 0, 1.01);
  &:hover {
    cursor: text;
  }
  box-sizing: border-box;
  font-size: small;

  ${getLabelStyles}
`

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  /* flex-basis: 1 1 50%; */
  margin: 0 1rem 1rem 0;
`
