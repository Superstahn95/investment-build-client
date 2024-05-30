import "react-alice-carousel/lib/alice-carousel.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Security from "./pages/Security/Security";
import NotFound from "./pages/NotFound/NotFound";
import Investment from "./pages/Investment/Investment";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import "react-toastify/dist/ReactToastify.css";
import AdminLayout from "./Layout/AdminLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import PrivateRoute from "./Routes/PrivateRoute";
import AdminRoute from "./Routes/AdminRoute";
import { useAuth } from "./hooks/useAuth";
import ClientLayout from "./Layout/ClientLayout";
import Deposit from "./pages/ClientPages/Deposit/Deposit";
import Users from "./pages/AdminPages/Users/Users";
import User from "./pages/AdminPages/User/User";
import Invest from "./pages/ClientPages/Invest/Invest";
import Transactions from "./pages/ClientPages/Transactions/Transactions";
import CreatePlan from "./pages/AdminPages/CreatePlan/CreatePlan";
import UpdatePlan from "./pages/AdminPages/UpdatePlan/UpdatePlan";
import Plans from "./pages/AdminPages/Plans/Plans";

function App() {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/security" element={<Security />} />
        <Route path="/investments" element={<Investment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <ProtectedRoutes /> */}
        <Route element={<PrivateRoute />}>
          <Route
            path="/dashboard"
            element={
              user?.role === "admin" ? <AdminLayout /> : <ClientLayout />
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="deposit" element={<Deposit />} />
            <Route path="buy-plan" element={<Invest />} />
            <Route path="transactions" element={<Transactions />} />
            <Route element={<AdminRoute />}>
              <Route path="users" element={<Users />} />
              <Route path="users/:id" element={<User />} />
              <Route path="plans" element={<Plans />} />
              <Route path="plans/create-plan" element={<CreatePlan />} />
              <Route path="plans/:id" element={<UpdatePlan />} />
            </Route>
          </Route>
        </Route>
        {/* <Route path="/dashboard" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
        </Route> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
