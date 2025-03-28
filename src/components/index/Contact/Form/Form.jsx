import React, { useRef } from 'react';
import { Formik } from 'formik';
import { useFormState } from 'hooks';
import { initialValues, validationSchema } from '../constants';
import Button from './Button/Button';
import Fields from './Fields/Fields';
import Response from './Response/Response';
import { ButtonWrapperStyled, FormStyled } from './FormStyles';

const Form = () => {
  const { values, actions } = useFormState();
  const formRef = useRef(null);

  const buttonProps = {
    isLoading: values.isLoading,
    isSuccess: values.isSuccess,
    isError: values.isError,
    handleReset: actions.handleReset,
    handleSubmit: actions.handleInitialSubmit
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnChange={values.isSubmitted}
      validateOnBlur={values.isSubmitted}
      onSubmit={actions.handleSubmit(formRef)}
    >
      {() => (
        <FormStyled ref={formRef} noValidate>
          <Fields isHidden={values.isSuccess || values.isError} />
          <Response
            isVisible={values.isSuccess || values.isError}
            isSuccess={values.isSuccess}
          />

          <ButtonWrapperStyled
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}
          >
            <Button {...buttonProps}>
              {values.isSuccess
                ? 'sent'
                : values.isError
                ? 'try again'
                : 'send'}
            </Button>
          </ButtonWrapperStyled>
        </FormStyled>
      )}
    </Formik>
  );
};

export default React.memo(Form);
