import React from 'react';
import Lottie from 'lottie-react';
import clock from 'assets/lotties/clock.json';
import { TextGradientStyled } from 'styles/typography';
import { CenterWrapperStyled, motionDefaultAnimateProps } from 'styles/utils';
import { ContainerStyled, ParagraphStyled } from './HeroStyles';

const Hero = () => {
  return (
    <ContainerStyled>
      <CenterWrapperStyled>
        <ParagraphStyled {...motionDefaultAnimateProps}>
          The <TextGradientStyled>tech </TextGradientStyled> industry is rapidly
          shifting, improving and growing. <Lottie animationData={clock} /> I
          believe, as a,{' '}
          <TextGradientStyled>quality specialist</TextGradientStyled>, it is crucial to have the ability
          to keep up with the pace &{' '}
          <TextGradientStyled>contribute</TextGradientStyled> to the process.
        </ParagraphStyled>
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default Hero;
