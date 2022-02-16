import styled from 'styled-components'

import { baseTheme } from '../../../themes/baseTheme'
import { Card } from '../../../'

export const StyledComponentList = styled.div`
  @import url(${baseTheme.text.fontUrl});

  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-family: ${baseTheme.text.fontFamily};
`

export const StyledCard = styled(Card)`
  padding: 20px 30px 20px 15px;
  border: 1px solid #00000010;
  border-radius: 5px;
  transition: background 150ms ease-out, border 150ms ease-out,
    transform 150ms ease-out;
  color: #333333;
  display: flex;
  justify-content: flex-start;
  text-decoration: none !important;
  width: 24%;

  > div {
    width: 50px;
  }

  > span {
    width: 100%;
    min-height: 70px;
  }

  &:hover {
    border-color: #1ea7fd50;
    transform: translate3d(0, -3px, 0);
    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
  }

  &:active {
    border-color: #1ea7fd;
    transform: translate3d(0, 0, 0);
  }

  & strong {
    font-weight: 700;
    display: block;
    margin-bottom: 2px;
  }

  & span {
    font-size: 14px;
    line-height: 20px;
  }

  & i {
    width: 100%;
    padding-top: 10px;
    font-size: 12px;
  }
`
