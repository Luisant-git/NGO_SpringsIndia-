import React, { useEffect, useState } from 'react';
import { getAdminProfile } from './api/authApi.js';
import finalLogo from '../assets/final.png';

const AdminHeader: React.FC = () => {
  const [adminEmail, setAdminEmail] = useState<string>('');

  useEffect(() => {
    const fetchProfile = async () => {
      const profile = await getAdminProfile();
      if (profile) {
        setAdminEmail(profile.email);
      }
    };
    fetchProfile();
  }, []);

  return (
    <header className="bg-white shadow-md h-16 fixed top-0 left-64 right-0 z-40 ml-0">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center">
          <img src={finalLogo} alt="Springs India Foundation Logo" className="h-10 w-auto" />
        </div>
        <div className="text-sm text-gray-600">
          Welcome, {adminEmail || 'Anonymous'}
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;