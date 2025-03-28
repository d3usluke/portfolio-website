import React from 'react';
import { CenterWrapperStyled } from 'styles/utils';
import { AnimatedLink } from 'components';
import { LiStyled } from '../HeaderStyles';
import { ContainerStyled, MotionWrapperStyled } from './MenuStyles';

const Menu = ({ listItems, handleClick }) => {
  return (
    <ContainerStyled
      initial="initial"
      animate="animate"
      exit="exit"
      variants={mainVariants}
    >
      <CenterWrapperStyled as="ul">
        {listItems.map(({ link, text }, i) => (
          <LiStyled key={`${text}-${i}`} onClick={handleClick}>
            <MotionWrapperStyled variants={childVariants}>
              <AnimatedLink to={link} text={text} noArrow />
            </MotionWrapperStyled>
          </LiStyled>
        ))}
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default Menu;

const mainVariants = {
  initial: {
    top: -2000
  },
  animate: {
    top: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.08,
      duration: 0.6,
      ease: 'easeInOut'
    }
  },
  exit: {
    top: -2000,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.08,
      duration: 0.6,
      ease: 'easeInOut'
    }
  }
};

const childVariants = {
  initial: {
    y: 50
  },
  animate: {
    y: 0,
    transition: {
      type: 'spring',
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  exit: {
    y: 50,
    transition: {
      type: 'spring',
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};
