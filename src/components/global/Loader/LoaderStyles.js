import styled from 'styled-components';
import { motion } from 'framer-motion';

export const WallpaperStyled = styled(motion.div)`
  background-color: ${props => props.theme.colors.text.main};
`;

export const ContainerStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1000;
  pointer-events: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;
