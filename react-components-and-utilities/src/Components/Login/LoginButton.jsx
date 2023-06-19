import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  //*Auth0 Login
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <button onClick={() => loginWithRedirect()}>Log In</button>
    </div>
  );
};

export default LoginButton;
