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

      </Nav >
    </>
  )
}

const ImageContainer = styled.div`
  width:25em;
`

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #b6b1b1;
   flex-direction:column;
`;

const LinkStyle = styled.a`
  font-size: 1.5em;
  padding: 2rem;
  color: black;
`
const BodyLayout = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
  flex-direction: row;
  text-align: center;
`
export default MobileMenu
