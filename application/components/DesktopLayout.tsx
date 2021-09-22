import Menu from './DesktopMenu'
import { useRouter } from "next/router";
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion';
import DesktopMenu from './DesktopMenu';
import { media } from '../styles/theme'
type Props = {
  children: any
}

const DesktopLayout = ({ children }: Props) => {

  const router = useRouter();

  const showMenu = ((router.pathname.match(/\//g) || []).length === 2) ? false : true;

  const config = {
    type: "spring",
    damping: 20,
    stiffness: 100
  };

  return (
    <>
      <DesktopBody>
        {/* <CurvedCourner className={"topLeft"} />
        <HalfCircle className={"Left"} />
        <CurvedCourner className={"topRight"} /> */}
        {(showMenu && router.pathname !== '/networking') && <DesktopMenu />}
        <DesktopSubmenu>
          {children}
        </DesktopSubmenu>
        {/* <CurvedCourner className={"BottomLeft"} />
        <HalfCircle className={"Right"} />
        <CurvedCourner className={"BottomRight"} /> */}
      </DesktopBody>
    </>
  )
}

const DesktopBody = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  align-items:center;
  overflow: auto;
`;

const CurvedCourner = styled.div`
  position:absolute;
  display:flex;
  flex-direction: column;
  background-color: transparent;
  border: 1px solid white;
  align-items:center;
  &.topLeft {
    top:0;
    left: 0;
    width: 15%;
    height: 30%;
    border-radius: 0% 0% 0% 50% / 0% 0% 0% 50%;
  }
  &.topRight {
    top:0;
    right: 0;
    width: 15%;
    height: 30%;
    border-radius: 0% 0% 50% 50% / 0% 50% 50% 0%;
  }
  &.BottomLeft {
    bottom:0;
    left: 0;
    width: 15%;
    height: 30%;
    border-radius: 50% 0% 0% 0% / 50% 0% 0% 0%;
  }
  &.BottomRight {
    bottom: 0;
    right: 0;
    width: 15%;
    height: 30%;
    border-radius: 0% 50% 0% 0% / 0% 50% 0% 0%;
  }
`;
const HalfCircle = styled.div`
  border: 1px solid white;
  width: 15%;
  height: 38.5%;
  position:absolute;
  &.Left{
    border-radius:0% 50% 50% 0% / 50% 50% 50% 50%;
    bottom: 30.5%;
    left: 15%;
  }
  &.Right{
    border-radius:50% 0% 50% 50% / 50% 50% 0% 50%;
    bottom: 30.5%;
    right: 15%;
  }
`;

const DesktopSubmenu = styled.div`
  padding-top: 3%;
  display:flex;
  flex-direction: row;
  align-items:center;
  justify-content: space-between;
  align-self: center;
  ${media.tablet}{
    padding-top: 2%;
  }
  ${media.desktop}{
    padding-top: 0%;
  }
`;

export default DesktopLayout;
