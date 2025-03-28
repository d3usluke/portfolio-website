import React from 'react';
import Lottie from 'lottie-react';
import { AnimatedLink } from 'components';
import { CenterWrapperStyled } from 'styles/utils';
import { MainHeading } from 'styles/typography';
import error from 'assets/lotties/error.json';
import { ContainerStyled } from './NotFoundStyles';

const NotFound = () => {
  return (
    <ContainerStyled>
      <CenterWrapperStyled>
        <MainHeading $isDark>Page Not Found :(</MainHeading>
        <MainHeading as="h2" $isDark slideUp>
          404
        </MainHeading>
        <Lottie animationData={error} className="lottie" />
        <AnimatedLink text="Back home" to="/" $isDark $arrowPosition="left" />
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default NotFound;
