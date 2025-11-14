import React, { useEffect, useState } from "react";
import { Tabs, Tab, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function Applications() {
  const [statusTab, setStatusTab] = useState(0);
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleStatusTabChange = (event, newValue) => {
    setStatusTab(newValue);
  };

  useEffect(() => {
    // Fetch candidates from the API
    axios.get(`${import.meta.env.VITE_FOS_CLIENT_API}/auth/application`)
      .then(response => {
        const data = response.data.data;
        setCandidates(data); // Set candidates data
        setLoading(false); // Stop loading
      })
      .catch(error => {
        console.error("Error fetching candidates:", error);
        setLoading(false); // Stop loading on error
      });
  }, []);

  // Filter candidates by pipeline
  const filterCandidatesByPipeline = (pipeline) => {
    return candidates?.filter(candidate => candidate?.Hiring_Pipeline === pipeline);
  };

  // Custom theme with green combination
  const theme = createTheme({
    palette: {
      primary: {
        main: "#4caf50", // Green color
      },
    },
  });

  return (
    <div  className="container mt-3 h-100 p-3">
      <ThemeProvider theme={theme}>
        <Box sx={{ width: "100%" }} className="border">
          {/* Status Tabs */}
          <Box sx={{ borderBottom: 1, borderColor: "divider", marginBottom: 2, backgroundColor: "#F1F7F4" }}>
            <Tabs
              value={statusTab}
              onChange={handleStatusTabChange}
              aria-label="status-tabs"
              textColor="primary"
              indicatorColor="primary"
              className="bg-light"
            >
              <Tab sx={{ fontWeight: 'bold', textTransform: "none" }} label={`Screening (${filterCandidatesByPipeline("Screening")?.length})`} />
              <Tab sx={{ fontWeight: 'bold', textTransform: "none" }} label={`Interview (${filterCandidatesByPipeline("Interview")?.length})`} />
              <Tab sx={{ fontWeight: 'bold', textTransform: "none" }} label={`Offer Sent (${filterCandidatesByPipeline("Offer Sent")?.length})`} />
              <Tab sx={{ fontWeight: 'bold', textTransform: "none" }} label={`Hired (${filterCandidatesByPipeline("Hired")?.length})`} />
              <Tab sx={{ fontWeight: 'bold', textTransform: "none" }} label={`Rejected (${filterCandidatesByPipeline("Rejected")?.length})`} />
            </Tabs>
          </Box>

          {/* Render Tab Panels */}
          {["Screening", "Interview", "Offer Sent", "Hired", "Rejected"].map((pipeline, index) => (
            <TabPanel value={statusTab} index={index} key={index}>
              {loading ? (
                <Typography>Loading...</Typography>
              ) : filterCandidatesByPipeline(pipeline).length === 0 ? (
                <Typography>No records found</Typography>
              ) : (
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Candidate Name</TableCell>
                        <TableCell>Client Name</TableCell>
                        <TableCell>Submitted Position</TableCell>
                        <TableCell>Account Manager</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Date Submitted</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filterCandidatesByPipeline(pipeline).map((candidate) => (
                        <TableRow key={candidate.id}>
                          <TableCell>{candidate?.Full_Name}</TableCell>
                          <TableCell>{candidate?.Client_Name?.name}</TableCell>
                          <TableCell>{candidate?.Posting_Title}</TableCell>
                          <TableCell>{candidate?.Account_Manager?.name}</TableCell>
                          <TableCell>{candidate?.Hiring_Pipeline}</TableCell>
                          <TableCell>{new Date(candidate?.Created_Time).toLocaleDateString()}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </TabPanel>
          ))}
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default Applications;
