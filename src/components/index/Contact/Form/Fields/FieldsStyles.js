import styled, { css } from 'styled-components';
import { Field } from 'formik';
import { motion } from 'framer-motion';
import { Shake } from 'styles/animations';

const AnimateField = css`
  animation: ${Shake} 0.7s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
`;

export const FieldStyled = styled(Field)`
  display: inline-block;
  background: transparent;
  border: none;
  border-bottom: 1px solid ${props => props.theme.colors.text.light};
  opacity: ${({ $isEmpty }) => ($isEmpty ? '.5' : '1')};
  padding: 0.5em 0.2em;
  color: ${props => props.theme.colors.text.light};
  font-size: 2.5rem;
  border-color: ${({ $isError, theme }) =>
    $isError ? theme.colors.text.accent : null};
  ${({ $isError }) => ($isError ? AnimateField : null)};
  transition: opacity 0.2s ease;

  &::placeholder {
    opacity: 1;
  }

  &:hover,
  :focus {
    opacity: 1;
  }
`;

export const FieldsWrapperStyled = styled(motion.div)`
  @media ${props => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: column;

    & ${FieldStyled} {
      font-size: 2rem;
    }
  }

  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;

    & ${FieldStyled} {
      font-size: 1.8rem;
    }
  }
`;
