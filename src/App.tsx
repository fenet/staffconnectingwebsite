import { Navigate, Route, Routes } from "react-router-dom";
import { ChatbotWidget } from "./components/chatbot-widget";
import HomePage from "./pages/Home";
import { AboutPage } from "./pages/About";
import ContactPage from "./pages/Contact";
import CompanyPage from "./pages/Company";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about-team" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/company-solutions" element={<CompanyPage />} />
        <Route path="/candidate-services" element={<Navigate to="/company-solutions#candidate-services" replace />} />
        <Route path="/jobboerse" element={<CompanyPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <ChatbotWidget />
    </>
  );
}

export default App;
