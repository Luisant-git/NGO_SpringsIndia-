import React, { useEffect, useState } from 'react';
import GridJobs from './GridJobs';
import TagFilter from './TagFilter';
import { useDispatch } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { Spin } from 'antd';
import { FiSearch, FiX } from 'react-icons/fi';
import { Slider } from '@mui/material';

const BrowseJob = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All category');
  const [jobType, setJobType] = useState([]);
  const [priceRange, setPriceRange] = useState([1, 5000000]);
  const [sortOption, setSortOption] = useState('default');

  const handleInputChange = (e) => setSearchTerm(e.target.value);
  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
  const handleJobTypeChange = (type) => {
    setJobType((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };
  const handlePriceRangeChange = (event, newValue) => setPriceRange(newValue);
  const clearSearch = () => setSearchTerm('');
  const handleSortChange = (e) => setSortOption(e.target.value);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_FOS_CLIENT_API}/auth/data`);
        const result = await response.json();
        setJobs(result.data);
        setFilteredJobs(result.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch jobs.');
        setLoading(false);
      }
    };
    fetchJobs();
  }, [dispatch]);

  useEffect(() => {
    const applyFilters = () => {
      let filtered = jobs
        .filter(job => job.Job_Opening_Status === 'In-progress')
        .filter(job => {
          const matchesSearch = job.Posting_Title.toLowerCase().includes(searchTerm.toLowerCase());
          const matchesCategory =
            selectedCategory === 'All category' || job.Industry === selectedCategory;
          const matchesJobType = jobType.length === 0 || jobType.includes(job.Job_Type);
          const matchesPrice = job.Commission >= priceRange[0] && job.Commission <= priceRange[1];
          return matchesSearch && matchesCategory && matchesJobType && matchesPrice;
        });

      if (sortOption === 'highToLow') {
        filtered = filtered.sort((a, b) => b.Commission - a.Commission);
      } else if (sortOption === 'lowToHigh') {
        filtered = filtered.sort((a, b) => a.Commission - b.Commission);
      } else if (sortOption === 'newJobs') {
        const today = new Date().toISOString().split('T')[0];
        filtered = filtered.filter(job => job.Created_Time.startsWith(today));
      }

      setFilteredJobs(filtered);
    };
    applyFilters();
  }, [searchTerm, selectedCategory, jobType, priceRange, jobs, sortOption]);

  const spinnerColor = 'green';

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spin style={{ color: spinnerColor }} size="large" />
        <style>
          {`
            .ant-spin .ant-spin-dot i {
              background-color: ${spinnerColor} !important;
            }
          `}
        </style>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-5">
        <Alert message="Error" description={error} type="error" showIcon />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="jm-browse-job-wrap mt-3 pb-60">
        <div className="row">
          <div className="col-6">
            <div className="jm-browse-job-sidebar-widget mb-35">
              <form action="#">
                <div className="search-bar-container" style={{ position: 'relative' }}>
                  <input
                    className="search_keyword input-width"
                    name="search_location"
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                    placeholder="Job Keywords..."
                    style={{ paddingRight: '40px' }}
                  />
                  {searchTerm ? (
                    <FiX
                      className="clear-icon"
                      onClick={clearSearch}
                      style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        cursor: 'pointer',
                      }}
                    />
                  ) : (
                    <FiSearch
                      className="search-icon"
                      style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        pointerEvents: 'none',
                      }}
                    />
                  )}
                </div>
              </form>
            </div>
          </div>
          <div className="col-6">
            <div className="jm-browse-job-sidebar-widget">
              <select
                name="category"
                className="mb-35"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="All category">All category</option>
                {/* <option value="Health Care">Health Care</option>
                <option value="Management">Management</option>
                <option value="Marketing">Marketing</option>
                <option value="UX/UI Developer">UX/UI Developer</option>
                <option value="WEB Developer">WEB Developer</option>
                <option value="Graphic designer">Graphic designer</option> */}
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-10 col-lg-10">
            <div className="jm-browse-job-tab mb-30 bg-white">
              <div className="jm-browse-job-tab-left">
                <p>There Are {filteredJobs.length} Jobs.</p>
              </div>
              <div className="jm-browse-job-tab-right">
                <p>Sort By:</p>
                <select name="sort" value={sortOption} onChange={handleSortChange}>
                  <option value="default">Default</option>
                  <option value="highToLow">Salary High to Low</option>
                  <option value="lowToHigh">Salary Low to High</option>
                  <option value="newJobs">New Jobs</option>
                </select>
              </div>
            </div>
            <GridJobs jobs={filteredJobs} />
          </div>
          <div className="col-xl-2 col-lg-2">
            <div className="jm-browse-job-sidebar p-3 ml-40 w-100 bg-white border">
              <h3 className="jm-browse-sidebar-widget-title jm-title">Job Type</h3>
              <div>
                {['Contract', 'Full time', 'Part Time', 'Internship'].map((type) => (
                  <label key={type} className="d-block">
                    <input
                      type="checkbox"
                      value={type}
                      checked={jobType.includes(type)}
                      onChange={() => handleJobTypeChange(type)}
                    />
                    {type}
                  </label>
                ))}
              </div>
              <h3 className="jm-browse-sidebar-widget-title jm-title">Filter by Salary</h3>
              <div className='jm-browse-range-price jm-browse-widget-toogle'>
                <div className='className="slider-range-amount mb-15"'>
                  <input
                    type="text"
                    value={`$${priceRange[0]} - $${priceRange[1]}`}
                    readOnly
                    className="amount w-75"
                  />
                  <Slider
                    value={priceRange}
                    onChange={handlePriceRangeChange}
                    valueLabelDisplay="auto"
                    max={1000000}
                    min={1}
                  />
                </div>
              </div>
              <TagFilter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseJob;
