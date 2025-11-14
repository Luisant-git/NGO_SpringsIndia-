import React, { useState, useEffect } from 'react';
import { TextField, Box, FormControlLabel } from '@mui/material';
import { Drawer, Spin } from 'antd';
import { Checkbox, Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify'; // Import Toastify

function DrawerAddCandidates({ isCandidateDrawerOpen, closeCandidateDrawer,selectedJob}){
  const [candidatesData, setCandidatesData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCandidates, setSelectedCandidates] = useState([]); 
 
  
  useEffect(() => {
    fetchCandidatesData();
  }, []);

  useEffect(() => {
    filterCandidates();
  }, [searchQuery, candidatesData]);

  const fetchCandidatesData = async () => {
    try {
      const candidatesResponse = await fetch(`${import.meta.env.VITE_FOS_CLIENT_API}/auth/candidates`);
      const candidatesData = await candidatesResponse.json();

      const myCandidatesResponse = await fetch(`${import.meta.env.VITE_FOS_CLIENT_API}/mycandidates`);
      const myCandidatesData = await myCandidatesResponse.json();

      // Extract `candidateId`s from `myCandidates` to create a Set for fast lookup
      const myCandidateIds = new Set(myCandidatesData.map((item) => item.candidateId));

      // Filter `candidatesData` to include only entries whose `id` matches any `candidateId` in `myCandidates`
      const filteredCandidates = candidatesData.data.filter((candidate) =>
        myCandidateIds.has(candidate.Email),
      );

      setCandidatesData(filteredCandidates);
      setFilteredData(filteredCandidates);

      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filterCandidates = () => {
    const searchTerm = searchQuery.toLowerCase();
    const filtered = candidatesData.filter(
      (candidate) =>
        candidate.Full_Name?.toLowerCase().includes(searchTerm) ||
        candidate.Email?.toLowerCase().includes(searchTerm) ||
        candidate.Candidate_ID?.toLowerCase().includes(searchTerm) ||
        candidate.Current_Job_Title?.toLowerCase().includes(searchTerm),
    );
    setFilteredData(filtered);
  };

  const handleCandidateSelect = (candidateId) => {
    setSelectedCandidates((prevSelected) => {
      if (prevSelected.includes(candidateId)) {
        return prevSelected.filter((id) => id !== candidateId); // Deselect candidate
      }
      return [...prevSelected, candidateId]; // Select candidate
    });
  };

  const handleCreateClick = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_FOS_CLIENT_API}/auth/candidates/actions/associate`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            data: [
              {
                jobids: [selectedJob.job_id], // Selected job ID (wrap it in an array)
                ids: selectedCandidates,  // Selected candidate IDs (array of candidate IDs)
                comments: 'Record successfully associated', // You can customize the comment here
              },
            ],
          }),
        },
      );

      const data = await response.json();
      console.log('Association response:', data);
      
      // Show success toast
      toast.success('Candidates successfully applied for the job!');
      
      // Close the drawer
      closeDrawer();

    } catch (error) {
      console.error('Error associating candidates:', error);
      // Show error toast
      toast.error('Error applying candidates. Please try again.');
    }
  };

  const spinnerColor = 'green'; // Change this to your desired color

  return (
    <>
      <Drawer
        title="Apply for Job"
        placement="right"
        onClose={closeCandidateDrawer}
        visible={isCandidateDrawerOpen}
        width={650}
      >
        <div className="container">
          <Box
            sx={{
              marginBottom: 2,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <TextField
              label="Search"
              variant="outlined"
              value={searchQuery}
              onChange={handleSearchChange}
              size="small"
              sx={{ maxWidth: 400 }} // Set a max width for the search input
            />

            {selectedCandidates.length > 0 && (
              <Button
                className="btn btn-success"
                onClick={handleCreateClick}
              >
                Apply
              </Button>
            )}
          </Box>

          {loading ? (
            <div className="text-center mt-5">
              <Spin style={{ color: 'green' }} size="large" />
              <style>
                {`
                  .ant-spin .ant-spin-dot i {
                    background-color: ${spinnerColor} !important;
                  }
                `}
              </style>
            </div>
          ) : (
            <div>
              <List>
                {filteredData.map((candidate) => (
                  <ListItem
                    key={candidate.id}
                    sx={{
                      border: selectedCandidates.includes(candidate.id)
                        ? '2px solid #4caf50'  // Green border for selected
                        : '1px solid #ddd', // Default border
                      borderRadius: '8px',
                      marginBottom: '8px',
                      padding: '10px',
                      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                      backgroundColor: selectedCandidates.includes(candidate.id)
                        ? '#e8f5e9' // Light green background for selected
                        : '#f9f9f9', // Default background
                      transition: 'transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease',
                      '&:hover': {
                        backgroundColor: selectedCandidates.includes(candidate.id)
                          ? '#e8f5e9' // Keep the green background when hovering over selected item
                          : '#f0f0f0', // Hover effect for non-selected items
                        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
                      },
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar sx={{ width: 48, height: 48 }} src={candidate.AvatarUrl || ''} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <span style={{ fontWeight: 'bold', color: '#333' }}>
                          {candidate.Full_Name}
                        </span>
                      }
                      secondary={
                        <span style={{ color: '#555' }}>
                          {candidate.Email}
                        </span>
                      }
                    />
                    <Checkbox
                      checked={selectedCandidates.includes(candidate.id)}
                      onChange={() => handleCandidateSelect(candidate.id)}
                      sx={{
                        color: selectedCandidates.includes(candidate.id)
                          ? '#4caf50' // Green color for checked checkbox
                          : '#555', // Default checkbox color
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </div>
          )}
        </div>
      </Drawer>

      {/* Toast Container for showing notifications */}
      <ToastContainer />
    </>
  );
}

export default DrawerAddCandidates;
