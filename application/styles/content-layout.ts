import styled from 'styled-components';
import { media } from './theme';

const ContentLayout = styled.div`
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  margin-top: 15%;
  margin-left: 6%;
  margin-right: 6%;
  padding-bottom: 3em;
  font-size: 1.2em;
  ${media.tablet} {
    margin-top: 6%;
    margin-left: 4%;
    margin-right: 4%;
    padding-bottom: 0;
    font-size: 2em;
  }
  `;

export default ContentLayout;
