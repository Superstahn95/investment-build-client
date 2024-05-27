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
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/security" element={<Security />} />
        <Route path="/investments" element={<Investment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
