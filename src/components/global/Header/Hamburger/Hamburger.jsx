import React, { useContext } from 'react';
import { GlobalContext } from 'providers';
import { ContainerStyled } from './HamburgerStyles';

const Hamburger = () => {
  const { showMenu, handleToggleMenu } = useContext(GlobalContext);

  return (
    <ContainerStyled $showMenu={showMenu} onClick={handleToggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </ContainerStyled>
  );
};

export default Hamburger;
