import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { logoutAdmin, checkAuthStatus } from './api/authApi.js';
import finalLogo from '../assets/final.png';


const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { 
    name: 'Flagship Programs', 
    path: '/rwedp',
    dropdown: [
      { name: 'Rural Women Educator Development Program –(RWEDP)', path: '/rwedp' },
      { name: 'Research, Learning and Innovation Centre-(RLIC)', path: '/research-center' },
    ]
  },
  { name: 'Programs & Initiatives', path: '/programs-initiatives' },
  { name: 'Programs & Impacts', path: '/programs-impacts' },
  { name: 'CSR Partnerships', path: '/partnerships' },
  { name: 'Governance', path: '/governance' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact Us', path: '/contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const authStatus = await checkAuthStatus();
      setIsAuthenticated(authStatus);
    };
    checkAuth();
  }, [location.pathname]);

  const handleLogout = async () => {
    try {
      await logoutAdmin();
      setIsAuthenticated(false);
      toast.success('Logged out successfully');
      navigate('/login');
    } catch (error) {
      toast.error('Logout failed');
    }
  };

  const activeLinkStyle = {
    color: '#ff6f00', // Orange accent
    fontWeight: '600',
  };
  
  const handleMobileDropdownToggle = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <div className="flex-shrink-0 flex flex-col items-center">
            <NavLink to="/" className="logo-container">
              <img src={finalLogo} alt="Springs India Foundation Logo" className="logo-image" />
              <div className="logo-text">
                {/* Springs India <span className="logo-highlight">Foundation</span> */}
              </div>
            </NavLink>
            <div className="text-xs font-semibold text-center mt-1 whitespace-nowrap" style={{color: '#ff6f00'}}>80G, 12A, CSR-1-Certified</div>
          </div>
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => {
              const isChildActive = link.dropdown?.some(item => location.pathname === item.path);

              return link.dropdown ? (
                <div key={link.name} className="relative group">
                  <NavLink
                    to={link.path}
                    style={({ isActive }) => (isActive || isChildActive ? activeLinkStyle : {})}
                    className="text-gray-600 hover:text-orange-500 px-1 py-2 rounded-md text-sm font-medium transition-colors flex items-center uppercase"
                  >
                    {link.name}
                    <i className="fas fa-chevron-down ml-1 text-xs"></i>
                  </NavLink>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                    {link.name !== 'Flagship Programs' && (
                      <NavLink
                        to={link.path}
                        style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-orange-500 uppercase"
                      >
                        All {link.name}
                      </NavLink>
                    )}
                    {link.dropdown.map(item => (
                      <NavLink
                        key={item.name}
                        to={item.path}
                        style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-orange-500 uppercase"
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={link.name}
                  to={link.path}
                  style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                  className="text-gray-600 hover:text-orange-500 px-1 py-2 rounded-md text-sm font-medium transition-colors uppercase"
                >
                  {link.name}
                </NavLink>
              );
            })}
          </nav>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2" style={{color: '#00695c'}}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              !link.dropdown ? (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={closeMobileMenu}
                  style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                  className="text-gray-600 hover:bg-teal-100 hover:text-orange-500 block px-3 py-2 rounded-md text-lg font-medium uppercase"
                >
                  {link.name}
                </NavLink>
              ) : (
                <div key={link.name}>
                  <button onClick={() => handleMobileDropdownToggle(link.name)} className="w-full flex justify-between items-center text-gray-600 hover:bg-teal-100 hover:text-orange-500 px-3 py-2 rounded-md text-lg font-medium text-left uppercase">
                    <span>{link.name}</span>
                    <i className={`fas fa-chevron-down text-xs transition-transform transform ${openDropdown === link.name ? 'rotate-180' : ''}`}></i>
                  </button>
                  {openDropdown === link.name && (
                    <div className="pl-6 pt-1 pb-2">
                      {link.name !== 'Flagship Programs' && (
                        <NavLink to={link.path} onClick={closeMobileMenu} style={({ isActive }) => (isActive ? activeLinkStyle : {})} className="block px-3 py-2 rounded-md text-lg font-medium text-gray-600 hover:bg-teal-100 hover:text-orange-500 uppercase">
                          All {link.name}
                        </NavLink>
                      )}
                      {link.dropdown.map(item => (
                        <NavLink key={item.name} to={item.path} onClick={closeMobileMenu} style={({ isActive }) => (isActive ? activeLinkStyle : {})} className="block px-3 py-2 rounded-md text-lg font-medium text-gray-600 hover:bg-teal-100 hover:text-orange-500 uppercase">
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              )
            ))}
            <div className="px-2 pt-4">
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="block text-center btn-primary py-3 px-4 rounded-lg"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;