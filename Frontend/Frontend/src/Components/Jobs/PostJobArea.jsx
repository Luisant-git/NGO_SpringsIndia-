import { Drawer } from 'antd';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import AddCategory from './AddCategory';

const PostJobArea = () => {
  // Job Information States
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [fulltime, setFulltime] = useState('Full-time');
  const [contract, setContract] = useState('Permanent');
  const [qualification, setQualification] = useState('');
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');
  const [employeeType, setEmployeeType] = useState('Employee');
  const [position, setPosition] = useState('');
  const [industry, setIndustry] = useState('');
  const [emailUrl, setEmailUrl] = useState('');


  // Social Media Links
  const [industryLinkedIn, setIndustryLinkedIn] = useState('');
  const [industryTwitter, setIndustryTwitter] = useState('');
  const [industryFacebook, setIndustryFacebook] = useState('');
  const [industryPinterest, setIndustryPinterest] = useState('');
  const [industryInstagram, setIndustryInstagram] = useState('');
  const [industryWebSite, setIndustryWebSite] = useState('');

  // Additional Information
  const [image, setImage] = useState('');
  const [salaryMin, setSalaryMin] = useState('');
  const [salaryMax, setSalaryMax] = useState('');
  const [jobCode, setJobCode] = useState('');
  const [positionsAvailable, setPositionsAvailable] = useState('');
  const [status, setStatus] = useState('ACTIVE');
  const [relocationAssistance, setRelocationAssistance] = useState(false);

  // Employer and Category IDs (Assuming these are fetched or passed as props)
  const [employerId, setEmployerId] = useState(''); // Set appropriately
  const [categoryId, setCategoryId] = useState(''); // Set appropriately

  const [accountManager, setAccountManager] = useState('');

  // Company Information States
  const [companyName, setCompanyName] = useState('');
  const [companyWebsite, setCompanyWebsite] = useState('');
  const [companyVideoUrl, setCompanyVideoUrl] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');

  // Handle Image Upload from FileUploadForm
  const [previewUrl, setPreviewUrl] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]); // Initialize state

  const [isCandidateDrawerOpen, setIsCandidateDrawerOpen] = useState(false);
  const [isJobDetailsDrawerOpen, setIsJobDetailsDrawerOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const handleImageChange = (event) => {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files);
      setSelectedFiles(fileArray); // Store the array of files

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result); // Preview the first image
      };
      if (fileArray.length > 0) {
        reader.readAsDataURL(fileArray[0]); // Preview only the first selected image
      }
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_FOS_CLIENT_API}/categories`);
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };
  useEffect(() => {
    fetchCategories(); // Fetch categories on component mount
  }, []);
  const handleUpload = async () => {
    const formData = new FormData();

    if (selectedFiles) {
      Array.from(selectedFiles).forEach((file) => {
        formData.append('files', file); // Ensure the key matches what the server expects
      });
    } else {
      throw new Error('No files selected');
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_FOS_CLIENT_API}/uploads`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Image upload failed.');
      }

      const data = await response.json();
      setImage(data.urls); // Assuming 'data.urls' returns an array of image URLs
      return data.urls;
    } catch (error) {
      toast.error('Image upload failed. Please try again.');
      console.error('Upload error:', error);
      throw error; // Re-throw the error to stop execution in handleSubmit
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (
      !title ||
      !description ||
      !location ||
      !qualification ||
      !skills ||
      !experience ||
      !position ||
      !industry ||
      !salaryMin ||
      !salaryMax ||
      !jobCode ||
      !positionsAvailable ||
      !companyName ||
      !companyWebsite ||
      !companyDescription
    ) {
      toast.error('Please fill all the required fields.');
      return;
    }

    try {
      const imageUrls = await handleUpload(); // Wait for image upload

      // Construct the job data object
      const jobData = {
        title,
        description,
        location,
        fulltime,
        Contract: "full time",
        qualification,
        skills,
        experiance: experience,
        EmployeeType: employeeType,
        position,
        industry,
        industryLinkedIn,
        industryTwitter,
        industryFacebook,
        industryPinterest,
        industryInstagram,
        industryWebSite,
        image: imageUrls, // Set uploaded image URLs
        salaryMin: Number(salaryMin),
        salaryMax: Number(salaryMax),
        jobCode,
        positionsAvailable: Number(positionsAvailable),
        status: 'ACTIVE',
        relocationAssistance,
        employerId: '076db949-9483-44ad-9731-09d630ddfbb6',
        categoryId: contract,
        accountManager,
      };
      console.log(jobData, 'zxzx');

      const response = await fetch(`${import.meta.env.VITE_FOS_CLIENT_API}/jobs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jobData),
      });

      if (response.ok) {
        toast.success('Job posted successfully.');

        // Reset form fields
        setTitle('');
        setDescription('');
        setLocation('');
        setFulltime('');
        setContract('');
        setQualification('');
        setSkills('');
        setExperience('');
        setEmployeeType('');
        setPosition('');
        setIndustry('');
        setIndustryLinkedIn('');
        setIndustryTwitter('');
        setIndustryFacebook('');
        setIndustryPinterest('');
        setIndustryInstagram('');
        setIndustryWebSite('');
        setImage('');
        setSalaryMin('');
        setSalaryMax('');
        setJobCode('');
        setPositionsAvailable('');
        setStatus('');
        setRelocationAssistance(false);
        setAccountManager('');
        setCompanyName('');
        setCompanyWebsite('');
        setCompanyDescription('');
        setCompanyVideoUrl('');
        setPreviewUrl(null);
        setSelectedFiles([]);
  
      } else {
        const errorData = await response.json();
        console.error('Job post failed:', errorData);
        toast.error('Failed to post job. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('An error occurred while posting the job. Please try again.');
    }
  };

  const openCandidateDrawer = () => setIsCandidateDrawerOpen(true);
  const closeCandidateDrawer = () => setIsCandidateDrawerOpen(false);
  return (
    <div className="jm-post-job-area mt-5">
      <div className="container">
        <form onSubmit={handleSubmit}>
          {/* Job Information Section */}
          <div className="jm-post-job-wrapper mb-40">
            <h4 className="jm-job-acc-title">Job Information</h4>
            <div className="row">
              {/* Job Title */}
              <div className="col-xl-12">
                <input
                  type="text"
                  placeholder="Job Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              {/* Job Code */}
              <div className="col-xl-6 col-md-6">
                <input
                  type="text"
                  placeholder="Job Code"
                  value={jobCode}
                  onChange={(e) => setJobCode(e.target.value)}
                  required
                />
              </div>

              {/* Application Email/URL */}
              <div className="col-xl-6 col-md-6">
                <input
                  type="text"
                  placeholder="Application Email"
                  value={emailUrl}
                  onChange={(e) => setEmailUrl(e.target.value)}
                  required
                />
              </div>

              {/* Job Location */}
              <div className="col-xl-6 col-md-6">
                <input
                  type="text"
                  placeholder="Job Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>

              {/* Job Type */}
              <div className="col-xl-6 col-md-6">
                <select
                  className="jm-job-select"
                  value={fulltime}
                  onChange={(e) => setFulltime(e.target.value)}
                  required
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Internship">Internship</option>
                  <option value="Temporary">Temporary</option>
                </select>
              </div>

              {/* Contract Type */}
              <div className="col-xl-6 col-md-6">
                <div className="row">
                  <div className="col-10">
                    <select
                      className="jm-job-select"
                      value={contract}
                      onChange={(e) => setContract(e.target.value)}
                      required
                    >
                    {
                      categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.category}
                        </option>
                      ))
                    }
                    </select>
                  </div>
                  <div className="col-2">
                    <button
                      type="button"
                      onClick={openCandidateDrawer}
                      className="btn btn-outline-success"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>

              {/* Qualification */}
              <div className="col-xl-6 col-md-6">
                <input
                  type="text"
                  placeholder="Qualification"
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                  required
                />
              </div>

              {/* Skills */}
              <div className="col-xl-6 col-md-6">
                <input
                  type="text"
                  placeholder="Skills (e.g., JavaScript, React)"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  required
                />
              </div>

              {/* Experience */}
              <div className="col-xl-6 col-md-6">
                <input
                  type="text"
                  placeholder="Experience (e.g., 3 years)"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  required
                />
              </div>

              {/* Employee Type */}
              <div className="col-xl-6 col-md-6">
                <select
                  className="jm-job-select"
                  value={employeeType}
                  onChange={(e) => setEmployeeType(e.target.value)}
                  required
                >
                  <option value="Employee">Employee</option>
                  <option value="Contractor">Contractor</option>
                  <option value="Freelancer">Freelancer</option>
                </select>
              </div>

              {/* Position */}
              <div className="col-xl-6 col-md-6">
                <input
                  type="text"
                  placeholder="Position (e.g., Senior Developer)"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  required
                />
              </div>

              {/* Industry */}
              <div className="col-xl-6 col-md-6">
                <input
                  type="text"
                  placeholder="Industry (e.g., Technology)"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  required
                />
              </div>

              {/* Salary Min */}
              <div className="col-xl-6 col-md-6">
                <input
                  type="text"
                  placeholder="Salary Min"
                  value={salaryMin}
                  onChange={(e) => setSalaryMin(e.target.value)}
                  required
                />
              </div>

              {/* Salary Max */}
              <div className="col-xl-6 col-md-6">
                <input
                  type="text"
                  placeholder="Salary Max"
                  value={salaryMax}
                  onChange={(e) => setSalaryMax(e.target.value)}
                  required
                />
              </div>

              {/* Positions Available */}
              <div className="col-xl-6 col-md-6">
                <input
                  type="text"
                  placeholder="Positions Available"
                  value={positionsAvailable}
                  onChange={(e) => setPositionsAvailable(e.target.value)}
                  required
                />
              </div>

              {/* Status */}
              <div className="col-xl-6 col-md-6">
                <select
                  className="jm-job-select"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  required
                >
                  <option value="ACTIVE">ACTIVE</option>
                  <option value="INACTIVE">INACTIVE</option>
                  <option value="CLOSED">CLOSED</option>
                </select>
              </div>

              {/* Relocation Assistance */}
              <div className="col-xl-6 col-md-6 ">
                <label>
                  <input
                    type="checkbox"
                    checked={relocationAssistance}
                    onChange={(e) => setRelocationAssistance(e.target.checked)}
                  />
                  Relocation Assistance
                </label>
              </div>

              {/* Job Description */}
              <div className="col-xl-12">
                <textarea
                  placeholder="Job Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </div>
            </div>
          </div>

          {/* Company Information Section */}
          <div className="jm-post-job-wrapper mb-40">
            <h4 className="jm-job-acc-title">Company Information</h4>
            <div className="row">
              {/* Company Name */}
              <div className="col-xl-6 col-md-6">
                <input
                  type="text"
                  placeholder="Company Name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                />
              </div>

              {/* Company Website */}
              <div className="col-xl-6 col-md-6">
                <input
                  type="text"
                  placeholder="Company Website"
                  value={companyWebsite}
                  onChange={(e) => setCompanyWebsite(e.target.value)}
                  required
                />
              </div>

              {/* Company Video URL */}
              <div className="col-xl-6 col-md-6">
                <input
                  type="text"
                  placeholder="Company Video URL"
                  value={companyVideoUrl}
                  onChange={(e) => setCompanyVideoUrl(e.target.value)}
                />
              </div>

              {/* Social Media Usernames */}
              <div className="col-xl-6 col-md-6">
                <input
                  type="text"
                  placeholder="LinkedIn URL"
                  value={industryLinkedIn}
                  onChange={(e) => setIndustryLinkedIn(e.target.value)}
                />
              </div>
              <div className="col-xl-6 col-md-6">
                <input
                  type="text"
                  placeholder="Twitter URL"
                  value={industryTwitter}
                  onChange={(e) => setIndustryTwitter(e.target.value)}
                />
              </div>
              <div className="col-xl-6 col-md-6">
                <input
                  type="text"
                  placeholder="Facebook URL"
                  value={industryFacebook}
                  onChange={(e) => setIndustryFacebook(e.target.value)}
                />
              </div>
              <div className="col-xl-6 col-md-6">
                <input
                  type="text"
                  placeholder="Pinterest URL"
                  value={industryPinterest}
                  onChange={(e) => setIndustryPinterest(e.target.value)}
                />
              </div>
              <div className="col-xl-6 col-md-6">
                <input
                  type="text"
                  placeholder="Instagram URL"
                  value={industryInstagram}
                  onChange={(e) => setIndustryInstagram(e.target.value)}
                />
              </div>
              <div className="col-xl-6 col-md-6">
                <input
                  type="text"
                  placeholder="Website URL"
                  value={industryWebSite}
                  onChange={(e) => setIndustryWebSite(e.target.value)}
                />
              </div>

              {/* Company Description */}
              <div className="col-xl-12">
                <textarea
                  placeholder="Company Description"
                  value={companyDescription}
                  onChange={(e) => setCompanyDescription(e.target.value)}
                  required
                ></textarea>
              </div>

              {/* Image Upload */}
              <div className="mb-3">
                <label htmlFor="fileUpload" className="form-label">
                  Upload Company Logo
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="fileUpload"
                  onChange={(e) => handleImageChange(e)}
                />
              </div>
              {previewUrl && (
                <div className="mb-3">
                  <img
                    src={previewUrl}
                    alt="Image Preview"
                    className="img-thumbnail img-fluid w-25"
                    style={{ maxWidth: '50%', height: 'auto' }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Account Manager (Assuming it's a required field) */}
          <div className="jm-post-job-wrapper mb-40">
            <h4 className="jm-job-acc-title">Account Manager</h4>
            <div className="row">
              <div className="col-xl-12">
                <input
                  type="text"
                  placeholder="Account Manager Name"
                  value={accountManager}
                  onChange={(e) => setAccountManager(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="jm-info-buttons mt-25">
            <button type="submit" className="jm-post-job-btn jm-theme-btn">
              Post A Job
            </button>
          </div>
        </form>
      </div>
      <AddCategory
        isCandidateDrawerOpen={isCandidateDrawerOpen}
        closeCandidateDrawer={closeCandidateDrawer}
        categories={categories}
        fetchCategories={fetchCategories}
      />
    </div>
  );
};

export default PostJobArea;
