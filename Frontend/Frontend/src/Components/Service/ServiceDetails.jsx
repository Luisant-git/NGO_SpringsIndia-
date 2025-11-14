import React, { useState } from 'react';
import { Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { tabPanes } from '../../Data/JobsData';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
const ServiceDetails = () => {
  const [activeTab, setActiveTab] = useState('Web Development');

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="jm-service-details-area pt-100 pb-60 light-bg">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="jm-service-details-wrap">
              <div className="row align-items-start">
                <div className="col-xl-12 col-lg-12 order-0 order-lg-1">
                  <Tab.Content className="ml-40 mb-35">
                    {tabPanes.map((tabPane) => (
                      <Tab.Pane
                        key={tabPane.title}
                        eventKey={tabPane.title}
                        active={activeTab === tabPane.title}
                      >
                        <div
                          className="jm-service-details-content"
                          onClick={() => handleTabSelect(tabPane.title)}
                          style={{ cursor: 'pointer' }}
                        >
                          {/* <div className="jm-service-details-img w_img mb-25">
                            <img src={tabPane.image} alt="" />
                          </div> */}
                          <h3>RPO SERVICES</h3>
                          <p className="jm-text mb-0">
                            Rukmarinfotech offers Recruitment Process
                            Outsourcing (RPO) services throughout USA, catering
                            to both IT and non-IT sectors. As a prominent RPO
                            provider, we have successfully handled recruitment
                            for major companies in various cities. Our goal is
                            to connect organizations with exceptional
                            candidates, enabling them to meet their objectives
                            through our RPO services. Our expertise ensures that
                            recruiters receive candidates who can make
                            significant contributions. We focus on providing the
                            best-fit candidates from our talent pool, which
                            enhances your return on investment. We offer fully
                            customized RPO solutions that can be full, partial,
                            or hybrid based on your specific requirements. For
                            project-specific needs, Rukmarinfotech supplies
                            qualified candidates promptly to ensure deadlines
                            are met. We also offer support during peak periods
                            by supplying additional staff, which can be
                            withdrawn once they are no longer required, helping
                            to reduce costs and solidifying our role as a
                            preferred RPO provider. Our hiring process is
                            efficient and trustworthy, allowing us to build
                            strong business relationships. Many companies face
                            urgent staffing challenges but lack the necessary
                            internal recruitment resources. Rukmarinfotech
                            swiftly provides qualified candidates to your
                            locations. We excel in managing recruitment through
                            our RPO services while ensuring retention of team
                            members. Small businesses often struggle with
                            recruitment, which can impede their growth.
                            Rukmarinfotech assists these companies in building
                            effective teams through our RPO solutions. Reach out
                            to Rukmarinfotech. for your RPO needs and enhance
                            the benefits of our partnership.
                          </p>
                        </div>

                        <div className="mt-3">
                          <h4>Benefits of RPO for Companies : </h4>
                          <div>
                            <Typography variant="h6" gutterBottom>
                              Recruitment Highlights
                            </Typography>
                            <List sx={{ listStyleType: 'disc', pl: 2 }}>
                              <ListItem sx={{ display: 'list-item', p: 0 }}>
                                <ListItemText primary="Reviews recruitment processes and identifies areas for improvement." />
                              </ListItem>
                              <ListItem sx={{ display: 'list-item', p: 0 }}>
                                <ListItemText primary="Works with clients to develop effective hiring strategies." />
                              </ListItem>
                              <ListItem sx={{ display: 'list-item', p: 0 }}>
                                <ListItemText primary="Swiftly identifies and selects the best-fit candidates." />
                              </ListItem>
                              <ListItem sx={{ display: 'list-item', p: 0 }}>
                                <ListItemText primary="Monitors performance and offers recommendations to optimize ROI and support brand growth." />
                              </ListItem>
                            </List>
                          </div>
                        </div>
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
