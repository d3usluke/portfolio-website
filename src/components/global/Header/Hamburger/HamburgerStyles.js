import styled from 'styled-components';

export const ContainerStyled = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  cursor: pointer;

  & > * + * {
    margin-top: 0.4rem;
  }

  & span {
    background: ${props => props.theme.colors.text.main};
    border-radius: 10px;
    height: 0.3rem;
    display: block;
    transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);

    &:nth-of-type(1) {
      width: 50%;
      transform-origin: ${({ $showMenu }) => ($showMenu ? 'bottom' : null)};
      transform: ${({ $showMenu }) =>
        $showMenu ? 'rotatez(45deg) translate(2px, 0px)' : null};
    }

    &:nth-of-type(2) {
      width: 78%;
      transform-origin: ${({ $showMenu }) => ($showMenu ? 'top' : null)};
      transform: ${({ $showMenu }) =>
        $showMenu ? 'rotatez(-45deg) translate(0.3px, -1.7px)' : null};
    }

    &:nth-of-type(3) {
      width: ${({ $showMenu }) => ($showMenu ? '50%' : '75%')};
      transform-origin: ${({ $showMenu }) => ($showMenu ? 'bottom' : null)};
      transform: ${({ $showMenu }) =>
        $showMenu ? 'translate(8px, -6px) rotatez(45deg)' : null};
    }
  }

  @media ${props => props.theme.breakpoints.md} {
    display: flex;
  }
`;
