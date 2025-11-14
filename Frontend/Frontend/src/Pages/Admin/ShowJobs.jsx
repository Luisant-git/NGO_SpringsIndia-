import React, { useState, useEffect } from 'react';
import { TextField, Box } from '@mui/material';
import { Table, Drawer, Pagination, Spin } from 'antd';
import { Button } from 'react-bootstrap';
import AddCandidates from '../freelancer/AddCandidates';

function BrowseJob() {
  const [candidatesData, setCandidatesData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(7); // Default page size
  const [totalCandidates, setTotalCandidates] = useState(0);
  const [openAddDrawer, setOpenAddDrawer] = useState(false); // Add state for Add Candidates drawer
  const openAddCandidateDrawer = () => {
    setOpenAddDrawer(true); // Open the Add Candidate drawer
  };

  useEffect(() => {
    // Fetch data from API
    fetchCandidatesData();
  }, []);

  useEffect(() => {
    // Apply search filter when searchQuery or candidatesData change
    filterCandidates();
  }, [searchQuery, candidatesData]);

  const fetchCandidatesData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_FOS_CLIENT_API}/auth/candidates`);
      const data = await response.json();
      setCandidatesData(data.data || []);
      setFilteredData(data.data || []);
      setTotalCandidates(data.data ? data.data.length : 0);
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
    const filtered = candidatesData.filter(candidate =>
      candidate.Full_Name?.toLowerCase().includes(searchTerm) ||
      candidate.Email?.toLowerCase().includes(searchTerm) ||
      candidate.Candidate_ID?.toLowerCase().includes(searchTerm) ||
      candidate.Current_Job_Title?.toLowerCase().includes(searchTerm)
    );
    setFilteredData(filtered);
    setTotalCandidates(filtered.length); // Update total count for pagination
  };

  const handlePageChange = (page) => {
    setCurrentPage(page); // Update current page
  };

  const openCandidateDetails = (candidate) => {
    setSelectedCandidate(candidate);
    setOpenDrawer(true);
  };

  const columns = [
    { title: 'Name', dataIndex: 'Full_Name', key: 'Full_Name' },
    { title: 'Email', dataIndex: 'Email', key: 'Email' },
    { title: 'ID', dataIndex: 'Candidate_ID', key: 'Candidate_ID' },
    { title: 'Current Job Title', dataIndex: 'Current_Job_Title', key: 'Current_Job_Title' },
    { title: 'Action', key: 'action', render: (text, record) => (
        <Button className='btn btn-sm btn-success' onClick={() => openCandidateDetails(record)}>View Details</Button>
      ),
    },
  ];

  // Calculate the data for the current page
  const currentData = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const spinnerColor = 'green'; // Change this to your desired color














  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    secondaryEmail: '',
    currentEmployer: '',
    current_Job_Title: '',
    currentSalary: '',
    expectedSalary: '',
    skype_ID: '',
    linkedIn_Url: '',
    street: '',
    facebook_Url: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    additionalInfo: '',
    phone: '',
    mobile: '',
    skilles: '',
    experience_in_Years: '',
    salutation: '',
    fullname: '',
    highest_Qualification_Held: '',
    twitter: '',
  });

  const [errors, setErrors] = useState({});
  const generateCandidateId = () => {
    const prefix = 'ZR_';
    const randomNumber = Math.floor(1000 + Math.random() * 9000); // Generates a random number between 1000 and 9999
    const suffix = '_CAND';
    return `${prefix}${randomNumber}${suffix}`;
  };
  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const contactRegex = /^[0-9]+$/;

    if (!formData.firstName.trim())
      newErrors.firstName = 'First Name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required';
    if (!formData.fullname.trim()) newErrors.fullname = 'Full Name is required';
    if (!formData.email || !emailRegex.test(formData.email))
      newErrors.email = 'Valid email is required';
    if (!formData.secondaryEmail || !emailRegex.test(formData.secondaryEmail))
      newErrors.secondaryEmail = 'Valid secondary email is required';
    if (!formData.mobile || !contactRegex.test(formData.mobile))
      newErrors.mobile = 'Valid mobile number is required';
    if (!formData.phone || !contactRegex.test(formData.phone))
      newErrors.phone = 'Valid phone number is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.street.trim()) newErrors.street = 'Street is required';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'Zip Code is required';
    if (formData.currentSalary && isNaN(formData.currentSalary))
      newErrors.currentSalary = 'Current salary must be a number';
    if (formData.expectedSalary && isNaN(formData.expectedSalary))
      newErrors.expectedSalary = 'Expected salary must be a number';
    if (!formData.highest_Qualification_Held.trim())
      newErrors.highest_Qualification_Held =
        'Highest Qualification Held is required';
    if (formData.experience_in_Years && isNaN(formData.experience_in_Years))
      newErrors.experience_in_Years = 'Experience in Years must be a number';
    if (!formData.currentEmployer.trim())
      newErrors.currentEmployer = 'Current Employer is required';
    if (!formData.current_Job_Title.trim())
      newErrors.current_Job_Title = 'Current Job Title is required';
    if (!formData.salutation.trim())
      newErrors.salutation = 'Salutation is required';
    if (!formData.facebook_Url || !/^https?:\/\/.+/.test(formData.facebook_Url))
      newErrors.facebook_Url = 'Valid Facebook URL is required';
    if (!formData.linkedIn_Url || !/^https?:\/\/.+/.test(formData.linkedIn_Url))
      newErrors.linkedIn_Url = 'Valid LinkedIn URL is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error('Please correct the errors in the form');
      return;
    }
    const url = `${import.meta.env.VITE_FOS_CLIENT_API}/auth/candidates`; // API endpoint
    const candidateData = {
      data: [
        {
          Origin: 'Sourced',
          Email: formData.email,
          $currency_symbol: '$',
          $whatsapp_available: null,
          Last_Activity_Time: '2024-10-22T12:43:29+05:30',
          Highest_Qualification_Held: formData.highest_Qualification_Held,
          Skill_Set: formData.skilles,
          $state: 'save',
          $converted: false,
          $process_flow: false,
          Updated_On: '2024-10-22T12:43:29+05:30',
          Current_Employer: formData.currentEmployer,
          Street: formData.street,
          Data_Processing_Basis_Details: null,
          Zip_Code: formData.zipCode,
          id: uuidv4(),
          Experience_in_Years: parseInt(formData.experience_in_Years),
          $approved: true,
          $approval: {
            delegate: false,
            approve: false,
            reject: false,
            resubmit: false,
          },
          Candidate_Status: 'New',
          Candidate_ID: generateCandidateId(),
          Last_Mailed_Time: null,
          Created_Time: '2024-10-22T12:06:44+05:30',
          $followed: false,
          Candidate_Owner: {
            name: 'Michael J',
            id: '99459000000272514',
          },
          LinkedIn__s: formData.linkedIn_Url,
          $editable: true,
          Is_Locked: false,
          City: formData.city,
          Is_Unqualified: false,
          Associated_Tags: [],
          Additional_Info: formData.additionalInfo,
          State: formData.state,
          Country: formData.country,
          Created_By: {
            name: 'Michael J',
            id: '99459000000272514',
          },
          Secondary_Email: formData.secondaryEmail,
          Is_Attachment_Present: false,
          LEADPORTALSTATUS: 'To-be-invited',
          Rating: null,
          $applied_with_linkedin: null,
          No_of_Applications: 1,
          Twitter: null,
          $social_profiles: '||||||||||||',
          Current_Job_Title: formData.current_Job_Title,
          Salutation: formData.salutation,
          Source: 'Added by Freelancer',
          First_Name: formData.firstName,
          Full_Name: formData.fullname,
          Skype_ID: formData.skype_ID,
          Phone: formData.phone,
          Candidate_Stage: 'New',
          Fresh_Candidate: false,
          Email_Opt_Out: false,
          $converted_detail: {},
          Facebook__s: formData.facebook_Url,
          Mobile: formData.mobile,
          Last_Name: formData.lastName,
          Current_Salary: parseInt(formData.currentSalary, 10),
          Associated_any_Social_Profiles: false,
          $approval_state: 'approved',
          Expected_Salary: parseInt(formData.expectedSalary, 10),
        },
      ],
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(candidateData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Success:', result);
      toast.success('Data posted successfully!');
      console.log(response.data,"dataID");
      
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        secondaryEmail: '',
        currentEmployer: '',
        current_Job_Title: '',
        currentSalary: '',
        expectedSalary: '',
        skype_ID: '',
        linkedIn_Url: '',
        street: '',
        facebook_Url: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        additionalInfo: '',
        phone: '',
        mobile: '',
        skilles: '',
        experience_in_Years: '',
        salutation: '',
        fullname: '',
        highest_Qualification_Held: '',
        twitter: '',
      });
    } catch (error) {
      console.error('Error:', error);
      alert(`Error posting data: ${error.message}`);
      toast.error('Failed to post data. Please try again.');
    }
  };
  return (
    <div className='container mt-4 '>
      <Box sx={{ marginBottom: 2 ,display:'flex',justifyContent:'space-between'}}>
        <TextField
          label="Search"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
          size="small"
          sx={{ maxWidth: 400 }} // Set a max width for the search input
        />

      <Button onClick={openAddCandidateDrawer} className='btn-success ms-2'>Add Candidates</Button>
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
        <>
      <Table
            dataSource={currentData}
            columns={columns}
            rowKey="id"
            pagination={false} // Disable default pagination in Antd Table
            components={{
              header: {
                cell: (props) => (
                  <th
                    {...props}
                    style={{
                      backgroundColor: '#E8F5E9', // Set the header background color
                      color: 'black', // Set the header text color
                    }}
                  >
                    {props.children}
                  </th>
                ),
              },
            }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
            <Pagination
              current={currentPage} // Set the current page from state
              total={totalCandidates} // Total candidates count
              pageSize={pageSize} // Page size
              onChange={handlePageChange} // Handle page change
              showSizeChanger={false} // Disable page size changer
              className='mb-3'
            />
          </Box>
        </>
      )}

      <Drawer
        title="Candidate Details"
        width={650}
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
          </div>
        ) : (
          <p>No details available</p>
        )}
      </Drawer>

      <Drawer
        title="Add Candidate"
        width={500}
        open={openAddDrawer}
        onClose={() => setOpenAddDrawer(false)}
      >
        {/* You can add a form for adding candidates here */}
        <AddCandidates/>
      </Drawer>
    </div>
  );
}

export default BrowseJob;
