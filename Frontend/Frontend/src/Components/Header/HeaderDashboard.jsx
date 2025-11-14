import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { JobContext } from '../../Context/JobContext';
import { Avatar, Menu, MenuItem, IconButton } from '@mui/material';
import { FiEdit, FiLogOut } from 'react-icons/fi'; // Importing icons from react-icons
import './nav.css';
import { jwtDecode } from 'jwt-decode';
import logo from './logo.png'
import EditFree from './EditFree';

const HeaderDashboard = () => {
  const { handleOpenForm, isSticky, handleOpen } = useContext(JobContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [data, setData] = useState(null); // Store role and other token data
  const [role, setRole] = useState(null); // Store user role
  const [drawerVisible, setDrawerVisible] = useState(false); // State for Drawer visibility
  const handleDrawerOpen = () => {
    setDrawerVisible(true);
  };

  const handleDrawerClose = () => {
    setDrawerVisible(false);
  };
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setData(decodedToken); // Set decoded token data
        setRole(decodedToken.role); // Extract and set the user role
      } catch (error) {
        console.error('Invalid token:', error);
      }
    } else {
      console.error('No token found in localStorage');
    }
  }, []);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget); // Opens the dropdown
  };

  const handleClose = () => {
    setAnchorEl(null); // Closes the dropdown
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  const [activeItem, setActiveItem] = useState(sessionStorage.getItem('activeItem') || '/dashboard');

  const handleMenuClick = (path) => {
    setActiveItem(path);
    sessionStorage.setItem('activeItem', path);
  };
  return (
    <header>
      <div
        className={`jm-header-area header-sticky bg-white ${isSticky ? 'sticky' : ''}`}
      >
        <div className="container border-bottom">
          <div className="jm-header-main jm-header-padding bg-white">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-3 col-7">
                <div className="jm-header-logo">
                  <Link className="jm-logo" to="/">
                    <img
                      src={logo}
               
                      alt="Logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block">
                <div className="jm-header-main-menu text-center">
                  <nav className="jm-mobile-menu" id="jm-mobile-menu">
                    <ul>
                      {role === 'FREELANCER' && ( // Render if role is admin
                        <li>
                          <Link
                            to="/dashboard"
                           onClick={() => handleMenuClick('/dashboard')}
                            className={
                              activeItem === '/dashboard' ? 'active' : ''
                            }
                          >
                            <>
                              <small>My Applications</small>
                            </>
                          </Link>
                        </li>
                      )}
                      {role === 'FREELANCER' && ( // Render if role is admin
                        <li>
                          <Link
                            to="/dashboard/candidates"
                           onClick={() => handleMenuClick('/candidates')}
                            className={
                              activeItem === '/candidates' ? 'active' : ''
                            }
                          >
                            <>
                              <small>My Candidates</small>
                            </>
                          </Link>
                        </li>
                      )}
                      {role === 'FREELANCER' && ( // Render if role is admin
                        <li>
                          <Link
                            to="/dashboard/marketplace"
                            onClick={() =>
                              handleMenuClick('/dashboard/marketplace')
                            }
                            className={
                              activeItem === '/dashboard/marketplace'
                                ? 'active'
                                : ''
                            }
                          >
                            <>
                              <small>MarketPlace</small>
                            </>
                          </Link>
                        </li>
                      )}

                      {role === 'FREELANCER' && ( // Render if role is admin
                        <li>
                          <Link
                            to="/dashboard/savedjobs"
                            onClick={() =>
                              handleMenuClick('/dashboard/savedjobs')
                            }
                            className={
                              activeItem === '/dashboard/savedjobs'
                                ? 'active'
                                : ''
                            }
                          >
                            <>
                              <small>My Saved Jobs (4)</small>
                            </>
                          </Link>
                        </li>
                      )}
                      {role === 'ADMIN' && ( // Render if role is admin
                        <li>
                          <Link
                            to="/dashboard/requestcandidates"
                            onClick={() =>
                              handleMenuClick('/dashboard/requestcandidates')
                            }
                            className={
                              activeItem === '/dashboard/requestcandidates'
                                ? 'active'
                                : ''
                            }
                          >
                            <>
                              <small>Candidates Request (4)</small>
                            </>
                          </Link>
                        </li>
                      )}

                      {role === 'ADMIN' && ( // Render if role is admin
                        <li>
                          <Link
                            to="/dashboard/showjobs"
                            onClick={() => handleMenuClick('/dashboard/showjobs')}
                            className={
                              activeItem === '/dashboard/showjobs'
                                ? 'active'
                                : ''
                            }
                          >
                            <>
                              <small>All Candidates</small>
                            </>
                          </Link>
                        </li>
                      )}
                      {role === 'ADMIN' && ( // Render if role is admin
                        <li>
                          <Link
                            to="/dashboard/applications"
                            onClick={() =>
                              handleMenuClick('/dashboard/applications')
                            }
                            className={
                              activeItem === '/dashboard/applications'
                                ? 'active'
                                : ''
                            }
                          >
                            <>
                              <small>Applications </small>
                            </>
                          </Link>
                        </li>
                      )}
                      {role === 'ADMIN' && ( // Render if role is admin
                        <li>
                          <Link
                            to="/dashboard/showfreelancer"
                            onClick={() =>
                              handleMenuClick('/dashboard/showfreelancer')
                            }
                            className={
                              activeItem === '/dashboard/showfreelancer'
                                ? 'active'
                                : ''
                            }
                          >
                            <><small>Added Freelancer</small></>
                          </Link>
                        </li>
                      )}
                      {/* {role === 'ADMIN' && ( // Render if role is admin
                        <li className="menu-has-children">
                          <Link to="/dashboard/addjobs">
                            <><small>Add</small></>
                          </Link>
                          <ul className="sub-menu">
                            <li>
                              <Link to="/dashboard/addjobs">Add Jobs</Link>
                            </li>
                        
                          </ul>
                        </li>
                      )} */}
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-5">
                <div className="jm-header-right text-end d-flex align-items-center justify-content-end">
                  <span
                    className="jm-search d-none d-lg-block jm-header-action-search me-3"
                    role="button"
                    onClick={handleOpenForm}
                  >
                    <i className="fal fa-search"></i>
                  </span>

                  {/* Profile Icon with MUI Dropdown */}
                  <IconButton
                    onClick={handleProfileClick}
                    style={{ padding: 0 }}
                  >
                    <Avatar
                      alt="Profile"
                      src="https://example.com/profile-image.png"
                      style={{ width: '35px', height: '35px' }}
                    />
                  </IconButton>

                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.16))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        '&:before': {
                          content: '""',
                          display: 'block',
                          position: 'absolute',
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: 'background.paper',
                          transform: 'translateY(-50%) rotate(45deg)',
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                  >
                    <MenuItem onClick={() => { handleDrawerOpen(); handleClose(); }}>
                      <FiEdit style={{ marginRight: '8px' }} />
                      <span
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        Edit Profile
                      </span>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <div onClick={handleLogout}>
                        <FiLogOut style={{ marginRight: '8px' }} />
                        <span
                          style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                          Logout
                        </span>
                      </div>
                    </MenuItem>
                  </Menu>

                  {role === 'ADMIN' && ( // Render if role is admin
                    <Link className="jm-theme-btn d-none d-lg-block">
                      ADMIN
                    </Link>
                  )}
                  {role === 'FREELANCER' && ( // Render if role is admin
                    <Link className="jm-theme-btn d-none d-lg-block">
                      Freelancer
                    </Link>
                  )}

                  <div
                    className="jm-navbar-mobile-sign side-toggle d-lg-none d-inline-block"
                    role="button"
                    onClick={handleOpen}
                  >
                    <span className="dr-line-1"></span>
                    <span className="dr-line-2"></span>
                    <span className="dr-line-3"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EditFree handleDrawerClose={handleDrawerClose} drawerVisible={drawerVisible} userId={data?.sub}/>

    </header>
  );
};

export default HeaderDashboard;
