import React, { useState, useEffect } from 'react';
import {
  Tabs,
  Tab,
  Box,
  Typography,
  Card,
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
  CircularProgress,

} from '@mui/material';
import { FaClipboardList, FaUserFriends, FaTimesCircle } from 'react-icons/fa'; // Icons
import axios from 'axios'; // Axios for HTTP requests
import DrawerJob from './DrawerJob';
import DrawerAddCandidates from './DrawerAddCandidates';
import JobDetails from './maincontent/JobDetails';
import Skills from './maincontent/Skills';
import SocialMedia from './maincontent/SocialMedia';
import TitleJob from './maincontent/TitleJob';
import { Alert } from 'antd';
import { jwtDecode } from "jwt-decode";

// Tab Panel Component
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ padding: 3 }}>{children}</Box>}
    </div>
  );
};

const JobDashboard = () => {
  const [nestedTab, setNestedTab] = useState(0);
  const [jobData, setJobData] = useState([]); // Initialize as empty array
  const [selectedJob, setSelectedJob] = useState(null); // Initially no job selected
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
const[data,setData]=useState('')
console.log(data);
console.log(jobData);

  
  // Drawer states
  const [isCandidateDrawerOpen, setIsCandidateDrawerOpen] = useState(false);
  const [isJobDetailsDrawerOpen, setIsJobDetailsDrawerOpen] = useState(false);

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


  useEffect(() => {
    // Fetch saved jobs from the API
    const fetchSavedJobs = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_FOS_CLIENT_API}/saved-at`,
        );
        const savedJobs = response.data;
        console.log(savedJobs);
        
        const filteredJobs = savedJobs?.filter(
          (savedJob) => savedJob?.freelancerId === data
        );
  
  console.log(filteredJobs,"filtere");
  
        // Map API data to match UI structure
        const mappedJobs = filteredJobs.map((savedJob) => ({
          id: savedJob.data.Job_Opening_ID, // Job Opening ID
          job_id:savedJob.data.id,
          title: savedJob.data.Posting_Title, // Job title
          company: savedJob.data.Client_Name?.name || 'N/A', // Client's name (Company name)
          location: `${savedJob.data.City || ''}, ${savedJob.data.State || ''}`.trim(), // Job location
          salaryRange: savedJob.data.Salary || 'N/A', // Salary range
          hourlyCommission: `$${(savedJob.data.Commission / 2080).toFixed(2)}/Hour`, // Hourly commission calculation (assuming 2080 working hours/year)
          contractType: savedJob.data.Job_Type || 'N/A', // Job contract type
          fulltime: savedJob.data.Job_Type === 'Full time', // Full-time status
          qualification: savedJob.data.Required_Skills || 'N/A', // Qualification needed
          skills: savedJob.data.Required_Skills
            ? savedJob.data.Required_Skills.split(',').map((skill) => skill.trim())
            : [], // Ensure skills is always an array
          experience: savedJob.data.Work_Experience || 'N/A', // Work experience
          position: savedJob.data.Job_Opening_Name || 'N/A', // Job position
          industry: savedJob.data.Industry || 'N/A', // Industry
          postedDate: new Date(savedJob.data.Date_Opened).toLocaleDateString(), // Posted date in a readable format
          relocationAssistance: savedJob.data.Is_Locked || false, // Relocation assistance status
          positionsAvailable: savedJob.data.Number_of_Positions || 'N/A', // Positions available
          jobCode: savedJob.data.Job_Opening_ID || 'N/A', // Job code
          totalSubmissions: savedJob.data.No_of_Candidates_Associated || 0, // Number of submissions
          candidatesInterviewed: savedJob.data.No_of_Candidates_Hired || 0, // Number of candidates hired
          candidatesRejected: savedJob.data.No_of_Candidates_Associated - savedJob.data.No_of_Candidates_Hired || 0, // Number of candidates rejected
          status: savedJob.data.Job_Opening_Status || 'N/A', // Job status
          description: savedJob.data.Job_Description || 'No description provided.', // Job description
        }));
  
        setJobData(mappedJobs);
        setSelectedJob(mappedJobs[0] || null); // Select first job if available
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching saved jobs:', err);
        setError('Failed to load jobs. Please try again later.');
        setIsLoading(false);
      }
    };
  
    fetchSavedJobs();
  }, [data]);
  

  const handleNestedTabChange = (event, newValue) => {
    setNestedTab(newValue);
  };

  const handleJobSelect = (job) => {
    setSelectedJob(job);
    setNestedTab(0); // Reset nested tab
  };

  // Handlers to open and close the drawers
  const openCandidateDrawer = () => setIsCandidateDrawerOpen(true);
  const closeCandidateDrawer = () => setIsCandidateDrawerOpen(false);

  const openJobDetailsDrawer = () => setIsJobDetailsDrawerOpen(true);
  const closeJobDetailsDrawer = () => setIsJobDetailsDrawerOpen(false);

  if (isLoading) {
    return (
      <Box
        sx={{
          flexGrow: 1,
          padding: 4,
          backgroundColor: '#F1F7F4',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress color="success" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          flexGrow: 1,
          padding: 4,
          backgroundColor: '#F1F7F4',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box
      className="container mt-2"
      sx={{
        flexGrow: 1,
        padding: 4,
        backgroundColor: '#F1F7F4',
      }}
    >
      <Grid container spacing={2}>
        {/* Left Sidebar */}
        <Grid item xs={12} md={4} lg={3}>
          <Card
            sx={{
              padding: 2,
              backgroundColor: '#ffffff',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" gutterBottom>
              <small>My Saved Jobs</small> ({jobData.length})
            </Typography>
            <Divider sx={{ marginBottom: 2 }} />
            <List style={{ overflowX: 'auto', height: '550px' }}>
              {jobData.map((job, index) => (
                <React.Fragment key={job.id}>
                  <ListItem
                    button
                    selected={selectedJob?.id === job.id}
                    onClick={() => handleJobSelect(job)}
                    alignItems="flex-start"
                    sx={{
                      mb: 1,
                      backgroundColor:
                        selectedJob?.id === job.id ? '#e0f7fa' : 'transparent',
                      borderRadius: 1,
                      '&:hover': {
                        backgroundColor: '#f1f1f1',
                      },
                    }}
                  >
                    <ListItemText
                      primary={
                        <Typography variant="subtitle1" color="text.primary">
                          {job.title}
                        </Typography>
                      }
                      secondary={
                        <>
                          <Typography variant="body2" color="text.secondary">
                            <span className="small">{job.company}</span>
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            <span className="small">{job.location}</span>
                          </Typography>
                          <Typography variant="body2">
                            {job.salaryRange}
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                  {index < jobData.length - 1 && <Divider component="li" />}
                </React.Fragment>
              ))}
            </List>
          </Card>
        </Grid>
        {/* Main Content */}
        <Grid item xs={12} md={8} lg={9}>
          {selectedJob ? (
            <Card
              sx={{
                padding: 3,
                backgroundColor: '#ffffff',
                borderRadius: 2,
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              }}
            >
              {/* Job Header */}
              <TitleJob
                selectedJob={selectedJob}
                openJobDetailsDrawer={openJobDetailsDrawer}
                openCandidateDrawer={openCandidateDrawer}
              />

              {/* Job Details Grid with Icons */}
              <JobDetails selectedJob={selectedJob} />

              {/* Skills */}

              <Skills selectedJob={selectedJob} />

              {/* Social Media Links */}
              <SocialMedia selectedJob={selectedJob} />

              <Grid container spacing={2} sx={{ marginBottom: 2 }}>
                {/* Total Submissions */}
                <Grid item xs={12} sm={4}>
                  <Card
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: 2,
                      backgroundColor: '#e3f2fd', // Light blue background
                      boxShadow: 3,
                      borderRadius: 2,
                      transition: 'transform 0.2s, box-shadow 0.2s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: 6,
                      },
                    }}
                  >
                    <FaClipboardList
                      size={30}
                      color="#1976d2"
                      style={{ marginRight: 16 }}
                    />
                    <Box>
                      <Typography variant="subtitle2" color="textSecondary">
                        Total Submissions
                      </Typography>
                      <Typography variant="h6" color="textPrimary">
                        {selectedJob.totalSubmissions}
                      </Typography>
                    </Box>
                  </Card>
                </Grid>

                {/* Candidates Interviewed */}
                <Grid item xs={12} sm={4}>
                  <Card
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: 2,
                      backgroundColor: '#e8f5e9', // Light green background
                      boxShadow: 3,
                      borderRadius: 2,
                      transition: 'transform 0.2s, box-shadow 0.2s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: 6,
                      },
                    }}
                  >
                    <FaUserFriends
                      size={30}
                      color="#388e3c"
                      style={{ marginRight: 16 }}
                    />
                    <Box>
                      <Typography variant="subtitle2" color="textSecondary">
                        Candidates Interviewed
                      </Typography>
                      <Typography variant="h6" color="textPrimary">
                        {selectedJob.candidatesInterviewed}
                      </Typography>
                    </Box>
                  </Card>
                </Grid>

                {/* Candidates Rejected */}
                <Grid item xs={12} sm={4}>
                  <Card
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: 2,
                      backgroundColor: '#ffebee', // Light red background
                      boxShadow: 3,
                      borderRadius: 2,
                      transition: 'transform 0.2s, box-shadow 0.2s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: 6,
                      },
                    }}
                  >
                    <FaTimesCircle
                      size={30}
                      color="#d32f2f"
                      style={{ marginRight: 16 }}
                    />
                    <Box>
                      <Typography variant="subtitle2" color="textSecondary">
                        Candidates Rejected
                      </Typography>
                      <Typography variant="h6" color="textPrimary">
                        {selectedJob.candidatesRejected}
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
              </Grid>

              {/* Nested Tabs */}
              <Box
                sx={{ borderBottom: 1, borderColor: 'divider', marginTop: 3 }}
              >
                <Tabs
                  value={nestedTab}
                  onChange={handleNestedTabChange}
                  aria-label="nested tabs"
                >
                  <Tab
                    label={`Your Submissions (${selectedJob.totalSubmissions})`}
                    style={{
                      fontSize: '14px',
                      textTransform: 'capitalize',
                      color: 'green',
                    }}
                  />
                  <Tab
                    style={{
                      fontSize: '14px',
                      textTransform: 'capitalize',
                      color: 'green',
                    }}
                    label={`Your Interviews (${selectedJob.candidatesInterviewed})`}
                  />
                  <Tab
                    style={{
                      fontSize: '14px',
                      textTransform: 'capitalize',
                      color: 'green',
                    }}
                    label="Job Wall"
                  />
                </Tabs>
              </Box>
              <TabPanel value={nestedTab} index={0}>
                {selectedJob.totalSubmissions > 0 ? (
                  <Typography>{`${selectedJob.totalSubmissions} submissions found`}</Typography>
                ) : (
                  <Typography>No submissions found.</Typography>
                )}
              </TabPanel>
              <TabPanel value={nestedTab} index={1}>
                {selectedJob.candidatesInterviewed > 0 ? (
                  <Typography>{`${selectedJob.candidatesInterviewed} interviews scheduled`}</Typography>
                ) : (
                  <Typography>No interviews scheduled.</Typography>
                )}
              </TabPanel>
              <TabPanel value={nestedTab} index={2}>
                <Typography>Job wall content goes here.</Typography>
                {/* You can add more detailed content or components here */}
              </TabPanel>
            </Card>
          ) : (
            <Typography variant="h6">
             <div style={{height:'80vh'}} className="col-12 p-3 py-5 bg-white">
          <Alert message="No Saved jobs available." type="info" showIcon />
        </div>
            </Typography>
          )}
        </Grid>
      </Grid>
      {/* Drawers */}
      <DrawerAddCandidates
        closeCandidateDrawer={closeCandidateDrawer}
        isCandidateDrawerOpen={isCandidateDrawerOpen}
        selectedJob={selectedJob}
      />
      <DrawerJob
        closeJobDetailsDrawer={closeJobDetailsDrawer}
        isJobDetailsDrawerOpen={isJobDetailsDrawerOpen}
        selectedJob={selectedJob}
      />
    </Box>
  );
};

export default JobDashboard;
