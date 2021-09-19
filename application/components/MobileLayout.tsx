import MobileMenu from './MobileMenu'
import Nav from './Nav'
import { useRouter } from "next/router";
import styled from 'styled-components'
type Props = {
  children: any
}

const MobileLayout = ({ children }: Props) => {

  const router = useRouter();

  const showMenu = ((router.pathname.match(/\//g) || []).length === 2) ? false : true;

  const showContent = ((router.pathname.match(/\//g) || []).length === 1) ? false : true;


  return (
    <>
      {showMenu && <MobileMenu children={children} />}
      {showContent && children}
    </>
  )
}

export default MobileLayout;
