import React from 'react';
import { MainHeading } from 'styles/typography';
import { CenterWrapperStyled } from 'styles/utils';
import Form from './Form/Form';
import { ContainerStyled } from './ContactStyles';

const Contact = () => {
  return (
    <ContainerStyled id="contact">
      <CenterWrapperStyled>
        <MainHeading>Send a message</MainHeading>
        <Form />
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default React.memo(Contact);
