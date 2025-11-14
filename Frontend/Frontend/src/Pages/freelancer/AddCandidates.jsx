import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid'; // Import the UUID function
import axios from 'axios';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { jwtDecode } from 'jwt-decode';


function AddCandidates() {
  const [resume, setResume] = useState(null); 

  const[data,setData]=useState([])
  useEffect(() => {
    const token = localStorage.getItem('token');
  
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setData(decodedToken?.sub); // Set decoded token data
      } catch (error) {
        console.error('Invalid token:', error);
      }
    } else {
      console.error('No token found in localStorage');
    }
  }, []);

  const handleResumeChange = (event) => {
    setResume(event.currentTarget.files[0]);
  };


  
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

        const filedata = new FormData();
        filedata.append('file', resume);

        const url = `${import.meta.env.VITE_FOS_CLIENT_API}/auth/candidates`;
        const candidateData = {
          data: [
            {
              Origin: '99459000000905644',
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

      
          
          handleSubmitcandidateId();
          const result = await response.json();
          console.log(result);
          
          const candidateId = result.data.data.data[0].details.id;

    // Resume upload using the retrieved candidate ID
    const resumeResponse = await fetch(`${import.meta.env.VITE_FOS_CLIENT_API}/auth/${candidateId}/upload-resume`, {
      method: 'POST',
      body: filedata, // Ensure formData is initialized with resume file and any required fields
    });

    if (!resumeResponse.ok) {
      throw new Error(`Failed to upload resume! Status: ${resumeResponse.status}`);
    }
          toast.success('Data posted successfully!');
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


       // Handle submitting candidate ID
  const handleSubmitcandidateId = async () => {
    const payload = {
      candidateId: formData.email, // Use formData.email for candidateId
      freelancerId: data,
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_FOS_CLIENT_API}/mycandidates`, payload);
      toast.success('Candidate ID submitted successfully!');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to submit candidate ID.');
    }
  };

  const styles = {
    uploadContainer: {
      textAlign: 'center',

    },
    uploadLabel: {
      fontSize: '1.2em',
      marginBottom: '10px',
      display: 'block',
      color: '#28a745', // Green color
    },
    uploadBox: {
      border: '2px dashed #28a745', // Green dashed border
      padding: '20px',
      backgroundColor: '#e9f7e9', // Light green background
      borderRadius: '8px',
      position: 'relative',
      cursor: 'pointer',
    },
    uploadArea: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: '#28a745', // Green color for text
      fontSize: '1.2em',
    },
    uploadIcon: {
      fontSize: '3em',
      marginBottom: '10px',
      color: '#28a745', // Green color for the icon
    },
    uploadText: {
      marginTop: '10px',
      color: '#28a745', // Green color for the text
    },
    fileInfo: {
      marginTop: '20px',
      color: '#333',
      fontSize: '1em',
      fontWeight: 'bold',
    },
    fileInput: {
      display: 'none',
    },
  };
    

  return (
    <div>
          <form onSubmit={handleSubmit}>
        <div className="jm-post-job-wrapper mb-40">
          <h4 className="jm-job-acc-title">Candidates Details</h4>
          <div className="row">
            <div className="col-xl-12">
              {errors.firstName && (
                <small className="text-danger">{errors.firstName}</small>
              )}
              <input
                type="text"
                required
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-xl-12">
              {errors.lastName && (
                <small className="text-danger">{errors.lastName}</small>
              )}
              <input
                type="text"
                required
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-xl-12">
              {errors.fullname && (
                <small className="text-danger">{errors.fullname}</small>
              )}
              <input
                type="text"
                required
                name="fullname"
                placeholder="FullName"
                value={formData.fullname}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-xl-12">
              {errors.email && (
                <small className="text-danger">{errors.email}</small>
              )}
              <input
                type="text"
                name="email"
                required
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-xl-12">
              {errors.secondaryEmail && (
                <small className="text-danger">{errors.secondaryEmail}</small>
              )}
              <input
                type="text"
                required
                name="secondaryEmail"
                placeholder="Secondary Email"
                value={formData.secondaryEmail}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-xl-12">
              {errors.mobile && (
                <small className="text-danger">{errors.mobile}</small>
              )}
              <input
                type="text"
                name="mobile"
                required
                placeholder="Mobile"
                value={formData.mobile}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-xl-12">
              {errors.phone && (
                <small className="text-danger">{errors.phone}</small>
              )}
              <input
                type="text"
                name="phone"
                required
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-xl-12 col-md-12">
              <select
                name="salutation"
                value={formData.salutation}
                onChange={handleInputChange}
                className="jm-job-select"
                required
              >
                  <option value="" disabled>Select a salutation</option>
                <option>MR.</option>
                <option>MRS.</option>
                <option>Miss</option>
                <option>Ms.</option>
                <option>Dr.</option>
                <option>Prof.</option>
                <option>Rev.</option>
                <option>Sir</option>
                <option>Madam</option>
                <option>Other</option>
              </select>
            </div>

            <div className="col-xl-12">
              {errors.currentEmployer && (
                <small className="text-danger">{errors.currentEmployer}</small>
              )}
              <input
                type="text"
                name="currentEmployer"
                placeholder="Current Employer"
                value={formData.currentEmployer}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="col-xl-12">
              {errors.currentSalary && (
                <small className="text-danger">{errors.currentSalary}</small>
              )}
              <input
                type="text"
                name="currentSalary"
                placeholder="Current Salary"
                value={formData.currentSalary}
                required
                onChange={handleInputChange}
              />
            </div>

            <div className="col-xl-12">
              {errors.expectedSalary && (
                <small className="text-danger">{errors.expectedSalary}</small>
              )}
              <input
                type="text"
                name="expectedSalary"
                placeholder="Expected Salary"
                value={formData.expectedSalary}
                required
                onChange={handleInputChange}
              />
            </div>

            <div className="col-xl-12">
              {errors.skype_ID && (
                <small className="text-danger">{errors.skype_ID}</small>
              )}
              <input
                type="text"
                name="skype_ID"
                placeholder="Skype_ID"
                value={formData.skype_ID}
                required
                onChange={handleInputChange}
              />
            </div>

            <div className="col-xl-12">
              {errors.linkedIn_Url && (
                <small className="text-danger">{errors.linkedIn_Url}</small>
              )}
              <input
                type="text"
                name="linkedIn_Url"
                placeholder="LinkedIn_Url"
                value={formData.linkedIn_Url}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-xl-12">
              {errors.current_Job_Title && (
                <small className="text-danger">
                  {errors.current_Job_Title}
                </small>
              )}
              <input
                type="text"
                name="current_Job_Title"
                placeholder="Current_Job_Title"
                value={formData.current_Job_Title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-xl-12">
              {errors.highest_Qualification_Held && (
                <small className="text-danger">
                  {errors.highest_Qualification_Held}
                </small>
              )}
              <input
                type="text"
                name="highest_Qualification_Held"
                placeholder="Highest_Qualification_Held"
                value={formData.highest_Qualification_Held}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-xl-12">
              {errors.skilles && (
                <small className="text-danger">{errors.skilles}</small>
              )}
              <input
                type="text"
                name="skilles"
                placeholder="Skills"
                value={formData.skilles}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-xl-12">
              {errors.experience_in_Years && (
                <small className="text-danger">
                  {errors.experience_in_Years}
                </small>
              )}
              <input
                type="text"
                name="experience_in_Years"
                placeholder="Experience_in_Years"
                value={formData.experience_in_Years}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-xl-12">
              {errors.facebook_Url && (
                <small className="text-danger">{errors.facebook_Url}</small>
              )}
              <input
                type="text"
                name="facebook_Url"
                placeholder="Facebook_Url"
                value={formData.facebook_Url}
                required
                onChange={handleInputChange}
              />
            </div>
            <div className="col-xl-12">
              {errors.twitter && (
                <small className="text-danger">{errors.twitter}</small>
              )}
              <input
                type="text"
                name="twitter"
                placeholder="Twitter"
                value={formData.twitter}
                required
                onChange={handleInputChange}
              />
            </div>

            <div className="col-xl-12">
              {errors.street && (
                <small className="text-danger">{errors.street}</small>
              )}
              <input
                type="text"
                name="street"
                placeholder="Street"
                required
                value={formData.street}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-xl-12">
              {errors.city && (
                <small className="text-danger">{errors.city}</small>
              )}
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                required
                onChange={handleInputChange}
              />
            </div>

            <div className="col-xl-12">
              {errors.state && (
                <small className="text-danger">{errors.state}</small>
              )}
              <input
                type="text"
                name="state"
                required
                placeholder="State"
                value={formData.state}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-xl-12">
              {errors.zipCode && (
                <small className="text-danger">{errors.zipCode}</small>
              )}
              <input
                type="text"
                name="zipCode"
                required
                placeholder="Zip Code"
                value={formData.zipCode}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-xl-12">
              {errors.country && (
                <small className="text-danger">{errors.country}</small>
              )}
              <input
                type="text"
                name="country"
                placeholder="Country"
                required
                value={formData.country}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-xl-12">
              {errors.additionalInfo && (
                <small className="text-danger">{errors.additionalInfo}</small>
              )}
              <textarea
                name="additionalInfo"
                required
                placeholder="Additional Info"
                value={formData.additionalInfo}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div style={styles.uploadContainer}>
      <label style={styles.uploadLabel}>Upload Resume</label>
      <div style={styles.uploadBox}>
        <input
          type="file"
          onChange={handleResumeChange}
          accept=".pdf"
          id="file-upload"
          style={styles.fileInput}
        />
        <label htmlFor="file-upload" style={styles.uploadArea}>
          <FaCloudUploadAlt style={styles.uploadIcon} />
          <p style={styles.uploadText}>Drag & drop your resume here, or click to select</p>
        </label>
      </div>

      {resume && (
        <div style={styles.fileInfo}>
          <p > {resume.name}</p>
        </div>
      )}
    </div>
        <div className="jm-post-job-wrapper mb-40">
          <div className="col-xl-12">
            <div className="jm-info-buttons mt-25">
              <button type="submit" className="jm-post-job-btn jm-theme-btn">
                Create
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddCandidates