import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SaharaChat from "./pages/SaharaChat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/features" element={<Features />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/sahara-chat" element={<SaharaChat />} />
          </Routes>
        </Router>
      </AuthProvider>
  );
}

export default App;
