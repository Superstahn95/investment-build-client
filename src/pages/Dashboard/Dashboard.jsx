import AdminDashboardHome from "../../components/AdminDashboardHome/AdminDashboardHome";
import ClientDashboardHome from "../../components/ClientDashboardHome/ClientDashboardHome";
import { useAuth } from "../../hooks/useAuth";

function Dashboard() {
  const { user } = useAuth();
  return user?.role === "admin" ? (
    <AdminDashboardHome />
  ) : (
    <ClientDashboardHome />
  );
}

export default Dashboard;
