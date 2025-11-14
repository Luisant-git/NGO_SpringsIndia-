import React, { Suspense, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import AddFreelancer from './Pages/Admin/AddFreelancer';
import AddJobs from './Pages/Admin/AddJobs';
import Applications from './Pages/Admin/Applications';
import RequestCandidates from './Pages/RequestCandidates';
import Cnadidates from './Pages/freelancer/Cnadidates';
import Faq from './Pages/Faq';
import Staff from './Pages/Staff';

// Lazy load the page components
const ShowFreelancer = React.lazy(() => import('./Pages/Admin/ShowFreelancer'));
const ShowJobs = React.lazy(() => import('./Pages/Admin/ShowJobs'));
const HomePage2 = React.lazy(() => import('./Pages/HomePage2'));
const JobPage = React.lazy(() => import('./Pages/JobPage'));
const JobListPage = React.lazy(() => import('./Pages/JobListPage'));
const JobDetailsPage = React.lazy(() => import('./Pages/JobDetailsPage'));
const JobCategoryPage = React.lazy(() => import('./Pages/JobCategoryPage'));
const EmployerListPage = React.lazy(() => import('./Pages/EmployerListPage'));
const EmployerGridPage = React.lazy(() => import('./Pages/EmployerGridPage'));
const CompanyDetailsPage = React.lazy(
  () => import('./Pages/CompanyDetailsPage'),
);
const PostJobPage = React.lazy(() => import('./Pages/PostJobPage'));
const AddResumePage = React.lazy(() => import('./Pages/AddResumePage'));
const CandidatePage = React.lazy(() => import('./Pages/CandidatePage'));
const AboutPage = React.lazy(() => import('./Pages/AboutPage'));
const BlogPage = React.lazy(() => import('./Pages/BlogPage'));
const BlogListPage = React.lazy(() => import('./Pages/BlogListPage'));
const BlogDetailsPage = React.lazy(() => import('./Pages/BlogDetailsPage'));
const ServicePage = React.lazy(() => import('./Pages/ServicePage'));
const ServiceDetailsPage = React.lazy(
  () => import('./Pages/ServiceDetailsPage'),
);
const ContactPage = React.lazy(() => import('./Pages/ContactPage'));
const CandidateListPage = React.lazy(() => import('./Pages/CandidateListPage'));
const CandidateDetailsPage = React.lazy(
  () => import('./Pages/CandidateDetailsPage'),
);
const Login = React.lazy(() => import('./Pages/Login'));
const DashBoard = React.lazy(() => import('./Pages/DashBoard'));
const ErrorPage = React.lazy(() => import('./Pages/ErrorPage'));
const Mycandidates = React.lazy(() => import('./Pages/Mycandidates'));
const MarketPlace = React.lazy(() => import('./Pages/MarketPlace'));
const SavedJob = React.lazy(() => import('./Pages/SavedJob'));

function App() {
  const [data, setData] = React.useState(null); // Store role and other token data

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setData(decodedToken); // Set decoded token data
      } catch (error) {
        console.error('Invalid token:', error);
      }
    } else {
      console.error('No token found in localStorage');
    }
  }, []);

  console.log(data?.role, 'token data'); // Log role for debugging

  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };

  const ProtectedRoute = ({ element }) => {
    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem('token'); // Check if token exists

    useEffect(() => {
      if (!isLoggedIn) {
        navigate('/login');
      }
    }, [isLoggedIn, navigate]);

    return isLoggedIn ? element : null; // Render element if logged in
  };

  return (
    <>
      <ScrollToTop />
      <Suspense
        fallback={
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
            }}
          >
            <CircularProgress sx={{ color: '#00B04D' }} />
          </Box>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage2 />} />
          <Route path="/jobPage" element={<JobPage />} />
          <Route path="/jobListPage" element={<JobListPage />} />
          <Route path="/jobDetailsPage" element={<JobDetailsPage />} />
          <Route path="/jobCategoryPage" element={<JobCategoryPage />} />
          <Route path="/employerListPage" element={<EmployerListPage />} />
          <Route path="/employerGridPage" element={<EmployerGridPage />} />
          <Route path="/companyDetailsPage" element={<CompanyDetailsPage />} />
          <Route path="/postJobPage" element={<PostJobPage />} />
          <Route path="/addResumePage" element={<AddResumePage />} />
          <Route path="/candidatePage" element={<CandidatePage />} />
          <Route path="/aboutPage" element={<AboutPage />} />
          <Route path="/blogPage" element={<BlogPage />} />
          <Route path="/blogListPage" element={<BlogListPage />} />
          <Route path="/blogDetailsPage" element={<BlogDetailsPage />} />
          <Route path="/servicePage" element={<ServicePage />} />
          <Route path="/serviceDetailsPage" element={<ServiceDetailsPage />} />
          <Route path="/contactPage" element={<ContactPage />} />
          <Route path="/candidateListPage" element={<CandidateListPage />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/staff" element={<Staff />} />
          <Route
            path="/candidateDetailsPage"
            element={<CandidateDetailsPage />}
          />
          <Route path="/login" element={<Login />} />

          <Route
            path="/dashboard/*"
            element={<ProtectedRoute element={<DashBoard />} />}
          >
            {data?.role === 'ADMIN' && ( // Check if role is ADMIN
              <>
                <Route index element={<ShowJobs />} />{' '}
                {/* Default dashboard route */}
                <Route path="addjobs" element={<AddJobs />} />
                <Route path="applications" element={<Applications />} />
                <Route path="showjobs" element={<ShowJobs />} />
             
                <Route path="showfreelancer" element={<ShowFreelancer />} />
                <Route path="requestcandidates" element={<RequestCandidates />} />{' '}
              </>
            )}
            {data?.role === 'FREELANCER' && ( // Check if role is FREELANCER
              <>
                <Route index element={<Mycandidates />} />{' '}
                {/* Default dashboard route */}
                <Route path="marketplace" element={<MarketPlace />} />{' '}
                {/* Nested route */}
                <Route path="savedjobs" element={<SavedJob />} />{' '}
                {/* Nested route */}
                <Route path="candidates" element={<Cnadidates />} />{' '}
                {/* Nested route */}
              </>
            )}
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
