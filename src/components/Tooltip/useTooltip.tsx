import { useState } from 'react'

function useTooltip() {
  const [show, setShow] = useState(false)
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)
  const [content, setContent] = useState('')

  const showTooltip = (top: number, left: number, content: string) => {
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
