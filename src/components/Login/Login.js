import classes from './Login.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import clsx from 'clsx';

const Login = () => {
  const [isNewUser, setIsNewUser] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      isNewUser: false,
    },
    validationSchema: yup.object({
      email: yup.string().email().required('Email is a required field'),
      password: yup.string().required('password is required'),
      isNewUser: yup.boolean().required(),
    }),
    onSubmit: () => {},
  });

  const navigate = useNavigate();
  console.log(formik);
  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (isNewUser) {

      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCZw588-mxWfBEh7Xm5bYYZewXjH8dv6Go', {
        method: 'POST',
        body: JSON.stringify({
          email: formik.values.email,
          password: formik.values.password,
          returnSecureToken: true,
        }),
        headers: {
          'Content-type': 'application/json',
        },
      }).then((res) => {
        if (res.ok) {
          formik.setFieldValue('email', '');
          formik.setFieldValue('password', '');
          setIsNewUser(!false);
          navigate('/new-user');
        } else {
          return res.json().then((data) => {
            alert(data.error.message)
          });
        }
      });
    } else {
      fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCZw588-mxWfBEh7Xm5bYYZewXjH8dv6Go',
        {
          method: 'POST',
          body: JSON.stringify({
            email: formik.values.email,
            password: formik.values.password,
            returnSecureToken: true,
          }),
          headers: {
            'Content-type': 'application/json',
          },
        },
      ).then((res) => {
        if (res.ok) {
          console.log(res);
          navigate('/dashboard');
        } else {
          return res.json().then((data) => {
            console.log(data);
            alert(data.error.message);
          });
        }
      });
    }
  };

  return (
    <main className={classes.main}>
      <form className={classes.main__form} onSubmit={(e) => formSubmitHandler(e)}>
        <h1 className={classes.main__form_heading}>{isNewUser ? 'SignUp' : 'Login'}</h1>
        <input
          className={clsx(
            classes.main__form_input,
            formik.errors.email && formik.touched.email && classes.main__form_inputError,
          )}
          type="text"
          id="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.email && formik.touched.email && (
          <p className={classes.main__form_error}>{formik.errors.email}</p>
        )}
        <br />
        <input
          className={clsx(
            classes.main__form_input,
            formik.errors.password && formik.touched.password && classes.main__form_inputError,
          )}
          type="password"
          id="password"
          placeholder="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.password && formik.touched.password && (
          <p className={classes.main__form_error}>{formik.errors.password}</p>
        )}
        <br />
        <button type="submit" className={classes.main__form_login}>
          {isNewUser ? 'SignUp' : 'Login'}
        </button>
        <div className={classes.main__form_buttons}>
          <span
            className={classes.main__form_buttons_signUp}
            onClick={() => {
              setIsNewUser(!isNewUser);
            }}
          >
            {isNewUser ? 'Login with existing account' : 'signUp!'}
          </span>
        </div>
      </form>
    </main>
  );
};
export default Login;
