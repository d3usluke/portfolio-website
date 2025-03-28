import * as yup from 'yup';

export const initialValues = {
  name: '',
  email: '',
  subject: '',
  info: ''
};

export const fields = [
  {
    startText: 'Hey! My name is ',
    field: 'name',
    type: 'text',
    placeholder: 'Enter your name*'
  },
  {
    startText: ' and I wanted to reach you to discuss ',
    field: 'subject',
    type: 'text',
    placeholder: 'Enter subject here*',
    endText: ' with you.'
  },
  {
    startText: ' You can send me an email on this address ',
    field: 'email',
    type: 'email',
    placeholder: 'Enter your email*'
  },
  {
    startText: '. Here is some additional information regarding the inquiry: ',
    field: 'info',
    type: 'textarea',
    placeholder: 'Enter details here*'
  }
];

export const isInfo = field => field === 'info';

export const validationSchema = yup.object({
  name: yup.string().min(2).required(),
  email: yup.string().email().required(),
  subject: yup.string().min(5).required(),
  info: yup.string().min(30).required()
});
