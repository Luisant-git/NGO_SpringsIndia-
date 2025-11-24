import { API_BASE_URL } from '../../config.js';

export const getAllBlogs = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/blog?published=true`);
    if (!response.ok) {
      throw new Error('Failed to fetch blogs');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
};

export const getBlogById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/blog/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch blog');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching blog:', error);
    throw error;
  }
};

export const getAllBlogsAdmin = async () => {
  try {
    const token = localStorage.getItem('adminToken');
    const response = await fetch(`${API_BASE_URL}/blog/admin`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch blogs');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
};

export const createBlog = async (blogData) => {
  try {
    const token = localStorage.getItem('adminToken');
    const formData = new FormData();
    
    Object.keys(blogData).forEach(key => {
      if (key === 'image' && blogData[key]) {
        formData.append('image', blogData[key]);
      } else if (blogData[key] !== undefined && blogData[key] !== null) {
        formData.append(key, String(blogData[key]));
      }
    });

    const response = await fetch(`${API_BASE_URL}/blog`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to create blog');
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating blog:', error);
    throw error;
  }
};

export const updateBlog = async (id, blogData) => {
  try {
    const token = localStorage.getItem('adminToken');
    const formData = new FormData();
    
    Object.keys(blogData).forEach(key => {
      if (key === 'image' && blogData[key]) {
        formData.append('image', blogData[key]);
      } else if (key === 'published') {
        // Explicitly handle published field
        const publishedValue = blogData[key] === true ? 'true' : 'false';
        formData.append('published', publishedValue);
      } else if (blogData[key] !== undefined && blogData[key] !== null) {
        formData.append(key, String(blogData[key]));
      }
    });

    const response = await fetch(`${API_BASE_URL}/blog/${id}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to update blog');
    }
    return await response.json();
  } catch (error) {
    console.error('Error updating blog:', error);
    throw error;
  }
};

export const deleteBlog = async (id) => {
  try {
    const token = localStorage.getItem('adminToken');
    const response = await fetch(`${API_BASE_URL}/blog/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to delete blog');
    }
    return await response.json();
  } catch (error) {
    console.error('Error deleting blog:', error);
    throw error;
  }
};