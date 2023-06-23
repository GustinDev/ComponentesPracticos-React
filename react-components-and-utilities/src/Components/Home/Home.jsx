import { useNavigate } from 'react-router-dom';
import { Swal } from 'sweetalert2';

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/login');
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>Ir al Login</button>
    </div>
  );
};

export default Home;
