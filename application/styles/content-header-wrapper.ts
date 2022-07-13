import styled from 'styled-components';
import { media } from './theme';

const ContentHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-between;
  align-items: flex-end;
  justify-content: left;
  margin-left: 3%;
  margin-bottom: 3%;
  ${media.tablet} {
    /* padding-top: 10vh; */
    margin-bottom: 1.5%;
    margin-left: 4%;
  }
`;

export default ContentHeaderWrapper;
