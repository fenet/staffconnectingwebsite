import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { trackPageView, trackViewContent } from "./lib/meta-pixel";
import HomePage from "./pages/Home";
import { AboutPage } from "./pages/About";
import ContactPage from "./pages/Contact";
import ImpressumPage from "./pages/Impressum";
import JobboersePage from "./pages/Jobboerse";

function MetaPixelRouteTracker() {
  const location = useLocation();

  useEffect(() => {
    const routeLabel = location.pathname === "/" ? "Home" : location.pathname;

    trackPageView();

    trackViewContent({
      content_name: routeLabel,
      content_category: "page",
      content_type: "website",
    });
  }, [location.pathname]);

  return null;
}

function RouteScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.slice(1);
      const target = document.getElementById(targetId);

      if (target) {
        target.scrollIntoView({ block: "start" });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  return (
    <>
      <MetaPixelRouteTracker />
      <RouteScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about-team" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="/jobboerse" element={<JobboersePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
