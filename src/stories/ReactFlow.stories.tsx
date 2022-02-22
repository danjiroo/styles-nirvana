/* eslint-disable no-use-before-define */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { v4 } from 'uuid'

import { ReactFlowSample as ReactFlow, ReactFlowDnD, Question } from '..'
import styled from 'styled-components'

export default {
  title: 'Components/React Flow',
  component: ReactFlow,
} as ComponentMeta<typeof ReactFlow>

const ReactFlowSampleTemplate: ComponentStory<typeof ReactFlow> = (args) => (
  <ReactFlow {...args} />
)

const ReactFlowDnDTemplate: ComponentStory<typeof ReactFlowDnD> = (args) => (
  <StyledContainer>
    <ReactFlowDnD
      {...args}
      dndOptions={[
        {
          id: v4(),
          node_type: 'default',
          component: () => (
            <Question
              index={1}
              question='What is the best JavaScript framework?'
              type='choice'
              choices={['React', 'Vue', 'Angular', 'Svelte']}
            />
          ),
        },
        {
          id: v4(),
          node_type: 'default',
          component: () => (
            <Question
              index={1}
              question='Do you agree to our terms and conditions?'
              type='confirmation'
            />
          ),
        },
        {
          id: v4(),
          node_type: 'default',
          component: () => (
            <Question index={1} question='How old are you?' type='input' />
          ),
        },
      ]}
    />
  </StyledContainer>
)

export const Default = ReactFlowSampleTemplate.bind({})
Default.args = {}

export const DragAndDrop = ReactFlowDnDTemplate.bind({})
DragAndDrop.args = {}

const StyledContainer = styled.div`
  height: 90vh;
`
