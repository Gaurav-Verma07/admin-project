import classes from './Login.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

const Login = () => {
const [isNewUser, setIsNewUser] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      isNewUser: false,
    },
    validationSchema: yup.object({
      email: yup.string().required('Email is a required field'),
      password: yup.string().required('password is required'),
      isNewUser: yup.boolean().required(),
    }),
    onSubmit: () => {},
  });

  const navigate = useNavigate();
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
            console.log(data);
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
      <form
        className={classes.main__form}
        onSubmit={(e) => {
          formSubmitHandler(e);
        }}
      >
        <h1 className={classes.main__form_heading}>{isNewUser ? 'SignUp' : 'Login'}</h1>
        <input
          className={classes.main__form_input}
          type="text"
          id="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <br />
        <input
          className={classes.main__form_input}
          type="password"
          id="password"
          placeholder="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <br />
        <button className={classes.main__form_login}>{isNewUser ? 'SignUp' : 'Login'}</button>
        {!isNewUser && (
          <button
            className={classes.main__form_signUp}
            onClick={() => {
              setIsNewUser(true);
            }}
          >
            signUp!
          </button>
        )}
      </form>
    </main>
  );
};
export default Login;
