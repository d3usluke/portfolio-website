import styled from 'styled-components';
import { MainHeadingStyled } from 'styles/typography';
import { CenterWrapperStyled } from 'styles/utils';
import { LinkStyled } from '../AnimatedLink/AnimatedLinkStyles';

export const ContainerStyled = styled.section`
  & > ${CenterWrapperStyled} {
    justify-content: flex-start;
    min-height: 70vh;

    & ${MainHeadingStyled} {
      margin-bottom: 0;
      text-align: center;
    }

    & .lottie {
      max-width: 25rem;
    }
  }

  @media ${props => props.theme.breakpoints.sm} {
    & ${LinkStyled} {
      font-size: 4rem;
    }
  }
`;
