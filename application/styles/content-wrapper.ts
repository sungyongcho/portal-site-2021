import styled from 'styled-components';
import { media } from './theme';

const ContentWrapper = styled.div`
  border: 0.15em solid #EFEFEF;
  border-radius: 20px;
  padding: 5%;
  overflow: scroll;
  box-sizing: "border-box";
  ${media.tablet} {
    padding: 4%;

  }
`;
export default ContentWrapper;
