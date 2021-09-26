import styled from 'styled-components';
import { media } from './theme';

const ContentLayout = styled.div`
overflow: visible;
  margin-top: 10%;
  margin-left: 6%;
  margin-right: 6%;
  padding-bottom: 3em;
  font-size: 1.2em;
  ${media.tablet} {
    margin-top: 15%;
    margin-left: 4%;
    margin-right: 4%;
    padding-bottom: 2em;
    font-size: 2em;
  }
  ${media.desktop}{
    margin-top: 10%;
    margin-left: 25%;
    margin-right: 25%;
    padding-bottom: 2em;
    font-size: 1.6em;
  }
  `;

export default ContentLayout;
