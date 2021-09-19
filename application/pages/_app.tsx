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

import { motion, AnimateSharedLayout } from 'framer-motion';


function MyApp({ Component, pageProps }: AppProps) {
  const { height, width } = useWindowSize();

  return (
    <>
      <AnimateSharedLayout>
        <HeadInfo />
        <GlobalStyle />
        <NavWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Nav />
        </NavWrapper>
        <Wrapper initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}>
          <ThemeProvider theme={theme}>
            {width > 376 ?
              <DesktopLayout><Component {...pageProps} /></DesktopLayout> :
              <MobileLayout><Component {...pageProps} /></MobileLayout>}
          </ThemeProvider>
        </Wrapper>

        <LogoWrapper>
          <LogoList />
        </LogoWrapper>
      </AnimateSharedLayout>
    </>
  );
}

const NavWrapper = styled(motion.div)`
  position: fixed;
  top: 1em;
  left: 3em;
  ${media.mobile} {
    top: 0.2em;
    left: 0.5em;
  }
`;

const LogoWrapper = styled.div`
  position: fixed;
  bottom: 2em;
  right: 5em;
  ${media.mobile} {
    bottom: 1em;
    right: 1em;
  }
`;

const Wrapper = styled(motion.div)`
  width:95vw;
  height:95vh;
  .title {
    font-weight: 800;
  }
  margin: 2em;
  align-self: center;
  flex-direction: column;
  background: rgb(236,67,36);
  background: linear-gradient(180deg, rgba(236,67,36,0.95) 0%, rgba(103,43,135,0.95) 15%, rgba(111,45,129,0.95) 85%, rgba(236,67,36,0.9500175070028011) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.mobile} {
    overflow: scroll;
  }
`;

export default MyApp;
