import { NavLink } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
function NotFound() {
  return (
    <>
      <Navbar />
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-slate-100">
        <p className="text-slate-800 font-bold mb-4 text-2xl">404</p>
        <p className="text-slate-800 font-bold mb-4 text-2xl">Page Not Found</p>
        <NavLink
          to="/"
          className="uppercase bg-red-400 text-white p-4 rounded-md"
        >
          Go to Home Page
        </NavLink>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;
