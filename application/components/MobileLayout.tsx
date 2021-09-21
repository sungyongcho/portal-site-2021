import MobileMenu from './MobileMenu'
import Nav from './Nav'
import { useRouter } from "next/router";
import styled from 'styled-components'
import InterviewLayout from './interview-body'

type Props = {
  children: any
}

const MobileLayout = ({ children }: Props) => {

  const router = useRouter();

  const showMenu = ((router.pathname.match(/\//g) || []).length === 2) ? false : true;

  const showContent = ((router.pathname.match(/\//g) || []).length === 1) ? false : true;


  return (
    <>
      <MobileWrapper>
        {showMenu && router.pathname !== '/networking' && <MobileMenu children={children} />}
        {(showContent || router.pathname === '/networking') && children}
      </MobileWrapper>

    </>
  )
}

const MobileWrapper = styled.div`
  top: 8%;
  width: 100%;
  display:flex;
  flex-direction: column;
  align-items:center;
  overflow: auto;

`;
export default MobileLayout;
