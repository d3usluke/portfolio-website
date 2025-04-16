import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useScroll } from 'framer-motion';
import eye from 'assets/lotties/eye.json';
import sphere from 'assets/lotties/sphere.json';
import { TextGradientStyled } from 'styles/typography';
import { CenterWrapperStyled, motionDefaultAnimateProps } from 'styles/utils';
import {
  BackgroundStyled,
  ContainerStyled,
  ParagraphStyled,
  ParagraphWrapperStyled
} from './AboutStyles';

const About = () => {
  const ref = useRef(null);
  const domRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [LottiePlayer, setLottiePlayer] = useState(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end']
  });

  useEffect(() => {
    domRef.current = document.querySelector('#menu');
    setMounted(true);

    // Only run on the client
    import('lottie-react').then(mod => {
      setLottiePlayer(() => mod.default);
    });
  }, []);

  return (
    <>
      <ContainerStyled ref={ref}>
        <CenterWrapperStyled>
          <ParagraphWrapperStyled {...motionDefaultAnimateProps}>
            <ParagraphStyled>
              Delivering reliable software is what I do.
              <TextGradientStyled> As a QA specialist</TextGradientStyled>{' '}
              {LottiePlayer && <LottiePlayer animationData={eye} />} and
              Solutions Delivery Manager,{' '}
              <TextGradientStyled> </TextGradientStyled>
            </ParagraphStyled>
            <ParagraphStyled>
              <TextGradientStyled>I focus on</TextGradientStyled> quality,
              efficiency,
              <TextGradientStyled> and seamless </TextGradientStyled>
              user experiences.{' '}
              {LottiePlayer && <LottiePlayer animationData={sphere} />}
            </ParagraphStyled>
          </ParagraphWrapperStyled>
        </CenterWrapperStyled>
      </ContainerStyled>

      {mounted && domRef.current
        ? createPortal(
            <BackgroundStyled style={{ opacity: scrollYProgress }} />,
            domRef.current
          )
        : null}
    </>
  );
};

export default About;
