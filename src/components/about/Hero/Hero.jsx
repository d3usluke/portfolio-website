import React, { useEffect, useState } from 'react';
import clock from 'assets/lotties/clock.json';
import { TextGradientStyled } from 'styles/typography';
import { CenterWrapperStyled, motionDefaultAnimateProps } from 'styles/utils';
import { ContainerStyled, ParagraphStyled } from './HeroStyles';

const Hero = () => {
  const [LottiePlayer, setLottiePlayer] = useState(null);

  useEffect(() => {
    // Only run on the client
    import('lottie-react').then(mod => {
      setLottiePlayer(() => mod.default);
    });
  }, []);

  return (
    <ContainerStyled>
      <CenterWrapperStyled>
        <ParagraphStyled {...motionDefaultAnimateProps}>
          The <TextGradientStyled>tech </TextGradientStyled> industry is rapidly
          shifting, improving and growing.
          {LottiePlayer && <LottiePlayer animationData={clock} />}I believe, as
          a <TextGradientStyled>quality specialist</TextGradientStyled> and a
          solutions delivery manager, it is crucial to have the ability to keep
          up with the pace & <TextGradientStyled>contribute</TextGradientStyled>{' '}
          to the process.
        </ParagraphStyled>
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default Hero;
