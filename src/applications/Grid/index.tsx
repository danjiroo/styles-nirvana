/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'

import { Table } from '../../components'

import { makeData } from '../../utils'

import { GridApplicationConfig } from './types'

const Grid: React.FC = () => {
  const [config, setConfig] = useState<GridApplicationConfig>({})

  const data = useMemo(() => makeData(50), [])

  /* This is only temporary */
  const getAppConfig = async () => {
    const { data } = await axios.get('http://localhost:4001/appconfig')

    setConfig(data)
  }

  useEffect(() => {
    getAppConfig()
  }, [])

  return (
    <div>
      <h3>Atomic Grid [Application]</h3>
      <p style={{ paddingBottom: 15 }}>
        <i>Possibly another component aside from the Table component.</i>
      </p>
      {/* <Table columns={config?.data?.columns ?? []} data={data} /> */}
    </div>
  )
}

export default Grid
