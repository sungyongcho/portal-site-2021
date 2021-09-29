import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from "next/router";
import logoImage from '../public/logo.png'
import styled, { keyframes } from 'styled-components'
import { media } from '../styles/theme'
import { menuItems } from "./MenuItems";
import { cloneElement, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

const DesktopMenu = () => {

  const router = useRouter()

  const [fade, setFade] = useState(false);

  const handleClick = (e, path) => {
    if (router.pathname === '/' + path) {
      router.push('/')
      setFade(true);
    }
    else {
      router.push(path);
      setFade(false);
    }
  };
  const isCurrentURL = (url) => {
    return router.pathname === url;
  }

  const childFactoryCreator = (classNames) => (
    (child) => (
      cloneElement(child, {
        classNames
      })
    )
  );
  return (
    <>

      <ImageContainer>
        <Image alt="Portal Site" src={logoImage} onClick={() => router.push('/')}></Image>
      </ImageContainer>
      <MenuWrapper>
        <TransitionGroup className="menu-items"
          childFactory={childFactoryCreator(fade ? "anim2" : "item")}>
          {menuItems && menuItems.map((menuItem) => {
            return (
              (isCurrentURL(`/${menuItem.path}`) || router.pathname === '/') && <CSSTransition
                key={menuItem.path}
                timeout={500}
                classNames={fade ? "anim2" : "item"}
              >
                <MenuItem onClick={(e) => {
                  handleClick(e, menuItem.path);
                }}
                >
                  {menuItem.title !== 'SNS' ?
                    <a >{menuItem.title}</a> : <a href="https://instagram.com/portalsite">{"SNS"}</a>}
                </MenuItem>
              </CSSTransition>
            )
          })}
        </TransitionGroup>
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

const bounce = keyframes`
    0% {
        transform: translate(0, 40%) scale(0);
    }
    10% {
        transform: translate(0, 40%) scale(1.1);
    }
    20% {
        transform: translate(0, 40%) scale(1);
   }
   100% {
        transform: translateY(0%);
`;

const MenuItem = styled.div`
  font-size: 2.2em;
  padding: 0.3em 0.5em;
  color: #EFEFEF;

  ${media.desktop}{
    font-size: 2.5em;
    padding: 0.6em 1em;
  }

  &.fade {
    opacity:1;
    animation: ${bounce} 4s linear forwards;
    transition-property: all;
    transition-duration: 1s;
    transition-delay: 0.5s;
  }
  &.no-fade {
    animation: ${bounce} 4s linear forwards;
    transition-property: all;
    transition-duration: 1s;
    transition-delay: 0.5s;
    }
    transform-origin: top left; /* add this in */

`;
const SubmenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
`

export default DesktopMenu
