import React, { useEffect, useState } from "react";
import { Tabs, Tab, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Spin } from 'antd';
import axios from "axios";
import { jwtDecode } from "jwt-decode";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      style={{ height: '70vh' }}
      className="overflow-auto bg-white"
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

function MyCandidates() {
  const [statusTab, setStatusTab] = useState(0);
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [myCandidates, setMyCandidates] = useState([]);
  const [freelancerId, setFreelancerId] = useState('');
console.log(freelancerId);

  const handleStatusTabChange = (event, newValue) => {
    setStatusTab(newValue);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setFreelancerId(decodedToken?.sub);
      } catch (error) {
        console.error('Invalid token:', error);
      }
    } else {
      console.error('No token found in localStorage');
    }
  }, []);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_FOS_CLIENT_API}/my-application`)
      .then(response => {
        setMyCandidates(response?.data || []);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching my candidates:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_FOS_CLIENT_API}/auth/application`)
      .then(response => {
        setCandidates(response?.data?.data || []);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching candidates:", error);
        setLoading(false);
      });
  }, []);

  // Get candidate IDs from myCandidates that match the freelancerId
  const myCandidateIds = myCandidates
    .filter(item => item?.freelancerId === freelancerId)
    .map(item => item.candidateId);

  // Filter candidates based on myCandidateIds, pipeline stage, and freelancerId
  const filterCandidatesByPipeline = (pipeline) => {
    return candidates?.filter(candidate =>
      candidate?.Hiring_Pipeline === pipeline &&
      myCandidateIds.includes(candidate?.$Candidate_Id)
    );
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#4caf50",
      },
    },
    typography: {
      fontFamily: "Roboto, sans-serif",
    },
  });

  return (
    <div className="container mt-3 h-100 p-5">
      <ThemeProvider theme={theme}>
        <Box sx={{ width: "100%" }} className="border">
          <Box sx={{ borderBottom: 1, borderColor: "divider", marginBottom: 2, backgroundColor: "#FFFFF" }}>
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

          {["Screening", "Interview", "Offer Sent", "Hired", "Rejected"].map((pipeline, index) => (
            <TabPanel value={statusTab} index={index} key={index}>
              {loading ? (
                <Spin tip="Loading..." size="large" />
              ) : filterCandidatesByPipeline(pipeline)?.length === 0 ? (
                <Typography color="textSecondary" variant="subtitle1">No records found</Typography>
              ) : (
                <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
                  <Table aria-label="candidate table">
                    <TableHead>
                      <TableRow sx={{ backgroundColor: "#E8F5E9" }}>
                        <TableCell sx={{ fontWeight: 'bold' }}>Candidate Name</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Client Name</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Submitted Position</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Account Manager</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Date Submitted</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filterCandidatesByPipeline(pipeline)?.map((candidate) => (
                        <TableRow key={candidate.id} sx={{ "&:nth-of-type(odd)": { backgroundColor: "white" } }}>
                          <TableCell>{candidate?.Full_Name || ""}</TableCell>
                          <TableCell>{candidate?.Client_Name?.name || ""}</TableCell>
                          <TableCell>{candidate?.Posting_Title || ""}</TableCell>
                          <TableCell>{candidate?.Account_Manager?.name || ""}</TableCell>
                          <TableCell>{candidate?.Hiring_Pipeline || ""}</TableCell>
                          <TableCell>{new Date(candidate?.Created_Time || "").toLocaleDateString()}</TableCell>
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

export default MyCandidates;
