import styled from 'styled-components';
import { media } from './theme';

const ContentLayout = styled.div`
  position: relative;
  font-size: 1.2em;
  width:80%;
  height: 100%;
  margin-top: 8vh;
  align-self: center;
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

export default ContentLayout;
