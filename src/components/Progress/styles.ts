/* eslint-disable indent */
import styled from 'styled-components'

import { ProgressProps } from './types'

export const StyledProgress = styled.div<ProgressProps>`
  transform: scale(${({ theme, size }) => theme.size[size].progressScale});

  width: 150px;
  height: 150px;
  position: relative;

  svg {
    width: 150px;
    height: 150px;
    position: relative;
  }

  svg circle {
    width: 150px;
    height: 150px;
    fill: none;
    stroke-width: 10;
    stroke: #000;
    transform: translate(5px, 5px);
    stroke-dasharray: 440;
    stroke-dashoffset: 440;
    stroke-linecap: round;
  }

  svg circle:nth-child(1) {
    stroke-dashoffset: 0;
    stroke: #f3f3f3;
  }

  svg circle:nth-child(2) {
    stroke-dashoffset: calc(
      440 - (440 * ${({ progress = 0 }) => progress}) / 100
    );
    stroke: ${({ theme, color = 'primary', colorWeight = 'DEFAULT' }) =>
      theme.colors[color][colorWeight]};
  }

  .num {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    color: #111;
  }

  .num h2 {
    font-size: 48px;
    color: ${({ theme, color = 'primary', colorWeight = 'DEFAULT' }) =>
      theme.colors[color][colorWeight]};
  }

  .num h2 span {
    font-size: 24px;
    color: ${({ theme, color = 'primary', colorWeight = 'DEFAULT' }) =>
      theme.colors[color][colorWeight]};
  }

  .text {
    padding: 10px 0 0;
    color: #999999;
    font-weight: 700;
    letter-spacing: 1px;
  }
`
