import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import { media, theme } from "../styles/theme";
import styled from "styled-components";
import Nav from "../components/Nav";

import { useWindowSize } from "../hooks/useWindowSize";
import DesktopLayout from "components/DesktopLayout";
import MobileLayout from "../components/MobileLayout";
import HeadInfo from "../components/HeadInfo";
import LogoList from "../components/LogoList";

import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

import Image from "next/image";

import NotchLeft from "../public/notch_left.png";

function MyApp({ Component, pageProps, router }: AppProps) {
  const { height, width } = useWindowSize();

  // TODO: rename
  const wrapperSizes = {
    inset: {
      mobile: width * 0.03,
      tablet: width * 0.02,
      desktop: width * 0.01,
    },
    insetWidth: {
      mobile: width - ((width * 0.03) * 2),
      tablet: width - ((width * 0.02) * 2),
      desktop: width - ((width * 0.01) * 2),
    },
  };
  const Wrapper = styled(motion.div)`
    position: fixed;
    display: flex;
    flex-direction: column;
    inset: ${width * 0.03}px;
    .title {
      font-weight: 800;
    }
    align-self: center;
    background: rgba(111, 45, 129, 0.95);
    background: linear-gradient(
      180deg,
      rgba(236, 67, 36, 0.95) 0%,
      rgba(103, 43, 135, 0.95) 15%,
      rgba(111, 45, 129, 0.95) 100%
        // rgba(236, 67, 36, 0.9500175070028011) 100%
    );
    &:after {
      position: fixed;
      display: block;
      content: " ";
      bottom: ${wrapperSizes.inset.mobile}px;
      width: ${wrapperSizes.insetWidth.mobile}px;
      height: ${height * 0.15}px;
      background-color: rgba(236, 67, 36, 0.9500175070028011) 100%;
      background: linear-gradient(
        180deg,
        rgba(111, 45, 129, 0) 0%,
        rgba(111, 45, 129, 0) 4%,
        rgba(236, 67, 36, 0.7) 100%
      );
    }
    ${media.tablet} {
      inset: ${wrapperSizes.inset.tablet}px;
      &:after {
        bottom: ${wrapperSizes.inset.tablet}px;
        width: ${wrapperSizes.insetWidth.tablet}px;
      }
    }
    ${media.desktop} {
      inset: ${wrapperSizes.inset.desktop}px;
      &:after {
        bottom: ${wrapperSizes.inset.desktop}px;
        width: ${wrapperSizes.insetWidth.desktop}px;
      }
    }
  `;

  return (
    <>
      <HeadInfo />
      <GlobalStyle />
      <Wrapper>
        <NavWrapper>
          <Nav enableButton={false} />
        </NavWrapper>
        <ThemeProvider theme={theme}>
          {width > 767 ? (
            <DesktopLayout>
              <Component {...pageProps} />
            </DesktopLayout>
          ) : (
            <MobileLayout>
              <Component {...pageProps} />
            </MobileLayout>
          )}
        </ThemeProvider>
      </Wrapper>
    </>
  );
}

const NavWrapper = styled(motion.div)`
  position: fixed;
  top: 3%;
  left: 4.5%;
  ${media.tabletRotate} {
    top: 5%;
    left: 4%;
  }
  ${media.desktop} {
    top: 4%;
    left: 2.5%;
  }
`;

const LogoWrapper = styled.div`
  position: fixed;
  flex: nowrap;
  bottom: 1.5%;
  left: 3%;
`;

const LeftNotch = styled.div`
  position: fixed;
  margin-left: auto;
  margin-right: auto;
  display: block;

  top: 50%;
  left: 0;
  width: 25%;
`;

export default MyApp;
