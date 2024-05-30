/* eslint-disable indent */
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
    word-break: break-all;

    .question-choices,
    .confirmation-choices {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      gap: 5px;
    }

    .question-choices > * {
      width: ${({ type }) =>
        type?.toLowerCase() === 'choice' ? 'auto' : '100%'};
      margin: 0;
    }
  }
`

export const StyledParsedText = styled.p`
  .link {
    cursor: pointer;

    &.default-text {
      color: ${({ theme }) => theme.colors.primary['DEFAULT']};
      font-size: inherit;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.primary[300]};
    }
  }
`
