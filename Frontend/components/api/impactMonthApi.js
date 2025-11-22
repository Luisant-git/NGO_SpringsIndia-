import { API_BASE_URL } from '../../config.js';

export const getImpactMonths = async () => {
  const response = await fetch(`${API_BASE_URL}/impact-month`, {
    credentials: 'include',
  });
  if (!response.ok) {
    throw new Error('Failed to fetch impact months');
  }
  return response.json();
};

export const getImpactMonth = async (id) => {
  const response = await fetch(`${API_BASE_URL}/impact-month/${id}`, {
    credentials: 'include',
  });
  if (!response.ok) {
    throw new Error('Failed to fetch impact month');
  }
  return response.json();
};

export const createImpactMonth = async (data) => {
  const response = await fetch(`${API_BASE_URL}/impact-month`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Failed to create impact month');
  }
  return response.json();
};

export const updateImpactMonth = async (id, data) => {
  const response = await fetch(`${API_BASE_URL}/impact-month/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Failed to update impact month');
  }
  return response.json();
};

export const deleteImpactMonth = async (id) => {
  const response = await fetch(`${API_BASE_URL}/impact-month/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  });
  if (!response.ok) {
    throw new Error('Failed to delete impact month');
  }
  return response.json();
};