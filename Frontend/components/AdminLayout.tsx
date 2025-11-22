import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';

const AdminLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <AdminSidebar />
      <AdminHeader />
      <main className="ml-64 pt-16 p-6 mt-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;