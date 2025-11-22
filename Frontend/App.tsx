
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Programs from './components/pages/Programs';
import Impact from './components/pages/Impact';
import Partnerships from './components/pages/Partnerships';
import Governance from './components/pages/Governance';
import Contact from './components/pages/Contact';
import Gallery from './components/pages/Gallery';
import StepsAcademy from './components/pages/StepsAcademy';
import ResearchCenter from './components/pages/ResearchCenter';
import ProgramsInitiatives from './components/pages/ProgramsInitiatives';
import ProgramsImpacts from './components/pages/ProgramsImpacts';
import Login from './components/pages/Login';
import AdminDashboard from './components/pages/AdminDashboard';
import AdminImpactYears from './components/pages/AdminImpactYears';
import AdminImpactMonths from './components/pages/AdminImpactMonths';
import AdminLayout from './components/AdminLayout';
import ProtectedRoute from './components/ProtectedRoute';
import BackToTopButton from './components/BackToTopButton';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="impact-years" element={<AdminImpactYears />} />
          <Route path="impact-months" element={<AdminImpactMonths />} />
        </Route>
        <Route path="/*" element={
          <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/programs" element={<Programs />} />
                {/* <Route path="/impact" element={<Impact />} /> */}
                <Route path="/partnerships" element={<Partnerships />} />
                <Route path="/governance" element={<Governance />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/steps-academy" element={<StepsAcademy />} />
                <Route path="/research-center" element={<ResearchCenter />} />
                <Route path="/programs-initiatives" element={<ProgramsInitiatives />} />
                <Route path="/programs-impacts" element={<ProgramsImpacts />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </main>
            <Footer />
            <BackToTopButton />
          </div>
        } />
      </Routes>
      <Toaster position="top-center" />
    </>
  );
};

export default App;