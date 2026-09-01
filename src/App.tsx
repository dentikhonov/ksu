import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CategoryGrid from "./components/CategoryGrid";
import { AboutSection, AudienceSection } from "./components/BrandSections";
import EditorialShowcase from "./components/EditorialShowcase";
import LooksSection from "./components/LooksSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import RequestModal from "./components/RequestModal";
import Metrika from "./components/Metrika";
import PortfolioPage from "./pages/PortfolioPage";

function HomePage({ onRequestClick }: { onRequestClick: () => void }) {
  return (
    <main>
      <Hero onRequestClick={onRequestClick} />
      <EditorialShowcase />
      <AboutSection />
      <CategoryGrid />
      <AudienceSection />
      <FeaturesSection />
      <LooksSection />
    </main>
  );
}

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Metrika />
      <Header onRequestClick={() => setModalOpen(true)} />
      <Routes>
        <Route path="/" element={<HomePage onRequestClick={() => setModalOpen(true)} />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
      <Footer />
      <RequestModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </BrowserRouter>
  );
}

export default App;
