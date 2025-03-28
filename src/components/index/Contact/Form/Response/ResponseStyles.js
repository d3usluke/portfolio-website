import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ResponseWrapperStyled = styled(motion.div)`
  position: absolute;
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: -1;
`;
