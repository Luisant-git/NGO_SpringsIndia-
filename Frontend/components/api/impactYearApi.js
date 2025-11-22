import { API_BASE_URL } from '../../config.js';

export const getImpactYears = async () => {
  const response = await fetch(`${API_BASE_URL}/impact-year`, {
    credentials: 'include',
  });
  if (!response.ok) {
    throw new Error('Failed to fetch impact years');
  }
  return response.json();
};

export const getImpactYear = async (id) => {
  const response = await fetch(`${API_BASE_URL}/impact-year/${id}`, {
    credentials: 'include',
  });
  if (!response.ok) {
    throw new Error('Failed to fetch impact year');
  }
  return response.json();
};

export const createImpactYear = async (data) => {
  const response = await fetch(`${API_BASE_URL}/impact-year`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Failed to create impact year');
  }
  return response.json();
};

export const updateImpactYear = async (id, data) => {
  const response = await fetch(`${API_BASE_URL}/impact-year/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Failed to update impact year');
  }
  return response.json();
};

export const deleteImpactYear = async (id) => {
  const response = await fetch(`${API_BASE_URL}/impact-year/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  });
  if (!response.ok) {
    throw new Error('Failed to delete impact year');
  }
  return response.json();
};