import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from "next/router";
import logoImage from '../public/logo.png'
import styled, { keyframes } from 'styled-components'
import { media } from '../styles/theme'
import { menuItems } from "./MenuItems";
import { cloneElement, useState } from 'react';

import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

const DesktopMenu = () => {

  const router = useRouter()

  const [isClicked, setIsClicked] = useState(false);

  const [items, setItems] = useState([
    { title: 'Member', path: '/member', show: true },
    { title: 'Texts', path: '/texts', show: true },
    { title: 'Exhibition', path: '/exhibition', show: true },
    { title: 'Interview', path: '/interview', show: true },
    { title: 'SNS', path: '/sns', show: true },
  ]);

  const handleClick = (e, path) => {
    let newArr = [...items];

    if (router.pathname === path) {
      router.push('/')
      setIsClicked(false);
      newArr.map(el => (el.show = true))

    }
    else {
      setIsClicked(true);
      router.push(path);
      newArr.map(el => (el.path === path ? el.show = true : el.show = false))
    }

  };

  const isCurrentURL = (url) => {
    return router.pathname === url;
  }

  return (
    <>
      <ImageContainer>
        <Image alt="Portal Site" src={logoImage} onClick={() => router.push('/')}></Image>
      </ImageContainer>
      <TransitionGroup className="menu-items">
        {items.map((menuItem) => {
          return (
            (isCurrentURL(menuItem.path) || router.pathname === '/') &&
            <CSSTransition
              key={menuItem.path}
              timeout={200}
              classNames={"item"}>
              <MenuItem
                className={isCurrentURL(menuItem.path) && menuItem.show ? `large ${menuItem.title}` : `nolarge ${menuItem.title}`}
              >
                {menuItem.title !== 'SNS' ?
                  <a onClick={(e) => {
                    handleClick(e, menuItem.path);
                  }}>{menuItem.title}</a> : <a href="https://instagram.com/portalsite" target="_blank">{"SNS"}</a>}
              </MenuItem>
            </CSSTransition>
          )
        })}
      </TransitionGroup>
    </>
  )
}

const ImageContainer = styled.div`
  margin-top: 25vh;
  margin-bottom: 10vh;
  width:100%;
  align-self: center;
  ${media.desktop}{
    margin-top: 16vh;
    margin-bottom: 12vh;
    width: 95%;
  }
`
const MenuItem = styled.div`
  margin:0;
  padding:0;
  font-size: 2.1em;
  padding: 0.3em 0.5em;
  color: #EFEFEF;

  ${media.desktop}{
    font-size: 2.5em;
    padding: 0 1em;
  }

  &.large {
    -moz-transition:all 1s;
    -webkit-transition:all 1s;
    -o-transition:all 1s;
    transition:all 1s;
      font-size: 3em;
    ${media.desktop}{
      font-size: 4em;
    }
  }

    &.nolarge {
      -moz-transition:all 1s;
      -webkit-transition:all 1s;
      -o-transition:all 1s;
      transition:all 1s;
    }
    transform-origin: top left; /* add this in */
`;


export default DesktopMenu
