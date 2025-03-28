import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { GlobalContextProvider, Theme } from 'providers';
import { Layout } from 'components';
import GlobalStyles from 'styles/GlobalStyles';
import './global.css';

export const wrapPageElement = ({ element, props }) => {
  const isDarkBackground = Boolean(props.params.title);

  return (
    <Layout isDarkBackground={isDarkBackground} {...props}>
      <AnimatePresence mode="wait">{element}</AnimatePresence>
    </Layout>
  );
};

export const wrapRootElement = ({ element }) => {
  return (
    <GlobalContextProvider>
      <Theme>
        <GlobalStyles />
        {element}
      </Theme>
    </GlobalContextProvider>
  );
};

export const shouldUpdateScroll = () => {
  return false;
};
