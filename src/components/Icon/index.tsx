/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useCallback } from 'react'
import { IconProps } from './types'
import { StyledIconDiv } from './styles'
import { useDynamicSVGImport } from './useDynamicSVGImport'

const Icon: React.FC<IconProps> = ({
  color = 'primary',
  iconName = 'activity',
  size = 'md',
  hoverable = false,
}) => {
  const onCompleted = useCallback((data) => {}, [])

  const onError = useCallback(() => {}, [])

  const { error, loading, SvgIcon } = useDynamicSVGImport(iconName, {
    onCompleted,
    onError,
  })

  return (
    <StyledIconDiv size={size} color={color} hoverable={hoverable}>
      {loading && <></>}
      {error && <></>}
      {SvgIcon && <SvgIcon />}
    </StyledIconDiv>
  )
}

export default Icon
