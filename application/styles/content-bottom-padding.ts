import styled from 'styled-components';
import { media } from './theme';

const ContentBottomPadding = styled.p`
  font-size: 1.7rem;
  ${media.desktop} {
    padding-bottom: 15vh;
  }
`;

export default ContentBottomPadding;
