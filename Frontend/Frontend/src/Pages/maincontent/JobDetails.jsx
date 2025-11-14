import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { FaBarcode, FaBriefcase, FaFileContract, FaInfoCircle, FaStar, FaUserGraduate, FaUsers } from 'react-icons/fa'

function JobDetails({selectedJob}) {
  return (
    <div>
              <Box
                sx={{
                  padding: 2,
                }}
              >
                <Grid container spacing={2}>
                  {/* Left Column */}
                  <Grid item xs={12} md={6}>
                    {/* Contract Type */}
                    <Typography variant="subtitle2" gutterBottom>
                      <Box display="flex" alignItems="center">
                        <FaFileContract
                          style={{ marginRight: 8, color: '#4CAF50' }}
                        />
                        <span className='text-success'>Contract Type : </span>{' '}
                        {selectedJob.contractType}
                      </Box>
                    </Typography>

                    {/* Employment Type */}
                    {/* <Typography variant="subtitle2" gutterBottom>
                      <Box display="flex" alignItems="center">
                        <FaBriefcase
                          style={{ marginRight: 8, color: '#2196F3' }}
                        />
                        <span className='text-success'>Employment Type  :</span>{' '}
                        {selectedJob.employeeType}
                      </Box>
                    </Typography> */}

                    {/* Position */}
                    <Typography variant="subtitle2" gutterBottom>
                      <Box display="flex" alignItems="center">
                        <FaUserGraduate
                          style={{ marginRight: 8, color: '#FF9800' }}
                        />
                        <span className='text-success'>Position :</span> {selectedJob.position}
                      </Box>
                    </Typography>

                    {/* Posted Date */}
                    <Typography variant="subtitle2" gutterBottom>
                      <Box display="flex" alignItems="center">
                        <FaInfoCircle
                          style={{ marginRight: 8, color: '#607D8B' }}
                        />
                        <span className='text-success'>Posted On :</span> {selectedJob.postedDate}
                      </Box>
                    </Typography>
                  </Grid>

                  {/* Right Column */}
                  <Grid item xs={12} md={6}>
                    {/* Qualification */}
                    <Typography variant="subtitle2" gutterBottom>
                      <Box display="flex" alignItems="center">
                        <FaUserGraduate
                          style={{ marginRight: 8, color: '#FF9800' }}
                        />
                        <span className='text-success'>Qualification :</span>{' '}
                        {selectedJob.qualification}
                      </Box>
                    </Typography>

                    {/* Experience */}
                    <Typography variant="subtitle2" gutterBottom>
                      <Box display="flex" alignItems="center">
                        <FaStar style={{ marginRight: 8, color: '#9C27B0' }} />
                        <span className='text-success'>Experience :</span> {selectedJob.experience}{' '}
                        years
                      </Box>
                    </Typography>

                    {/* Positions Available */}
                    <Typography variant="subtitle2" gutterBottom>
                      <Box display="flex" alignItems="center">
                        <FaUsers style={{ marginRight: 8, color: '#E91E63' }} />
                        <span className='text-success'>Positions Available :</span>{' '}
                        {selectedJob.positionsAvailable}
                      </Box>
                    </Typography>

                    {/* Job Code */}
                    {/* <Typography variant="subtitle2" gutterBottom>
                      <Box display="flex" alignItems="center">
                        <FaBarcode
                          style={{ marginRight: 8, color: '#795548' }}
                        />
                        <span className='text-success'>Job Code :</span> {selectedJob.jobCode}
                      </Box>
                    </Typography> */}
                  </Grid>
                </Grid>
              </Box>
    </div>
  )
}

export default JobDetails