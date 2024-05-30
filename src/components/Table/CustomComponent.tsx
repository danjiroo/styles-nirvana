/* eslint-disable indent */
/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

interface CustomComponentContainerProps {
  items: Record<string, unknown>[]
  customComponent: (item: Record<string, any>) => void
  sortOrder: 'ascending' | 'descending'
}

const CustomComponentContainer: React.FC<CustomComponentContainerProps> = (
  props
) => {
  const { items = [], sortOrder, customComponent } = props

  const [localItems, setLocalItems] = useState(items)

  const CustomComponent: any = customComponent

  useEffect(() => {
    setLocalItems(items)
  }, [sortOrder])

  useEffect(() => {
    setLocalItems(items)
  }, [items])

  return (
    <Container>
      {localItems?.length
        ? localItems?.map((item, index) => (
            <CustomComponent {...item} key={index} />
          ))
        : null}
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  width: 100%;
`

export default CustomComponentContainer
