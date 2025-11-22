import { API_BASE_URL } from '../../config.js';

export const loginAdmin = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/admin/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Login failed');
  }

  return response.json();
};

export const logoutAdmin = async () => {
  const response = await fetch(`${API_BASE_URL}/admin/logout`, {
    method: 'POST',
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error('Logout failed');
  }

  return response.json();
};

export const checkAuthStatus = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/profile`, {
      method: 'GET',
      credentials: 'include',
    });
    if (response.ok) {
      const data = await response.json();
      return data.id ? true : false;
    }
    return false;
  } catch {
    return false;
  }
};

export const getAdminProfile = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/profile`, {
      method: 'GET',
      credentials: 'include',
    });
    if (response.ok) {
      return await response.json();
    }
    return null;
  } catch {
    return null;
  }
};