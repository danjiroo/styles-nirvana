/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, ChangeEvent } from 'react'
import styled from 'styled-components'

export interface MentionsProps {
  inputRef: React.Ref<any>
  value: string
  onChange: (e: ChangeEvent) => void
  onFocus: () => void
  onClick: () => void
  onBlur: () => void
}

// TEST
const Mentions: React.FC<MentionsProps> = (props) => {
  const { inputRef, onChange, onFocus, onClick, onBlur, value } = props

  const [isOpen, setIsOpen] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    // console.log('@@ CHANGE EVENT', e)

    if (e.target.value.includes('@')) {
      //   console.log('OHYEAH', e.target.value)
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }

    onChange(e)
  }

  return (
    <>
      <StyledTextAreaMentions
        ref={inputRef}
        value={value}
        onChange={handleChange}
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
      ></StyledTextAreaMentions>
      {isOpen && <h1>im the suggestions</h1>}
    </>
  )
}

export default Mentions

const StyledTextAreaMentions = styled.textarea`
  width: 100%;
  height: 8rem;
  margin: 0;
  max-width: 100%;
  padding: 1rem 1.5rem 0.5rem 2.6rem;
  outline-color: ${({ theme }) => theme.colors.primary.DEFAULT};
  border: 0.063rem solid ${({ theme }) => theme.colors.dark['50']};
  border-radius: ${({ theme }) => theme.border.radius};
  resize: none;
  font-family: inherit;
  color: ${({ theme }) => theme.colors.dark[50]} !important;
  line-height: 150%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.dark[50]} !important;
  }
`
