import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import WhoWeAre from './components/pages/WhoWeAre';
import AboutGovernance from './components/pages/AboutGovernance';
import Programs from './components/pages/Programs';
import Impact from './components/pages/Impact';
import Partnerships from './components/pages/Partnerships';
import Governance from './components/pages/Governance';
import Contact from './components/pages/Contact';
import Gallery from './components/pages/Gallery';
import Media from './components/pages/Media';
import StepsAcademy from './components/pages/StepsAcademy';
import RWEDP from './components/pages/RWEDP';
import ResearchCenter from './components/pages/ResearchCenter';
import ProjectSheWins from './components/pages/ProjectSheWins';
import ProjectBurgurHills from './components/pages/ProjectBurgurHills';
import ProgramsInitiatives from './components/pages/ProgramsInitiatives';
import ProgramsImpacts from './components/pages/ProgramsImpacts';
import Blog from './components/pages/Blog';
import BlogPost from './components/pages/BlogPost';
import Login from './components/pages/Login';
import AdminDashboard from './components/pages/AdminDashboard';
import AdminImpactYears from './components/pages/AdminImpactYears';
import AdminImpactMonths from './components/pages/AdminImpactMonths';
import AdminBlogs from './components/pages/AdminBlogs';
import AdminReports from './components/pages/AdminReports';
import Reports from './components/pages/Reports';
import Careers from './components/pages/Careers';
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
          <Route path="blogs" element={<AdminBlogs />} />
          <Route path="reports" element={<AdminReports />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
              <Home />
            </main>
            <Footer />
            <BackToTopButton />
          </div>
        } />
        <Route path="/about" element={
          <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
              <About />
            </main>
            <Footer />
            <BackToTopButton />
          </div>
        } />
        <Route path="/who-we-are" element={
          <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
              <WhoWeAre />
            </main>
            <Footer />
            <BackToTopButton />
          </div>
        } />
        <Route path="/about-governance" element={
          <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
              <AboutGovernance />
            </main>
            <Footer />
            <BackToTopButton />
          </div>
        } />
        <Route path="/programs" element={
          <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
              <Programs />
            </main>
            <Footer />
            <BackToTopButton />
          </div>
        } />
        <Route path="/partnerships" element={
          <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
              <Partnerships />
            </main>
            <Footer />
            <BackToTopButton />
          </div>
        } />
        <Route path="/governance" element={
          <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
              <Governance />
            </main>
            {/* <Footer /> */}
            <BackToTopButton />
          </div>
        } />
        <Route path="/gallery" element={
          <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
              <Gallery />
            </main>
            <Footer />
            <BackToTopButton />
          </div>
        } />
        <Route path="/media" element={
          <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
              <Media />
            </main>
            <Footer />
            <BackToTopButton />
          </div>
        } />
        <Route path="/contact" element={
          <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
              <Contact />
            </main>
            <Footer />
            <BackToTopButton />
          </div>
        } />
        <Route path="/steps-academy" element={
          <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
              <StepsAcademy />
            </main>
            <Footer />
            <BackToTopButton />
          </div>
        } />
        <Route path="/rwedp" element={
          <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
              <RWEDP />
            </main>
            <Footer />
            <BackToTopButton />
          </div>
        } />
        <Route path="/project-shewins" element={
          <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
              <ProjectSheWins />
            </main>
            <Footer />
            <BackToTopButton />
          </div>
        } />
        <Route path="/project-burgur-hills" element={
          <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
              <ProjectBurgurHills />
            </main>
            <Footer />
            <BackToTopButton />
          </div>
        } />
        {/* Redirect old flagship-projects route to project-shewins */}
        <Route path="/flagship-projects" element={<Navigate to="/project-shewins" replace />} />
        {/* Research Center - Unpublished */}
        {/* <Route path="/research-center" element={
          <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
              <ResearchCenter />
            </main>
            <Footer />
            <BackToTopButton />
          </div>
        } /> */}
        <Route path="/programs-initiatives" element={
          <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
              <ProgramsInitiatives />
            </main>
            <Footer />
            <BackToTopButton />
          </div>
        } />
        <Route path="/programs-impacts" element={
          <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
              <ProgramsImpacts />
            </main>
            <Footer />
            <BackToTopButton />
          </div>
        } />
        <Route path="/blog" element={
          <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
              <Blog />
            </main>
            <Footer />
            <BackToTopButton />
          </div>
        } />
        <Route path="/blog/:id" element={
          <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
              <BlogPost />
            </main>
            <Footer />
            <BackToTopButton />
          </div>
        } />
        <Route path="/reports" element={
          <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
              <Reports />
            </main>
            <Footer />
            <BackToTopButton />
          </div>
        } />
        <Route path="/careers" element={
          <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
              <Careers />
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