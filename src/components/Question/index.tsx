import React, { useState } from 'react'

import { StyledQuestion } from './styles'
import { QuestionProps } from './types'

import { Button, Input, Icon, List } from '../'

const Question: React.FC<QuestionProps> = (props) => {
  const {
    id,
    name = 'Question Title',
    question = 'Question goes right here',
    type = 'choice',
    multipleChoice = false,
    choices = [],
    onEdit,
    onPreview,
    onDelete,
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
                      <button onClick={() => onEdit?.(id)}>Edit</button>
                    ),
                  },
                  {
                    id: '2',
                    component: (
                      <button onClick={() => onPreview?.(id)}>Preview</button>
                    ),
                  },
                  {
                    id: '3',
                    component: (
                      <button onClick={() => onDelete?.(id)}>Delete</button>
                    ),
                  },
                ]}
              />
            )}
          />
        </span>
      </div>
      <div className='question-body'>
        <p>{question}</p>
        <div className='question-choices'>
          {type === 'choice' &&
            !!choices?.length &&
            choices.map((choice, index) => (
              <Button
                key={index}
                label={choice}
                layout='outline'
                colorWeight='200'
                hoverColorWeight='200'
                size='xs'
              />
            ))}
          {type === 'confirmation' && (
            <div className='confirmation-choices'>
              <Button
                size='xs'
                label='Yes'
                layout='outline'
                colorWeight='200'
                hoverColorWeight='200'
              />
              <Button
                size='xs'
                label='No'
                layout='outline'
                colorWeight='200'
                hoverColorWeight='200'
              />
            </div>
          )}
          {type === 'input' && (
            <Input
              type='text'
              value={answer}
              name='sample'
              iconLeft='activity'
              placeholder='Answer...'
              actions={{
                handleChange: (data) => {
                  console.log('', data)
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
