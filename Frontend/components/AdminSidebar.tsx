import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { logoutAdmin } from './api/authApi.js';

const AdminSidebar: React.FC = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutAdmin();
      toast.success('Logged out successfully');
      navigate('/login');
    } catch (error) {
      toast.error('Logout failed');
    }
    setShowLogoutModal(false);
  };

  return (
    <>
      <div className="w-64 bg-gray-800 text-white h-screen fixed left-0 top-0 z-50 flex flex-col">
        <div className="p-4 flex-1">
          <h2 className="text-xl font-bold mb-8">Admin Panel</h2>
          <nav className="space-y-2">
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) =>
                `block px-4 py-2 rounded transition-colors ${
                  isActive ? 'bg-gray-700 text-white' : 'hover:bg-gray-700'
                }`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/admin/impact-years"
              className={({ isActive }) =>
                `block px-4 py-2 rounded transition-colors ${
                  isActive ? 'bg-gray-700 text-white' : 'hover:bg-gray-700'
                }`
              }
            >
              Impact Years
            </NavLink>
            <NavLink
              to="/admin/impact-months"
              className={({ isActive }) =>
                `block px-4 py-2 rounded transition-colors ${
                  isActive ? 'bg-gray-700 text-white' : 'hover:bg-gray-700'
                }`
              }
            >
              Impact Months
            </NavLink>
          </nav>
        </div>
        <div className="p-4">
          <button
            onClick={() => setShowLogoutModal(true)}
            className="w-full text-left px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60]">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4 relative">
            <button
              onClick={() => setShowLogoutModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 pr-8">Confirm Logout</h3>
            <p className="text-gray-600 mb-6">Are you sure you want to logout?</p>
            <div className="flex space-x-3">
              <button
                onClick={handleLogout}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Yes, Logout
              </button>
              <button
                onClick={() => setShowLogoutModal(false)}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminSidebar;