import React from 'react';
import { Bio, ContactMe, Experience, HeroAbout, Seo, Skills } from 'components';

const AboutPage = () => {
  return (
    <>
      <HeroAbout />
      <Bio />
      <Skills />
      <Experience />
      <ContactMe />
    </>
  );
};

export default AboutPage;

export const Head = () => {
  return <Seo title="About" pathname="about" />;
};

export const config = {
  ssr: false
};
