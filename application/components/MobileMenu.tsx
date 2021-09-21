import Link from 'next/link'
import Image from 'next/image'
import logoImage from '../public/logo.png'
import styled from 'styled-components'
import { media } from '../styles/theme'
import { useRouter } from "next/router";
import { useState } from "react";

type MenuItem = {
  title: string;
  path: string;
  hasSubmenu: boolean;
}

type Props = {
  children: any
}

const MobileMenu = ({ children }: Props) => {

  const router = useRouter();

  const handleClick = (e, path) => {
    if (router.pathname === '/' + path)
      router.push('/')
    else
      router.push(path);
  };

  const menuItems: MenuItem[] = [
    {
      title: "Member",
      path: "member",
      hasSubmenu: true,
    },
    {
      title: "Interview",
      path: "interview",
      hasSubmenu: true,
    },
    {
      title: "Exhibition",
      path: "exhibition",
      hasSubmenu: true,
    },
    {
      title: "Text",
      path: "texts",
      hasSubmenu: true,
    },
    {
      title: "Networking",
      path: "networking",
      hasSubmenu: false,
    },
];

  return (
    <>
      <ImageContainer>
        <Image alt="Portal Site" src={logoImage}></Image>
      </ImageContainer>
      <Nav>
        {menuItems && menuItems.map((menuItem) => {
          return (
            <>
              <MenuItem>
                <a onClick={(e) => {
                  handleClick(e, menuItem.path)
                }}>{menuItem.title}</a>
              </MenuItem>
              {menuItem.hasSubmenu && (router.pathname === `/${menuItem.path}`) ? <BodyLayout> {children} </BodyLayout> : ''}
            </>
          )
        })}
      </Nav >
    </>
  )
}

const ImageContainer = styled.div`
  padding-top: 30%;
  width:25em;
`

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
`;

const MenuItem = styled.div`
  font-size: 1.5em;
  padding: 0.6em 1em;
  color: #EFEFEF;
;
`
const BodyLayout = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

export default MobileMenu
