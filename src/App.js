import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import { User } from '@auth0/auth0-react';

function App() {
  return (
    <>
      <Login />
      <Logout />
      <User />
    </>
  );
}

export default App;
