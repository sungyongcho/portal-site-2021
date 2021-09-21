import Link from 'next/link'
import Image from 'next/image'
import logoImage from '../public/logo.png'
import styled from 'styled-components'
import { media } from '../styles/theme'
import { useRouter } from "next/router";
import { useState } from "react";

type Props = {
  children: any
}

const MobileMenu = ({ children }: Props) => {

  const [isOpen, setMenu] = useState(false);
  const router = useRouter();

  console.log(router.pathname);

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
        <LinkStyle> <a onClick={(e) => {
          handleClick(e, 'member')
        }}>Member</a></LinkStyle>
        {router.pathname === '/member' ? <BodyLayout> {children} </BodyLayout> : ''}

        <LinkStyle> <a onClick={(e) => {
          handleClick(e, 'interview')
        }}>Interview</a></LinkStyle>
        {router.pathname === '/interview' ? <BodyLayout> {children} </BodyLayout> : ''}

        <LinkStyle> <a onClick={(e) => {
          handleClick(e, 'exhibition')
        }}>Exhibition</a></LinkStyle>
        {router.pathname === '/exhibition' ? <BodyLayout> {children} </BodyLayout> : ''}

        <LinkStyle> <a onClick={(e) => {
          handleClick(e, 'texts')
        }}>Text</a></LinkStyle>
        {router.pathname === '/texts' ? <BodyLayout> {children} </BodyLayout> : ''}
        <LinkStyle><Link href='/networking'>
          Networking</Link></LinkStyle>
      </Nav >
    </>
  )
}

const ImageContainer = styled.div`
  padding-top: 30%;
  width:25em;
`

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  align-items: center;
  background: #b6b1b1;
`;

const LinkStyle = styled.a`
  font-size: 1.5em;
  padding: 20%;
  color: black;
`
const BodyLayout = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`
export default MobileMenu
