import React from 'react'

import { StyledProgress } from './styles'
import { ProgressProps } from './types'

const Progress: React.FC<ProgressProps> = ({ progress = 0, color }) => (
  <StyledProgress className='box' color={color} progress={progress}>
    <svg>
      <circle cx='70' cy='70' r='70'></circle>
      <circle cx='70' cy='70' r='70'></circle>
    </svg>
    <div className='num'>
      <h2>
        {progress}
        <span>%</span>
      </h2>
    </div>
  </StyledProgress>
)

export default Progress
