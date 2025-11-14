import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactArea = () => {
  return (
    <section className="jm-contact-area pt-30 pb-100">
      <div className="container">
        {/* Header Section */}
        
        {/* Contact Section */}
        <div className="row">
          <div className="col-xl-4 col-lg-6">
            <div className="jm-contact-wrap mb-50 mb-lg-0">
              <h3>Contact Details</h3>
              <ul className="contact-details-list">
                <li className='mt-3'>
                  <FaMapMarkerAlt className="icon" /> <strong>USA:</strong> 1309 Coffeen Ave, Sheridan, Dover, DE 19906, USA
                </li>
                <li className='mt-3'>
                  <FaMapMarkerAlt className="icon" /> <strong>India:</strong> Nongthymmai, Shillong, Meghalaya, 793014
                </li>
                <li className='mt-3'>
                  <FaEnvelope className="icon" /> <strong>Email:</strong> Hr@rukmarinfotech.com
                </li>
                <li className='mt-3'>
                  <FaPhone className="icon" /> <strong>Mobile:</strong> +1 555 555 5555
                </li>
              </ul>
            </div>
          </div>
          
          {/* Map Section */}
          <div className="col-xl-8 col-lg-6">
            <div className="jm-contact-map ml-40">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d20861384.884785097!2d-107.17453852977084!3d44.2397566270802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s1309%20Coffeen%20Ave%20Sheridan%20Dover%2C%20DE%2019906%2C%20USA!5e0!3m2!1sen!2sin!4v1735199437126!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactArea;
