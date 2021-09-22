import MobileLogo from "./MobileLogo";
import MobileMenu from "./MobileMenu";
import { useRouter } from "next/router";
import styled from "styled-components";
import InterviewLayout from "./interview-body";
import HorizontalImages from "./HorizontalImages";
import { menuItems } from "./MenuItems";

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
        router.pathname !== "/networking" &&
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
      <MobileFooter>
        <HorizontalImages images={images} gap={"0.4em"}/>
      </MobileFooter>
      <MobileContentWrapper>
        {isMenuPage && <MobileLogo />}
        {isMenuPage && showMenu && <MobileMenu children={children} />}
        {(showContent || router.pathname === "/networking") && children}
      </MobileContentWrapper>
    </>
  );
};

const MobileFooter = styled.div`
  position: absolute;
  top: 0.4rem;
  right: 0.4rem;
  width: 60vw;
`;

const MobileContentWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`;

export default MobileLayout;
