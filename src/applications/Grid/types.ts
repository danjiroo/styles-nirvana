/* eslint-disable @typescript-eslint/no-explicit-any */
import { ExtendedColumns } from '../../components/Table/types'

export interface GridApplicationConfig {
  data?: {
    timeout_ms?: number
    columns?: ExtendedColumns[]
  }
}

export interface GridProps {
  appConfig: any
  queryParams: any
  actions?: {
    onFetch?: (params: any, accessToken: string) => Promise<any>
  }
  customComponent?: (item: Record<string, any>) => void
}
