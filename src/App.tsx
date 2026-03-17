import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import AllWork from "./pages/AllWork";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<AllWork />} />
        <Route path="/work/:id" element={<ProjectDetail />} />
      </Routes>
      <BackToTop />
    </Router>
  );
}
