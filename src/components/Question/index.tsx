/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'

import { StyledQuestion } from './styles'
import { QuestionProps } from './types'

import { Button, Input, Icon, List } from '../'
import ParsedText from './ParsedText'

const Question: React.FC<QuestionProps> = (props) => {
  const {
    id,
    name = 'Question Title',
    question = 'Question goes right here',
    type = 'choice',
    multipleChoice = false,
    choices = [],
    handleEditQuestion,
    handlePreviewQuestion,
    handleRemoveQuestion,
  } = props
  const [answer, setAnswer] = useState('')

  return (
    <StyledQuestion {...props} className='question'>
      <div className='question-header'>
        <h3>{name}</h3>
        <h4>
          {multipleChoice ? 'Multiple' : 'Single'} {type}
        </h4>
        <span className='question-close'>
          <Icon
            iconName='more-horizontal'
            hoverable
            clickable
            hasDropdown
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
                      <button onClick={() => handleEditQuestion?.(id)}>
                        Edit
                      </button>
                    ),
                  },
                  {
                    id: '2',
                    component: (
                      <button onClick={() => handlePreviewQuestion?.(id)}>
                        Preview
                      </button>
                    ),
                  },
                  {
                    id: '3',
                    component: (
                      <button onClick={() => handleRemoveQuestion?.(id)}>
                        Delete
                      </button>
                    ),
                  },
                ]}
              />
            )}
          />
        </span>
      </div>
      <div className='question-body'>
        <ParsedText data={question ?? ''} />
        <div className='question-choices'>
          {type.toLowerCase() === 'choice' &&
            !!choices?.length &&
            choices.map((choice, index) => (
              <Button
                key={index}
                label={choice}
                layout='outline'
                colorWeight='200'
                hoverColorWeight='DEFAULT'
                size='xs'
              />
            ))}
          {type.toLowerCase() === 'confirmation' && (
            <div className='confirmation-choices'>
              <Button
                size='xs'
                label='Yes'
                layout='outline'
                colorWeight='200'
                hoverColorWeight='DEFAULT'
              />
              <Button
                size='xs'
                label='No'
                layout='outline'
                colorWeight='200'
                hoverColorWeight='DEFAULT'
              />
            </div>
          )}
          {type.toLowerCase() === 'input' && (
            <Input
              id='question-id'
              type='text'
              value={answer}
              name='sample'
              iconLeft='activity'
              placeholder='Answer...'
              actions={{
                handleChange: (data) => {
                  setAnswer(data?.value ?? '')
                },
              }}
            />
          )}
        </div>
      </div>
    </StyledQuestion>
  )
}

export default Question
