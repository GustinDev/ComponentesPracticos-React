import { useNavigate } from 'react-router-dom';
import { Swal } from 'sweetalert2';

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/login');
  };

  // Crea tu mixin personalizado

  // Usa el mixin personalizado
  Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool',
  });

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>Ir al Login</button>
      <button onClick={mostrarAlerta}>Alerta</button>
    </div>
  );
};

export default Home;
