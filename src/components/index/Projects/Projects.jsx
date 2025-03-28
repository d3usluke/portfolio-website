import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { MainHeading } from 'styles/typography';
import { CenterWrapperStyled } from 'styles/utils';
import { chunk } from 'utils';
import Project from './Project/Project';
import { ContainerStyled, ProjectsContainerStyled } from './ProjectsStyles';

const Projects = () => {
  const { allProjectsJson } = useStaticQuery(query);
  const projects = allProjectsJson.nodes;
  const pairs = chunk(projects, 2);

  return (
    <ContainerStyled id="projects">
      <CenterWrapperStyled>
        <MainHeading>Selected projects</MainHeading>

        {pairs?.map((pair, i) => (
          <ProjectsContainerStyled key={i}>
            {pair.map(project => (
              <Project key={project.id} data={project} />
            ))}
          </ProjectsContainerStyled>
        ))}
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default Projects;

const query = graphql`
  query {
    allProjectsJson {
      nodes {
        id
        title
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
          }
        }
        technologies
        link
      }
    }
  }
`;
