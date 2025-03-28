import styled from 'styled-components';
import { CenterWrapperStyled } from 'styles/utils';
import { LinkStyled, SvgStyled } from '../AnimatedLink/AnimatedLinkStyles';

export const LineBreakStyled = styled.hr`
  border: none;
  background-color: ${props => props.theme.colors.text.light};
  height: 0.08rem;
  max-width: 125rem;
  margin: 0 auto;
  border-radius: 2rem;
  opacity: 0.2;
`;

export const SocialsWrapperStyled = styled.div`
  display: flex;
  margin-bottom: 3rem;

  & > * + * {
    margin-left: 6rem;
  }
`;

export const ExternalsWrapperStyled = styled.div``;

export const ContainerStyled = styled.footer`
  padding: 5rem 0;
  background-color: ${props => props.theme.colors.text.main};

  & > ${CenterWrapperStyled} {
    flex-direction: row;
    min-height: 25vh;
    justify-content: space-between;
    padding-block: 5rem;

    & ${LinkStyled} {
      color: ${props => props.theme.colors.text.light};
      font-size: 2.5rem;
    }

    & ${SvgStyled} {
      width: 3.5rem;
      margin-top: 1.4rem;
    }
  }

  @media ${props => props.theme.breakpoints.md} {
    & > ${CenterWrapperStyled} {
      flex-direction: column-reverse;
      align-items: flex-start;
      justify-content: center;

      & ${LinkStyled} {
        color: ${props => props.theme.colors.text.light};
        font-size: 2.2rem;
      }

      & > * + * {
        margin-bottom: 3rem;
      }
    }
  }

  @media ${props => props.theme.breakpoints.sm} {
    & > ${CenterWrapperStyled} {
      & ${SocialsWrapperStyled} {
        flex-direction: column;

        & > * + * {
          margin-left: 0;
          margin-top: 3rem;
        }
      }

      & ${LinkStyled} {
        font-size: 2rem;
      }

      & ${SvgStyled} {
        width: 3rem;
      }
    }
  }
`;
