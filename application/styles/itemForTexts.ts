import styled from 'styled-components';
import { media } from './theme';

const ItemText = styled.div`
  font-size: 1.6em;
  margin-bottom: 0.5em;
  ${media.tablet}{
    font-size: 1.5em;
    margin: 0 0.5em;
    padding: 0.5em;
  }
  ${media.desktop}{
    margin-bottom: 0em;
    font-size: 1.8em;
    padding: 0.8 0em;
  }
`;

export default ItemText;
