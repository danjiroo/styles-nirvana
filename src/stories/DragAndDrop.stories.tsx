/* eslint-disable no-use-before-define */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { v4 } from 'uuid'

import { ReactFlowSample, DND, DNDOption, Question } from '..'
import styled from 'styled-components'

export default {
  title: 'Components/Drag And Drop',
  component: DND,
} as ComponentMeta<typeof DND>

const DefaultDNDTemplate: ComponentStory<typeof DND> = (args) => (
  <StyledContainer>
    <DND.Provider {...args}>
      {/* <DND.Droppable droppableId='1' {...args}>
        <Input
          value=''
          type='textArea'
          placeholder='Drop me something'
          actions={{}}
          name='sample'
          iconLeft='edit-3'
        />
      </DND.Droppable> */}
      {/* <DND.Droppable droppableId='1' {...args} /> */}

      <DND.Droppable droppableId='1' {...args} />
      <div>
        <DND.Draggable draggableId='1' type='card'>
          <h2>I AM DRAGGABLE</h2>
        </DND.Draggable>
        <DND.Draggable draggableId='2' type='card'>
          <h2>I AM DRAGGABLE 2</h2>
        </DND.Draggable>
        <DND.Draggable draggableId='3' type='card'>
          <h2>I AM DRAGGABLE 3</h2>
        </DND.Draggable>
      </div>
    </DND.Provider>
  </StyledContainer>
)

const ReactFlowSampleTemplate: ComponentStory<typeof ReactFlowSample> = (
  args
) => <ReactFlowSample {...args} />

const ReactFlowDnDTemplate: ComponentStory<typeof DND> = (args) => {
  // temp
  const dndOptions: DNDOption[] = [
    {
      id: v4(),
      node_type: 'default',
      component: () => (
        <Question
          id='1'
          name='First Question'
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
          id='2'
          name='Second Question'
          question='Do you agree to our terms and conditions?'
          type='confirmation'
        />
      ),
    },
    {
      id: v4(),
      node_type: 'default',
      component: () => (
        <Question
          id='3'
          name='Third Question'
          question='How old are you?'
          type='input'
        />
      ),
    },
  ]

  return (
    <StyledContainer>
      <DND.Provider {...args}>
        <DND.ReactFlowSidebar dndOptions={dndOptions} />
        <DND.ReactFlowDropbox dndOptions={dndOptions} {...args} />
      </DND.Provider>
    </StyledContainer>
  )
}

export const Default = DefaultDNDTemplate.bind({})
Default.args = {}

export const SampleReactFlow = ReactFlowSampleTemplate.bind({})
SampleReactFlow.args = {}

export const ReactFlowDragAndDrop = ReactFlowDnDTemplate.bind({})
ReactFlowDragAndDrop.args = {
  type: 'reactflow',
}

const StyledContainer = styled.div`
  height: 90vh;

  > div {
    display: flex;
    gap: 15px;
    width: 100%;
    height: 100%;

    > div {
      border: 1px solid ${({ theme }) => theme.colors.light[300]};
    }
  }
`
