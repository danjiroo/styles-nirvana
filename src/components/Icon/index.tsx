/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-extra-semi */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useCallback } from 'react'
import { IconProps } from './types'
import { StyledIconDiv } from './styles'
import { useDynamicSVGImport } from './useDynamicSVGImport'

import SVGPlaceholder from '../../assets/svg/activity.svg'

const Icon: React.FC<IconProps> = (props) => {
  const {
    // className,
    color = 'primary',
    iconName = 'activity',
    size = 'base',
    stroke = 'black',
    ...other
  } = props

  const onCompleted = useCallback((data) => {
    // alert('COMPLETEDDDDD -----')
  }, [])

  const onError = useCallback(() => {
    // alert('ERRORRRRR -----')
  }, [])

  const { error, loading, SvgIcon } = useDynamicSVGImport(iconName, {
    onCompleted,
    onError,
  })

  // const getIcon = () => {
  //   if (error) {
  //     return 'Error loading icon...'
  //   }
  //   if (loading) {
  //     return 'Loading...'
  //   }
  //   if (SvgIcon) {
  //     return <SvgIcon stroke={stroke} />
  //   }

  //   return <>Icons</>
  // }

  return (
    <StyledIconDiv size={size} color={color}>
      {loading && <></>}
      {error && <></>}
      {SvgIcon && <SvgIcon stroke={stroke} />}
    </StyledIconDiv>
  )
}

export default Icon
