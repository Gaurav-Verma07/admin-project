import classes from './SignUp.module.scss';

const SignUp = () => {
  return (
    <div className={classes.main}>
      <form className={classes.main__form}>
        <h1 className={classes.main__form_heading}>Sign Up</h1>
        <hr />
        <label className={classes.main__form_label} for="empCode">
          Employee Code
        </label>
        <input className={classes.main__form_input} type="text" id="empCode" placeholder="APT-201" disabled />
        <label className={classes.main__form_label} for="name">
          Name:
        </label>
        <input className={classes.main__form_input} type="text" id="name" />
        <label className={classes.main__form_label} for="name">
          Age
        </label>
        <input className={classes.main__form_input} type="number" id="age" />
        <label className={classes.main__form_label} for="designation">
          {' '}
          Designation
        </label>
        <select className={classes.main__form_input} name="designation" id="designation">
          <option value="SDE-1">SDE-1</option>
          <option value="SDE-2">SDE-2</option>
          <option value="Intern">Intern</option>
          <option value="Product Manager">Product Manager</option>
          <option value="HR">HR</option>
          <option value="Designer">Designer</option>
        </select>
        <label className={classes.main__form_label} for="joinDate">
          Joining Date
        </label>
        <input className={classes.main__form_input} type="date" id="joinDate" />
        <label className={classes.main__form_label} for="password">
          Password
        </label>
        <input className={classes.main__form_input} type="password" id="password" />
        <button className={classes.main__form_submit}>Submit</button>
      </form>
    </div>
  );
};
export default SignUp;
