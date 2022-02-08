import React from 'react'

import { StyledProgress } from './styles'
import { ProgressProps } from './types'

// temporary component
const Progress: React.FC<ProgressProps> = ({ progress = 0 }) => (
  <StyledProgress className='box' progress={progress}>
    <div className='percent'>
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
    </div>
    <h3 className='text'>Progress</h3>
  </StyledProgress>
)

export default Progress
