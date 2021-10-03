import styled from 'styled-components';
import { media } from './theme';

const MemberContentLayout = styled.div`
  position: relative;
  font-size: 1.2em;
  width:80%;
  margin-top: 8vh;
  overflow: auto;
  ${media.tablet}{
    height: 100%;
    margin-top: 25vh;
  }
  ${media.desktop}{
    height:100%;
    margin-top: 30vh;
    font-size: 1.6em;
  }
  `;

export default MemberContentLayout;
