import { useReducer, useEffect } from 'react';
import { init, sendForm } from 'emailjs-com';

const initialState = {
  email: '',
  company: '',
  name: '',
  phone: '',
  subject: '',
  message: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        [action.name]: action.value,
      };
    case 'RESET':
      return Object.keys(state).reduce((acc, cur) => {
        acc[cur] = '';
        return acc;
      }, {});
    default:
      return state;
  }
};

const useInputs = () => {
  const [form, dispatch] = useReducer(reducer, initialState);

  const onChange = e => {
    const { name, value } = e.target;
    console.log(name, value);
    dispatch({ type: 'CHANGE', name, value });
  };

  const onSubmit = e => {
    e.preventDefault();

    sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_EMAILJS_USER_ID,
    ).then(
      result => {
        console.log('Success status: 200,', result.text);
        dispatch({ type: 'RESET' });
      },
      error => {
        console.log('Failure status: 400,', error.text);
      },
    );
  };

  useEffect(() => {
    init(process.env.REACT_APP_EMAILJS_USER_ID);
  });

  return [form, onChange, onSubmit];
};

export default useInputs;
