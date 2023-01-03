/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState, useEffect, useRef } from 'react'

import { IconProps } from './types'
import { StyledIconContainer, StyledIconDiv } from './styles'

const Icon: React.FC<IconProps> = (props) => {
  const {
    iconName = 'activity',
    hasDropdown = false,
    dropdown,
    disabled = false,
  } = props
  const { className, ...rest } = props

  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  const SVGComponent =
    isNaN(Number(iconName)) &&
    require(`../../assets/svg/${iconName}.svg`).ReactComponent

  const handleClick = () => {
    if (disabled) return

    setIsOpen(!isOpen)
  }

  const handleClickOutside = () => {
    const handleClick = (e: any) => {
      // @ts-ignore
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClick, true)

    return () => {
      document.removeEventListener('click', handleClick, true)
    }
  }

  useEffect(handleClickOutside, [])

  const DropdownComponent: any = dropdown

  return (
    <StyledIconContainer ref={ref} {...rest} className={className}>
      <StyledIconDiv {...rest} onClick={handleClick}>
        {isNaN(Number(iconName)) ? <SVGComponent /> : iconName}
      </StyledIconDiv>
      {isOpen && hasDropdown && <DropdownComponent />}
    </StyledIconContainer>
  )
}

export default Icon
