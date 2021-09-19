import Link from 'next/link'
import Image from 'next/image'
import logoImage from '../public/logo.png'
import styled from 'styled-components'
import { media } from '../styles/theme'

import { AnimatePresence, motion } from 'framer-motion';

const Menu = () => {
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
${media.desktop} {
width: 40em;
}
left: 50%;
${media.mobile} {
  width:25em;
}
`

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #686868;
   ${media.mobile} {
   flex-direction:column;
}
`;

const LinkStyle = styled.a`
  font-size: 1.5em;
  padding: 2rem;
  color: black;
  flex-direction: row;
`

export default Menu
