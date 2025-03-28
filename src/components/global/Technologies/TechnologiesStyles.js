import styled from 'styled-components';

export const ItemStyled = styled.li``;

export const ContainerStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 3rem;
  font-size: 1.4rem;

  & ${ItemStyled} {
    color: ${({ theme, $dark }) =>
      $dark ? theme.colors.text.dark : theme.colors.text.light};
    border: 1px solid
      ${({ theme, $dark }) =>
        $dark ? theme.colors.text.dark : theme.colors.text.light};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5em 1em;
    border-radius: 1rem;
    text-align: center;
    text-transform: uppercase;
  }
`;
