import styled from 'styled-components'

import { QuestionProps } from './types'

export const StyledQuestion = styled.div<QuestionProps>`
  text-align: left;
  padding: 10px 10px 20px;
  background: ${({ theme }) => theme.colors.primary[50]};

  .question-header {
    position: relative;

    h3,
    h4 {
      padding: 0;
      margin: 10px 0;
    }

    span.question-close {
      position: absolute;
      top: -5px;
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
      gap: 5px;
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
