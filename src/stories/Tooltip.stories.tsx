/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { RefObject, useEffect, useRef, useState } from 'react'

import { Tooltip, Card, Image, Button } from '../'

import useTooltip from '../components/Tooltip/useTooltip'

export default {
  title: 'Work In Progress/Tooltip',
  component: Tooltip,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = (args) => {
  const [tooltipHeight, setTooltipHeight] = useState(0)

  const { showTooltip, hideTooltip, isTooltipVisible, top, left } = useTooltip()
  const tooltipOpenerRef = useRef<any>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)

  const handleClick = (elRef: RefObject<HTMLElement>) => {
    if (isTooltipVisible) {
      hideTooltip()
      return
    }

    const { y, x, width, bottom, height } =
      elRef.current.getBoundingClientRect()

    const elementId = elRef?.current?.id

    // if (window.innerHeight - bottom < tooltipHeight) {
    //   console.log(
    //     '-- bottom -- y - tooltipHeight -->>',
    //     y,
    //     tooltipHeight,
    //     y - tooltipHeight
    //   )
    //   showTooltip(y - tooltipHeight, x + width, `Tooltip on the ${elementId}`)

    //   return
    // }

    showTooltip(y, x + width + 20, `Tooltip on the ${elementId}`)
  }

  // useEffect(() => {
  //   if (isTooltipVisible) {
  //     setTooltipHeight(tooltipRef.current.clientHeight)
  //   }
  // }, [isTooltipVisible, top])

  return (
    <div>
      <div style={{ width: '250px', height: '100px' }}>
        Sample Component - clickable tooltip from scratch
        <p>still a work in progress</p>
      </div>

      <div>
        {isTooltipVisible && (
          <Tooltip {...args} top={top} left={left} ref={tooltipRef}>
            <Card>
              <h2>Tooltip Card Title</h2>
              <Image alt='' src='' />
            </Card>
          </Tooltip>
        )}
        <Button
          label='show tooltip'
          ref={tooltipOpenerRef}
          id='right'
          onClick={() => handleClick(tooltipOpenerRef)}
        />
      </div>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {}
