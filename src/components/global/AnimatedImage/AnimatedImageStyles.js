import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MotionWrapperStyled = styled(motion.div)``;

export const ImageWrapperStyled = styled.div`
  border-radius: 2rem;
  overflow: hidden;
  max-height: 95rem;
  background: grey;
  mask-image: radial-gradient(white, black);
  -webkit-mask-image: -webkit-radial-gradient(white, black);

  & img {
    object-fit: cover;
  }

  & * {
    height: 100%;
    width: 100%;
  }

  &:first-child {
    grid-area: a;
  }

  &:nth-child(2) {
    grid-area: b;
  }

  &:nth-child(3) {
    grid-area: c;
    max-height: 60rem;
  }

  &:nth-child(4) {
    grid-area: d;
  }

  @media ${props => props.theme.breakpoints.sm} {
    max-height: 50rem;
  }
`;
