import styled from 'styled-components';
import { media } from './theme';

const ContentLayout = styled.div`
  margin-top: 15%;
  margin-left: 6%;
  margin-right: 6%;
  padding-bottom: 3em;
  font-size: 1.2em;
  ${media.tablet} {
    margin-top: 6%;
    margin-left: 4%;
    margin-right: 4%;
    padding-bottom: 2em;
    font-size: 2em;
  }
  ${media.desktop}{
    margin-top: 6%;
    margin-left: 18%;
    margin-right: 18%;
    padding-bottom: 2em;
    font-size: 2em;
  }
  `;

export default ContentLayout;
