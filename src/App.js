import './styles/base.css';
import Login from './components/Login/Login';
import AdminProvider from './store/adminProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp/SignUp';
import NewUser from './components/NewUser/Newuser';
import DashBoard from './components/DashBoard/DashBoard';

function App() {
  return (
    <BrowserRouter>
      <AdminProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/new-user" element={<NewUser />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </AdminProvider>
    </BrowserRouter>
  );
}

export default App;
