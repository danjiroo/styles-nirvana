import styled, { css, keyframes } from 'styled-components'

export const StyledMenu = styled.div`
  background-color: red;
  height: 50px;
  width: 50px;
`

export interface IconContainerProp {
  align?: string
}
export interface MenuContent extends IconContainerProp {
  is_open: boolean
}

const openMenu = keyframes`
    0% {
        transform: scaleX(0.2);
    }
    80%{
        transform: scaleX(.9);
    }
    100%{
        transform: scaleX(.6);
    }
`

const isOpen = css`
  /* animation: ${openMenu} 5s cubic-bezier(0.25, 0, 0.01, 1) forwards; */
  /* transform: scaleX(1);
  transition: transform 1s cubic-bezier(0.25, 0, 0.01, 1); */
  transform: translateX(0);
  opacity: 1;
  transition: transform 1s cubic-bezier(0.25, 0, 0.01, 1);
  transform-origin: left;
  /* background-color: #8db5bb; */
`

const getMenuContentStyles = (props: MenuContent) => {
  const { is_open } = props
  if (is_open) return isOpen
  return css`
    /* transform: scaleX(0);
    transition: transform 1s cubic-bezier(0.25, 0, 0.01, 1); */
    transform: translateX(-100%);
    transition: transform 0.5s cubic-bezier(0.25, 0, 0.01, 1);
    transform-origin: left;
  `
}

export const MenuContent = styled.div<MenuContent>`
  height: 400px;
  width: 100%;
  ${getMenuContentStyles}
`

export const MenuContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 300px;
  /* text-align: right; */
`
export const IconContainer = styled.div<IconContainerProp>`
  width: 20px;
  display: flex;
  justify-content: ${({ align }) => {
    if (!align) return 'flex-start'
    if (align === 'left') return 'flex-start'
    return 'flex-end'
  }};
  cursor: pointer;
`
