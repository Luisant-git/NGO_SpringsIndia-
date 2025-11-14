import React from 'react';

function FaqArea() {
  return (
    <div>
      <section className="jm-about-area pt-95 pb-50">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-7">
              <div className="jm-about-wrap mb-50">
                <div className="jm-section-title mb-30">
                  <h5>
                    What happens if two agencies or Freelancers submit the same
                    candidate for a same job?
                  </h5>
                  <p>
                    The platform checks each candidate's name and email to
                    prevent duplicate job submissions. The agency or Freelancers
                    that gets the candidate's confirmation first will have
                    ownership, not the agency or Freelancers that enters the
                    information first.
                  </p>
                </div>
                <div className="jm-section-title mb-30">
                  <h5>
                    What if the employer already has a candidate I submitted?
                  </h5>
                  <p>
                    Candidates who have directly applied for a job or have had
                    discussions with the employer in the past 180 days are
                    regarded as the employer's candidates and will not qualify
                    for a placement fee.
                  </p>
                </div>
                <div className="jm-section-title mb-30">
                  <h5>
                    How long will I maintain ownership of the candidate I submit
                    on Rukmarinfotech?
                  </h5>
                  <p>
                    You will keep ownership of the candidate you submitted for
                    180 days from the submission date. If the client hires this
                    candidate for any position during that time, you will
                    receive a placement fee.
                  </p>
                </div>
                <div className="jm-section-title mb-30">
                  <h5>How and when do I get my placement fee?</h5>
                  <p>
                    We act as the primary vendor to simplify client payments. We
                    send an invoice to the client on the candidate's start date
                    and receive payment within 90 days. After that, we transfer
                    the payment to you. You can choose to receive your payment
                    by direct deposit to your bank account.
                  </p>
                </div>
                <div className="jm-section-title mb-30">
                  <h5>How does Rukmarinfotech works with recruiters?</h5>
                  <p>
                    Partnering with Rukmarinfotech is simple and beneficial.
                    They offer job listings from different employers, enabling
                    recruiters to earn fees for successful placements. To get
                    started, just register for free, browse available jobs, and
                    submit your candidates. You will receive payment when your
                    candidate is hired.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5">
              <div className="jm-about-img ml-40 mb-50">
                <img
                  className="jm-img-1"
                  src="assets/img/about/home-1-about-1.jpg"
                  alt=""
                />
                <img
                  className="jm-img-2"
                  src="assets/img/about/home-1-about-2.jpg"
                  alt=""
                />
                <img
                  className="jm-img-3"
                  src="assets/img/about/home-1-about-3.jpg"
                  alt=""
                />
              </div>
              <div className="jm-section-title mb-30 ms-4">
                <h5>What is the average placement fee?</h5>
                <p>
                  The average placement fee for jobs on Rukmarinfotech is over
                  $1000 and is displayed to recruiters next to each job listing.
                </p>
              </div>
            </div>
          </div>
          {/* <p>At RukmarInfotech, we focus on building strategic partnerships that promote growth, drive innovation, and lead to success. We recognize that collaboration is essential in today’s fast-paced market, and we strive to create connections that benefit everyone involved. Whether you are a freelancer seeking flexible work opportunities or a staffing firm in the United States looking to attract and keep top talent, we are here to connect your needs with the right resources. Our aim is to provide value and satisfaction to both freelancers and staffing firms, helping us create a successful ecosystem together.</p> */}
        </div>
      </section>
    </div>
  );
}

export default FaqArea;
