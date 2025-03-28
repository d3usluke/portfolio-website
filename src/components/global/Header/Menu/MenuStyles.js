import styled from 'styled-components';
import { motion } from 'framer-motion';
import { LinkStyled } from 'components/global/AnimatedLink/AnimatedLinkStyles';
import { LiStyled } from '../HeaderStyles';
import { CenterWrapperStyled } from 'styles/utils';

export const MotionWrapperStyled = styled(motion.span)`
  display: inline-block;
`;

export const ContainerStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  background: ${props => props.theme.colors.background.main};
  height: 100vh;
  width: 100vw;
  transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 4;

  & ${CenterWrapperStyled} {
    & > * + * {
      margin-top: 4rem;
    }

    & ${LiStyled} {
      overflow: hidden;
      min-height: 6.5rem;

      &:first-child {
        margin-right: 0;
        font-family: ${props => props.theme.fonts.main};
        text-transform: capitalize;
      }
      & ${LinkStyled} {
        font-size: 5rem;
      }
    }
  }
`;
