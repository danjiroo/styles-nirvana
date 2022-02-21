/* eslint-disable no-use-before-define */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { v4 } from 'uuid'

import { ReactFlowSample as ReactFlow, ReactFlowDnD, Card, Button } from '..'
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
            <Card block>
              <h3>Question 1</h3>
              <b>Multiple Choice</b>
              <p>Lorem ipsum dolor sit amet, consectetur adipsicing elit?</p>
              <StyledButtonContainer>
                <Button label='Answer 1' />
                <Button label='Answer 2' />
                <Button label='Answer 3' />
                <Button label='Answer 4' />
              </StyledButtonContainer>
            </Card>
          ),
        },
        {
          id: v4(),
          node_type: 'default',
          component: () => (
            <Card block>
              <h3>Question 2</h3>
              <b>Multiple Choice</b>
              <p>Lorem ipsum dolor sit amet, consectetur adipsicing elit?</p>
              <StyledButtonContainer>
                <Button label='Answer 1' />
                <Button label='Answer 2' />
                <Button label='Answer 3' />
                <Button label='Answer 4' />
              </StyledButtonContainer>
            </Card>
          ),
        },
        {
          id: v4(),
          node_type: 'default',
          component: () => (
            <Card block>
              <h3>Question 3</h3>
              <b>Multiple Choice</b>
              <p>Lorem ipsum dolor sit amet, consectetur adipsicing elit?</p>
              <StyledButtonContainer>
                <Button label='Answer 1' />
                <Button label='Answer 2' />
                <Button label='Answer 3' />
                <Button label='Answer 4' />
              </StyledButtonContainer>
            </Card>
          ),
        },
        {
          id: v4(),
          node_type: 'default',
          component: () => (
            <Card block>
              <h3>Question 4</h3>
              <b>Multiple Choice</b>
              <p>Lorem ipsum dolor sit amet, consectetur adipsicing elit?</p>
              <StyledButtonContainer>
                <Button label='Answer 1' />
                <Button label='Answer 2' />
                <Button label='Answer 3' />
                <Button label='Answer 4' />
              </StyledButtonContainer>
            </Card>
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

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`
