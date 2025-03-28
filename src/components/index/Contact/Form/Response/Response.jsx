import React from 'react';
import { ResponseWrapperStyled } from './ResponseStyles';

const Response = ({ isSuccess, isVisible }) => {
  return (
    <ResponseWrapperStyled
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ delay: 0.4, duration: 0.2 }}
    >
      {' '}
      {isVisible && isSuccess ? (
        <>
          Thanks for reaching out! <br />
          I'll get back to you as soon as possible.
        </>
      ) : isVisible ? (
        'Oops, something went wrong :('
      ) : null}
    </ResponseWrapperStyled>
  );
};

export default Response;
