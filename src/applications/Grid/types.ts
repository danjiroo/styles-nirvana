import { ExtendedColumns } from '../../components/Table/types'

export interface GridApplicationConfig {
  data?: {
    timeout_ms?: number
    columns?: ExtendedColumns[]
  }
}
