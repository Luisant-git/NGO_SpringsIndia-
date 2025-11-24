import { API_BASE_URL } from '../../config.js';

export const loginAdmin = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/admin/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Login failed');
  }

  const data = await response.json();
  if (data.token) {
    localStorage.setItem('auth-token', data.token);
  }
  return data;
};

export const logoutAdmin = async () => {
  localStorage.removeItem('auth-token');
  
  const response = await fetch(`${API_BASE_URL}/admin/logout`, {
    method: 'POST',
  });

  if (!response.ok) {
    throw new Error('Logout failed');
  }

  return response.json();
};

export const checkAuthStatus = async () => {
  try {
    const token = localStorage.getItem('auth-token');
    if (!token) {
      return false;
    }
    
    const response = await fetch(`${API_BASE_URL}/admin/profile`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    
    if (response.ok) {
      const data = await response.json();
      return data.id ? true : false;
    }
    return false;
  } catch (error) {
    return false;
  }
};

export const getAdminProfile = async () => {
  try {
    const token = localStorage.getItem('auth-token');
    if (!token) {
      return null;
    }
    
    const response = await fetch(`${API_BASE_URL}/admin/profile`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    
    if (response.ok) {
      return await response.json();
    }
    return null;
  } catch {
    return null;
  }
};