/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { css, keyframes } from 'styled-components'
import { Theme } from './types'
interface StyledInputProps {
  theme?: Theme | null
}

const default_input_styles = css`
  background-color: 'none';
  outline-color: #5cd176;
  border-color: #c5c5c5;
  border-radius: 6px;
`

interface StyledInputProps {
  customTheme?: Theme
}

const GetStyledInputStyles = ({ customTheme }: StyledInputProps) => {
  if (!customTheme) return default_input_styles
  const { background_color, outline_color, border_radius } = customTheme
  if (customTheme)
    return css`
      background-color: ${background_color};
      outline-color: ${outline_color};
      border-radius: ${border_radius};
    `
}

export const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  line-height: 40px;
  padding-left: 2rem;
  margin: 0;
  max-width: 100%;
  box-sizing: border-box;
  border-style: solid;
  -webkit-text-fill-color: none !important;
  ${GetStyledInputStyles}

  input:-webkit-autofill {
    background-color: white !important;
  }
  input:autofill-selected {
    border: 3px solid blue;
  }
  input:-internal-autofill-selected {
    background-color: red;
  }
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

const move = keyframes`
  0% { 
    transform: translate(1.6rem, 0.5rem);
    background-color: white;
  }
  20%{
    opacity: .2;
  }
  40% {  
    transform: translate(1.6rem, -.8rem);
    background-color: white;
  }
  100% {  
    transform: translate(1.6rem, -.5rem);
    background-color: white;
    opacity: 1;
  }
`

const moveRerverse = keyframes`
  0% { 
    transform: translate(1.6rem, -.5rem);
    background-color: white;
    opacity: 1;
  }
  20%{
    transform: translate(1.6rem, -.8rem);
    background-color: white;
  }
  40% {  
  }
  100% {  
    transform: translate(1.6rem, 0.7rem);
    background-color: white;
  }
`
const inactive_input = css`
  font-size: medium;
  color: #a3a3a3;
  transform: translate(1.6rem, 0.7rem);
  padding-right: 1rem;
  animation: ${moveRerverse} 0.8s cubic-bezier(0.25, 0, 0.01, 1) forwards;
`

const active_input = css`
  font-size: small;
  font-weight: 700;
  color: #5c5c5c;
  animation: ${move} 0.6s cubic-bezier(0.25, 0, 0.01, 1) forwards;
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
  padding: 0rem 0.6rem 0 0.6rem;
  margin: 0;
  z-index: 1;
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
  margin: 0 1rem 1rem 0;
`

export const StyledIcon = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(10px, 14px);
`
