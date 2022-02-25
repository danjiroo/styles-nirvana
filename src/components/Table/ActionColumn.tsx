import React from 'react'
import cn from 'classnames'

import ReactTable from './Shell/Table'

const { Cell } = ReactTable

interface SelectionColumnProps {
  className?: string
  actionType?: 'actions' | 'checkbox'
  header?: boolean
  headerTitle?: string
  getToggleAllRowsSelectedProps?: () => void
  getToggleRowSelectedProps?: () => void
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
      return (
        <input
          type='checkbox'
          {...(header
            ? getToggleAllRowsSelectedProps?.()
            : getToggleRowSelectedProps?.())}
        />
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
