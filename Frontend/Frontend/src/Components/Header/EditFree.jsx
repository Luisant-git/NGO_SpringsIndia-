import { Drawer } from 'antd';
import React, { useState } from 'react';
import { Button, Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import axios from 'axios';

function EditFree({ drawerVisible, handleDrawerClose, userId }) {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    contact: '',
  });


  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.put(`${import.meta.env.VITE_FOS_CLIENT_API}/auth/update/${userId}`, formData);
      console.log('User updated:', response.data);
      handleDrawerClose(); // Close the drawer after saving
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div>
      <Drawer
        title="Edit Profile"
        placement="right"
        closable={true}
        onClose={handleDrawerClose}
        visible={drawerVisible}
        width={650}
      >
        <Form>
          <FormGroup>
            <FormLabel>Email</FormLabel>
            <FormControl
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter email"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Name</FormLabel>
            <FormControl
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter name"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Password</FormLabel>
            <FormControl
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter new password"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Contact</FormLabel>
            <FormControl
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              placeholder="Enter contact number"
            />
          </FormGroup>
          <Button className='mt-3' variant="success" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Form>
      </Drawer>
    </div>
  );
}

export default EditFree;
