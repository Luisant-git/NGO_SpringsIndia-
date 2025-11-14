import React, { useState } from 'react';
import axios from 'axios';
import { Spin } from 'antd';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    address: '',
    skills: '',
    linkedInLink: '',
    github: '',
    experience: '',
    experienceYear: 0,
    experienceCompany: '',
  });

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleFileUpload = async () => {
    if (!file) {
      alert('Please select a file before uploading');
      return;
    }

    const uploadData = new FormData();
    uploadData.append('file', file);

    setLoading(true);

    try {
      const res = await axios.post('http://localhost:2222/gen-ai/generate-content', uploadData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setFormData({
        name: res.data.name || '',
        number: res.data.number || '',
        email: res.data.email || '',
        address: res.data.address || '',
        skills: res.data.skills?.join(', ') || '',
        linkedInLink: res.data.linkedInLink || '',
        github: res.data.github || '',
        experience: res.data.experiance || '',
        experienceYear: res.data.experianceYear || 0,
        experienceCompany: res.data.experianceCompany || '',
      });
    } catch (err) {
      console.error('Error uploading file:', err);
      alert('Error uploading file');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
     
      <Spin spinning={loading} tip="Uploading...">
        <div className='container mt-4'>
        <h2>File Upload</h2>
          <input className='form-control' type="file" onChange={handleFileChange} />
          <button className='btn btn-success mt-3' onClick={handleFileUpload} disabled={loading}>
            Upload File
          </button>
        </div>

        <div className="container mt-5">
          <h2>data</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                id="name"
                type="text"
                className="form-control"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="number" className="form-label">Phone Number</label>
              <input
                id="number"
                type="text"
                className="form-control"
                value={formData.number}
                onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                placeholder="Phone Number"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                id="email"
                type="email"
                className="form-control"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Email"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <input
                id="address"
                type="text"
                className="form-control"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Address"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="skills" className="form-label">Skills</label>
              <input
                id="skills"
                type="text"
                className="form-control"
                value={formData.skills}
                onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                placeholder="Skills"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="linkedInLink" className="form-label">LinkedIn URL</label>
              <input
                id="linkedInLink"
                type="url"
                className="form-control"
                value={formData.linkedInLink}
                onChange={(e) => setFormData({ ...formData, linkedInLink: e.target.value })}
                placeholder="LinkedIn URL"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="github" className="form-label">GitHub URL</label>
              <input
                id="github"
                type="url"
                className="form-control"
                value={formData.github}
                onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                placeholder="GitHub URL"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="experience" className="form-label">Experience</label>
              <textarea
                id="experience"
                className="form-control"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                placeholder="Experience"
                rows="4"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="experienceYear" className="form-label">Experience (Years)</label>
              <input
                id="experienceYear"
                type="number"
                className="form-control"
                value={formData.experienceYear}
                onChange={(e) => setFormData({ ...formData, experienceYear: e.target.value })}
                placeholder="Experience Years"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="experienceCompany" className="form-label">Experience (Company)</label>
              <input
                id="experienceCompany"
                type="text"
                className="form-control"
                value={formData.experienceCompany}
                onChange={(e) => setFormData({ ...formData, experienceCompany: e.target.value })}
                placeholder="Company"
              />
            </div>
          </form>
        </div>
      </Spin>
    </div>
  );
};

export default FileUpload;
