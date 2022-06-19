import classes from './NewUser.module.scss';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { designation } from '../../constants/designation';
import { nextID } from '../../utils/nextId';
import { useContext, useEffect } from 'react';
import AdminContext from '../../store/admin-context';

const NewUser = () => {
  const navigate = useNavigate();
  const adminCtx = useContext(AdminContext);
  const formik = useFormik({
    initialValues: {
      empCode: '',
      name: '',
      age: undefined,
      designation: '',
      joinDate: '',
      salary: undefined,
    },
    validationSchema: yup.object({
      empCode: yup.string().required(),
      name: yup.string().required(),
      age: yup.number().required(),
      designation: yup.string().required(),
      joinDate: yup.string().required(),
      salary: yup.number().required(),
    }),
    onSubmit: () => {},
  });
  const getNewID = async () => {
    const data = await adminCtx.data;
    const newID = nextID(data);
    formik.setFieldValue('empCode', newID);
  };
  useEffect(() => {
    getNewID();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    fetch('https://admin-2da31-default-rtdb.firebaseio.com/dashboard.json', {
      method: 'POST',
      body: JSON.stringify({
        empCode: formik.values.empCode,
        name: formik.values.name,
        age: formik.values.age,
        designation: formik.values.designation,
        joinData: formik.values.joinDate,
        salary: formik.values.salary,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => {
      console.log(res);
    });
    navigate('/');
    adminCtx.newuser();
  };

  return (
    <div className={classes.main}>
      <form
        className={classes.main__form}
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <h1 className={classes.main__form_heading}>Your Details</h1>
        <hr />
        <label className={classes.main__form_label} for="empCode">
          Employee Code
        </label>
        <input
          className={classes.main__form_input}
          type="text"
          id="empCode"
          disabled
        style= {{cursor:'not-allowed'}}
          value={formik.values.empCode}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <label className={classes.main__form_label} for="name">
          Name:
        </label>
        <input
          className={classes.main__form_input}
          type="text"
          id="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <label className={classes.main__form_label} for="age">
          Age
        </label>
        <input
          className={classes.main__form_input}
          type="number"
          id="age"
          value={formik.values.age}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <label className={classes.main__form_label} for="designation">
          {' '}
          Designation
        </label>
        <select
          className={classes.main__form_input}
          id="designation"
          value={formik.values.designation}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          {designation.map((field, index) => {
            return (
              <option value={field} key={index}>
                {field}
              </option>
            );
          })}
        </select>
        <label className={classes.main__form_label} for="joinDate">
          Joining Date
        </label>
        <input
          className={classes.main__form_input}
          type="date"
          id="joinDate"
          value={formik.values.joinDate}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <label className={classes.main__form_label} for="salary">
          Salary
        </label>
        <input
          className={classes.main__form_input}
          type="number"
          id="salary"
          value={formik.values.salary}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <button className={classes.main__form_submit}>Submit</button>
      </form>
    </div>
  );
};
export default NewUser;
