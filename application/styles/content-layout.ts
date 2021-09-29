import styled from 'styled-components';
import { media } from './theme';

const ContentLayout = styled.div`
  margin-top: 10%;
  padding-bottom: 7.5em;
  font-size: 1.2em;
  width:80%;
  ${media.tablet} {
    margin-top: 15%;
    margin-left: 4%;
    margin-right: 4%;
    padding-bottom: 4.5em;
    font-size: 2em;
  }
  ${media.desktop}{
    width:80%;
    padding-top:60%;
    margin-top:0;
    padding-bottom: 2em;
    font-size: 1.6em;
  }
  `;

export default ContentLayout;
