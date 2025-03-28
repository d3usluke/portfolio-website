import React from 'react';
import { AnimatedLink } from 'components/global/AnimatedLink';
import { MainHeading } from 'styles/typography';
import { CenterWrapperStyled } from 'styles/utils';
import { ContainerStyled } from './ContactMeStyles';

const ContactMe = () => {
  return (
    <ContainerStyled>
      <CenterWrapperStyled>
        <MainHeading slideUp>Want to send me a message?</MainHeading>
        <AnimatedLink text="Let's talk" to="#contact" />
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default ContactMe;
