import React from 'react'
import { Link } from 'react-router-dom'

const AboutArea = () => {
  return (
    <section className="jm-about-area pt-95 pb-50">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-6 col-lg-7">
                    <div className="jm-about-wrap mb-50">
                        <div className="jm-section-title mb-30">
                            <span className="subtitle">Our About Us</span>
                          
                            <p className="text mb-30">Welcome to RukmarInfotech.com where we connect talented freelancers with top staffing firms in the US. Our goal is to help freelancers thrive in a competitive job market. Our mission is to provide freelancers with access to valuable opportunities in the US staffing industry, while also helping our clients find the right talent to grow their businesses.</p>
                        </div>
                          <h2 className="title mb-20">What Makes Us Different?</h2>
                        <div className="jm-about-content mb-40">
                            <div className="jm-about-content-item">
                                <div className="jm-about-item-info mb-15">
                                    <div className="jm-about-item-icon">
                                        <span><i className="fa-thin fa-layer-group"></i></span>
                                    </div>
                                    
                                    <div className="jm-about-item-head">
                                        <h4 className="title"><a href="jobslab-service-details.html">Focus on Freelancers:</a></h4>
                                    </div>
                                </div>
                                <div className="jm-about-item-text">
                                    <p>We understand the specific needs of freelancers and tailor our services to support their success in the US staffing landscape.</p>
                                </div>
                            </div>
                            <div className="jm-about-content-item">
                                <div className="jm-about-item-info mb-15">
                                    <div className="jm-about-item-icon">
                                        <span><i className="fa-thin fa-copy"></i></span>
                                    </div>
                                    <div className="jm-about-item-head">
                                        <h4 className="title"><a href="jobslab-service-details.html">Expert Knowledge of US Staffing:</a></h4>
                                    </div>
                                </div>
                                <div className="jm-about-item-text">
                                    <p>With our vast industry experience, we match freelancers with companies that align with their skills and career aspirations.</p>
                                </div>
                            </div>
                        </div>
                        <div className="jm-about-content mb-40">
                            <div className="jm-about-content-item">
                                <div className="jm-about-item-info mb-15">
                                    <div className="jm-about-item-icon">
                                        <span><i className="fa-thin fa-layer-group"></i></span>
                                    </div>
                                    
                                    <div className="jm-about-item-head">
                                        <h4 className="title"><a href="jobslab-service-details.html">Simplified Process:</a></h4>
                                    </div>
                                </div>
                                <div className="jm-about-item-text">
                                    <p>We streamline the hiring process from initial connection to onboarding, ensuring an easy experience for both freelancers and clients.</p>
                                </div>
                            </div>
                   
                        </div>
                        {/* <div className="jm-about-content-btn">
                            <Link to="/jobCategoryPage" className="jm-theme-btn">All Categories</Link>
                        </div> */}
                    </div>
                </div>
                <div className="col-xl-6 col-lg-5">
                    <div className="jm-about-img ml-40 mb-50">
                        <img className="jm-img-1" src="assets/img/about/home-1-about-1.jpg" alt=""/>
                        <img className="jm-img-2" src="assets/img/about/home-1-about-2.jpg" alt=""/>
                        <img className="jm-img-3" src="assets/img/about/home-1-about-3.jpg" alt=""/>
                    </div>
                </div>
            </div>
            <p>At RukmarInfotech, we focus on building strategic partnerships that promote growth, drive innovation, and lead to success. We recognize that collaboration is essential in today’s fast-paced market, and we strive to create connections that benefit everyone involved. Whether you are a freelancer seeking flexible work opportunities or a staffing firm in the United States looking to attract and keep top talent, we are here to connect your needs with the right resources. Our aim is to provide value and satisfaction to both freelancers and staffing firms, helping us create a successful ecosystem together.</p>
        </div>
    </section>
  )
}

export default AboutArea