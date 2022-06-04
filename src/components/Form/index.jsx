import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Form.module.scss';

import Logo from '../Logo';

function Form({ mode, onSubmitForm }) {
  const submitFormHandler = (event) => {
    event.preventDefault();
    onSubmitForm();
  };

  return (
    <>
      <h1 className={classes.heading}>{mode === 'login' ? 'Вход' : 'Регистрация'}</h1>

      <Logo />

      <form className={classes.form} onSubmit={submitFormHandler}>
        <input className={classes.formInput} type="text" placeholder="Логин" required />
        <input className={classes.formInput} type="password]" placeholder="Пароль" required />
        <button className={classes.formSubmit} type="submit">
          {mode === 'login' ? 'Войти' : 'Зарегистрироваться'}
        </button>
      </form>

      <Link className={classes.pageLink} to={mode === 'login' ? '/register' : '/login'}>
        {mode === 'login' ? 'Создать аккаунт' : 'Войти в аккаунт'}
      </Link>
    </>
  );
}

export default Form;
