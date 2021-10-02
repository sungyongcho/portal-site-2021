import MobileLogo from "./MobileLogo";
import MobileMenu from "./MobileMenu";
import { useRouter } from "next/router";
import styled from "styled-components";
import InterviewLayout from "./interview-body";
import HorizontalImages from "./HorizontalImages";
import { menuItems } from "./MenuItems";
import Image from 'next/image'
import NotchLeft from "../public/notch_left.png"
import NotchRight from "../public/notch_right.png"

type Props = {
  children: any;
};

const MobileLayout = ({ children }: Props) => {
  const router = useRouter();

  const showMenu =
    (router.pathname.match(/\//g) || []).length === 2 ? false : true;

  const showContent =
    (router.pathname.match(/\//g) || []).length === 1 ? false : true;

  const isMenuPage =
    router.pathname === "/" ||
    menuItems.filter((menuItem) => {
      return (
        !(router.pathname === "/sns" || router.pathname === "/exhibition") &&
        `/${menuItem.path}` === router.pathname
      );
    }).length > 0;

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
      {isMenuPage && <LeftNotch>
        <Image src={NotchLeft} />
      </LeftNotch>}
      {isMenuPage && <RightNotch>
        <Image src={NotchRight} />
      </RightNotch>}
      {isMenuPage && <MobileFooter>
        <HorizontalImages images={images} gap={"0.4em"} />
      </MobileFooter>}
      <MobileContentWrapper>
        {isMenuPage && <MobileLogo />}
        {isMenuPage && showMenu && <MobileMenu children={children} />}
        {(showContent || (router.pathname === "/exhibition" || router.pathname === "/sns")) && children}
      </MobileContentWrapper>
    </>
  );
};

const MobileFooter = styled.div`
  position: absolute;
  top: 0.4rem;
  right: 0.4rem;
  width: 60vw;
  z-index:1;
`;

const MobileContentWrapper = styled.div`
  margin-top: 10%;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  padding-bottom: 15vh;
`;

const LeftNotch = styled.div`
  position:absolute;
  margin-left: auto; margin-right: auto; display: block;
  pointer-events: none;
  top:40%;
  left:0;
  width:30%;
`;

const RightNotch = styled.div`
  position:absolute;
  margin-left: auto; margin-right: auto; display: block;
  pointer-events: none;
  top:40%;
  right:0;
  width:30%;
`;


export default MobileLayout;
