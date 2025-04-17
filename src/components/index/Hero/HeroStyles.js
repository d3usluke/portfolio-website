import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  Bounce,
  FadeIn,
  ShineSlide,
  SlideUp,
  StrokeAnimate
} from 'styles/animations';
import { customMediaQuery } from 'utils';

export const BouncingBallStyled = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  background: ${props => props.theme.colors.text.main};
  animation: ${Bounce} 1s;
  transform: translateY(0px);
  animation-iteration-count: infinite;
`;

export const BallWrapperStyled = styled.div`
  position: absolute;
  bottom: 2rem;
  border: 1px solid ${props => props.theme.colors.text.main};
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-bottom: 3rem;
  opacity: 0;
  animation: ${FadeIn} 0.2s ease forwards 4.5s;

  & ${BouncingBallStyled} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 30%);
  }
`;

export const ShineStyled = styled.div`
  position: absolute;
  left: 3%;
  top: 0;
  width: 97%;
  height: 100%;
  overflow: hidden;

  &::before {
    opacity: 0;
    content: '';
    position: absolute;
    top: 0;
    left: -100px;
    width: 10rem;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    transform: skewX(-30deg);
    animation: ${ShineSlide} 1s ease forwards 4.25s;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0.3) 77%,
      rgba(255, 255, 255, 0.7) 92%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

export const SvgStyled = styled.svg`
  width: 100vw;
  max-width: 120rem;
  padding: 0 2rem;

  & path {
    stroke-dasharray: 100%;
    stroke-linecap: round;
    stroke-dashoffset: 100%;
    animation: ${StrokeAnimate} 3s cubic-bezier(0.22, 0, 0.67, 0) forwards;
    padding: 2rem;
    /* opacity: 0; */
    stroke: ${props => props.theme.colors.text.main};
  }
`;

export const HeadingWrapperStyled = styled.div`
  position: relative;
  overflow: hidden;
`;

export const ParagraphStyled = styled.p`
  margin-top: 5rem;
  font-size: 8rem;
  opacity: 0;
  animation: ${SlideUp} 1s ease forwards 3s;
  padding-inline: 2rem;
  text-align: center;

  ${customMediaQuery(880)} {
    font-size: 6.5rem;
  }

  ${customMediaQuery(740)} {
    font-size: 6rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 3.5rem;
    text-align: center;
    line-height: 7rem;
    padding-inline: 1rem;
  }
`;

export const HeaderStyled = styled(motion.div)`
  margin-bottom: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContainerStyled = styled.section`
  height: 100vh;
  opacity: ${({ $animate }) => ($animate === null ? '0' : '1')};

  & ${SvgStyled} {
    & path {
      opacity: ${({ $animate }) => (!$animate ? '1' : '0')};
      animation: ${({ $animate }) => (!$animate ? 'none' : null)};
      stroke-dashoffset: ${({ $animate }) => (!$animate ? '0' : null)};
    }
  }

  & ${ParagraphStyled}, ${BallWrapperStyled} {
    opacity: ${({ $animate }) => (!$animate ? '1' : '0')};
    animation: ${({ $animate }) => (!$animate ? 'none' : null)};
  }
`;
