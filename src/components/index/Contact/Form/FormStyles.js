import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Form } from 'formik';
import { ButtonStyled } from './Button/ButtonStyles';

export const ButtonWrapperStyled = styled(motion.div)`
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
`;

export const FormStyled = styled(Form)`
  color: ${props => props.theme.colors.text.light};
  font-size: 5rem;
  display: flex;
  flex-direction: column;
  position: relative;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 4rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 3rem;
  }

  @media ${props => props.theme.breakpoints.xs} {
    & ${ButtonStyled} {
      width: 100%;
    }
  }
`;
