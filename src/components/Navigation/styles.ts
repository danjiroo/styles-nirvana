import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledNavLink = styled(NavLink)`
  color: #747474;
  list-style: none;
  text-decoration: none;
  font-weight: 700;
  margin: 0;
  &.active {
    color: #04d997;
    font-weight: 700;
  }
  font-weight: 500;
`

interface IChildrenItems {
  [key: string]: any
}
interface StyledNavWithChildrenProps {
  children_items: IChildrenItems[]
}
export const StyledNavWithChildren = styled.menu<StyledNavWithChildrenProps>`
  color: #b3b3b3;
  margin: 0;
  padding: 0;
  font-weight: 200;
`

export const StyledNavWrapper = styled.div`
  align-items: flex-start;
  border: 2px solid black;
  box-sizing: border-box;
  height: 100%;
  max-width: 20%;
  @media screen {
  }
`
