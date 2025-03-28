import styled from 'styled-components';
import { MainHeadingStyled } from 'styles/typography';

export const ProjectsContainerStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 5rem;
  gap: 5rem;
  width: 100%;
  position: relative;

  @media ${props => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    position: static;
  }
`;

export const ContainerStyled = styled.section`
  margin-top: 20rem;

  & ${MainHeadingStyled} {
    align-self: flex-start;
  }

  @media ${props => props.theme.breakpoints.sm} {
    margin-top: 10rem;

    & ${MainHeadingStyled} {
      margin: 10rem 0;
    }
  }
`;
