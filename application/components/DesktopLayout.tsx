import Menu from './DesktopMenu'
import { useRouter } from "next/router";
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion';
import DesktopMenu from './DesktopMenu';
import { media } from '../styles/theme'
import HorizontalImages from './HorizontalImages';
import Nav from './Nav'
import NotchLeft from "../public/notch_left.png"
import NotchRight from "../public/notch_right.png"
import Image from 'next/image'

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

        {showMenu && !(router.pathname === '/sns' || router.pathname === '/exhibition') && <LeftNotch>
          <Image src={NotchLeft} />
        </LeftNotch>}
        {showMenu && !(router.pathname === '/sns' || router.pathname === '/exhibition') && <RightNotch>
          <Image src={NotchRight} />
        </RightNotch>}
        {(showMenu && !(router.pathname === '/sns' || router.pathname === '/exhibition')) && <DesktopMenu />}
        <DesktopSubmenu>
          {children}
        </DesktopSubmenu>
        {/* <CurvedCourner className={"BottomLeft"} />
        <HalfCircle className={"Right"} />
        <CurvedCourner className={"BottomRight"} /> */}
        {(showMenu && !(router.pathname === '/sns' || router.pathname === '/exhibition')) &&
          <DesktopDateFooter>
            {"2021.10.04-10.24"}
          </DesktopDateFooter>
        }
        <DesktopLogoFooter>
          <HorizontalImages images={images} gap={"1.2em"} />
        </DesktopLogoFooter>
        <DesktopNavFooter>
          <Nav enableButton={false}></Nav>
        </DesktopNavFooter>
      </DesktopBody >
    </>
  )
}

const DesktopDateFooter = styled.div`
  z-index: 1;
  position: absolute;
  bottom: 1%;
  left: 2%;
  font-size: 2.5em;
  ${media.desktop}
  {
    bottom: 1.5%;
    left: 3rem;
    font-size: 2.5em;
  }
`;

const DesktopLogoFooter = styled.div`
  z-index: 1;
  position:absolute;
  display:flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-around;
  bottom: 0;
  right: 10%;
  height: 80%;
  ${media.desktop}{
    bottom: 0.25%;
    right: 6%;
    width: 30%;
  }
`;

const DesktopNavFooter = styled.div`
  z-index: 1;
  position:absolute;
  bottom:1%;
  right:0.5%;
  ${media.desktop}{
    bottom: 2%;
    right: 1%;
  }
`;

const DesktopBody = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  align-items:center;
  overflow: auto;
  padding-bottom: 15%;
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

const LeftNotch = styled.div`
  position:absolute;
  margin:0;
  padding:0;
  pointer-events: none;
  top:40%;
  left:0;
  width:20%;
  ${media.desktop}{
    top:32%;
  }
`;

const RightNotch = styled.div`
  position:absolute;
  margin-left: auto; margin-right: auto; display: block;
  pointer-events: none;
  top:40%;
  right:0;
  width:20%;
  ${media.desktop}{
    top:32%;
  }
`;

export default DesktopLayout;
