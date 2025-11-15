import React from 'react';
import { Link } from 'react-router-dom';
import finalLogo from '../assets/final2.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h3 className="text-2xl font-bold">Support Our Mission</h3>
            <p className="text-gray-300 mt-2 max-w-xl mx-auto">Your generous contribution helps us empower lives and build a better future for communities in need.</p>
            <Link 
                to="/contact" 
                className="mt-6 inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105">
                Donate Now
            </Link>
        </div>
        <div className="border-t border-gray-700 mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={finalLogo} alt="Springs India Foundation Logo" className="h-16 w-auto" />
              <div>
                {/* <h3 className="text-xl font-bold text-red-400">Springs India</h3>
                <h3 className="text-xl font-bold text-white">Foundation</h3> */}
              </div>
            </div>
            <p className="text-gray-300 text-sm">Empowering Lives. Building Futures. Creating Impact.</p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold tracking-wider uppercase">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white text-sm">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-white text-sm">Our Programs</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white text-sm">Gallery</Link></li>
              <li><Link to="/partnerships" className="text-gray-300 hover:text-white text-sm">Partner with Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white text-sm">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold tracking-wider uppercase">Get Involved</h4>
            <ul className="mt-4 space-y-2">
              <li><Link to="/contact" className="text-gray-300 hover:text-white text-sm">Volunteer / Intern</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white text-sm">Fund a Program</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white text-sm">Donate</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold tracking-wider uppercase">Contact Us</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-red-400"></i>
                <span className="text-gray-300">Coimbatore, Tamil Nadu</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3 text-red-400"></i>
                <a href="mailto:info@springsindiafoundation.ngo" className="text-gray-300 hover:text-white">info@springsindiafoundation.ngo</a>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone mt-1 mr-3 text-red-400"></i>
                <a href="tel:+919150931818" className="text-gray-300 hover:text-white">+91-9150931818</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Springs India Foundation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;