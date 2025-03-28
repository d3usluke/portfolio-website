import { motion } from 'framer-motion';
import styled from 'styled-components';
import { CenterWrapperStyled } from 'styles/utils';
import { customMediaQuery } from 'utils';

export const ImagesWrapperStyled = styled.div`
  display: flex;
  flex-basis: 50%;
  margin-left: 8rem;

  & > * {
    flex: 1;
    max-height: 40rem;

    &:last-child {
      transform: translateY(5rem);
    }
  }

  & > * + * {
    margin-left: 3rem;
  }
`;

export const ContentWrapperStyled = styled(motion.div)`
  display: flex;
  justify-content: center;
`;

export const ParagraphStyled = styled.p`
  font-size: 2.5rem;
  flex-basis: 50%;
`;

export const ContainerStyled = styled.section`
  min-height: 100vh;

  & ${CenterWrapperStyled} {
    align-items: flex-start;
  }

  @media ${props => props.theme.breakpoints.lg} {
    & ${ImagesWrapperStyled} {
      flex-direction: column;

      & > * + * {
        margin-left: 0;
        margin-top: 3rem;
      }

      & > * {
        &:last-child {
          transform: translateY(0);
        }
      }
    }
  }

  @media ${props => props.theme.breakpoints.md} {
    & ${ContentWrapperStyled} {
      flex-direction: column-reverse;
    }

    & ${ImagesWrapperStyled} {
      flex-direction: row;
      margin-left: 0;
      margin-bottom: 5rem;

      & > * + * {
        margin-left: 3rem;
        margin-top: 0;
      }

      & > * {
        &:last-child {
          transform: translateY(-3rem);
        }
      }
    }
  }

  ${customMediaQuery(520)} {
    & ${ImagesWrapperStyled} {
      flex-direction: column;

      & > * {
        &:last-child {
          display: none;
        }
      }
    }

    & ${ParagraphStyled} {
      font-size: 2.2rem;
    }
  }
`;
