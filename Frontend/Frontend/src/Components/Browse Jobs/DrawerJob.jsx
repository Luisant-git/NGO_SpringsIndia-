import { Box, Tab, Tabs } from '@mui/material'
import { Drawer, Image } from 'antd'
import React from 'react'

function DrawerJob({handleTabChange,closeDrawer,selectedJob,visible ,tabIndex }) {
  return (
    <div>
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
              <p><strong>Location:</strong> {selectedJob?.Client_Name.name}</p>
              <p><strong>Commission:</strong> {selectedJob?.$currency_symbol}{selectedJob.Commission}</p>
              <p><strong>Account Manager:</strong> {selectedJob?.Account_Manager.name}</p>
              <p><strong>Required Skills:</strong> {selectedJob?.Required_Skills}</p>
              <p><strong>Job Description:</strong> {selectedJob?.Job_Description}</p>
              <p><strong>Job Opening Status:</strong> {selectedJob?.Job_Opening_Status}</p>
              <p><strong>Date Opened:</strong> {new Date(selectedJob?.Date_Opened).toLocaleDateString()}</p>
            </Box>

            <Box hidden={tabIndex !== 1} p={2}>
              <Image
                width={200}
                src="https://www.svgrepo.com/show/490660/company.svg"
                alt="Company Logo"
              />
              <p><strong>Company Name:</strong> {selectedJob?.Client_Name?.name}</p>
              <p><strong>Company Location:</strong> {selectedJob?.City}, {selectedJob?.State}</p>
              <p><strong>Contact Person:</strong> {selectedJob?.Contact_Name?.name || 'N/A'}</p>
              <p><strong>Industry:</strong> {selectedJob?.Industry || 'N/A'}</p>
            </Box>
          </div>
        )}
      </Drawer>
    </div>
  )
}

export default DrawerJob