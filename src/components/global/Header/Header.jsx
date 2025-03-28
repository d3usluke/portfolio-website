import React, { useContext } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from '@reach/router';
import { AnimatePresence } from 'framer-motion';
import { useScrollDirection } from 'hooks';
import { GlobalContext } from 'providers';
import { isBrowser } from 'utils';
import { CenterWrapperStyled } from 'styles/utils';
import { AnimatedLink } from '../AnimatedLink';
import Menu from './Menu/Menu';
import Hamburger from './Hamburger/Hamburger';
import { ContainerStyled, LiStyled, UlStyled } from './HeaderStyles';

const Header = () => {
  const scrollDirection = useScrollDirection();
  const { animate, showMenu, handleToggleMenu } = useContext(GlobalContext);
  const location = useLocation();

  return (
    <>
      <ContainerStyled
        $scrollDirection={scrollDirection}
        $animate={animate}
        $isHomePage={location.pathname === '/'}
      >
        <CenterWrapperStyled as="nav">
          <UlStyled>
            {listItems.map(({ link, text }, i) => (
              <LiStyled key={`${text}-${i}`}>
                <AnimatedLink
                  to={link}
                  text={text}
                  noArrow
                  $noUnderline={i === 0}
                  aria-current="page"
                />
              </LiStyled>
            ))}
            <li>
              <Hamburger />
            </li>
          </UlStyled>
        </CenterWrapperStyled>
      </ContainerStyled>

      {isBrowser &&
        createPortal(
          <AnimatePresence mode="wait">
            {showMenu ? (
              <Menu
                listItems={getMenuListItems(listItems)}
                handleClick={handleToggleMenu}
              />
            ) : null}
          </AnimatePresence>,
          document.getElementById('menu')
        )}
    </>
  );
};

export default Header;

const getMenuListItems = items => items.filter((_, i) => i !== 0);

const listItems = [
  {
    link: '/',
    text: 'luka maglakelidze'
  },
  {
    link: '#projects',
    text: 'projects'
  },
  {
    link: '/about',
    text: 'about'
  },
  {
    link: '#contact',
    text: 'contact'
  }
];
