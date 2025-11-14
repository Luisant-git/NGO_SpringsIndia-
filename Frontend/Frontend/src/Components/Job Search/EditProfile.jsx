import React, { useState, useEffect } from 'react';
import { Drawer, Button } from 'antd';
import axios from 'axios';
import { setRefresh } from '../../store/Freelancerslice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

function EditProfile({ openedit, closeedit, refresh, candidateData }) {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    contact: '',
    gender: '',

  });

  // Initialize form data when candidateData changes
  useEffect(() => {
    if (candidateData) {
      setFormData({
        name: candidateData.name || '',
        email: candidateData.email || '',
        contact: candidateData.contact || '',
        gender: candidateData.gender || 'Male',
      });
    }
  }, [candidateData]);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_FOS_CLIENT_API}/auth/update/${candidateData?.id}`,
        formData
      );
    
      closeedit(); // Close the drawer after saving
      dispatch(setRefresh(!refresh));
      toast.success('Freelancer Updated successfully');
    } catch (error) {
      console.error('Error updating user:', error);
      toast.error('Failed to update');
    }
  };

  return (
    <Drawer
      title="Edit Profile"
      placement="right"
      onClose={closeedit}
      open={openedit}
      width={600}
    >
      <form onSubmit={handleSubmit}>
        <div className="jm-post-job-wrapper mb-40">
          <h4 className="jm-job-acc-title">Freelancer Information</h4>
          <div className="row">
            <div className="col-xl-12">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="col-xl-12">
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="col-xl-12">
              <input
                type="text"
                name="contact"
                placeholder="Contact"
                value={formData.contact}
                onChange={handleChange}
              />
            </div>

            <div className="col-xl-12">
              <select
                name="gender"
                className="jm-job-select"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>

           
          </div>
        </div>

        <div className="jm-post-job-wrapper mb-40">
          <div className="col-xl-12">
            <div className="jm-info-buttons mt-25">
              <button type="submit" className="jm-post-job-btn jm-theme-btn">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </form>
    </Drawer>
  );
}

export default EditProfile;
