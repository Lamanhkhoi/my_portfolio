import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToHash from "./components/ScrollToHash";
import AppNavbar from "./components/AppNavbar";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToHash />
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
