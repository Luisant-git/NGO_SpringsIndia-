import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { JobContext } from '../../Context/JobContext';
import logo from '../../Components/Header/logo.png';

const Header2 = () => {
  const { handleOpenForm, isSticky, handleOpen } = useContext(JobContext);
  return (
    <header className="heater-transparent">
      <div
        className={`jm-header-area-2 jm_border_bottom jm-header-padding header-sticky ${
          isSticky ? 'sticky' : ''
        }`}
      >
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-xl-3 col-lg-3 col-7">
              <div className="jm-header-logo jm-header-logo-2">
                <Link className="jm-logo" to="/">
                  <img src={logo} className="w-50" alt="Image Not Fouund" />
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block">
              <div className="jm-header-main-menu text-center jm-header-menu-2">
                <nav className="jm-mobile-menu" id="jm-mobile-menu">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                      {/* <ul className="sub-menu">
                                            <li><Link to="/">Home 1</Link></li>
                                            <li><Link to="/homePage2">Home 2</Link></li>
                                        </ul> */}
                    </li>
                    {/* <li className="menu-has-children">
                                        <Link to="/jobListPage">Jobs</Link>
                                        <ul className="sub-menu">
                                            <li><Link to="/jobPage">Jobs Grid</Link></li>
                                            <li><Link to="/jobListPage">Jobs List</Link></li>
                                            <li><Link to="/jobDetailsPage">Job Details</Link></li>
                                            <li><Link to="/jobCategoryPage">Jobs By Category</Link></li>
                                            <li><Link to="/employerListPage">Employer List</Link></li>
                                            <li><Link to="/employerGridPage">Employer Grid</Link></li>
                                            <li><Link to="/companyDetailsPage">Employer Details</Link></li>
                                            <li><Link to="/postJobPage">Post a job</Link></li>
                                            <li><Link to="/addResumePage">Add Resume</Link></li>
                                        </ul>
                                    </li> */}
                    {/* <li className="menu-has-children">
                                        <Link to="/candidateListPage">Candidates</Link>
                                        <ul className="sub-menu">
                                            <li><Link to="/candidatePage">Candidates Grid</Link></li>
                                            <li><Link to="/candidateListPage">Candidates List</Link></li>
                                            <li><Link to="/candidateDetailsPage">Candidates Details</Link></li>
                                        </ul>
                                    </li> */}
                    {/* <li className="menu-has-children">
                      <Link to="#">Pages</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/aboutPage">About</Link>
                        </li>
                        <li>
                          <Link to="/servicePage">Services</Link>
                        </li>
                        <li>
                          <Link to="/serviceDetailsPage">Services Details</Link>
                        </li>
                        <li>
                          <Link to="/contactPage">Contact</Link>
                        </li>
                      </ul>
                    </li> */}
                    <li>
                      <Link to="/aboutPage">About Us</Link>
                    </li>
                    {/* <li>
                          <Link to="/servicePage">Services</Link>
                        </li> */}
                    {/* <li>
                          <Link to="/serviceDetailsPage">Services Details</Link>
                        </li> */}
                
                    <li>
                      <Link to="/faq">FAQ </Link>
                    </li>
                    <li>
                      <Link to="/contactPage">Contact</Link>
                    </li>

                    {/* <li>
                          <Link to="/blogPage">Blog</Link>
                        </li> */}

                    <li className="menu-has-children">
                    <Link >Services</Link>
                      <ul className="sub-menu">
                        <li>
                        <Link to="/serviceDetailsPage">RPO Service</Link>
                        </li>
                        <li>
                      <Link to="/staff">Looking For Staff ?</Link>
                    </li>
                        <li>
                        <Link to="/blogPage">Hire Our Recruiters</Link>
                        </li>
                 
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-5">
              <div className="jm-header-right jm-header-right-2 text-end  d-flex align-items-center justify-content-end">
                {/* <Link
                  to="#"
                  className="jm-search jm-header-action-search"
                  role="button"
                  onClick={handleOpenForm}
                >
                  <i className="fal fa-search"></i>
                </Link> */}
                <Link
                  to="/login"
                  className="jm-theme-btn jm-theme-btn-2 d-none d-lg-block"
                >
                  Login
                </Link>
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
    </header>
  );
};

export default Header2;
