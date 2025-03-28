import styled from 'styled-components';
import { CenterWrapperStyled } from 'styles/utils';
import { LinkStyled } from '../AnimatedLink/AnimatedLinkStyles';

export const LiStyled = styled.li`
  cursor: pointer;
  text-transform: capitalize;

  & ${LinkStyled} {
    font-size: 2.5rem;
  }

  &:first-child {
    margin-right: auto;
    font-family: ${props => props.theme.fonts.secondary};
    text-transform: uppercase;

    & ${LinkStyled} {
      font-size: 3rem;
    }
  }
`;

export const UlStyled = styled.ul`
  display: flex;
  gap: 5rem;
  width: 100%;
`;

export const ContainerStyled = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  height: 8rem;
  background-color: ${props => props.theme.colors.text.light};
  z-index: 5;
  transform: ${({ $scrollDirection, $animate, $isHomePage }) =>
    $scrollDirection === 'down' ||
    $animate ||
    ($animate === null && $isHomePage)
      ? 'translateY(-200%)'
      : 'translateY(0)'};
  transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(5px);

  & ${CenterWrapperStyled} {
    align-items: center;
  }

  @media ${props => props.theme.breakpoints.md} {
    & ${LiStyled} {
      display: none;

      &:first-child {
        display: block;
      }
    }
  }
`;
