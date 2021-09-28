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
        <Image alt="Portal Site" src={logoImage} onClick={() => router.push('/')}></Image>
      </ImageContainer>
      <MenuWrapper>
        {menuItems && menuItems.map((menuItem) => {
          return (
            <Nav key={menuItem.path} className={(isCurrentURL(`/${menuItem.path}`) || router.pathname === '/') ? "isClicked" : "isNotClicked"}>
              {/* {(isCurrentURL(`/${menuItem.path}`) || router.pathname === '/') ? */}
              <MenuItem className={(isCurrentURL(`/${menuItem.path}`) || router.pathname === '/') ? "" : "isNotClicked"}>
                {menuItem.title !== 'SNS' ?
                  <a onClick={(e) => {
                    handleClick(e, menuItem.path)
                  }}>{menuItem.title}</a> : <a href="https://instagram.com/portalsite">{"SNS"}</a>}
              </MenuItem>
            </Nav>
          )
        })}
      </MenuWrapper>
    </>
  )
}

const ImageContainer = styled.div`
  margin-top: 40%;
  width:65%;
  align-self: center;
  ${media.desktop}{
    margin-top: 6%;
    padding:3%;
    width: 60%;
  }
`

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1em;
  &.isClicked {
    transform: translate(100px, 0px);
    transition-property: all;
    transition-duration: 0.5s;
    transition-delay: 0.3s;
    font-size: 1.5em;
  }
  &.isNotClicked {
    visibility:hidden;
    transform: translate(0px, 0px);
    transition-property: all;
    transition-duration: 0.5s;
    transition-delay: 0.3s;
    }
`;

const MenuWrapper = styled.div`
  margin-top: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  flex-direction:row;
  ${media.desktop}{
    margin-top: 15em;
    padding: 3%;
  }
`;

const MenuItem = styled.div`
  font-size: 2.2em;
  padding: 0.3em 0.5em;
  color: #EFEFEF;

  ${media.desktop}{
    font-size: 2.5em;
    padding: 0.6em 1em;
  }
  &.isNotClicked {
    opacity: 0;
  }
`;
const SubmenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
`

export default DesktopMenu
