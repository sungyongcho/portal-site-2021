import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from "next/router";
import logoImage from '../public/logo.png'
import styled from 'styled-components'
import { media } from '../styles/theme'
import { menuItems } from "./MenuItems";
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const DesktopMenu = () => {

  const router = useRouter()

  const handleClick = (e, path) => {
    if (router.pathname === '/' + path) {
      router.push('/')
    }
    else {
      console.log(path);
      router.push(path);
    }
  };
  const isCurrentURL = (url) => {
    console.log(url);
    return router.pathname === url;
  }


  return (
    <>
      <ImageContainer>
        <Image alt="Portal Site" src={logoImage}></Image>
      </ImageContainer>
      <MenuWrapper>
        {menuItems && menuItems.map((menuItem) => {
          return (
            <Nav key={menuItem.path}>
              {(isCurrentURL(`/${menuItem.path}`) || router.pathname === '/') ?
                <MenuItem className={isCurrentURL(`/${menuItem.path}`) ? "isClicked" : ""}>
                  <a onClick={(e) => {
                    handleClick(e, menuItem.path)
                  }}>{menuItem.title}</a>
                </MenuItem> : null
              }
            </Nav>
          )
        })}
      </MenuWrapper>
    </>
  )
}

const ImageContainer = styled.div`
  margin-top: 48%;
  width:65%;
  align-self: center;
  ${media.desktop}{
    margin-top: 12%;
    width: 60%;
  }
`

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center
`;

const MenuWrapper = styled.div`
  margin-top: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  flex-direction:row;
  ${media.desktop}{
    margin-top: 12%;
  }
`;

const MenuItem = styled.div`
  font-size: 2.2em;
  padding: 0.3em 0.5em;
  color: #EFEFEF;
  &.isClicked {
    font-size: 2.8em;
    ${media.desktop}{
      font-size: 3.5em;
    }
  }
  ${media.desktop}{
    font-size: 2.5em;
    padding: 0.6em 1em;
  }
`;
const SubmenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
`

export default DesktopMenu
