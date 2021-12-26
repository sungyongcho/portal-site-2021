import { motion } from 'framer-motion';
import styled from 'styled-components';
import { media } from './theme';

const StyledMotionForText = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.tablet}{
    flex-direction: column;
  }
  ${media.desktop}{
    flex-direction: column;
  }
`;

export default StyledMotionForText
