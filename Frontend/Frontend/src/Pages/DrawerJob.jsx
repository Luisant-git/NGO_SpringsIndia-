// DrawerJob.jsx
import React from 'react';
import { Typography, Grid, Box, Chip, Stack, Link, Divider } from '@mui/material';
import { Drawer } from 'antd';
import {
  FaClipboardList,
  FaDollarSign,
  FaMapMarkerAlt,
  FaFileContract,
  FaBriefcase,
  FaUserGraduate,
  FaStar,
  FaUsers,
  FaBarcode,
  FaInfoCircle,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaPinterest,
  FaInstagram,
  FaGlobe,
  FaGraduationCap,
  FaBuilding,
  FaSuitcase,
  FaTimesCircle,
} from 'react-icons/fa'; // Icons

function DrawerJob({ closeJobDetailsDrawer, isJobDetailsDrawerOpen, selectedJob }) {
  return (
    <Drawer
      title="Job Details"
      placement="right"
      onClose={closeJobDetailsDrawer}
      open={isJobDetailsDrawerOpen}
      width={650}
    >
      {selectedJob ? (
        <Box sx={{ padding: 2 }}>
          {/* General Information Section */}
          <Box sx={{ marginBottom: 3 }}>
            <Box display="flex" alignItems="center" mb={1}>
              <FaBriefcase size={20} color="#1976d2" style={{ marginRight: 8 }} />
              <Typography variant="h6">General Information</Typography>
            </Box>
            <Grid container spacing={1}>
              {/* Job Title */}
              <Grid item xs={12}>
                <Typography variant="subtitle1">
                  <small><strong>Title:</strong> {selectedJob.title}</small>
                </Typography>
              </Grid>
              {/* Company */}
              <Grid item xs={12}>
                <Typography variant="subtitle1">
                  <small><strong>Company:</strong> {selectedJob.company}</small>
                </Typography>
              </Grid>
              {/* Location */}
              <Grid item xs={12}>
                <Typography variant="subtitle1" display="flex" alignItems="center">
                  <FaMapMarkerAlt style={{ marginRight: 8 }} />
                  <small><strong>Location:</strong> {selectedJob.location}</small>
                </Typography>
              </Grid>
              {/* Posted Date */}
              <Grid item xs={12}>
                <Typography variant="subtitle1">
                  <small><strong>Posted On:</strong> {selectedJob.postedDate}</small>
                </Typography>
              </Grid>
              {/* Job Code */}
              <Grid item xs={12}>
                <Typography variant="subtitle1">
                  <small><strong>Job Code:</strong> {selectedJob.jobCode}</small>
                </Typography>
              </Grid>
              {/* Status */}
              <Grid item xs={12}>
                <Typography variant="subtitle1" display="flex" alignItems="center">
                  <FaInfoCircle style={{ marginRight: 8 }} />
                  <small><strong>Status:</strong> {selectedJob.status}</small>
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Divider />

          {/* Compensation Section */}
          <Box sx={{ marginY: 3 }}>
            <Box display="flex" alignItems="center" mb={1}>
              <FaDollarSign size={20} color="#388e3c" style={{ marginRight: 8 }} />
              <Typography variant="h6">Compensation</Typography>
            </Box>
            <Grid container spacing={1}>
              {/* Salary Range */}
              <Grid item xs={12}>
                <Typography variant="subtitle1">
                  <small><strong>Salary Range:</strong> {selectedJob.salaryRange}</small>
                </Typography>
              </Grid>
              {/* Hourly Commission */}
              <Grid item xs={12}>
                <Typography variant="subtitle1">
                  <small><strong>Hourly Commission:</strong> {selectedJob.hourlyCommission}</small>
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Divider />

          {/* Employment Details Section */}
          <Box sx={{ marginY: 3 }}>
            <Box display="flex" alignItems="center" mb={1}>
              <FaFileContract size={20} color="#ff9800" style={{ marginRight: 8 }} />
              <Typography variant="h6">Employment Details</Typography>
            </Box>
            <Grid container spacing={1}>
              {/* Contract Type */}
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" display="flex" alignItems="center">
                  <FaFileContract style={{ marginRight: 8 }} />
                  <small><strong>Contract Type:</strong> {selectedJob.contractType}</small>
                </Typography>
              </Grid>
              {/* Employment Type */}
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" display="flex" alignItems="center">
                  <FaBriefcase style={{ marginRight: 8 }} />
                  <small><strong>Employment Type:</strong> {selectedJob.employeeType}</small>
                </Typography>
              </Grid>
              {/* Full-time Status */}
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1">
                  <small><strong>Full-time:</strong> {selectedJob.fulltime ? 'Yes' : 'No'}</small>
                </Typography>
              </Grid>
              {/* Relocation Assistance */}
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1">
                  <small><strong>Relocation Assistance:</strong> {selectedJob.relocationAssistance ? 'Yes' : 'No'}</small>
                </Typography>
              </Grid>
              {/* Positions Available */}
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" display="flex" alignItems="center">
                  <FaUsers style={{ marginRight: 8 }} />
                  <small><strong>Positions Available:</strong> {selectedJob.positionsAvailable}</small>
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Divider />

          {/* Qualifications Section */}
          <Box sx={{ marginY: 3 }}>
            <Box display="flex" alignItems="center" mb={1}>
              <FaUserGraduate size={20} color="#9c27b0" style={{ marginRight: 8 }} />
              <small>
                  <Typography variant="h6">Qualifications</Typography>
              </small>
            </Box>
            <Grid container spacing={1}>
              {/* Qualification */}
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1">
                  <small><strong>Qualification:</strong> {selectedJob.qualification}</small>
                </Typography>
              </Grid>
              {/* Experience */}
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" display="flex" alignItems="center">
                  <FaStar style={{ marginRight: 8 }} />
                  <small><strong>Experience:</strong> {selectedJob.experience} years</small>
                </Typography>
              </Grid>
            </Grid>
          </Box>


          {/* Skills Section */}
          <Box sx={{ marginY: 3 }}>
            <Box display="flex" alignItems="center" mb={1}>
              <FaSuitcase size={20} color="#ff5722" style={{ marginRight: 8 }} />
              <Typography variant="h6"><small>Skills Required</small></Typography>
            </Box>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {Array.isArray(selectedJob.skills) && selectedJob.skills.length > 0 ? (
                selectedJob.skills.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    color="primary"
                    size="small"
                    sx={{
                      marginBottom: 1,
                      backgroundColor: '#e3f2fd',
                      color: '#1976d2',
                    }}
                  />
                ))
              ) : (
                <Typography variant="body2">No skills listed.</Typography>
              )}
            </Stack>
          </Box>


          {/* Social Media Links Section */}
          <Box sx={{ marginY: 3 }}>
            <Box display="flex" alignItems="center" mb={1}>
              
              <Typography variant="h6">Social Media Links</Typography>
            </Box>
            <Stack direction="row" spacing={2} flexWrap="wrap">
              {selectedJob.industryLinkedIn && (
                <Link
                  href={selectedJob.industryLinkedIn}
                  target="_blank"
                  rel="noopener"
                  aria-label="LinkedIn"
                  sx={{ transition: 'transform 0.2s' }}
                >
                  <FaLinkedin
                    size={24}
                    color="#0A66C2"
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </Link>
              )}
              {selectedJob.industryTwitter && (
                <Link
                  href={selectedJob.industryTwitter}
                  target="_blank"
                  rel="noopener"
                  aria-label="Twitter"
                  sx={{ transition: 'transform 0.2s' }}
                >
                  <FaTwitter
                    size={24}
                    color="#1DA1F2"
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </Link>
              )}
              {selectedJob.industryFacebook && (
                <Link
                  href={selectedJob.industryFacebook}
                  target="_blank"
                  rel="noopener"
                  aria-label="Facebook"
                  sx={{ transition: 'transform 0.2s' }}
                >
                  <FaFacebook
                    size={24}
                    color="#1877F2"
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </Link>
              )}
              {selectedJob.industryPinterest && (
                <Link
                  href={selectedJob.industryPinterest}
                  target="_blank"
                  rel="noopener"
                  aria-label="Pinterest"
                  sx={{ transition: 'transform 0.2s' }}
                >
                  <FaPinterest
                    size={24}
                    color="#BD081C"
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </Link>
              )}
              {selectedJob.industryInstagram && (
                <Link
                  href={selectedJob.industryInstagram}
                  target="_blank"
                  rel="noopener"
                  aria-label="Instagram"
                  sx={{ transition: 'transform 0.2s' }}
                >
                  <FaInstagram
                    size={24}
                    color="#C13584"
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </Link>
              )}
              {selectedJob.industryWebSite && (
                <Link
                  href={selectedJob.industryWebSite}
                  target="_blank"
                  rel="noopener"
                  aria-label="Website"
                  sx={{ transition: 'transform 0.2s' }}
                >
                  <FaGlobe
                    size={24}
                    color="#4CAF50"
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </Link>
              )}
            </Stack>
          </Box>

   
          <Divider />

          {/* Statistics Section */}
          <Box sx={{ marginY: 3 }}>
            <Box display="flex" alignItems="center" mb={1}>
             
              <Typography variant="h6">Statistics</Typography>
            </Box>
            <Grid container spacing={2}>
              {/* Total Submissions */}
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: 1,
                    backgroundColor: '#fce4ec',
                    borderRadius: 1,
                  }}
                >
                  <FaClipboardList size={24} color="#d81b60" style={{ marginRight: 8 }} />
                  <Box>
                    <Typography variant="subtitle2" color="textSecondary">
                      Total Submissions
                    </Typography>
                    <Typography variant="h6" color="textPrimary">
                      {selectedJob.totalSubmissions}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              {/* Candidates Interviewed */}
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: 1,
                    backgroundColor: '#e8f5e9',
                    borderRadius: 1,
                  }}
                >
                  <FaUsers size={24} color="#2e7d32" style={{ marginRight: 8 }} />
                  <Box>
                    <Typography variant="subtitle2" color="textSecondary">
                       Interviewed
                    </Typography>
                    <Typography variant="h6" color="textPrimary">
                      {selectedJob.candidatesInterviewed}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              {/* Candidates Rejected */}
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: 1,
                    backgroundColor: '#fff3e0',
                    borderRadius: 1,
                  }}
                >
                  <FaTimesCircle size={24} color="#ef6c00" style={{ marginRight: 8 }} />
                  <Box>
                    <Typography variant="subtitle2" color="textSecondary">
                       Rejected
                    </Typography>
                    <Typography variant="h6" color="textPrimary">
                      {selectedJob.candidatesRejected}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      ) : (
        <Typography>No job details available.</Typography>
      )}
    </Drawer>
  );
}

export default DrawerJob;
