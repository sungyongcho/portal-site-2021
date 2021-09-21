import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import { media, theme } from "../styles/theme";
import styled from 'styled-components'
import Nav from '../components/Nav'

import { useWindowSize } from '../hooks/useWindowSize'
import DesktopLayout from "components/DesktopLayout";
import MobileLayout from "../components/MobileLayout";
import HeadInfo from "../components/HeadInfo";
import LogoList from '../components/LogoList';

import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';


function MyApp({ Component, pageProps, router }: AppProps) {
  const { height, width } = useWindowSize();

  return (
    <>
      <HeadInfo />
      <GlobalStyle />
      <Wrapper>
        <NavWrapper>
          <Nav />
        </NavWrapper>
        <ThemeProvider theme={theme}>
          {width > 376 ?
            <DesktopLayout>
              <AnimatePresence exitBeforeEnter>
                <Component {...pageProps} />
              </AnimatePresence>
            </DesktopLayout>
            :
            <MobileLayout>
              <Component {...pageProps} />
            </MobileLayout>}
        </ThemeProvider>
        {/* <LogoWrapper>
          <LogoList />
        </LogoWrapper> */}
      </Wrapper>

    </>
  );
}

const NavWrapper = styled(motion.div)`
  position:fixed;
  top: 3%;
  left: 4.5%;
`;

const LogoWrapper = styled.div`
  position: fixed;
  display:flex;
  flex-direction:row;
  bottom: 1.5%;
  left: 3%;
`;

const Wrapper = styled(motion.div)`
  position:fixed;
  display:flex;
  flex-direction:column;
  width: 94vw;
  height: 97vh;
  margin: 3%;
  .title {
    font-weight: 800;
  }
  align-self: center;
  background: rgb(236,67,36);
  background: linear-gradient(180deg, rgba(236,67,36,0.95) 0%, rgba(103,43,135,0.95) 15%, rgba(111,45,129,0.95) 85%, rgba(236,67,36,0.9500175070028011) 100%);
`;

export default MyApp;
