/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react'

import { UseDynamicSVGImportOptions } from './types'

export function useDynamicSVGImport(
  iconName: string,
  options: UseDynamicSVGImportOptions = {}
) {
  const ImportedIconRef = useRef<React.FC<React.SVGProps<SVGSVGElement>>>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error>()

  const { onCompleted, onError } = options

  useEffect(() => {
    setLoading(true)

    const importIcon = async (): Promise<void> => {
      try {
        ImportedIconRef.current = (
          await import(`../../assets/svg/${iconName}.svg`)
        ).ReactComponent
        onCompleted?.(iconName, ImportedIconRef.current)
      } catch (err: any) {
        onError?.(err)
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    importIcon()
  }, [iconName])

  return { error, loading, SvgIcon: ImportedIconRef.current }
}
