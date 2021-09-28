import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from "next/router";
import logoImage from '../public/logo.png'
import styled, { keyframes } from 'styled-components'
import { media } from '../styles/theme'
import { menuItems } from "./MenuItems";
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
const DesktopMenu = () => {

  const router = useRouter()
  const [rotation, setRotation] = useState(0);
  const variants = {
    inactive: {
      opacity: 1,
      background: "#7fffd4",
      // x: "-50px",
      scale: 1.5,
      color: "#333"
    },
    active: {
      opacity: 1,
      background: "#f95c5c",
      // x: "50px",
      scale: 1,
      delay: 0.3,
      color: "white"
    }
  }
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (e, path) => {
    if (router.pathname === '/' + path) {
      router.push('/')
      setRotation(180)
    }
    else {
      console.log(path);
      router.push(path);
      setRotation(0)
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
            <Nav key={menuItem.path}>
              {(isCurrentURL(`/${menuItem.path}`) || router.pathname === '/') ?
                <MenuItem>
                  {/* <motion.div
                    // className={isCurrentURL(`/${menuItem.path}`) ? "isClicked" : ""}
                    animate={isCurrentURL(`/${menuItem.path}`) ? "inactive" : "active"}
                    initial="inactive"
                    variants={variants}> */}
                  {menuItem.title !== 'SNS' ?
                    <a onClick={(e) => {
                      handleClick(e, menuItem.path)
                    }}>{menuItem.title}</a> : <a href="https://instagram.com/portalsite">{"SNS"}</a>}
                  {/* </motion.div> */}
                </MenuItem>
                : null
              }
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
    margin-top: 15em;
    padding: 3%;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

const slideUp = keyframes`
  from {
    transform: translateX(0px);
    /* transform: scale( 0.9, 0.9 ); */
  }
  to {
    transform: translateX(100px);
    transform: scale( 1.5, 1.5 );
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
      transform: translate(100px, 0px);
      transition-property: all;
      transition-duration: 1s;
      transition-delay: 0.5s;
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
