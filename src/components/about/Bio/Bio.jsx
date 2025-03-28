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
      Hello! My name is Luka Maglakelidze, I am a QA Specialist and a Solutions Delivery Lead based in 
      Tbilisi,
      specialising in frontend development with a growing expertise in backend.
      With over 3 years of professional experience, I enjoy writing clean,
      scalable, and modern code. Currently, I am seeking an environment that
      will allow me to take my skills to the next level.
      <br />
      <br />I try to keep up to date with new technologies and improve my
      knowledge in already established ones, in order to create flawless UIs, as
      well as to ease the workload for my teammates.
    </ParagraphStyled>
  );
};

const Images = () => {
  return (
    <ImagesWrapperStyled>
      <AnimatedImage isStatic>
        <StaticImage
          src="../../../assets/media/achi-1.jpg"
          alt="picture of Achi Shengelia"
          quality={100}
        />
      </AnimatedImage>
      <AnimatedImage isStatic>
        <StaticImage
          src="../../../assets/media/achi-2.jpg"
          alt="picture of Achi Shengelia"
          quality={100}
        />
      </AnimatedImage>
    </ImagesWrapperStyled>
  );
};
