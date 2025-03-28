import React, { useCallback, useContext, useEffect } from 'react';
import { useAnimationControls } from 'framer-motion';
import { GlobalContext } from 'providers';
import { ContainerStyled, WallpaperStyled } from './LoaderStyles';

const Loader = () => {
  const { transitionPage } = useContext(GlobalContext);
  const controls = useAnimationControls();

  const sequence = useCallback(async () => {
    await controls.start('initial');
    await controls.start('animate');
    await controls.start('exit');
  }, [controls]);

  useEffect(() => {
    if (transitionPage) {
      sequence();
    }
  }, [transitionPage, sequence]);

  return (
    <ContainerStyled variants={mainVariants} animate={controls}>
      {[0, 1, 2, 3, 4].map(i => (
        <WallpaperStyled key={i} variants={childVariants} />
      ))}
    </ContainerStyled>
  );
};

export default Loader;

const mainVariants = {
  initial: {
    opacity: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      duration: 0
    }
  },
  animate: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      duration: 0
    }
  },
  exit: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.1,
      duration: 0
    }
  }
};

const childVariants = {
  initial: {
    y: '-150%'
  },
  animate: {
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 40,
      duration: 1.5,
      ease: [0.16, 1, 0.3, 0.5]
    }
  },
  exit: {
    y: '150%',
    transition: {
      type: 'spring',
      stiffness: 40,
      duration: 1.5,
      ease: [0.16, 1, 0.3, 0.5]
    }
  }
};
