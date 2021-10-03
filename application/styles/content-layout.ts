import styled from 'styled-components';
import { media } from './theme';

const ContentLayout = styled.div`
  position: relative;
  font-size: 1.2em;
  width:76vw;
  padding-top: 12vh;
  overflow: auto;
  ${media.tablet}{
    padding-top: 12vh;
    width:64vw;
  }
  ${media.desktop}{
    padding-top: 12vh;
    width:48vw;
    font-size: 1.6em;
  }
  `;

export default ContentLayout;
