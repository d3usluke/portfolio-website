import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { AnimatedImage } from 'components';
import { MainHeading } from 'styles/typography';
import { CenterWrapperStyled, motionDefaultAnimateProps } from 'styles/utils';
import {
  ContainerStyled,
  ContentWrapperStyled,
  ImagesWrapperStyled,
  ParagraphStyled
} from './BioStyles';

const Bio = () => {
  return (
    <ContainerStyled>
      <CenterWrapperStyled>
        <MainHeading $isDark>Bio</MainHeading>
        <ContentWrapperStyled {...motionDefaultAnimateProps}>
          <Text />
          <Images />
        </ContentWrapperStyled>
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default Bio;

const Text = () => {
  return (
    <ParagraphStyled>
      Hello! My name is Luka Maglakelidze, I am a Solutions Delivery Manager and
      QA Specialist with 5+ years of experience in tech. Led QA efforts for
      innovative projects across web, blockchain, and gaming platforms. Worked
      with high-profile clients including Gucci, Diptyque, Dyson, Kiko Milano, Holt Renfrew and Selfridges. Specialized
      in automation, process optimization, and cross-functional collaboration to
      deliver quality-driven products.
      <br />
      <br />I try to keep up to date with new technologies and improve my
      knowledge in already established ones.
    </ParagraphStyled>
  );
};

const Images = () => {
  return (
    <ImagesWrapperStyled>
      <AnimatedImage isStatic>
        <StaticImage
          src="../../../assets/media/achi-1.jpg"
          alt="picture of Luka Maglakelidze"
          quality={100}
        />
      </AnimatedImage>
      <AnimatedImage isStatic>
        <StaticImage
          src="../../../assets/media/achi-2.jpg"
          alt="picture of Luka Maglakelidze"
          quality={100}
        />
      </AnimatedImage>
    </ImagesWrapperStyled>
  );
};
