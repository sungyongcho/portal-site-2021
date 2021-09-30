import styled from 'styled-components';
import { media } from './theme';

const MemberContentLayout = styled.div`
  position: relative;
  font-size: 1.2em;
  width:80%;
  align-self: center;
  ${media.tablet}{
    width:100%;
    margin-top:45vh;
    padding-bottom: 15vh;
  }
  ${media.desktop}{
    height:100%;
    margin-top: 20vh;
    font-size: 1.6em;
  }
  `;

export default MemberContentLayout;
