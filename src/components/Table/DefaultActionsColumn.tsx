/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import { Icon, List } from '../'

const DefaultActionsColumn: React.FC<any> = (props) => (
  <Icon
    clickable
    hoverable
    hasDropdown
    iconName='more-horizontal'
    dropdown={() => (
      <List
        size='sm'
        position='right'
        hasPointer
        hoverable
        clickable
        asDropDown
        list={[
          {
            id: '1',
            component: (
              <button onClick={() => console.log('@debugButton Edit', props)}>
                Edit
              </button>
            ),
          },
          {
            id: '2',
            component: (
              <button
                onClick={() => console.log('@debugButton Preview', props)}
              >
                Preview
              </button>
            ),
          },
          {
            id: '3',
            component: (
              <button onClick={() => console.log('@debugButton Delete', props)}>
                Delete
              </button>
            ),
          },
        ]}
      />
    )}
  />
)

export default DefaultActionsColumn
