import React, { useEffect, useState } from 'react';
import { Spin, Alert } from 'antd';
import { useDispatch } from 'react-redux';
import './List.css'; // Import the CSS file
import ListTHeDAte from './ListTHeDAte';

const GridJobs = ({jobs}) => {
  

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
      className="w-100"
    >
      {jobs && jobs?.length > 0 ? (
        jobs?.map((job) => <ListTHeDAte job={job} />)
      ) : (
        <div className="col-12">
          <Alert message="No jobs available." type="info" showIcon />
        </div>
      )}
    </div>
  );
};

export default GridJobs;
