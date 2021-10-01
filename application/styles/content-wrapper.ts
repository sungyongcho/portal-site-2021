import styled from 'styled-components';
import { media } from './theme';

const ContentWrapper = styled.div`
  display: inline-block;
  border: 0.1em solid #EFEFEF;
  border-radius: 20px;
  padding: 5%;
  overflow: scroll;
  line-height: 1.5em;
  box-sizing: "border-box";
  z-index:1;
  width: 90%;
  ${media.tablet} {
    padding: 4%;
  }
  ${media.desktop}{
    padding: 3%;
  }
`;
export default ContentWrapper;
