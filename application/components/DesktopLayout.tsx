import Menu from './DesktopMenu'
import { useRouter } from "next/router";
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion';
import DesktopMenu from './DesktopMenu';
import { media } from '../styles/theme'
import HorizontalImages from './HorizontalImages';
import Nav from './Nav'
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

  const images = [
    {
      path: "/logos/arko_logo.png",
      widthRatio: 9.2457142857,
      altText: "arko_logo",
    },
    {
      path: "/logos/archiving_babel_logo.png",
      widthRatio: 3.9031007752,
      altText: "archiving_babel_logo",
    },
    {
      path: "/logos/saegonggan_logo.png",
      widthRatio: 1.4175152749,
      altText: "saegonggan_logo",
    },
  ]

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
        {(showMenu && router.pathname !== '/networking') &&
          <DesktopDateFooter>
            {"2021.10.04-10.24"}
          </DesktopDateFooter>
        }
        <DesktopLogoFooter>
          <HorizontalImages images={images} gap={"1.2em"} />
          <Nav enableButton={false}></Nav>
        </DesktopLogoFooter>
      </DesktopBody>
    </>
  )
}

const DesktopDateFooter = styled.div`
  position: absolute;
  bottom: 0.4rem;
  left: 3rem;
  font-size: 2.5em;
`;

const DesktopLogoFooter = styled.div`
  align-items:center;
  position: absolute;
  display: flex;
  flex-direction: row;
  bottom: 0.4rem;
  right: 3rem;
  width: 40%;
`;

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
