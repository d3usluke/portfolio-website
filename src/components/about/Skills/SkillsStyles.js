import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MainHeadingStyled } from 'styles/typography';
import { CenterWrapperStyled } from 'styles/utils';
import { customMediaQuery } from 'utils';

export const SkillStyled = styled(motion.li)`
  font-size: 2.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em 1em;
  border-radius: 2rem;
  border: 2px solid ${({ theme }) => theme.colors.text.dark};
  width: max-content;
`;

export const SkillsWrapperStyled = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  row-gap: 3rem;
  column-gap: 7rem;
  flex-basis: 50%;
  margin: 3rem 0 0 8rem;
`;

export const ContainerStyled = styled.section`
  margin-top: 20rem;

  & ${CenterWrapperStyled} {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    & ${MainHeadingStyled} {
      position: sticky;
      top: 15%;
      flex-basis: 50%;
    }
  }

  ${customMediaQuery(980)} {
    & ${CenterWrapperStyled} {
      flex-direction: column;

      & ${MainHeadingStyled} {
        position: static;
        top: 0;
        flex-basis: 50%;
      }

      & ${SkillsWrapperStyled} {
        width: 100%;
        margin-left: 0;
        column-gap: 10rem;
        grid-template-columns: repeat(3, max-content);
      }
    }
  }

  @media ${props => props.theme.breakpoints.md} {
    & ${CenterWrapperStyled} {
      & ${SkillsWrapperStyled} {
        grid-template-columns: repeat(2, max-content);
      }
    }
  }

  @media ${props => props.theme.breakpoints.sm} {
    margin-top: 10rem;

    & ${CenterWrapperStyled} {
      & ${SkillsWrapperStyled} {
        column-gap: 5rem;

        & ${SkillStyled} {
          font-size: 2.4rem;
        }
      }
    }
  }

  ${customMediaQuery(400)} {
    & ${CenterWrapperStyled} {
      & ${SkillsWrapperStyled} {
        display: flex;
        overflow-x: scroll;
        margin-top: 0;
        padding-bottom: 3rem;
        gap: 0;

        & * + * {
          margin-left: 1.5rem;
        }

        & ${SkillStyled} {
          font-size: 2.5rem;
        }
      }
    }
  }
`;
