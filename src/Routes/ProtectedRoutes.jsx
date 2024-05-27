import { Route } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import AdminLayout from "../Layout/AdminLayout";
import ClientLayout from "../Layout/ClientLayout";
import Dashboard from "../pages/Dashboard/Dashboard";

function ProtectedRoutes() {
  const { user } = useAuth();
  return (
    <Route
      path="/dashboard"
      element={user.role === "admin" ? <AdminLayout /> : <ClientLayout />}
    >
      <Route index element={<Dashboard />} />
    </Route>
  );
}

export default ProtectedRoutes;
