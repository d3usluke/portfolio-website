import styled from 'styled-components';
import { motion } from 'framer-motion';
import { customMediaQuery } from 'utils';
import { CenterWrapperStyled } from 'styles/utils';

export const BackgroundStyled = styled(motion.div)`
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.colors.text.main};
  position: fixed;
  top: 0;
  z-index: -25;
  pointer-events: none;
`;

export const ParagraphStyled = styled(motion.div)`
  font-size: 6rem;
  max-width: 100rem;

  & path {
    stroke: ${props => props.theme.colors.text.accent};
  }

  & > div {
    max-width: 6rem;
    max-height: 5rem;
    display: inline-block;
    transform: translateY(25%);
  }

  @media ${props => props.theme.breakpoints.md} {
    font-size: 5rem;

    & > div {
      max-width: 5rem;
    }
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 4rem;

    & > div {
      max-width: 4rem;
    }
  }

  ${customMediaQuery(500)} {
    font-size: 4.5rem;
  }

  ${customMediaQuery(380)} {
    font-size: 4rem;

    & > div {
      max-width: 4rem;
    }
  }

  ${customMediaQuery(340)} {
    font-size: 3.5rem;

    & > div {
      max-width: 4rem;
    }
  }
`;

export const ParagraphWrapperStyled = styled(motion.div)`
  & > * + * {
    margin-top: 5rem;
  }

  ${customMediaQuery(500)} {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const ContainerStyled = styled.section`
  min-height: 100vh;
  width: 100%;
  color: ${props => props.theme.colors.text.light};

  & > ${CenterWrapperStyled} {
    min-height: 100vh;
  }
`;
