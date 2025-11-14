import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Drawer,
  Form,
  Spin,
  Pagination,
  Input,
  Badge,
  Modal,
  message,
} from 'antd';
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Stack,
  Avatar,
  Box,
} from '@mui/material';
// import { Badge, Tooltip } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../../store/Freelancerslice';
import DrawerAdd from './DrawerAdd';
import EditProfile from './EditProfile';
import axios from 'axios';

const JobSearchList = () => {
  const [visible, setVisible] = useState(false);
  const [candidateData, setCandidateData] = useState(null);
  const [formVisible, setFormVisible] = useState(false);
  const [form] = Form.useForm();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [searchQuery, setSearchQuery] = useState(''); // Search query state
  const dispatch = useDispatch();
  const [openedit, setOpedit] = useState(false);

  const onclickeditopen = (candidateData) => {
    setOpedit(true);
    setCandidateData(candidateData);
  };
  const onclickeditclose = () => setOpedit(false);

  // Select data from the Redux store
  const { items, loading, error, refresh } = useSelector(
    (state) => state.freelancer,
  );

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch, refresh]);

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  if (error) {
    return <p style={{ textAlign: 'center' }}>Error: {error}</p>;
  }

  // Function to show the candidate profile drawer
  const showDrawer = (candidate) => {
    setCandidateData(candidate);
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const showFormDrawer = () => {
    setFormVisible(true);
  };

  const closeFormDrawer = () => {
    setFormVisible(false);
  };

  const handleSubmit = (values) => {
    console.log('Form Submitted:', values);
    closeFormDrawer();
  };

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  // Filter items based on search query
  const filteredItems = items.filter(
    (candidate) =>
      candidate.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.contact.includes(searchQuery),
  );

  // Paginate the filtered items
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );
  const onDelete = (candidate) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this candidate?',
      content: 'This action cannot be undone.',
      okText: 'Yes, Delete',
      cancelText: 'No, Cancel',
      onOk: async () => {
        try {
          await axios.delete(
            `${import.meta.env.VITE_FOS_CLIENT_API}/auth/delete/${candidate.id}`,
          );
          message.success('Candidate deleted successfully!');
          dispatch(fetchItems()); // Refresh the data
        } catch (error) {
          message.error('Error deleting candidate. Please try again.');
        }
      },
    });
  };

  const onDeactivate = async (candidate) => {
    const newStatus = !candidate.active;
    Modal.confirm({
      title: `Are you sure you want to ${newStatus ? 'activate' : 'deactivate'} this candidate?`,
      content: `This will change their status to ${newStatus ? 'Active' : 'Inactive'}.`,
      okText: `Yes, ${newStatus ? 'Activate' : 'Deactivate'}`,
      cancelText: 'No, Cancel',
      onOk: async () => {
        try {
          await axios.put(
            `${import.meta.env.VITE_FOS_CLIENT_API}/auth/update/${candidate.id}`,
           
            {
              active: newStatus,
            },
          );
          message.success(
            `Candidate ${newStatus ? 'activated' : 'deactivated'} successfully!`,
          );
          dispatch(fetchItems()); // Refresh the data
        } catch (error) {
          message.error(`Error updating status. Please try again.`);
        }
      },
    });
  };

  return (
    <div className="jm-jobs-search-under-hero">
      <div className="container">
        <div className="jm-candidates-item-wrapper mt-2 pb-100">
          <div className="text-end p-2">
            <button
              className="btn btn-sm btn-outline-success text-end"
              onClick={showFormDrawer}
            >
              Add +
            </button>
          </div>

          {/* Search input */}
          <div style={{ marginBottom: '20px', textAlign: 'start' }}>
            <Input
              placeholder="Search by email or phone number"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: '300px' }}
            />
          </div>

          <div
            style={{ overflowX: 'auto' }}
            className="row bg-white rounded  container"
          >
            {paginatedItems.map((candidate) => (
              <div className="col-xl-12" key={candidate.id}>
                <div className="jm-latest-job-layout-3 jm-candidate-layout-list">
                  <div className="jm-latest-job-layout-3-wrapper">
                    <div className="jm-latest-job-layout-3-img">
                      <Link>
                        <img
                          src="https://cdn-icons-png.freepik.com/512/17740/17740782.png?ga=GA1.1.852988304.1732155881"
                          alt="img"
                        />
                      </Link>
                    </div>
                    <div className="jm-latest-job-layout-3-info">
                      <span className="jm-candidate-list-designation">
                        {candidate?.designation}
                      </span>
                      <h4 className="jm-latest-job-layout-3-info-title">
                        <Link>{candidate?.name}</Link>{' '}
                        <span className="jm-candidate-rating">
                          {candidate?.active ? (
                            <Badge color="green" text="Active" />
                          ) : (
                            <Badge color="red" text="Inactive" />
                          )}
                        </span>
                      </h4>
                      <div className="jm-latest-job-layout-3-info-meta">
                        <span>
                          <i className="fa-thin fa-phone"></i>{' '}
                          {candidate?.contact}
                        </span>
                        <span>
                          {candidate?.gender === 'Female' && (
                            <i className="fa-thin fa-female fs-5"></i>
                          )}
                          {candidate?.gender === 'Male' && (
                            <i className="fa-thin fa-male fs-5"></i>
                          )}
                          {candidate?.gender}
                        </span>

                        <span>
                          <i className="fa-thin fa-envelope"></i>{' '}
                          {candidate.email}
                        </span>
                      </div>
                    </div>
                    {/* <div
                      onClick={() => showDrawer(candidate)}
                      className="jm-latest-job-layout-3-submit"
                    >
                      View Profile
                    </div> */}
                    <div
                      onClick={() => onclickeditopen(candidate)}
                      className="jm-latest-job-layout-3-submit ms-1"
                    >
                      Update
                    </div>
                    <div
                      onClick={() => onDelete(candidate)}
                      className="btn btn-outline-danger ms-2 btn-sm"
                    >
                      Delete
                    </div>
                    <div
                      onClick={() => onDeactivate(candidate)}
                      className={`btn ms-2 btn-sm ${
                        candidate.active
                          ? 'btn-outline-success'
                          : 'btn-outline-primary'
                      }`}
                    >
                      {candidate.active ? 'Deactivate' : 'Activate'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={filteredItems.length}
            onChange={handlePageChange}
            showSizeChanger
          />
        </div>
      </div>

      <Drawer
        title={candidateData ? candidateData.name : 'Profile'}
        placement="right"
        onClose={onClose}
        visible={visible}
        width={500}
      >
        {candidateData && (
          <Card
            sx={{
              margin: 'auto',
              borderRadius: 3,
              boxShadow: 3,
              padding: 3,
              textAlign: 'center',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
              <Avatar
                alt="Profile Picture"
                // src={dummyProfile}
                sx={{ width: 150, height: 150, border: '2px solid green' }}
              />
            </Box>

            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                {candidateData.name || ''}
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                <strong>Contact:</strong> {candidateData.contact || ''}
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                <strong>Location:</strong> {candidateData.location || ''}
              </Typography>
              {/* <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                <strong>Rating:</strong>{' '}
                <Badge
                  count={candidateData.rating || 4.5}
                  style={{ backgroundColor: '#fadb14' }}
                />
              </Typography> */}
              <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                <strong>Email:</strong> {candidateData.email || ''}
              </Typography>

              <Stack
                direction="row"
                justifyContent="center"
                spacing={2}
                sx={{ marginTop: 2 }}
              >
                {/* <Tooltip title="Edit Profile">
                  <button className="btn btn-success" size="middle">
                    Edit
                  </button>
                </Tooltip> */}
                {/* <Tooltip title="Deactivate Profile">
                  <button className="btn btn-danger" size="middle">
                    Deactivate
                  </button>
                </Tooltip> */}
              </Stack>
            </CardContent>
          </Card>
        )}
      </Drawer>

      <DrawerAdd
        closeFormDrawer={closeFormDrawer}
        formVisible={formVisible}
        referesh={refresh}
      />
      <EditProfile
        openedit={openedit}
        closeedit={onclickeditclose}
        referesh={refresh}
        candidateData={candidateData}
      />
    </div>
  );
};

export default JobSearchList;
