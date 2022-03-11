/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { css, keyframes } from 'styled-components'
import { MentionsInput } from 'react-mentions'

import { CustomTheme } from './types'

const default_input_styles = css`
  background-color: none;
  outline-color: ${({ theme }) => theme.colors.primary.DEFAULT};
  border-color: ${({ theme }) => theme.colors.dark['50']};
  border-radius: ${({ theme }) => theme.border.radius};
  height: ${({ theme }) => theme.size.xl.height};
`

interface StyledInputProps {
  customTheme?: CustomTheme
}

const GetStyledInputStyles = ({ customTheme }: StyledInputProps) => {
  if (!customTheme) return default_input_styles
  const { background_color, outline_color, border_radius, line_height } =
    customTheme
  if (customTheme)
    return css`
      background-color: ${background_color ? background_color : 'none'};
      outline-color: ${outline_color ? outline_color : '#5cd176'};
      border-radius: ${border_radius ? border_radius : '6px'};
      height: ${({ theme }) =>
        line_height ? theme.size[line_height].height : theme.size.xl.height};
    `
}

export const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  padding-left: 2.6rem;
  margin: 0;
  max-width: 100%;
  box-sizing: border-box;
  border-style: solid;
  border-width: 0.063rem;
  font-size: 80%;
  color: ${({ theme }) => theme.colors.dark[50]};
  -webkit-text-fill-color: none !important;
  ${GetStyledInputStyles}

  &::placeholder {
    color: ${({ theme }) => theme.colors.dark[50]};
  }
`
export const StyledTextArea = styled.textarea<StyledInputProps>`
  width: 100%;
  min-height: 8rem;
  outline-color: #5cd176;
  margin: 0;
  max-width: 100%;
  box-sizing: border-box;
  resize: none;
  padding: 1rem 1.5rem 0 2.6rem;
  border-style: solid;
  border-width: 0.063rem;
  font-size: 80%;
  font-family: inherit;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.dark[50]};

  &::placeholder {
    color: ${({ theme }) => theme.colors.dark[50]};
  }

  ${GetStyledInputStyles}
`

interface LabelProps {
  is_input_active: boolean
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
  /* font-size: 80%; */
  color: ${({ theme }) => theme.colors.dark[50]};
  padding-right: 1rem;
  animation: ${moveRerverse} 0.8s cubic-bezier(0.25, 0, 0.01, 1) forwards;
`

const active_input = css`
  /* font-size: small; */
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary[300]};
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
  padding: 0rem 0.3rem 0 0.3rem;
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
  margin: 0 0 1rem 0;
`

export const StyledIcon = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(0.6rem, 0.6rem);
`

export const StyledMentionsInput = styled(MentionsInput)`
  width: 100%;
  min-height: 8rem;
  max-width: 100%;
  margin: 0;
  padding: 1rem 1.5rem 0.5rem 2.6rem;
  box-sizing: border-box;
  resize: none;

  textarea {
    padding: 1rem 1.5rem 0.5rem 2.6rem !important;
    font-size: 80% !important;
    outline-color: #5cd176;
    color: ${({ theme }) => theme.colors.dark[50]} !important;
    border-style: solid;
    border-width: 0.063rem;

    ${GetStyledInputStyles}

    &::placeholder {
      color: ${({ theme }) => theme.colors.dark[50]} !important;
    }

    line-height: 150%;
  }

  div[class*='_highlighter'] {
    font-size: 80% !important;
    line-height: 150%;
    position: relative;
    z-index: 1;
    color: ${({ theme }) => theme.colors.primary['DEFAULT']} !important;
    /* font-weight: bold; */
  }

  div[class*='_suggestions'] {
    width: 150px;
    margin-top: 37px !important;
    margin-left: 32px !important;

    ul {
      box-shadow: 0 7px 10px rgba(0, 0, 0, 0.1);

      > li {
        font-size: 80% !important;
        color: ${({ theme }) => theme.colors.dark[50]} !important;

        > div.rendered-suggestion {
          width: 100%;
          padding: 5px !important;
        }
        > div.rendered-suggestion.focused {
          background: ${({ theme }) => theme.colors.primary[100]} !important;
        }
      }
    }
  }
`
