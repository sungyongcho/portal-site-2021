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

const DesktopMenuWithMount = () => {

  const router = useRouter()

  const [isClicked, setIsClicked] = useState(false);

  const [items, setItems] = useState([
    { title: 'Member', path: '/member', show: true },
    { title: 'Interview', path: '/interview', show: true },
    { title: 'Exhibition', path: '/exhibition', show: true },
    { title: 'Texts', path: '/texts', show: true },
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

    console.log(newArr);
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
              timeout={150}
              classNames={"item"}>
              <MenuItem onClick={(e) => {
                console.log(menuItem.path);
                handleClick(e, menuItem.path);
              }}
                className={isCurrentURL(menuItem.path) && menuItem.show ? `large ${menuItem.title}` : `nolarge ${menuItem.title}`}
              >
                {menuItem.title !== 'SNS' ?
                  <a >{menuItem.title}</a> : <a href="https://instagram.com/portalsite">{"SNS"}</a>}
              </MenuItem>
            </CSSTransition>
          )
        })}
      </TransitionGroup>
    </>
  )
}

const ImageContainer = styled.div`
  margin-top: 40%;
  width:65%;
  align-self: center;
  ${media.desktop}{
    margin-top: 20%;
    padding:3%;
    width: 90%;
  }
`

const MenuWrapper = styled.div`
  /* margin-top: 15%; */

  flex-direction:row;
  ${media.desktop}{
    /* margin-top: 15em; */
    padding: 3%;
  }
`;

const Sliding = styled.div`

`;
const MenuItem = styled.div`
  font-size: 2.2em;
  padding: 0.3em 0.5em;
  color: #EFEFEF;

  ${media.desktop}{
    font-size: 2.5em;
    padding:0;
    margin:0;
  }

  &.large {
    padding:0;
    margin:0;
    top:50%;
    left:50%;
    /* position:absolute; */
    transform: scale(1.8);
	  -moz-transition:all 1s;
    -webkit-transition:all 1s;
    -o-transition:all 1s;
    transition:all 1s;
	  /* font-size: 4em; */
    }

    &.nolarge {

	  -moz-transition:all 1s;
    -webkit-transition:all 1s;
    -o-transition:all 1s;
    transition:all 1s;
    }
  transform-origin: top left; /* add this in */
`;
const SubmenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
`

export default DesktopMenuWithMount
