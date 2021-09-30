import styled from 'styled-components';
import { media } from './theme';

const Item = styled.div`
  font-size: 1.8em;
  margin-bottom: 0.5em;
  ${media.tablet}{
    font-size: 1.5em;
    margin: 0 0.5em;
  }
  ${media.desktop}{
    font-size: 2em;
    margin: 0 0.5em;
  }
`;

export default Item;
