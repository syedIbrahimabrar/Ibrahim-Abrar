import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BackgroundElements } from './components/BackgroundElements';
import { Navbar } from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import { SmoothScrollProvider } from './components/SmoothScrollProvider';
import { HomePage } from './pages/HomePage';
import { AllProjectsPage } from './pages/AllProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ContactPage } from './pages/ContactPage';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <Router>
      <SmoothScrollProvider>
        <ScrollToTop />
        <div className="relative min-h-screen bg-[#06080d] text-white selection:bg-[#38bdf8]/30 selection:text-white font-body overflow-x-hidden flex flex-col justify-between">
          {/* Cinematic Atmospheric Lighting & Background */}
          <BackgroundElements />

          {/* Global Floating Minimal Navbar */}
          <Navbar />

          {/* Dynamic Route Pages */}
          <main className="relative z-10 flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/work" element={<AllProjectsPage />} />
              <Route path="/work/:id" element={<ProjectDetailPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>

          {/* Global Minimalist Footer */}
          <Footer />
        </div>
      </SmoothScrollProvider>
    </Router>
  );
}
