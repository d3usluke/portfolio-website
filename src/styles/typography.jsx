import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { customMediaQuery } from 'utils';

export const TextGradientStyled = styled.span`
  background: linear-gradient(
    75deg,
    ${props => props.theme.colors.text.accent},
    ${props => props.theme.colors.text.light} 120%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const MainHeadingStyled = styled(motion.h1)`
  font-size: 8rem;
  color: ${({ $isDark, theme }) =>
    $isDark ? theme.colors.text.main : theme.colors.text.light};
  overflow: hidden;
  display: flex;
  margin-bottom: 10rem;

  & > * + * {
    margin-left: 0.3em;
  }

  @media ${props => props.theme.breakpoints.md} {
    font-size: 7rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    margin-bottom: 7rem;
    font-size: 5.5rem;
  }

  ${customMediaQuery(435)} {
    font-size: 4.5rem;
    margin-bottom: 5rem;
  }
`;

export const MainHeading = ({ slideUp, children, ...props }) => {
  return (
    <MainHeadingStyled
      initial={{ opacity: 0, x: slideUp ? 0 : -80, y: slideUp ? 60 : 0 }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: { type: 'spring', duration: 1, delay: 0.2 }
      }}
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </MainHeadingStyled>
  );
};
