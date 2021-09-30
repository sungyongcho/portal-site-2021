import styled from 'styled-components';
import { media } from './theme';

const ContentLayout = styled.div`
  display: inline-block;
  font-size: 1.2em;
  width:80vw;
  height:100%;
  /* margin-top:10vh; */
  ${media.tablet}{
    position: relative;
    top:0;
  }
  ${media.desktop}{
    font-size: 1.6em;
    padding-top:20%;
    padding-bottom: 15vh;
  }
  `;

export default ContentLayout;
