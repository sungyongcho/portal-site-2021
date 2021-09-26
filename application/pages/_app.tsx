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


function MyApp({ Component, pageProps }: AppProps) {
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
        <GradientTop /> {/* 올리면 안가려짐, 내리면 가려짐, wrapper 바로 밑으로 */}
        <GradientBottom />
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

const GradientTop = styled.div`
  position: absolute;
  display: block;
  top: 0;
  width:100%;
  height:15%;
  background: rgb(236,67,36);
  background: linear-gradient(180deg, rgba(236,67,36,1) 0%, rgba(236,67,36,0) 100%);
`;
const GradientBottom = styled.div`
  position: absolute;
  display: block;
  bottom: 0;
  width:100%;
  height:15%;
  background: rgb(236,67,36);
  background: linear-gradient(180deg, rgba(236,67,36,0) 0%, rgba(236,67,36,1) 100%);
`;
export default MyApp;
