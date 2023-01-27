import { Input } from 'Components/Common/Input';
import React, { ChangeEvent, useEffect, useState } from 'react';
import style from './AuthForm.module.scss';
import { UserActions } from 'Store';
import { useDispatch } from 'react-redux';

export const AuthForm = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();

  const changeHandler =
    (fieldName: 'email' | 'password') => (event: ChangeEvent<HTMLInputElement>) => {
      setFormState((prev) => {
        const newData = { ...prev };
        newData[fieldName] = event.target.value;
        return newData;
      });
    };

  const submitHandler = () => {
    if (formState.password.length < 5) {
      setErrorMessage('пароль слишком короткий');
    } else {
      setErrorMessage('');
      dispatch(UserActions.setLoading(true));
      setTimeout(() => dispatch(UserActions.setUserData({ email: 'Alex', token: '122' })), 2000);
      console.log(formState, 'отправленно на сервер');
    }
  };

  useEffect(() => {
    if (formState.password.length < 5 && formState.password !== '') {
      setErrorMessage('пароль слишком короткий');
    } else {
      setErrorMessage('');
    }
  }, [formState.password]);

  return (
    <div className={style.wrapper}>
      <h1>AUTH FORM</h1>
      <div className={style.input_group}>
        <Input name={'Email'} value={formState.email} changeHandler={changeHandler('email')} />
        <Input
          name={'Password'}
          value={formState.password}
          changeHandler={changeHandler('password')}
          type="password"
        />
      </div>

      {errorMessage !== '' && <div className={style.error}>{errorMessage}</div>}

      <button type="button" onClick={submitHandler}>
        AUTH
      </button>
    </div>
  );
};
