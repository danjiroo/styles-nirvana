/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import styled from 'styled-components'

interface CustomComponentContainerProps {
  items: Record<string, unknown>[]
  customComponent: (item: Record<string, any>) => void
}

const CustomComponentContainer: React.FC<CustomComponentContainerProps> = (
  props
) => {
  const { items = [], customComponent } = props

  const CustomComponent: any = customComponent

  return (
    <Container>
      {items?.length
        ? items?.map((item, index) => <CustomComponent {...item} key={index} />)
        : null}
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  width: 100%;
`

export default CustomComponentContainer
