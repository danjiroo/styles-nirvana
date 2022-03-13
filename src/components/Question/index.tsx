/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import parse from 'html-react-parser'
import { Link } from 'react-router-dom'

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
        {/* <p>{question}</p> */}
        {parse(question, {
          replace: (domNode: any) => {
            if (domNode.name === 'a') {
              const node = domNode.children[0]

              return (
                <Link
                  to={domNode.attribs.href}
                  className={
                    node.data[0] === '#'
                      ? 'text-green-400'
                      : 'link-default-text'
                  }
                >
                  {node.data}
                </Link>
              )
            }
          },
        })}
        <div className='question-choices'>
          {type === 'choice' &&
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
          {type === 'confirmation' && (
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
