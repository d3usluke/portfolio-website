import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  LinkStyled,
  SvgStyled
} from 'components/global/AnimatedLink/AnimatedLinkStyles';
import { MainHeadingStyled } from 'styles/typography';
import { CenterWrapperStyled } from 'styles/utils';
import { customMediaQuery } from 'utils';

export const DescriptionStyled = styled.p`
  font-size: 2rem;
  margin-top: 3rem;
`;

export const RoleYearStyled = styled.div`
  opacity: 0.5;
  font-size: 2.5rem;
  margin-top: 1rem;
`;

export const ExperienceStyled = styled(motion.li)`
  & > ${LinkStyled} {
    font-size: 3.5rem;

    & > span {
      width: 4rem;
      margin-left: 0.5rem;

      & ${SvgStyled} {
        width: 4rem;
        margin-top: 1rem;
      }
    }
  }
`;

export const ExperienceListStyled = styled(
  motion('ul', { forwardMotionProps: false })
)`
  flex-basis: 50%;
  margin-left: 8rem;

  & > * + * {
    margin-top: 5rem;
  }
`;

export const ContainerStyled = styled.section`
  margin-top: 20rem;
  border-bottom-right-radius: 2rem;
  background-color: ${props => props.theme.colors.text.light};
  position: relative;
  padding-bottom: 10rem;

  & ${CenterWrapperStyled} {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    & ${MainHeadingStyled} {
      flex-basis: 50%;
      position: sticky;
      top: 15%;
    }
  }

  ${customMediaQuery(980)} {
    & ${CenterWrapperStyled} {
      flex-direction: column;

      & ${MainHeadingStyled} {
        position: static;
        top: 0%;
      }

      & ${ExperienceListStyled} {
        margin-left: 0;
        max-width: 70%;
      }
    }
  }

  @media ${props => props.theme.breakpoints.sm} {
    margin-top: 10rem;

    & ${CenterWrapperStyled} {
      & ${ExperienceListStyled} {
        max-width: none;
      }
    }
  }
`;
