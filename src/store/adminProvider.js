import AdminContext from './admin-context';
import { useReducer } from 'react';

const fetchCartData = async () => {
  const response = await fetch('https://admin-2da31-default-rtdb.firebaseio.com/dashboard.json');
  if (!response.ok) {
    throw new Error('Fetching failed');
  }
  const responseData = await response.json();
  // console.log('respoonseData', responseData);
  const data = Object.keys(responseData).map((data, key) => {
    return responseData[data];
  });
  // console.log('data', data);
  return data;
};

const defaultadminState = {
  login: false,
  data: fetchCartData(),
};
const cartReducer = (state, action) => {
  if (action.type === 'LOGIN') {
    return { state, login: true };
  }
  if (action.type === 'NEW_USER') {
    return { state, data: fetchCartData() };
  }

  return defaultadminState;
};
//Componetn start here
const AdminProvider = (props) => {
  const [adminState, dispatchCartAction] = useReducer(cartReducer, defaultadminState);

  const loggingHandler = () => {
    dispatchCartAction({ type: 'LOGIN' });
  };
  const newUserHandler = () => {
    dispatchCartAction({ type: 'NEW_USER' });
  };

  const adminContext = {
    isLoggedIn: adminState.login,
    login: loggingHandler,
    data: adminState.data,
    newuser: newUserHandler,
  };
  return <AdminContext.Provider value={adminContext}>{props.children}</AdminContext.Provider>;
};

export default AdminProvider;
