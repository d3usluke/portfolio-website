import styled, { css } from 'styled-components';
import { Load } from 'styles/animations';

export const CircleStyled = styled.span`
  height: 3rem;
  width: 3rem;
  background-color: ${props => props.theme.colors.text.main};
  border-radius: 50%;
  display: inline-block;
  margin-left: 3rem;
  transform: scale(0.3);
  transition: all 0.2s ease;

  & > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    width: 2rem;
    transition: opacity 0.1s linear;
    fill: ${props => props.theme.colors.text.light};
  }
`;

export const LoadingWrapperStyled = styled.span`
  display: inline-block;
`;

export const WordWrapperStyled = styled.span``;

export const ButtonStyled = styled.button`
  border: none;
  border-radius: 2rem;
  font-size: 2.5rem;
  padding: 0.3em 1em;
  cursor: ${({ $isLoading, $isSuccess }) =>
    $isLoading ? 'wait' : $isSuccess ? 'default' : 'pointer'};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.text.light};
  color: ${props => props.theme.colors.text.main};
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  align-self: flex-end;
  margin-top: 3rem;
  margin-left: auto;
  width: ${({ $isLoading }) => ($isLoading ? '0' : '100%')};
  transition: all 0.5s ease;

  & ${LoadingWrapperStyled} {
    ${({ $isLoading }) => ($isLoading ? AnimateButton : null)};
  }

  & ${WordWrapperStyled} {
    width: ${({ $isLoading }) => ($isLoading ? '0' : '100%')};
    overflow: hidden;
    transition: all 0.5s ease;
  }

  & ${CircleStyled} {
    opacity: ${({ $isSuccess }) => ($isSuccess ? '.6' : null)};
  }

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background: ${props => props.theme.colors.text.main};
    opacity: 0.1;
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.2s ease;
  }

  @media (hover: hover) {
    &:hover {
      &::before {
        transform: ${({ $isLoading, $isSuccess }) =>
          $isLoading || $isSuccess ? null : 'scaleY(1)'};
        transform-origin: bottom;
      }

      & ${CircleStyled} {
        transform: ${({ $isLoading, $isSuccess }) =>
          $isLoading || $isSuccess ? null : 'scale(1.2)'};

        & > svg {
          opacity: ${({ $isLoading, $isSuccess }) =>
            $isLoading || $isSuccess ? null : '1'};
        }
      }
    }
  }
`;

const AnimateButton = css`
  animation: ${Load} 1.5s ease infinite;
`;
