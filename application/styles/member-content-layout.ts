import styled from 'styled-components';
import { media } from './theme';

const MemberContentLayout = styled.div`
  font-size: 1.2em;
  width:80%;
  margin-top:10vh;
  ${media.tablet}{
    width:100%;
    margin-top:45vh;
    padding-bottom: 15vh;
  }
  ${media.desktop}{
    font-size: 1.6em;
    margin-top:100%;
    padding-top:20%;
    padding-bottom: 15vh;
  }
  `;

export default MemberContentLayout;
