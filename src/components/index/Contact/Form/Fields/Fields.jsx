import React, { Fragment } from 'react';
import { useFormikContext } from 'formik';
import { fields, isInfo } from '../../constants';
import { FieldsWrapperStyled, FieldStyled } from './FieldsStyles';

const Fields = ({ isHidden }) => {
  const { errors, values } = useFormikContext();

  return (
    <FieldsWrapperStyled
      initial={{ opacity: 0 }}
      whileInView={{ opacity: isHidden ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: isHidden ? 0.1 : 0.6, delay: 0.3 }}
      viewport={{ once: true }}
    >
      {fields.map(({ startText, field, type, placeholder, endText }) => (
        <Fragment key={field}>
          {startText}
          <FieldStyled
            type={!isInfo(field) ? type : null}
            component={isInfo(field) ? 'textarea' : null}
            rows={isInfo(field) ? '1' : null}
            name={field}
            placeholder={placeholder}
            $isEmpty={!values[field].length}
            $isError={errors[field]?.length}
          />
          {endText}
        </Fragment>
      ))}
    </FieldsWrapperStyled>
  );
};

export default Fields;
