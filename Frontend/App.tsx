
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
// import Programs from './components/pages/Programs';
// import Impact from './components/pages/Impact';
// import Partnerships from './components/pages/Partnerships';
// import Governance from './components/pages/Governance';
// import Contact from './components/pages/Contact';
// import Gallery from './components/pages/Gallery';
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
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <ScrollToTop />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/programs" element={<Programs />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default App;