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
  const [selected, changeSelected] = useState('');


  const handleClick = (e, path) => {
    if (router.pathname === '/' + path) {
      router.push('/')
      changeSelected('');
    }
    else {
      console.log(path);
      router.push(path);
      changeSelected(path);
    }
  };
  const isMenuPage =
    router.pathname === "/" ||
    menuItems.filter((menuItem) => {
      return (
        router.pathname !== "/networking" &&
        `/${menuItem.path}` === router.pathname
      );
    }).length > 0;

  const showMenu =
    (router.pathname.match(/\//g) || []).length === 2 ? false : true;

  return (
    <>
      <ImageContainer>
        <Image alt="Portal Site" src={logoImage}></Image>
      </ImageContainer>
      <MenuWrapper>
        {menuItems && menuItems.map((menuItem) => {
          return (
            <Nav key={menuItem.path}>
              {isMenuPage && showMenu &&
                <MenuItem className={selected === menuItem.path ? "isClicked" : "isNotClicked"}>
                  <a onClick={(e) => {
                    handleClick(e, menuItem.path)
                  }}>{menuItem.title}</a>
                </MenuItem>
              }
            </Nav>
          )
        })}
      </MenuWrapper>
    </>
  )
}

const ImageContainer = styled.div`
  margin-top: 20%;
  width:50%;
  align-self: center;
  ${media.desktop}{
    margin-top: 15%;
    width: 45%;
  }
`

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center
`;

const MenuWrapper = styled.div`
  padding-top: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  flex-direction:row;
`;

const MenuItem = styled.div`
  font-size: 2.5em;
  padding: 0.6em 1em;
  color: #EFEFEF;
  &.isClicked {
    font-size: 3em;
  }
  &.isNotClicked {
    display:none;
  }
`;
const SubmenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
`

export default DesktopMenu
