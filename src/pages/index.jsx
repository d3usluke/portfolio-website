import React from 'react';
import { Hero, About, Projects, Contact, Seo } from 'components';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default HomePage;

export const Head = () => {
  return <Seo title="Home" />;
};

export const config = {
  ssr: false
};
