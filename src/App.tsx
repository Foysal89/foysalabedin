import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import Admin from "./pages/Admin";
import BackToTop from "./components/BackToTop";
import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:id" element={<ProjectDetail />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <BackToTop />
      </Router>
    </AuthProvider>
  );
}
