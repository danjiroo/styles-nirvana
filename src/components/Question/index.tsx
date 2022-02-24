import React, { useState } from 'react'

import { StyledQuestion } from './styles'
import { QuestionProps } from './types'

import { Button, Input } from '../'

const Question: React.FC<QuestionProps> = (props) => {
  const {
    index,
    question = 'Question goes right here',
    type = 'choice',
    multipleChoice = false,
    choices = [],
  } = props
  const [answer, setAnswer] = useState('')

  return (
    <StyledQuestion {...props}>
      <div className='question-header'>
        <h3>Question {index}</h3>
        <h4>
          {multipleChoice ? 'Multiple' : 'Single'} {type}
        </h4>
        <span className='question-close'>x</span>
      </div>
      <div className='question-body'>
        <p>{question}</p>
        <div className='question-choices'>
          {type === 'choice' &&
            !!choices?.length &&
            choices.map((choice) => (
              <Button label={choice} colorWeight='200' />
            ))}
          {type === 'confirmation' && (
            <div className='confirmation-choices'>
              <Button label='Yes' colorWeight='200' />
              <Button label='No' colorWeight='200' />
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
