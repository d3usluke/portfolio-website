import React from 'react';
import { AnimatedLink } from 'components';
import { CenterWrapperStyled } from 'styles/utils';
import {
  ContainerStyled,
  ExternalsWrapperStyled,
  LineBreakStyled,
  SocialsWrapperStyled
} from './FooterStyles';

const Footer = () => {
  return (
    <ContainerStyled>
      <LineBreakStyled />
      <CenterWrapperStyled>
        <ExternalsWrapperStyled>
          <SocialsWrapperStyled>
            {socials.map(({ name, link }) => (
              <AnimatedLink
                key={name}
                href={link}
                text={name}
                target="_blank"
                rel="noreferrer"
                isExternalLink
                noArrow
              />
            ))}
          </SocialsWrapperStyled>
          <AnimatedLink
            href="mailto: 1maglakelidzeluka@gmail.com"
            text="1maglakelidzeluka@gmail.com"
            isExternalLink
            noArrow
          />
        </ExternalsWrapperStyled>
        <AnimatedLink to="/" isScrollTop text="TOP" $arrowPosition="up" />
      </CenterWrapperStyled>
      <LineBreakStyled />
    </ContainerStyled>
  );
};

export default Footer;

const socials = [
  {
    name: 'Github',
    link: 'https://github.com/d3usluke'
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/luka-maglakelidze-a5a800191/'
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/maghlakelidze.luka/'
  }
];
