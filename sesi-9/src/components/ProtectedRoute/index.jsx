/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = (props) => {
  const location = useLocation();
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return props.children;
};

export default ProtectedRoute;
