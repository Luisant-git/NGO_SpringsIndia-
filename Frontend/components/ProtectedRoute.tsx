import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { checkAuthStatus } from './api/authApi.js';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      console.log('ProtectedRoute: Checking authentication...');
      const token = localStorage.getItem('auth-token');
      console.log('ProtectedRoute: Token exists:', !!token);
      
      const authStatus = await checkAuthStatus();
      console.log('ProtectedRoute: Auth status:', authStatus);
      setIsAuthenticated(authStatus);
    };
    checkAuth();
  }, []);

  console.log('ProtectedRoute: Current auth state:', isAuthenticated);

  if (isAuthenticated === null) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!isAuthenticated) {
    console.log('ProtectedRoute: Not authenticated, redirecting to login');
    return <Navigate to="/login" replace />;
  }

  console.log('ProtectedRoute: Authenticated, rendering children');
  return <>{children}</>;
};

export default ProtectedRoute;