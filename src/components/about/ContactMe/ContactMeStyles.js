import styled from 'styled-components';
import { LinkStyled } from 'components/global/AnimatedLink/AnimatedLinkStyles';
import { MainHeadingStyled } from 'styles/typography';

export const ContainerStyled = styled.section`
  position: relative;
  background-color: ${props => props.theme.colors.text.main};
  border-top-left-radius: 3rem;
  min-height: 30vh;
  padding: 20rem 0;

  & ${MainHeadingStyled} {
    text-align: center;
  }

  & ${LinkStyled} {
    color: ${props => props.theme.colors.text.light};
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 10rem 0;
  }
`;
