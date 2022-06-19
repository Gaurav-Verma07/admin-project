import AdminContext from "./admin-context";
import { useReducer } from "react";

const defaultadminState = {
    login: false
};

export const fetchCartData = () => {
    return  async () => {
            const response = await fetch(
                "https://admin-2da31-default-rtdb.firebaseio.com/dashboard.json",
                {  method: "get", }
            );
            if (!response.ok) {
                throw new Error("Fetching failed");
            }
            const responseData = await response.json();
            console.log(responseData)
            return responseData;
        };
        
    };


const getDate = fetchCartData();
getDate();

const cartReducer = (state, action) => {
    if (action.type === "LOGIN") {
        return { state, login: true }
    }

    return defaultadminState;
};
//Componetn start here
const AdminProvider = (props) => {
    const [adminState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultadminState
    );

    const loggingHandler = () => {
        dispatchCartAction({ type: "LOGIN" })
    }

    const adminContext = {
        isLoggedIn: adminState.login,
        login: loggingHandler,
    };

    return (
        <AdminContext.Provider value={adminContext}>
            {props.children}
        </AdminContext.Provider>
    );
};

export default AdminProvider;
