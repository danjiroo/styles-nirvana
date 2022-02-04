import React from 'react'

interface InputProps {
  placeholder?: string
  fontFamily?: string
}

const InputTest: React.FC<InputProps> = ({ placeholder }) => (
  <input
    type='text'
    placeholder={placeholder}
    style={{ fontFamily: 'Times New Roman' }}
  />
)

export default InputTest
