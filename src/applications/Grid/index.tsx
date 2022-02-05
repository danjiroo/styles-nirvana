import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'

import { Table } from '../../components'

import { makeData } from '../../utils'

import { GridApplicationConfig } from './types'

// import { RenderMachine } from 'storybook-xstate-addon/RenderMachine';

const Grid: React.FC = () => {
  const [config, setConfig] = useState<GridApplicationConfig>({})

  const data = useMemo(() => makeData(50), [])

  console.log('@config', config)

  // const redditMachine: any = createMachine({
  //   id: 'reddit',
  //   initial: 'idle',
  //   states: {
  //     idle: {
  //       entry: () => console.log('redditMachine idle'),
  //       on: {
  //         NEXT: 'step1',
  //       },
  //     },
  //     step1: {
  //       entry: () => console.log('redditMachine step1'),
  //       on: {
  //         NEXT: 'step2',
  //         PREVIOUS: 'idle',
  //       },
  //     },
  //     step2: {
  //       entry: () => console.log('redditMachine step2'),
  //       on: {
  //         NEXT: 'step3',
  //         PREVIOUS: 'step1',
  //       },
  //     },
  //     step3: {
  //       entry: () => console.log('redditMachine step3'),
  //       on: {
  //         NEXT: 'done',
  //         PREVIOUS: 'step2',
  //       },
  //     },
  //     done: {
  //       entry: () => console.log('redditMachine done'),
  //       type: 'final',
  //     },
  //   },
  //   context: {},
  // })

  // const [state] = useMachine(redditMachine)

  // return <RenderMachine machine={redditMachine} />;

  /* This is a spike for react-query */

  // const {
  //   data: reactQueryData,
  //   error,
  //   isLoading,
  //   isError,
  // } = getAppConfig({
  //   refetch: true,
  //   id: 'grid',
  // });

  // if (isLoading) {
  //   return <div style={{ fontSize: 100 }}>Loading (test)...</div>;
  // }
  // if (isError) {
  //   return <div>Error! {error.message}</div>;
  // }

  // const { columns: appConfigColumns } = reactQueryData ?? {};

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
      <Table columns={config?.data?.columns ?? []} data={data} />
    </div>
  )
}

export default Grid
