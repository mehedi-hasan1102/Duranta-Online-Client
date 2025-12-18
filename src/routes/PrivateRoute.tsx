import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext);
  if (!auth) return null;

  const { user, loading } = auth;

  if (loading) return <p>Loading...</p>;
  if (!user) return <Navigate to="/login" replace />;

  return children;
};

export default PrivateRoute;
