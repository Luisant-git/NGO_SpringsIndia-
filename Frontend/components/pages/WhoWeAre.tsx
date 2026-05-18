import React from 'react';
import aboutImage from '../../assets/about.jpeg';

const WhoWeAre: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="cta-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Who We Are</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            A Light in someone's darkest hour, to show the path of 'HOPE' and 'SUCCESS'.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={aboutImage}
              alt="Community gathering"
              className="rounded-lg shadow-2xl w-full h-106 object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About Springs India Foundation</h2>
            <p className="text-gray-700 leading-relaxed">
              We are registered with the{" "}
              <span className="font-bold">Government of India</span> and
              authorized to receive{" "}
              <span className="font-bold">CSR funding</span> under CSR-1
              certification. Our mission is simple yet powerful — to empower
              people, uplift communities, and build a sustainable and inclusive
              future for all.
              <br />
              <br />
              <span className="font-bold">
                Springs India Foundation- A Light in someone's darkest hour, to
                show the path of <span className="text-orange-700">'HOPE'</span>{" "}
                and <span className="text-green-700">'SUCCESS'</span>.
              </span>
              <br />
              <br />
              Springs India Foundation is a Non -Profit Organisation and an NGO
              - a social welfare trust that works for bringing in a social
              change in the community.
              <br />
              <br />
              <span className="font-bold text-gray-800">
                Springs India Foundation
              </span>{" "}
              is on a mission to serve the human community by transforming human
              lives, aiming at the betterment of women empowerment, Youth
              development, child welfare, general and indigenous community
              welfare and upliftment
              <br />
              <br />
              Springs India Foundation is a value-driven trust and serves
              towards national developmental goals, that impact the lives of the
              Women, Youth, Children and general and indigenous community
              through long-term, sustainable programs. The trust aims to develop
              the skills of the community and thus helps them to come out of
              poverty and achieve inclusive growth, development, and success
              with its main focus on education, mental health, skill
              development, livelihood and environment. The project and programs
              of the trust always focus on the Women, Youth and Child Skill
              development, general and indigenous community welfare that led
              towards a better, sustainable way of life for the weaker sections
              of society and enhances their livelihood.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
