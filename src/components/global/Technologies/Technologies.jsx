import React from 'react';
import { ContainerStyled, ItemStyled } from './TechnologiesStyles';

const Technologies = ({ technologies, dark }) => {
  return (
    <ContainerStyled $dark={dark}>
      {technologies?.map((technology, i) => (
        <ItemStyled key={`${technology}-${i}`}>{technology}</ItemStyled>
      ))}
    </ContainerStyled>
  );
};

export default Technologies;
