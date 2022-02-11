/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { useCallback, useContext, useEffect, useState } from 'react'
import { TooltipContext } from './context'

function useTooltip() {
  //   const { show, setShow, top, setTop, left, setLeft, content, setContent } =
  // useContext(TooltipContext)

  const [show, setShow] = useState(false)
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)
  const [content, setContent] = useState('')

  //   const showTooltip = useCallback(
  //     (top: number, left: number, content: string) => {
  //       setTop(top)
  //       setLeft(left)
  //       setShow(true)
  //       setContent(content)
  //     },
  //     [setTop, setLeft, setShow, setContent]
  //   )
  const showTooltip = (top: number, left: number, content: string) => {
    console.log('@what ahappened to top', top)
    setTop(top)
    setLeft(left)
    setShow(true)
    setContent(content)
  }

  const hideTooltip = () => {
    setShow(false)
  }

  return {
    showTooltip,
    hideTooltip,
    isTooltipVisible: show,
    top,
    left,
    content,
  }
}

export default useTooltip
