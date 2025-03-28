import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CenterWrapperStyled } from 'styles/utils';
import { customMediaQuery } from 'utils';

export const ParagraphStyled = styled(motion.div)`
  max-width: 100rem;
  margin-bottom: 10rem;

  & > div {
    max-width: 6rem;
    max-height: 5rem;
    display: inline-block;
    transform: translateY(25%);
  }
`;

export const ContainerStyled = styled.section`
  width: 100%;
  font-size: 6rem;

  & > ${CenterWrapperStyled} {
    min-height: 100vh;

    & > * + * {
      margin-top: 5rem;
    }
  }

  @media ${props => props.theme.breakpoints.lg} {
    & > ${CenterWrapperStyled} {
      justify-content: flex-start;
      margin-top: 10rem;
    }
    font-size: 5rem;
  }

  @media ${props => props.theme.breakpoints.md} {
    ${ParagraphStyled} {
      max-width: none;
    }
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 4rem;

    & > ${CenterWrapperStyled} {
      min-height: 70vh;
    }

    ${ParagraphStyled} {
      & > div {
        max-width: 4rem;
        max-height: 4rem;
        display: inline-block;
        transform: translateY(25%);
      }
    }
  }

  ${customMediaQuery(400)} {
    font-size: 3.2rem;
  }
`;
