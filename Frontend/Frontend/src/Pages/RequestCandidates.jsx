import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Modal,
  TablePagination,
} from '@mui/material';
import { Button } from 'react-bootstrap';
import {  Spin } from 'antd';   

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: '80%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  overflow: 'auto',
};

function RequestCandidates() {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [currentDoc, setCurrentDoc] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_FOS_CLIENT_API}/job-seekers`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCandidates(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCandidates();
  }, []);

  const handleOpen = (docPath) => {
    setCurrentDoc(docPath);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentDoc('');
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };



  // Inside your component
  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <Spin style={{ color: 'green' }} size="large" />
      </div>
    );
  }
  

  if (error) {
    return <Typography variant="h6" color="error">Error: {error}</Typography>;
  }

  return (
    <div className='container mt-3'>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className='text-success'>Name</TableCell>
              <TableCell className='text-success'>Contact</TableCell>
              <TableCell className='text-success'>Email</TableCell>
              <TableCell className='text-success'>Job ID</TableCell>
              <TableCell className='text-success'>Resume</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {candidates
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((candidate) => (
                <TableRow key={candidate.id}>
                  <TableCell>{candidate.name}</TableCell>
                  <TableCell>{candidate.contact}</TableCell>
                  <TableCell>{candidate.email}</TableCell>
                  <TableCell>{candidate.job_Id}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      className='btn btn-sm btn-outline-success'
                      onClick={() => handleOpen(candidate.resumeDocPath)}
                    >
                      View
                    </Button>
                    <Button
                      className='btn btn-sm btn-success'
                      style={{ marginLeft: '8px' }}
                      href={candidate.resumeDocPath}
                      download
                    >
                      Download
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={candidates.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      <Modal open={open} onClose={handleClose}>
        <div style={style}>
          {currentDoc.endsWith('.pdf') ? (
            <iframe
              src={currentDoc}
              style={{ width: '100%', height: '100%' }}
              title="Document Preview"
              frameBorder="0"
            />
          ) : (
            <Typography variant="h6">Document preview not available for this format.</Typography>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default RequestCandidates;
