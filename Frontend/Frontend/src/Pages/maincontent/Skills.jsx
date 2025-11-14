import { Box, Chip, Stack, Typography } from '@mui/material'
import React from 'react'
import { FaStar } from 'react-icons/fa'

function Skills({selectedJob}) {
  return (
    <div> <Box sx={{ marginBottom: 2 }}>
    <Typography variant="subtitle2" gutterBottom>
      <strong>Skills Required:</strong>
    </Typography>
    <Stack direction="row" spacing={1} flexWrap="wrap">
      {Array.isArray(selectedJob.skills) &&
      selectedJob.skills.length > 0 ? (
        selectedJob.skills.map((skill, index) => (
          <Chip
            key={index}
            label={skill}
            color="primary"
            size="small"
            icon={<FaStar size={12} />}
            sx={{
              marginBottom: 1,
              backgroundColor: '#e0f7fa',
              color: '#006064',
            }}
          />
        ))
      ) : (
        <Typography variant="body2">No skills listed.</Typography>
      )}
    </Stack>
  </Box></div>
  )
}

export default Skills