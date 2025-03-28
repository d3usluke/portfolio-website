import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ImageWrapperStyled = styled(motion.div)`
  border-radius: 2rem;
  overflow: hidden;
  transition: transform 0.7s ease;
  cursor: pointer;
  mask-image: radial-gradient(white, black);
  -webkit-mask-image: -webkit-radial-gradient(white, black);

  & .gatsby-image {
    height: 100%;
    width: 100%;
    max-height: 50rem;
    object-fit: cover;
    transition: transform 1.5s ease;
    min-height: 52rem;
  }

  @media (hover: hover) {
    &:hover {
      transform: scale(0.96);

      & .gatsby-image {
        transform: scale(1.1);
      }
    }
  }
`;

export const FigureCaptionStyled = styled.figcaption`
  color: ${props => props.theme.colors.text.light};
  margin-bottom: 2rem;
  text-transform: uppercase;
  position: relative;
  margin-left: 1em;

  &::before {
    position: absolute;
    content: '';
    left: -1em;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-40%);
    height: 0.9rem;
    width: 0.9rem;
    background-color: ${props => props.theme.colors.text.accent};
  }
`;

export const FigureStyled = styled.figure`
  max-height: 55rem;
`;

export const LetterWrapperStyled = styled(motion.span)`
  display: inline-block;
`;

export const WordWrapperStyled = styled(motion.span)``;

export const HeadingStyled = styled(motion.h2)`
  position: absolute;
  width: max-content;
  top: 50%;
  left: 50%;
  color: ${props => props.theme.colors.text.accent};
  font-size: 7rem;
  font-family: ${props => props.theme.fonts.secondary};
  text-transform: uppercase;
  z-index: 2;
  /* transition: opacity 0.5s ease; */
  margin: 0;
  pointer-events: none;
  /* opacity: ${({ isVisible }) => (isVisible ? '1' : '0')}; */
  text-shadow: 5px 4px 9px rgba(247, 37, 133, 0.1);
  overflow: hidden;

  & > * + * {
    margin-left: 0.3em;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 5rem;
  }
`;

export const ContainerStyled = styled(motion.a)`
  height: 100%;
  width: 100%;

  @media ${props => props.theme.breakpoints.md} {
    position: relative;
  }
`;
