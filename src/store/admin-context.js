import React from 'react';

const AdminContext = React.createContext({
  inLoggedIn: false,
  data: [],
  newuser: () => {},
});

export default AdminContext;
