/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import cn from 'classnames'

import ReactTable from './Shell/Table'

import { Checkbox } from '../'
import { StyledCheckboxContainer } from './styles'

const { Cell } = ReactTable

interface SelectionColumnProps {
  className?: string
  actionType?: 'actions' | 'checkbox'
  header?: boolean
  headerTitle?: string
  getToggleAllRowsSelectedProps?: any
  getToggleRowSelectedProps?: any
}

const SelectionColumn: React.FC<SelectionColumnProps> = ({
  getToggleAllRowsSelectedProps,
  getToggleRowSelectedProps,
  actionType = 'actions',
  className,
  header = false,
  headerTitle = 'Actions',
}) => {
  const renderColumn = () => {
    if (actionType === 'checkbox') {
      return header ? (
        <StyledCheckboxContainer>
          <Checkbox {...getToggleAllRowsSelectedProps?.()} />
        </StyledCheckboxContainer>
      ) : (
        <StyledCheckboxContainer>
          <Checkbox {...getToggleRowSelectedProps?.()} />
        </StyledCheckboxContainer>
      )
    }

    if (actionType === 'actions') {
      return header ? headerTitle : <>Buttons</>
    }
  }

  return (
    <Cell header={header} className={cn(actionType, className)}>
      {renderColumn()}
    </Cell>
  )
}

export default SelectionColumn
