import React from 'react';
import { MainHeading } from 'styles/typography';
import { CenterWrapperStyled } from 'styles/utils';
import {
  ContainerStyled,
  SkillStyled,
  SkillsWrapperStyled
} from './SkillsStyles';

const Skills = () => {
  return (
    <ContainerStyled>
      <CenterWrapperStyled>
        <MainHeading $isDark>Skills</MainHeading>
        <SkillsWrapperStyled
          initial="initial"
          whileInView="animate"
          exit="exit"
          variants={mainVariants}
          viewport={{ once: true }}
        >
          {skills.map(skill => (
            <SkillStyled key={skill} variants={childVariants}>
              {skill}
            </SkillStyled>
          ))}
        </SkillsWrapperStyled>
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default Skills;

const skills = [
  'Manual Testing',
  'Automation Testing',
  'Performance Testing',
  'Cypress',
  'REST API',
  'Backlog Management',
  'Deployment Planning',
  'Client Communication'
];

const mainVariants = {
  animate: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
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
      duration: 0.2,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};
