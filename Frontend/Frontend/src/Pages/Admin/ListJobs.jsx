// src/Pages/Admin/ListJobs.jsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, Button, Image, Spin, Alert } from 'antd';
import { Box, Tab, Tabs } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../../store/JobSlice'; // Ensure correct path

const ListJobs = () => {
  // State for Drawer visibility and selected job
  const [visible, setVisible] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [tabIndex, setTabIndex] = useState(0);

  const dispatch = useDispatch();

  // Select data from the Redux store
  const { items, loading, error } = useSelector((state) => state.items);
  console.log('Fetched Items:', items);

  // Fetch items when the component is mounted
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  // Handle Drawer visibility
  const showDrawer = (job) => {
    setSelectedJob(job);
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  // Handle Tab changes in Drawer
  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  // Render loading state
  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spin size="large" />
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="text-center mt-5">
        <Alert message="Error" description={error} type="error" showIcon />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        {items && items.length > 0 ? (
          items.map((job) => (
            <div className="col-12 mb-4" key={job.id}>
              <div className="card shadow-sm p-3">
                {/* Top Section: Job Title, Edit & Delete Buttons */}
                <div className="mb-3 d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img
                      className="border p-1 me-3"
                      style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                      src={job.image && job.image.length > 0 ? job.image[0] : 'https://via.placeholder.com/40'}
                      alt="Job Icon"
                    />
                    <h5 className="fw-bold mb-0">
                      <Link
                        to={`/jobDetailsPage/${job.id}`}
                        className="text-decoration-none text-dark"
                      >
                        {job.title}{' '}
                        <span className={`badge ${job.status === 'ACTIVE' ? 'bg-success' : 'bg-secondary'} ms-2`}>
                          {job.status === 'ACTIVE' ? 'Open' : 'Closed'}
                        </span>{' '}
                        <span className="badge bg-secondary">
                          {job.fulltime || 'Full Time'}
                        </span>
                      </Link>
                    </h5>
                  </div>
                  <div>
                    <button className="btn btn-success btn-sm me-2">Edit</button>
                    <button className="btn btn-outline-danger btn-sm">Delete</button>
                  </div>
                </div>

                {/* Job Location, Salary, Relocation Assistance */}
                <div className="row mb-3">
                  <div className="col-md-4">
                    <p className="mb-1">
                      <i className="fas fa-map-marker-alt me-2"></i>
                      {job.location}
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p className="mb-1">
                      <i className="fas fa-dollar-sign me-2"></i>
                      Salary: ${job.salaryMin} - ${job.salaryMax}/year
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p className="mb-1">
                      <i className="fas fa-hand-holding-usd me-2"></i>
                      Relocation Assistance: {job.relocationAssistance ? 'Yes' : 'No'}
                    </p>
                  </div>
                </div>

                {/* Additional Job Details */}
                <div className="row mb-3">
                  <div className="col-md-4">
                    <p className="mb-1 small">
                      <strong>Account Manager:</strong> {job.accountManager || 'N/A'}
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p className="mb-1 small">
                      <strong>Date Posted:</strong> {new Date(job.postedDate).toLocaleString()}
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p className="mb-1 small">
                      <strong>Job Code:</strong> {job.jobCode || 'N/A'}
                    </p>
                  </div>
                </div>

                {/* Other Info (Submissions, Candidates, Relocation) */}
                <div className="row mb-3">
                  <div className="col-md-4">
                    <p className="mb-1 small">
                      <strong>Total Submissions:</strong> {job.totalSubmissions || 0}
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p className="mb-1 small">
                      <strong>Candidates Interviewed:</strong> {job.candidatesInterviewed || 0}
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p className="mb-1 small">
                      <strong>Relocation Assistance:</strong> {job.relocationAssistance ? 'Yes' : 'No'}
                    </p>
                  </div>
                </div>

                {/* View Details Button */}
                <div className="text-end">
                  <Button type="link" onClick={() => showDrawer(job)}>
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <Alert message="No jobs available." type="info" showIcon />
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="row">
        <div className="col-12">
          <div className="jm-pagination mb-40 mt-10 text-center">
            {/* Update pagination logic as needed */}
            <Link to="#" className="jm-pagination-btn">
              <i className="fa fa-arrow-left"></i>
            </Link>
            <Link to="#" className="jm-pagination-btn active">1</Link>
            <Link to="#" className="jm-pagination-btn">2</Link>
            <Link to="#" className="jm-pagination-btn">
              <i className="fa fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Job Details Drawer */}
      <Drawer
        title={selectedJob?.title}
        placement="right"
        onClose={closeDrawer}
        open={visible} // Updated prop
        width={600}
      >
        {selectedJob && (
          <div>
            <Tabs
              value={tabIndex}
              onChange={handleTabChange}
              TabIndicatorProps={{
                style: {
                  backgroundColor: 'green', // Indicator color
                },
              }}
              sx={{
                '& .MuiTab-root': { color: 'green' }, // Tab text color
                '& .Mui-selected': { color: 'green' }, // Selected tab color
              }}
              variant="fullWidth"
            >
              <Tab label="Job Details" />
              <Tab label="Company Info" />
              <Tab label="Other Info" />
            </Tabs>

            {/* Job Details Tab */}
            <Box hidden={tabIndex !== 0} p={2}>
              <p>
                <strong>Location:</strong> {selectedJob.location}
              </p>
              <p>
                <strong>Salary:</strong> ${selectedJob.salaryMin} - ${selectedJob.salaryMax}/year
              </p>
              <p>
                <strong>Relocation Assistance:</strong> {selectedJob.relocationAssistance ? 'Yes' : 'No'}
              </p>
              <p>
                <strong>Total Submissions:</strong> {selectedJob.totalSubmissions || 0}
              </p>
              <p>
                <strong>Candidates Interviewed:</strong> {selectedJob.candidatesInterviewed || 0}
              </p>
              <p>
                <strong>Relocation Assistance:</strong> {selectedJob.relocationAssistance ? 'Yes' : 'No'}
              </p>
            </Box>

            {/* Company Info Tab */}
            <Box hidden={tabIndex !== 1} p={2}>
              <Image
                width={200}
                src={selectedJob.image && selectedJob.image.length > 0 ? selectedJob.image[0] : 'https://via.placeholder.com/200'}
                alt="Company Logo"
              />
              <p>
                <strong>Company:</strong> {/* Assuming you have companyName in job data */}
                {selectedJob.companyName || 'Not available'}
              </p>
              <p>
                <strong>Website:</strong> {/* Assuming you have companyWebsite in job data */}
                {selectedJob.industryWebSite || 'Not available'}
              </p>
              {/* Add more company-related fields as necessary */}
            </Box>

            {/* Other Info Tab */}
            <Box hidden={tabIndex !== 2} p={2}>
              <p>
                <strong>Posted on:</strong> {new Date(selectedJob.postedDate).toLocaleDateString()}
              </p>
              <p>
                <strong>Job Type:</strong> {selectedJob.fulltime || 'Full-time'}
              </p>
              <p>
                <strong>Job Description:</strong> {selectedJob.description || 'No description available'}
              </p>
              <p>
                <strong>Qualifications:</strong> {selectedJob.qualification || 'N/A'}
              </p>
              <p>
                <strong>Skills Required:</strong> {selectedJob.skills || 'N/A'}
              </p>
              <p>
                <strong>Experience:</strong> {selectedJob.experiance || 'N/A'}
              </p>
              {/* Add more fields as necessary */}
            </Box>
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default ListJobs;
