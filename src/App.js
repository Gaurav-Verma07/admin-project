import './styles/base.css';
import Login from './components/Login/Login';
import AdminProvider from './store/adminProvider';  

function App() {
  return (
    <AdminProvider>
      <Login/>
    </AdminProvider>
  );
}

export default App;
