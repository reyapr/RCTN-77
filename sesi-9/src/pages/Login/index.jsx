import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const prevPathname = location.state?.from?.pathname || "/";
  const token = localStorage.getItem("token");

  if (token) {
    navigate("/");
  }

  const handleLogin = () => {
    localStorage.setItem("token", "123");
    navigate(prevPathname, { replace: true });
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
