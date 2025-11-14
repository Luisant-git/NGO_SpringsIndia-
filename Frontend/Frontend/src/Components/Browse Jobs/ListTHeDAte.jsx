import React, { useEffect, useState } from 'react'; // Only import React and hooks here
import { Box, Button, Chip, Tab, Tabs, Snackbar } from '@mui/material'; // Import Snackbar for displaying messages

import { FaBriefcase, FaIdBadge, FaInfoCircle, FaStar, FaUser } from 'react-icons/fa';
import DrawerJob from './DrawerJob'; // Drawer for 'View Details'
import ApplyDrawer from './ApplyDrawer'; // New Drawer for 'Apply'
import axios from 'axios'; // Import axios for HTTP requests
import { jwtDecode } from 'jwt-decode';


function ListTHeDAte({ job }) {
  const [selectedJob, setSelectedJob] = useState(null);
  const [visibleDetailDrawer, setVisibleDetailDrawer] = useState(false);
  const [visibleApplyDrawer, setVisibleApplyDrawer] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const [successMessage, setSuccessMessage] = useState(''); // State for success message
  const [snackbarOpen, setSnackbarOpen] = useState(false); // State to control Snackbar visibility
console.log(job);
const [data, setData] = React.useState(null); // Store role and other token data

useEffect(() => {
  const token = localStorage.getItem('token');

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      setData(decodedToken?.sub); // Set decoded token data
    } catch (error) {
      console.error('Invalid token:', error);
    }
  } else {
    console.error('No token found in localStorage');
  }
}, []);

console.log(data);
  // Show the detail drawer for 'View Details'
  const showDetailDrawer = (job) => {
    setSelectedJob(job);
    setVisibleDetailDrawer(true);
  };

  // Show the apply drawer for 'Apply'
  const showApplyDrawer = (job) => {
    setSelectedJob(job);
    setVisibleApplyDrawer(true);
  };

  // Close the detail drawer
  const closeDetailDrawer = () => {
    setVisibleDetailDrawer(false);
  };

  // Close the apply drawer
  const closeApplyDrawer = () => {
    setVisibleApplyDrawer(false);
  };

  const maxLength = 250; // Maximum length of the truncated text

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };


  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_FOS_CLIENT_API}/saved-at`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching saved jobs:', error);
      });
  }, []);


  // Function to save job data
  const handlesave = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_FOS_CLIENT_API}/saved-at`, {
        Job_id: job?.Job_Opening_ID, // Assuming the job ID is to be used
        freelancerId:data,
        data: job, // Send the selected job data
      });

      // Set success message and show snackbar
      setSuccessMessage('Job saved successfully!');
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Error saving job:', error);
       setSuccessMessage('Already Saved');
      setSnackbarOpen(true);
    }
  };

  // Function to truncate the description
  const truncateDescription = (description) => {
    if (description?.length > maxLength) {
      return description?.slice(0, maxLength) + '...';
    }
    return description;
  };

  // Handle snackbar close
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div>
      <div className="job-card w-100">
        <div className="job-header">
          <div className="job-icon">
            <img
              // className="w-100 fs-1"
              style={{width:'100px',height:'80px'}}
              src="https://www.svgrepo.com/show/490660/company.svg"
              alt="Job Icon"
            />
          </div>
          <div className="job-info">
            <div>
              <h3>{job?.Posting_Title}</h3>
            </div>

            <p>
              <i className="fas fa-map-marker-alt me-2"></i>
              {job?.City} . {job?.State} .{job?.Zip_Code}
            </p>
            <p>
              <i className="fas fa-dollar-sign me-2"></i>
              Salary: {job?.$currency_symbol} {job?.Commission}
            </p>
          </div>
          <div className="col-md-3">
            <p className="small">
              <div>
                Total Position: <span>{job?.Number_of_Positions}</span>
              </div>
              <div>{job?.Industry}</div>
              {new Date(job?.Target_Date).toLocaleString()}
            </p>
          </div>
          <div className="col-md-3">
            <p className="">
              <span className="rounded px-2 p-1 bg-light text-success">
                <FaInfoCircle style={{ marginRight: 8, color: '#607D8B' }} />
                {job?.Job_Opening_Status}
              </span>
            </p>
          </div>
          <div className="save-job">
            <button onClick={handlesave}>
              <i className="far fa-bookmark"></i>
            </button>
          </div>
        </div>

        <div className="job-description px-3">
          {truncateDescription(job?.Job_Description)}
        </div>
        <div className="row mt-4 px-3">
          <div className="col-md-3">
            <p className="">
              <small className="job-description">Required Skills : {' '}</small>
              <Chip
                label={job?.Required_Skills}
                color="primary"
                size="small"
                icon={<FaStar size={12} />}
                sx={{
                  marginBottom: 1,
                  backgroundColor: '#F1F7F4',
                  color: '#006064',
                }}
              />
            </p>
          </div>
          <div className="col-md-3">
            <p className="">
              <small className="job-description">
                <FaUser style={{ marginRight: 8 }} />
                Account Manager: {job?.Account_Manager?.name}
              </small>
            </p>
          </div>
          <div className="col-md-3">
            <p className="">
              <small className="job-description">
                <FaIdBadge style={{ marginRight: 8 }} />
                Job ID: {job?.Job_Opening_ID}
              </small>
            </p>
          </div>
          <div className="col-md-3">
            <p className="">
              <small className="job-description">
                <FaBriefcase style={{ marginRight: 8 }} />
                Work Experience: {job?.Work_Experience}
              </small>
            </p>
          </div>
        </div>
        <div className="job-footer mb-2">
          <div className="client-info">
            <span className="verified-client">
              <i className="fas fa-check-circle"></i> Verified Client
            </span>
            <span className={`job-type ${job?.Job_Type === 'Contract' ? 'Full time' : 'parttime'}`}>
              {job?.Job_Type}
            </span>

            <Button type="link" className="ms-1" style={{ textTransform: 'capitalize' }} onClick={() => showDetailDrawer(job)}>
              View Details
            </Button>
          </div>

          <button className="apply-btn" onClick={() => showApplyDrawer(job)}>
            APPLY
          </button>
        </div>
      </div>

      {/* Detail Drawer */}
      <DrawerJob
        selectedJob={selectedJob}
        closeDrawer={closeDetailDrawer}
        handleTabChange={handleTabChange}
        tabIndex={tabIndex}
        visible={visibleDetailDrawer}
      />

      {/* Apply Drawer */}
      <ApplyDrawer
        selectedJob={selectedJob}
        closeDrawer={closeApplyDrawer}
        visible={visibleApplyDrawer}
      />

      {/* Snackbar for success message */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
        message={successMessage}
      />
    </div>
  );
}

export default ListTHeDAte;
