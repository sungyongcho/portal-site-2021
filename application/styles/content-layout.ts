import styled from 'styled-components';
import { media } from './theme';

const ContentLayout = styled.div`
  font-size: 1.2em;
  width:80%;
  align-self: center;
  margin-top: 10vh;
  /* margin-top:10vh; */
  ${media.tablet}{
    position: relative;
    top:0;
  }
  ${media.desktop}{
    margin-top:50%;
    font-size: 1.6em;
    padding-top:20%;
    padding-bottom: 15vh;
  }
  `;

export default ContentLayout;
