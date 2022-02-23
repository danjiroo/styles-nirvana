/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect } from 'react'
import { IconProps } from './types'
import { StyledIconDiv } from './styles'
import { useDynamicSVGImport } from './useDynamicSVGImport'

// import { ReactComponent as TestSVG } from '../../assets/svg/mail.svg'

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

  const SVGComponent =
    require(`../../assets/svg/${iconName}.svg`).ReactComponent

  // let SVGComponent: any = null

  // useEffect(() => {
  //   const getIcon = async () => {
  //     SVGComponent = await require(`../../assets/svg/${iconName}.svg`)
  //       .ReactComponent
  //   }

  //   getIcon()
  // }, [iconName])

  return (
    <StyledIconDiv size={size} color={color} hoverable={hoverable}>
      {/* {loading && <></>}
      {error && <></>}
      {SvgIcon && <SvgIcon />} */}
      <SVGComponent />
    </StyledIconDiv>
  )
}

export default Icon
