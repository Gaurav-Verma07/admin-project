import classes from './Login.module.scss';
import { useContext } from "react";
import AdminContext from '../../store/admin-context';

const Login = () => {
    const adminCtx = useContext(AdminContext);
    console.log("context", adminCtx);
    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log(e.target.empID.value);
        console.log(e.target.password.value);
        adminCtx.login();
    }

    const fetchData = async () => {
        try {
            await fetch('https://admin-2da31-default-rtdb.firebaseio.com/dashboard/data.json', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "employee_age": 19,
                    "employee_name": "Gaurav Verma",
                    "id": 24,

                })
            });
            // const responseData = await response.json();
            // console.log("response data", responseData.data);

        }
        catch (err) {
            console.log("Error", err)
        }
    }
    fetchData();

    return (
        <main className={classes.main}>
            <form className={classes.main__form} onSubmit={(e) => { formSubmitHandler(e) }} >
                <label className={classes.main__form_label} htmlFor="empID">Employee ID:</label>
                <br />
                <input className={classes.main__form_input} type="text" name="empID" id="empID" />
                <br />
                <label className={classes.main__form_label} htmlFor="password">Password: </label>
                <br />
                <input className={classes.main__form_input} type='password' name="password" id="password" />
                <br />
                <button className={classes.main__form_login} >Login</button>
                <a href= "#" className={classes.main__form_signUp} >SignUp</a>
            </form>
        </main>
    )
}
export default Login;