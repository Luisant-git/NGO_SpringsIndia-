import { Drawer, Spin } from 'antd';
import React, { useState } from 'react';
import UploadFile from '../Jobs/UploadFile';
import { setRefresh } from '../../store/Freelancerslice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

function DrawerAdd({ closeFormDrawer, formVisible, refresh }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    profile: '',
    gender: '',
  });
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // Loading state for spinner

  // Generate a random password with special characters
  const generateRandomPassword = () => {
    const prefix = "rukmar"; // Fixed prefix
    let suffix = '';
  
    // Generate a 4-digit numeric suffix
    for (let i = 0; i < 4; i++) {
      suffix += Math.floor(Math.random() * 10); // Random number between 0-9
    }
  
    // Combine the prefix and suffix
    return `${prefix}${suffix}`;
  };

  // Validation function
  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const contactRegex = /^[0-9]+$/;

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email || !emailRegex.test(formData.email))
      newErrors.email = 'Valid email is required';
    if (!formData.contact || !contactRegex.test(formData.contact))
      newErrors.contact = 'Valid contact number is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const generatedPassword = generateRandomPassword();
      setLoading(true); // Show spinner
      
      try {
        // Send the registration request
        const response = await fetch(`${import.meta.env.VITE_FOS_CLIENT_API}/auth/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: generatedPassword, // Generated password sent in registration
            contact: formData.contact,
            gender: formData.gender, // Can be added as an input field if needed
            profile: 'aa', // Handle the profile upload logic
            location: 'salem', // Add location as needed
          }),
        });

        if (response.ok) {
          // Send generated password via email
          const emailResponse = await fetch(
            `${import.meta.env.VITE_FOS_CLIENT_API}/mail/send-email?to=${formData.email}&username=${formData.name}&code=${generatedPassword}`
          );

          if (emailResponse.ok) {
            toast.success('Freelancer created successfully. Password sent to email.');
            dispatch(setRefresh(!refresh));
            closeFormDrawer();
          } else {
            toast.error('Failed to send the password via email.');
          }
        } else {
          const errorData = await response.json();
          toast.error(`Failed to create freelancer: ${errorData.message}`);
        }
      } catch (error) {
        toast.error(`Error: ${error.message}`);
      } finally {
        setLoading(false); // Hide spinner
      }
    } else {
      toast.warn('Please correct the errors in the form.');
    }
  };

  return (
    <Drawer
      width={600}
      title="Add New Freelancer"
      placement="right"
      onClose={closeFormDrawer}
      visible={formVisible}
    >
      <Spin spinning={loading} tip="Creating freelancer..." size="large" style={{ color: 'green' }}>
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
                  onChange={handleInputChange}
                />
                {errors.name && <p className="error">{errors.name}</p>}
              </div>

              <div className="col-xl-12">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>

              <div className="col-xl-12">
                <input
                  type="text"
                  name="contact"
                  placeholder="Contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                />
                {errors.contact && <p className="error">{errors.contact}</p>}
              </div>

              <div className="col-xl-12 col-md-12">
                <select value={formData.gender} onChange={handleInputChange} name="gender" className="jm-job-select">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </select>
              </div>

              {/* <div className="col-xl-12">
                <textarea placeholder="Address"></textarea>
              </div> */}
            </div>
          </div>

          {/* <span>Upload Profile</span>
          <div className="mt-2 mb-3">
            <UploadFile />
          </div> */}

          <div className="jm-post-job-wrapper mb-40">
            <div className="col-xl-12">
              <div className="jm-info-buttons mt-25">
                <button type="submit" className="jm-post-job-btn jm-theme-btn">
                  Create
                </button>
              </div>
            </div>
          </div>
        </form>
      </Spin>
    </Drawer>
  );
}

export default DrawerAdd;
