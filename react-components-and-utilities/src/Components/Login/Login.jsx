import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleClick}>Volver al Home</button>
    </div>
  );
};

export default Login;
