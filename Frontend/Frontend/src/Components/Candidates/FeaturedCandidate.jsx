import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { Modal } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, TextField, Typography, Box } from '@mui/material';
import { toast } from 'react-toastify';

const FeaturedCandidate = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [slides, setSlides] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    resumeDocPath: '',  
    job_Id: "",
  });
  const [resumeFile, setResumeFile] = useState(null);

  const setSlidesPerView = () => {
    setSlides(
      window.innerWidth <= 420 ? 1 : window.innerWidth <= 768 ? 2 : window.innerWidth <= 1000 ? 3 : 4
    );
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_FOS_CLIENT_API}/auth/data`);
        const result = await response.json();
        setJobs(result.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch jobs.');
        setLoading(false);
      }
    };

    fetchJobs();
    setSlidesPerView();
    window.addEventListener('resize', setSlidesPerView);
    return () => {
      window.removeEventListener('resize', setSlidesPerView);
    };
  }, []);

  const showModal = (job) => {
    setSelectedJob(job);
    setFormData((prev) => ({ ...prev, job_Id: job.id }));
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!resumeFile) return null;

    const formData = new FormData();
    formData.append('files', resumeFile);

    try {
      const response = await fetch(`${import.meta.env.VITE_FOS_CLIENT_API}/uploads`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload resume');
      }

      const result = await response.json();
      return result.urls[0]; // Assuming the API returns an object with an array of URLs
    } catch (error) {
      toast.error(error.message || 'An error occurred during file upload');
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const resumePath = await handleUpload();
    if (!resumePath) return;

    const jobApplicationData = { ...formData, resumeDocPath: resumePath };

    try {
      const response = await fetch(`${import.meta.env.VITE_FOS_CLIENT_API}/job-seekers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jobApplicationData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      toast.success('Application submitted successfully!');
      setIsModalVisible(false);
      setFormData({
        name: '',
        contact: '',
        email: '',
        resumeDocPath: '',
        job_Id: "",
      });
      setResumeFile(null); // Clear the file selection
    } catch (error) {
      toast.error(error.message || 'An error occurred during submission');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section className="jm-team-area-2 pt-85 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="jm-section-title mb-40 text-center">
              <h2 className="title mb-10">Featured Jobs</h2>
              <p className="text">
                Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula
              </p>
            </div>
          </div>
        </div>
        <div className="jm-team-wrap-2">
          <Swiper
            slidesPerView={slides}
            effect={'slide'}
            spaceBetween={25}
            centeredSlides={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="jm-team-active-2"
          >
            {jobs.map((job) => (
              <SwiperSlide key={job.id}>
                <div className="jm-team-item-2">
                  <div className="jm-team-item-body-2">
                    <div className="jm-team-item-content-2">
                      <h4 className="title">
                        <Link to="/job-details">{job.Job_Opening_Name}</Link>
                      </h4>
                   
                      <p>{job.Required_Skills}</p>
            
                    </div>
                  </div>
                  <div className="jm-team-item-btn-2">
                    <Button
                      className="jm-theme-btn jm-transparent-btn"
                      onClick={() => showModal(job)}
                    >
                      Apply Job
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <Modal
        title={`Apply for ${selectedJob?.Job_Opening_Name}`}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
     
      >
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Contact"
            name="contact"
            type="phone"
            value={formData.contact}
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            margin="normal"
            required
          />

<Box mt={2}>
  <Typography variant="body2" size="small" gutterBottom sx={{ color: 'green' }}>
    Upload Resume
  </Typography>
  <Button
    variant="outlined"
    sx={{ color: 'green', borderColor: 'green' }}
    component="label"
  >
    Choose File
    <input type="file" accept=".pdf" hidden onChange={handleFileChange} />
  </Button>
  {resumeFile && (
    <Typography variant="body2" mt={1}>
      Selected file: {resumeFile.name}
    </Typography>
  )}
  <div className="mt-3">
    <button type="submit" className="btn btn-success">
      Submit Form
    </button>
  </div>
</Box>

        </form>
      </Modal>
    </section>
  );
};

export default FeaturedCandidate;
