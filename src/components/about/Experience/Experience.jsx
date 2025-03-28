import React from 'react';
import { AnimatedLink } from 'components';
import { MainHeading } from 'styles/typography';
import { CenterWrapperStyled, OverlayStyled } from 'styles/utils';
import {
  ContainerStyled,
  DescriptionStyled,
  ExperienceListStyled,
  ExperienceStyled,
  RoleYearStyled
} from './ExperienceStyles';

const Experience = () => {
  return (
    <ContainerStyled>
      <CenterWrapperStyled>
        <MainHeading $isDark>Experience</MainHeading>
        <ExperienceListStyled
          initial="initial"
          whileInView="animate"
          exit="exit"
          variants={mainVariants}
          viewport={{ once: true }}
        >
          {experiences.map(
            ({ isExternalLink, company, link, role, description }) => (
              <ExperienceStyled key={company} variants={childVariants}>
                <AnimatedLink
                  href={link}
                  text={company}
                  target="_blank"
                  rel="noreferrer"
                  isExternalLink={isExternalLink}
                  $isDark
                />
                <RoleYearStyled>{role}</RoleYearStyled>
                <DescriptionStyled>{description}</DescriptionStyled>
              </ExperienceStyled>
            )
          )}
        </ExperienceListStyled>
      </CenterWrapperStyled>
      <OverlayStyled />
    </ContainerStyled>
  );
};

export default Experience;

const experiences = [
  {
    company: 'E3DC GmbH',
    link: 'https://www.e3dc.com/',
    role: 'Frontend Developer / 2024 - Present',
    description:
      "I work as a frontend developer, mainly responsible for implementing new features on our 'Portal' application, as well as, maintaining and refactoring existing code.",
    isExternalLink: true
  },
  {
    company: 'Get it Done Technologies GmbH',
    link: 'https://www.getitdone.rocks/',
    role: 'Full-Stack Developer / 2023 - 2024',
    description:
      "I worked as a full-stack developer responsible for implementing new features and maintaining internal web applications. I had to collaborate with my team on projects involving a range of functionalities, such as enhancing the admin panel, refactoring existing code, and creating responsive sub-pages. My work contributed to the continuous improvement of our applications, ensuring they met our company's evolving needs.",
    isExternalLink: true
  },
  {
    company: 'AltexSoft',
    link: 'https://www.altexsoft.com/',
    role: 'Frontend Developer / 2022 - 2023',
    description:
      'I worked on a project with a team of 15 people. We were building a new platform for a travel agency that would have a search engine, integrated booking system, admin panel and authentication. My tasks varied from refactoring existing code, implementing various functionalities in admin panel and other pages, to building fully responsive sub-pages from scratch.',
    isExternalLink: true
  },
  {
    company: 'Freelance',
    link: '#',
    role: 'Frontend Developer / 2021 - Present',
    description:
      "I had a chance to work on different projects as a freelancer. I've built multiple portfolio websites using various tech stack and continue to take orders in my free time.",
    isExternalLink: false
  },
  {
    company: 'Lenø Records',
    link: 'http://www.lenorecords.com/',
    role: 'Audio Engineer / 2019 - 2020',
    description:
      'I worked as an audio engineer before I switched my profession and became a web developer. My responsibilities included recording, editing, mixing, mastering, as well as doing live sound at concerts.',
    isExternalLink: true
  }
];

const mainVariants = {
  animate: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
      ease: 'easeInOut',
      delayChildren: 0.3
    }
  }
};

const childVariants = {
  initial: {
    y: 20,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};
