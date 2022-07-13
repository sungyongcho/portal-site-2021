import styled from 'styled-components';
import { media } from './theme';

const ContentWrapper = styled.div`
  display: inline-block;
  border: 0.1em solid #EFEFEF;
  border-radius: 20px;
  padding: 5%;
  overflow: hidden;
  line-height: 1.5em;
  box-sizing: "border-box";
  width: 68vw;
  ${media.tablet} {
    width: 58vw;
    padding: 4%;
  }
  ${media.desktop}{
    width: 44vw;
    padding: 3%;
  }
`;
export default ContentWrapper;
