import styled from 'styled-components';
import { media } from './theme';

const ContentHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  padding-left: 3%;
  padding-bottom: 3%;
  ${media.tablet} {
    padding-bottom: 1.5%;
    padding-left: 4%;
  }
`;

export default ContentHeaderWrapper;
