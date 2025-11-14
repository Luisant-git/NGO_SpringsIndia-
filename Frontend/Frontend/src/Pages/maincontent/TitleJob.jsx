import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { FaClipboardList, FaDollarSign, FaMapMarkerAlt } from 'react-icons/fa'

function TitleJob({selectedJob,openCandidateDrawer,openJobDetailsDrawer}) {
  return (
    <div>
         <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: 2,
                }}
              >
                <Typography variant="h5" gutterBottom>
                  {selectedJob.title}
                </Typography>

                <Box>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={openCandidateDrawer}
                  >
                    Apply
                  </Button>
                  <Button
                    variant="outlined"
                    color="success"
                    size="small"
                    sx={{ marginLeft: 2 }}
                    onClick={openJobDetailsDrawer}
                  >
                    View Job Details
                  </Button>
                </Box>
              </Box>

              {/* Company and Location */}
              <Typography variant="subtitle1" gutterBottom>
                {selectedJob.company}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  columnGap: 5,
                  marginTop: 2,
                }}
              >
                <Typography variant="body1" display="flex" alignItems="center">
                  <FaMapMarkerAlt size={16} style={{ marginRight: 8 }} />
                  <small><span>Location:</span> {selectedJob.location}</small>
                </Typography>

                <Typography variant="body1" display="flex" alignItems="center">
                  <FaDollarSign size={16} style={{ marginRight: 8 }} />
                  <small><span>Salary:</span> {selectedJob.salaryRange}</small>
                </Typography>
                <Typography variant="body1" display="flex" alignItems="center">
                  <FaClipboardList size={16} style={{ marginRight: 8 }} />
                  <small>
                      <span>Estimated Commission:</span>{' '}
                      {selectedJob.hourlyCommission}
                  </small>
                </Typography>
              </Box> 
    </div>
  )
}

export default TitleJob