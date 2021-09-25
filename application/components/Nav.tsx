import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import Image from 'next/image'
import logoImage from '../public/logo.png'
import styled from 'styled-components'
import { darken, lighten } from 'polished';
import { media } from '../styles/theme';
import { motion } from 'framer-motion';

type Props = {
  enableButton: boolean;
}

const Nav = ({ enableButton }: Props) => {
  const router = useRouter()
  return (
    <NavStyle>
      {enableButton ?
        < ToHomeButton type="button" onClick={() => router.push('/')} /> :
        <NavButton />
      }
      {enableButton ?
        <ToUpButton type="button" onClick={() => {
          let temp = router.asPath;
          router.push((temp.slice(0, temp.lastIndexOf('/')) === '') ? '/' : temp.slice(0, temp.lastIndexOf('/')))
        }} /> :
        <NavButton />
      }
      {enableButton ?
        <GoBackButton type="button" onClick={() => router.back()} /> :
        <NavButton />
      }
    </NavStyle>
  )
}
const NavStyle = styled.div`
  height:100%;
  display: inline-flex;
  flex-direction: row;
  margin: 0;
  border-style: solid;
  background-color: transparent;
`;


const NavButton = styled.button`
  border: none;
  background-color: #EFEFEF;
  text-decoration: none;
  border-radius: 50%;
  padding: 0.75em;
  margin: 0.1em 0.2em;
  pointer-events: none;
`;

const ToHomeButton = styled(NavButton)`
  pointer-events: auto;
  &:hover {
  background: ${lighten(0.2, 'red')};
  }
`;


const ToUpButton = styled(NavButton)`
  pointer-events: auto;
  &:hover {
    background: ${lighten(0.2, 'yellow')};
  }
`;

const GoBackButton = styled(NavButton)`
  pointer-events: auto;
  &:hover {
    background: ${lighten(0.2, 'green')};
  }
`;

export default Nav
