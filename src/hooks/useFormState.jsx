import { useState } from 'react';
import emailjs from '@emailjs/browser';

const useFormState = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleReset = () => {
    setIsSubmitted(false);
    setIsLoading(false);
    setIsSuccess(false);
    setIsError(false);
  };

  const handleInitialSubmit = () => setIsSubmitted(true);

  const handleSubmit = formRef => async () => {
    setIsSubmitted(true);

    try {
      setIsLoading(true);

      await emailjs.sendForm(
        'service_vdup9eo',
        'template_pacthmh',
        formRef?.current,
        {
          publicKey: '_kNSNHzNZu9irV2rc'
        }
      );

      setIsSuccess(true);
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    values: { isSubmitted, isLoading, isSuccess, isError },
    actions: {
      setIsSubmitted,
      setIsLoading,
      setIsSuccess,
      setIsError,
      handleReset,
      handleInitialSubmit,
      handleSubmit
    }
  };
};

export default useFormState;
