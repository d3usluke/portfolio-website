import styled from 'styled-components';

export const MainStyled = styled.main`
  background-color: ${({ $isDarkBackground, theme }) =>
    $isDarkBackground ? theme.colors.text.main : null};
  margin-top: 8rem;
`;
