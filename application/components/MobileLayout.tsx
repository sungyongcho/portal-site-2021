import MobileLogo from "./MobileLogo";
import MobileMenu from "./MobileMenu";
import { useRouter } from "next/router";
import styled from "styled-components";
import InterviewLayout from "./interview-body";
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

  return (
    <MobileWrapper>
      {isMenuPage && <MobileLogo />}
      {isMenuPage && showMenu && <MobileMenu children={children} />}
      {(showContent || router.pathname === "/networking") && children}
    </MobileWrapper>
  );
};

const MobileWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`;
export default MobileLayout;
