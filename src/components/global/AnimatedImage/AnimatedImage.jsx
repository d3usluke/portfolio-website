import React, { useRef } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useScroll, useTransform, useSpring } from 'framer-motion';
import { useRefScrollProgress } from 'hooks';
import { ImageWrapperStyled, MotionWrapperStyled } from './AnimatedImageStyles';

const AnimatedImage = ({ isStatic, data = '', children }) => {
  const { src, alt } = data;
  const ref = useRef(null);
  const { start, end } = useRefScrollProgress(ref);
  const { scrollYProgress } = useScroll();
  const translateYValue = useTransform(
    scrollYProgress,
    [start, end],
    [10, -10]
  );
  const translateY = useSpring(translateYValue, {
    damping: 45,
    mass: 0.8,
    stiffness: 100
  });

  return (
    <ImageWrapperStyled ref={ref}>
      <MotionWrapperStyled style={{ translateY, scale: '1.23' }}>
        {isStatic ? children : <GatsbyImage image={getImage(src)} alt={alt} />}
      </MotionWrapperStyled>
    </ImageWrapperStyled>
  );
};
export default AnimatedImage;
