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
    company: 'Clientela Inc. | New York, United States',
    link: 'https://www.clientela.com/',
    role: 'QA Specialist and Solutions Delivery Manager / 2021 Dec - Present',
    description:
      "I work as a QA Specialist responsible for both quality assurance and delivery efforts, with a balanced focus on testing and feature deployment. My role includes creating test plans, conducting functional and regression testing, automating e2e tests using Cypress, and collaborating closely with cross-functional teams to ensure smooth and timely delivery. I also maintain comprehensive project documentation and actively participate in sprint planning and release activities.",
    isExternalLink: true
  },
  {
    company: 'Get it Done Technologies GmbH | Berlin, Germany',
    link: 'https://www.getitdone.rocks/',
    role: 'Senior QA, QA Lead / 2023 - 2024',
    description:
      "I worked as a full-stack developer responsible for implementing new features and maintaining internal web applications. I had to collaborate with my team on projects involving a range of functionalities, such as enhancing the admin panel, refactoring existing code, and creating responsive sub-pages. My work contributed to the continuous improvement of our applications, ensuring they met our company's evolving needs.",
    isExternalLink: true
  },
  {
    company: 'Decentral Games (ICE Poker Metaverse)',
    link: 'https://decentral.games/',
    role: 'QA Engineer / 2022 - 2023',
    description:
      'I worked as a Senior QA Engineer in a blockchain gaming environment, testing smart contracts, NFT integrations, and crypto wallet connections. I was responsible for ensuring cross-platform compatibility and game performance, performing UI and AV testing, and validating blockchain-based transactions. My work supported the stability and user experience of ICE Poker across both desktop and metaverse platforms.',
    isExternalLink: true
  },
  {
    company: 'Space Int. | Tbilisi, Georgia',
    link: 'https://www.spaceint.ge/',
    role: 'QA Engineer / 2020 - 2021',
    description:
      'I worked as a QA Engineer for a digital banking platform operating in Georgia and Uzbekistan with more than 4 million users',
    isExternalLink: true
  },
  {
    company: 'Freelance',
    link: '#',
    role: 'QA Engineer (Manual & Automated) / 2020 - Present',
    description:
      "I had a chance to work on different projects as a freelancer. I've built multiple automated tests and continue to take orders in my free time.",
    isExternalLink: false
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
