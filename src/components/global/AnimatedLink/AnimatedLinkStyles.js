import styled from 'styled-components';

export const SvgStyled = styled.svg``;

export const ArrowWrapperStyled = styled.span`
  display: inline-block;
  position: relative;
  height: 4.8rem;
  width: 5rem;
  overflow: hidden;
  margin-left: 1rem;
`;

export const LinkStyled = styled.a`
  font-size: 5rem;
  position: relative;
  width: fit-content;

  & ${ArrowWrapperStyled} {
    transform: ${({ $arrowPosition }) =>
      $arrowPosition !== 'left' ? 'translateY(20%)' : null};
    margin-left: ${({ $arrowPosition }) =>
      $arrowPosition !== 'left' ? '1rem' : '2rem'};
  }

  & ${SvgStyled} {
    transition: transform 0.2s cubic-bezier(0.76, 0, 0.24, 1);
    position: absolute;
    left: 0;
    top: 0;
    fill: ${({ $isDark, theme }) =>
      $isDark ? theme.colors.text.main : theme.colors.text.light};
    width: 5.5rem;
    transform: ${({ $arrowPosition }) =>
      $arrowPosition === 'right'
        ? 'rotate(45deg)'
        : $arrowPosition === 'up'
        ? 'rotate(-45deg)'
        : $arrowPosition === 'left'
        ? 'rotate(-135deg)'
        : null};

    &.animate {
      transform: ${({ $arrowPosition }) =>
        $arrowPosition === 'right'
          ? 'translateX(200%) rotate(45deg)'
          : $arrowPosition === 'up'
          ? 'translateY(200%) rotate(-45deg)'
          : $arrowPosition === 'left'
          ? 'translateX(200%) rotate(-135deg)'
          : 'translateX(200%)'};
      fill: ${props => props.theme.colors.text.accent};
    }
  }

  &::before {
    content: '';
    position: ${({ $noUnderline }) => ($noUnderline ? 'static' : 'absolute')};
    width: 100%;
    left: 0;
    background-color: ${props => props.theme.colors.text.accent};
    height: 2px;
    bottom: -2px;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  }

  @media (hover: hover) {
    &:hover {
      &::before {
        transform-origin: left;
        transform: scaleX(1);
      }

      & ${SvgStyled} {
        transform: ${({ $arrowPosition }) =>
          $arrowPosition === 'right'
            ? 'translateX(-200%) rotate(45deg)'
            : $arrowPosition === 'up'
            ? 'translateY(-200%) rotate(-45deg)'
            : $arrowPosition === 'left'
            ? 'translateX(-200%) rotate(-135deg)'
            : 'translateX(-200%)'};

        &.animate {
          transform: ${({ $arrowPosition }) =>
            $arrowPosition === 'right'
              ? 'translateX(0) rotate(45deg)'
              : $arrowPosition === 'up'
              ? 'translateY(0) rotate(-45deg)'
              : $arrowPosition === 'left'
              ? 'translateX(0) rotate(-135deg)'
              : 'translateX(0)'};
        }
      }
    }
  }
`;
