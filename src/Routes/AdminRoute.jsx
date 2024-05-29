import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function AdminRoute() {
  const { user } = useAuth();
  return user?.role === "admin" ? <Outlet /> : <Navigate to="/" />;
}

export default AdminRoute;
