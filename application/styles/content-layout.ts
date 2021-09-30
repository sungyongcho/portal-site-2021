import styled from 'styled-components';
import { media } from './theme';

const ContentLayout = styled.div`
  font-size: 1.2em;
  width:100%;
  margin-top:10vh;
    padding-top:10vh;
  ${media.desktop}{
    padding-bottom: 10em;
    font-size: 1.6em;
  }
  `;

export default ContentLayout;
