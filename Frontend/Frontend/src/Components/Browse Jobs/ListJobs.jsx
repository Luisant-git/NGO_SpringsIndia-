import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, Button, Image, Spin, Alert } from 'antd';
import { Box, Tab, Tabs } from '@mui/material';
import { useDispatch } from 'react-redux';

const ListJobs = () => {
  const [visible, setVisible] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [tabIndex, setTabIndex] = useState(0);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_FOS_CLIENT_API}/auth/data`);
        const result = await response.json();
        setJobs(result.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch jobs.');
        setLoading(false);
      }
    };

    fetchJobs();
  }, [dispatch]);

  const showDrawer = (job) => {
    setSelectedJob(job);
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spin size="large" />
      </div>
    );
  }

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
        {jobs && jobs?.length > 0 ? (
          jobs?.map((job) => (
            <div className="col-12 mb-4" key={job?.id}>
              <div className="card shadow-sm p-3">
                <div className="mb-3 d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <h5 className="fw-bold mb-0">
                      <Link
                        to={`/jobDetailsPage/${job.Client_Name.id}`}
                        className="text-decoration-none text-dark"
                      >
                        {job?.Posting_Title}{' '}
                        <span className={`badge badge-sm bg-success ms-2`}>
                          {job?.Job_Opening_Status}
                        </span>
                        <span className="badge bg-secondary ms-2">
                          {job?.Job_Type}
                        </span>
                      </Link>
                    </h5>
                  </div>
                  <div>
                    <button className='btn btn-outline-success'>
                      Save Job
                    </button>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-4">
                    <p className="mb-1">
                      <i className="fas fa-map-marker-alt me-2"></i>
                      {job?.Client_Name?.name}
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p className="mb-1">
                      <i className="fas fa-dollar-sign me-2"></i>
                      Salary: {job?.$currency_symbol}{job?.Commission}
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p className="mb-1">
                      <i className="fas fa-hand-holding-usd me-2"></i>
                      Relocation Assistance: {job?.Relocation_Assistance ? "Yes" : "No"}
                    </p>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-4">
                    <p className="mb-1 small">
                      <strong>Account Manager:</strong> {job.Account_Manager.name || 'N/A'}
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p className="mb-1 small">
                      <strong>Date Posted:</strong> {new Date(job.Target_Date).toLocaleString()}
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p className="mb-1 small">
                      <strong>Work Experience:</strong> {job.Work_Experience}
                    </p>
                  </div>
                </div>

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

      <Drawer
        title={selectedJob?.Posting_Title}
        placement="right"
        onClose={closeDrawer}
        open={visible}
        width={600}
      >
        {selectedJob && (
          <div>
            <Tabs
              value={tabIndex}
              onChange={handleTabChange}
              TabIndicatorProps={{
                style: { backgroundColor: 'green' },
              }}
              sx={{
                '& .MuiTab-root': { color: 'green' },
                '& .Mui-selected': { color: 'green' },
              }}
              variant="fullWidth"
            >
              <Tab label="Job Details" />
              <Tab label="Company Info" />
            </Tabs>

            <Box hidden={tabIndex !== 0} p={2}>
              <p><strong>Location:</strong> {selectedJob.Client_Name.name}</p>
              <p><strong>Commission:</strong> {selectedJob.$currency_symbol}{selectedJob.Commission}</p>
              <p><strong>Account Manager:</strong> {selectedJob.Account_Manager.name}</p>
              <p><strong>Required Skills:</strong> {selectedJob.Required_Skills}</p>
              <p><strong>Job Description:</strong> {selectedJob.Job_Description}</p>
              <p><strong>Job Opening Status:</strong> {selectedJob.Job_Opening_Status}</p>
              <p><strong>Date Opened:</strong> {new Date(selectedJob.Date_Opened).toLocaleDateString()}</p>
            </Box>

            <Box hidden={tabIndex !== 1} p={2}>
              <Image
                width={200}
                src="https://via.placeholder.com/200"
                alt="Company Logo"
              />
              <p><strong>Company Name:</strong> {selectedJob.Client_Name.name}</p>
              <p><strong>Company Location:</strong> {selectedJob.City}, {selectedJob.State}</p>
              <p><strong>Contact Person:</strong> {selectedJob.Contact_Name.name || 'N/A'}</p>
              <p><strong>Industry:</strong> {selectedJob.Industry || 'N/A'}</p>
            </Box>
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default ListJobs;
