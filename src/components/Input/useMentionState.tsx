/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from 'react'

const useMentionState = (initialValue: string): any => {
  const [value, setValue] = useState(initialValue)

  const onChange = useCallback((_, newValue) => setValue(newValue), [setValue])
  const onAdd = useCallback((...args) => console.log(...args), [])

  return [value, onChange, onAdd]
}

export default useMentionState
