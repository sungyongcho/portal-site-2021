import Link from 'next/link'
import Image from 'next/image'
import logoImage from '../public/logo.png'
import styled from 'styled-components'
import { media } from '../styles/theme'

import { AnimatePresence, motion } from 'framer-motion';

const DesktopMenu = () => {
  return (
    <>
      <ImageContainer>
        <Image alt="Portal Site" src={logoImage}></Image>
      </ImageContainer>
      <Nav>
        <Link href="/member"><LinkStyle>Member</LinkStyle></Link>
        <Link href="/interview"><LinkStyle>Interview</LinkStyle></Link>
        <Link href="/exhibition"><LinkStyle>Exhibition</LinkStyle></Link>
        <Link href="/texts"><LinkStyle>Texts</LinkStyle></Link>
        <Link href="/networking"><LinkStyle>Networking</LinkStyle></Link>
      </Nav>
    </>
  )
}

const ImageContainer = styled.div`
  padding-top: 50%;
  width:50%;
  align-self: center;
`

const Nav = styled.div`
  padding-top: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  flex-direction:row;
`;

const LinkStyle = styled.a`
  font-size: 2em;
  color: #EFEFEF;
  flex-direction: row;
  padding: 0 3%;
`
const SubmenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
`

export default DesktopMenu
