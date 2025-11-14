import React, { useState } from 'react';
import { FaFileAlt, FaTimes, FaUpload } from 'react-icons/fa'; // Importing the file icon
import './DocumentSelectForm.css'; // Importing CSS for styling

const ResumeUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      console.log('File submitted:', selectedFile.name);
      alert('Resume uploaded successfully!');
      setSelectedFile(null); // Reset the file input
    } else {
      alert('Please select a resume to upload.');
    }
  };

  const handleCancel = () => {
    setSelectedFile(null); // Remove the selected file
  };

  return (
    <div className="resume-upload">
      <form onSubmit={handleSubmit}>
        <div className="file-upload">
        <small style={{color:'#555'}}>Only PDF, DOC, or DOCX files are allowed.</small> {/* Instruction text */}
          <input
            type="file"
            accept=".pdf,.doc,.docx" // Accept specific file types
            onChange={handleFileChange}
            className="file-input"
            id="file-upload"
          />
          <label htmlFor="file-upload" className="file-label">  
            {selectedFile ? (
              <div className="file-info">
                <FaFileAlt className="file-icon" />
                <span>{selectedFile.name}</span>
                <button type="button" className="btn" onClick={handleCancel}>
                <FaTimes className="cancel-icon" /> {/* Cancel icon here */}
                </button>
              </div>
            ) : (
                <div className="upload-info">
                <div>
                    <FaUpload color='green' className='fs-4' />
                </div>
                <span>Choose a file...</span>
              </div>
            )}
          </label>
        </div>
      </form>
    </div>
  );
};

export default ResumeUpload;
