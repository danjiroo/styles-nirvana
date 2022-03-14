/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import { Icon, List } from '../'

const DefaultActionsColumn: React.FC = () => (
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
            component: <button onClick={() => {}}>Edit</button>,
          },
          {
            id: '2',
            component: <button onClick={() => {}}>Preview</button>,
          },
          {
            id: '3',
            component: <button onClick={() => {}}>Delete</button>,
          },
        ]}
      />
    )}
  />
)

export default DefaultActionsColumn
