import { motion } from 'framer-motion';
import styled from 'styled-components';
import { media } from './theme';

const StyledMotion = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.tablet}{
    flex-direction: row;
  }
  ${media.desktop}{
    flex-direction: row;
  }
`;

export default StyledMotion
