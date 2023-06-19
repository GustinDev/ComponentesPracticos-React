import { useNavigate } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import Profile from './Profile';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  const { isAuthenticated } = useAuth0();
  console.log(isAuthenticated);

  return (
    <div>
      <h1>Login Component</h1>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      <Profile />

      <button onClick={handleClick}>Volver al Home</button>
    </div>
  );
};

export default Login;
