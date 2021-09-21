import Link from 'next/link'
import Image from 'next/image'
import logoImage from '../public/logo.png'
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
      <ImageContainer>
        <Image alt="Portal Site" src={logoImage}></Image>
      </ImageContainer>
      <Nav>
        {menuItems && menuItems.map((menuItem) => {
          return (
            <>
              <MenuItem>
                <a onClick={(e) => {
                  handleClick(e, menuItem.path)
                }}>{menuItem.title}</a>
              </MenuItem>
              {menuItem.hasSubmenu && (router.pathname === `/${menuItem.path}`) ? <SubmenuWrapper> {children} </SubmenuWrapper> : ''}
            </>
          )
        })}
      </Nav >
    </>
  )
}

const ImageContainer = styled.div`
  padding-top: 30%;
  width:25em;
`

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
`;

const MenuItem = styled.div`
  font-size: 1.5em;
  padding: 0.6em 1em;
  color: #EFEFEF;
;
`
const SubmenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

export default MobileMenu
