import React from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'
import './NavButton.scss';

const NavButton = ({ ...props }: NavLinkProps) => {
  return (
    <NavLink {...props } className={`${props.className} navButton`}/>
  )
}

export default NavButton