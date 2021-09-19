import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import Image from 'next/image'
import logoImage from '../public/logo.png'
import styled from 'styled-components'
import { darken, lighten } from 'polished';
import { media } from '../styles/theme';
import { motion } from 'framer-motion';


const Nav = () => {
  const router = useRouter()
  return (
    <NavStyle>
      <ToHomeButton type="button" onClick={() => router.push('/')} />
      <ToUpButton type="button" onClick={() => {
        let temp = router.asPath;
        router.push((temp.slice(0, temp.lastIndexOf('/')) === '') ? '/' : temp.slice(0, temp.lastIndexOf('/')))
      }} />
      <GoBackButton type="button" onClick={() => router.back()} />
    </NavStyle>
  )
}
const NavStyle = styled.nav`
  margin: 3em;
  border-style: solid;
  background-color: transparent;
`;


const NavButton = styled.button`
  border: none;
  background-color: rgb(148, 148, 148);
  text-decoration: none;
  display: inline-block;
  border-radius: 50%;
    padding: 0.75em;
    margin: 0.1em 0.2em;
`

const ToHomeButton = styled(NavButton)`
  &:hover {
    background: ${lighten(0.2, 'red')};
  }
`


const ToUpButton = styled(NavButton)`
  &:hover {
    background: ${lighten(0.2, 'yellow')};
  }
`

const GoBackButton = styled(NavButton)`
  &:hover {
    background: ${lighten(0.2, 'green')};
  }
`

export default Nav
