/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import parse from 'html-react-parser'

import { StyledParsedText } from './styles'

export interface ParsedText {
  data: string
}

const ParsedText: React.FC<ParsedText> = ({ data = '' }) => (
  <StyledParsedText>
    {parse(data, {
      replace: (domNode: any) => {
        if (domNode.name === 'a') {
          const node = domNode.children[0]

          return (
            <span
              className={
                node.data[0] === '#' ? 'link sample-text' : 'link default-text'
              }
            >
              {node.data}
            </span>
          )
        }
      },
    })}
  </StyledParsedText>
)

export default ParsedText
