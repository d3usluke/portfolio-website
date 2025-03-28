import React from 'react';
import { useFormikContext } from 'formik';
import { ArrowIcon } from 'components';
import {
  ButtonStyled,
  CircleStyled,
  LoadingWrapperStyled,
  WordWrapperStyled
} from './ButtonStyles';

const Button = ({
  isLoading,
  isSuccess,
  isError,
  handleReset,
  handleSubmit,
  children
}) => {
  const { resetForm } = useFormikContext();

  const handleClick = () => {
    handleReset();
    resetForm();
  };

  return (
    <ButtonStyled
      type={isError ? 'reset' : 'submit'}
      $isLoading={isLoading}
      $isSuccess={isSuccess}
      disabled={isLoading || isSuccess}
      onClick={isError ? handleClick : handleSubmit}
    >
      <WordWrapperStyled>{children}</WordWrapperStyled>
      <LoadingWrapperStyled $isLoading={isLoading}>
        <CircleStyled>
          <ArrowIcon />
        </CircleStyled>
      </LoadingWrapperStyled>
    </ButtonStyled>
  );
};

export default Button;
