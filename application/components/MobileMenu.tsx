import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from "next/router";
import { useState } from "react";
import { menuItems } from './MenuItems'

type Props = {
  children: any
}

const MobileMenu = ({ children }: Props) => {

  const router = useRouter();

  const handleClick = (e, path) => {
    if (router.pathname === '/' + path)
      router.push('/')
    else
      router.push(path);
  };

  return (
    <>
      {menuItems && menuItems.map((menuItem) => {
        return (
          <Nav key={menuItem.path}>
            <MenuItem>
              {
                menuItem.title !== 'SNS' ?
                  <a onClick={(e) => {
                    handleClick(e, menuItem.path)
                  }}>{menuItem.title}</a>
                  :
                  <a href="https://instagram.com/portalsite">{"SNS"}</a>
              }
            </MenuItem>
            {menuItem.hasSubmenu && (router.pathname === `/${menuItem.path}`) ? <SubmenuWrapper> {children} </SubmenuWrapper> : ''}
          </Nav>
        )
      })}
    </>
  )
}

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuItem = styled.div`
  font-size: 2em;
  padding: 0.6em 1em;
  color: #EFEFEF;
`

const SubmenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em;
  padding: 1.2em 1.4em;
  align-items: center;
  line-height: 1.6;
  font-size: 0.8em;
  font-weight: normal;
  min-width: 20vw;
  border: 1px solid white;
  border-radius: 2em;
`

export default MobileMenu
