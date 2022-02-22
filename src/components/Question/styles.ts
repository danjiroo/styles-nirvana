import styled from 'styled-components'

import { QuestionProps } from './types'

export const StyledQuestion = styled.div<QuestionProps>`
  text-align: left;
  padding: 10px;
  margin-bottom: 5px;
  box-shadow: 0 30px 20px rgba(0, 0, 0, 0.1);

  .question-header {
    position: relative;

    h3,
    h4 {
      padding: 0;
      margin: 10px 0;
    }

    span.question-close {
      position: absolute;
      top: 5px;
      right: 5px;
    }
  }

  .question-body {
    .question-choices,
    .confirmation-choices {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 2px;
    }

    .question-choices > * {
      width: ${({ type }) => (type === 'choice' ? '48%' : '100%')};
      margin: 0;
    }

    .confirmation-choices > * {
      width: 48%;
    }

    p {
      font-size: 14px;
    }
  }
`
