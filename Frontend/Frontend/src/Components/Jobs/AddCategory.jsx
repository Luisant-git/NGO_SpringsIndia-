import React, { useState } from 'react';
import { Drawer, Button, Table, Popconfirm } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddCategory({ closeCandidateDrawer, isCandidateDrawerOpen, categories, fetchCategories }) {
  const [categoryInput, setCategoryInput] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editingCategoryId, setEditingCategoryId] = useState(null);

  // Add new category
  const addCategory = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_FOS_CLIENT_API}/categories`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category: categoryInput }),
      });
      if (response.ok) {
        setCategoryInput(''); // Clear input field after adding
        fetchCategories(); // Refresh category list
        toast.success('Category added successfully!'); // Show success toast
      } else {
        toast.error('Failed to add category.'); // Show error toast
      }
    } catch (error) {
      console.error('Error adding category:', error);
      toast.error('Error adding category.'); // Show error toast
    }
  };

  // Edit category
  const editCategory = async (id) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_FOS_CLIENT_API}/categories/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category: categoryInput }),
      });
      if (response.ok) {
        setIsEditing(false);
        setEditingCategoryId(null);
        setCategoryInput(''); // Clear input field
        fetchCategories(); // Refresh category list
        toast.success('Category updated successfully!'); // Show success toast
      } else {
        toast.error('Failed to update category.'); // Show error toast
      }
    } catch (error) {
      console.error('Error editing category:', error);
      toast.error('Error editing category.'); // Show error toast
    }
  };

  // Delete category
  const deleteCategory = async (id) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_FOS_CLIENT_API}/categories/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchCategories(); // Refresh category list
        toast.success('Category deleted successfully!'); // Show success toast
      } else {
        toast.error('Failed to delete category.'); // Show error toast
      }
    } catch (error) {
      console.error('Error deleting category:', error);
      toast.error('Error deleting category.'); // Show error toast
    }
  };

  // Set up editing state for a category
  const handleEdit = (category) => {
    setIsEditing(true);
    setEditingCategoryId(category.id);
    setCategoryInput(category.category); // Set current category name in input
  };

  // Handle form submission (either add or edit based on state)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      editCategory(editingCategoryId);
    } else {
      addCategory();
    }
  };

  // Table columns for displaying categories with edit and delete actions
  const columns = [
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <>
          <Button type="link" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this category?"
            onConfirm={() => deleteCategory(record.id)}
          >
            <Button type="link" danger>
              Delete
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <div>
      <Drawer
        title="Add Category"
        placement="right"
        open={isCandidateDrawerOpen}
        onClose={closeCandidateDrawer}
        width={600}
      >
        <div>
          <form onSubmit={handleSubmit}>
            <div className="jm-post-job-wrapper mb-40">
              <div className="col-xl-12 col-md-12">
                <span className="form-label">Category:</span>
                <input
                  type="text"
                  className="mt-3"
                  required
                  placeholder="Category"
                  value={categoryInput}
                  onChange={(e) => setCategoryInput(e.target.value)}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-success">
              {isEditing ? 'Edit Category' : 'Add Category'}
            </button>
          </form>

          {/* Table to display categories */}
          <Table
            dataSource={categories}
            columns={columns}
            rowKey="id" // Assuming your categories have a unique 'id' field
            className="mt-3"
          />
        </div>
      </Drawer>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}

export default AddCategory;
