import React, { useState, useEffect, useCallback } from 'react';
import { TextField, Box } from '@mui/material';
import { jwtDecode } from "jwt-decode";


import { Table, Drawer, Pagination, Spin, message } from 'antd';
import { Button } from 'react-bootstrap';
import AddCandidates from './AddCandidates';
import { FaDownload, FaEye } from 'react-icons/fa';

import debounce from 'lodash/debounce';


function Candidates() {
  const [candidatesData, setCandidatesData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(7);
  const [totalCandidates, setTotalCandidates] = useState(0);
  const [openAddDrawer, setOpenAddDrawer] = useState(false);
  const [freelancerId, setFreelancerId] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setFreelancerId(decodedToken.sub);
      } catch (error) {
        console.error('Invalid token:', error);
      }
    }
  }, []);

  useEffect(() => {
    if (freelancerId) fetchCandidatesData();
  }, [freelancerId]);

  const fetchCandidatesData = useCallback(async () => {
    setLoading(true);
    try {
      const [candidatesResponse, myCandidatesResponse] = await Promise.all([
        fetch(`${import.meta.env.VITE_FOS_CLIENT_API}/auth/candidates`),
        fetch(`${import.meta.env.VITE_FOS_CLIENT_API}/mycandidates`)
      ]);

      const candidatesData = await candidatesResponse.json();
      const myCandidatesData = await myCandidatesResponse.json();

      const filteredMyCandidates = myCandidatesData.filter(
        (candidate) => candidate.freelancerId === freelancerId
      );

      const myCandidateIds = new Set(
        filteredMyCandidates.map((item) => item.candidateId)
      );

      const filteredCandidates = candidatesData.data.filter((candidate) =>
        myCandidateIds.has(candidate.Email)
      );

      setCandidatesData(filteredCandidates);
      setFilteredData(filteredCandidates);
      setTotalCandidates(filteredCandidates.length);
    } catch (error) {
      console.error('Error fetching data:', error);
      message.error('Failed to load candidate data');
    } finally {
      setLoading(false);
    }
  }, [freelancerId]);

  const handleSearchChange = debounce((value) => {
    setSearchQuery(value);
    const lowercasedFilter = value.toLowerCase();
    const filtered = candidatesData.filter(
      (candidate) =>
        candidate.Full_Name?.toLowerCase().includes(lowercasedFilter) ||
        candidate.Email?.toLowerCase().includes(lowercasedFilter) ||
        candidate.Candidate_ID?.toLowerCase().includes(lowercasedFilter) ||
        candidate.Current_Job_Title?.toLowerCase().includes(lowercasedFilter)
    );
    setFilteredData(filtered);
    setTotalCandidates(filtered.length);
    setCurrentPage(1); // Reset to first page on new search
  }, 300); // Debounce delay for search input

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const openCandidateDetails = (candidate) => {
    setSelectedCandidate(candidate);
    setOpenDrawer(true);
  };

  const downloadResume = (candidateId) => {
    const resumeUrl = `${import.meta.env.VITE_FOS_CLIENT_API}/auth/${candidateId}/download-resume`;
    window.open(resumeUrl, '_blank');
  };

  const viewResume = (candidateId) => {
    const viewUrl = `${import.meta.env.VITE_FOS_CLIENT_API}/auth/${candidateId}/download-resume`;
    window.open(viewUrl, '_blank');
  };

  const columns = [
    { title: 'Name', dataIndex: 'Full_Name', key: 'Full_Name' },
    { title: 'Email', dataIndex: 'Email', key: 'Email' },
    { title: 'ID', dataIndex: 'Candidate_ID', key: 'Candidate_ID' },
    {
      title: 'Current Job Title',
      dataIndex: 'Current_Job_Title',
      key: 'Current_Job_Title',
    },
    {
      title: 'Resume',
      key: 'resume',
      render: (text, record) => (
        <>
          <Button
            variant="link"
            onClick={() => downloadResume(record.id)}
            className="ms-2 text-success"
          >
            <FaDownload /> Download
          </Button>
          <Button
            variant="link"
            onClick={() => viewResume(record.id)}
            className="ms-2 text-primary"
          >
            <FaEye /> View
          </Button>
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Button
          className="btn btn-sm btn-success"
          onClick={() => openCandidateDetails(record)}
        >
          View Details
        </Button>
      ),
    },
  ];

  const currentData = filteredData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="container mt-4">
      <Box sx={{ marginBottom: 2, display: 'flex', justifyContent: 'space-between' }}>
        <TextField
          label="Search"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          size="small"
          sx={{ maxWidth: 400 }}
        />
        <Button onClick={() => setOpenAddDrawer(true)} className="btn-success ms-2">
          Add Candidates
        </Button>
      </Box>

      {loading ? (
        <div className="text-center mt-5">
          <Spin style={{ color: 'green' }} size="large" />
        </div>
      ) : (
        <>
          <Table
            dataSource={currentData}
            columns={columns}
            rowKey="Candidate_ID"
            pagination={false}
            components={{
              header: {
                cell: (props) => (
                  <th
                    {...props}
                    style={{ backgroundColor: '#E8F5E9', color: 'black' }}
                  >
                    {props.children}
                  </th>
                ),
              },
            }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
            <Pagination
              current={currentPage}
              total={totalCandidates}
              pageSize={pageSize}
              onChange={handlePageChange}
              showSizeChanger={false}
              className="mb-3"
            />
          </Box>
        </>
      )}

      <Drawer
        title="Candidate Details"
        width={500}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        {selectedCandidate ? (
          <div>
            <p><strong>Name:</strong> {selectedCandidate.Full_Name}</p>
            <p><strong>Email:</strong> {selectedCandidate.Email}</p>
            <p><strong>Phone:</strong> {selectedCandidate.Mobile}</p>
            <p><strong>Current Job Title:</strong> {selectedCandidate.Current_Job_Title}</p>
            <p><strong>Experience:</strong> {selectedCandidate.Experience_in_Years} years</p>
            <p><strong>Location:</strong> {selectedCandidate.City}, {selectedCandidate.State}</p>
            <p><strong>LinkedIn:</strong> <a href={selectedCandidate.LinkedIn__s} target="_blank" rel="noopener noreferrer">{selectedCandidate.LinkedIn__s}</a></p>
            <Button variant="link" onClick={() => downloadResume(selectedCandidate.id)} className="mt-2">
              <FaDownload /> Download Resume
            </Button>
          </div>
        ) : (
          <p>No details available</p>
        )}
      </Drawer>

      <Drawer
        title="Add Candidate"
        width={650}
        open={openAddDrawer}
        onClose={() => setOpenAddDrawer(false)}
      >
        <AddCandidates />
      </Drawer>
    </div>
  );
}

export default Candidates;
