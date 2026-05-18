import React from 'react';
import michaelImage from '../../assets/Michael.jpeg';
import jacobImage from '../../assets/Jacob.png';
import jubairaImage from '../../assets/Jubaira.png';

const AboutGovernance: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="cta-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Governance</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            Building trust through transparency, accountability, and ethical leadership
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-gray-700 leading-relaxed space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Governance at Springs India Foundation</h3>
              <p>
                At Springs India Foundation, governance is not merely an administrative responsibility — it is the foundation on which trust, accountability, transparency, and sustainable social impact are built. As a mission-driven organization committed to education, women empowerment, community welfare, and rural development, we believe that strong governance is essential to creating meaningful and lasting change in society.
              </p>
              <p className="mt-4">
                Our governance framework is guided by ethical leadership, responsible decision-making, and a deep commitment to the communities we serve. Every initiative undertaken by the Foundation is carefully planned, monitored, and evaluated to ensure that resources are utilized effectively and that the intended beneficiaries receive maximum impact.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">A Vision Rooted in Responsibility</h4>
              <p>
                The Foundation functions under the guidance of experienced professionals, educators, social workers, and development leaders who share a common vision of transforming lives through compassionate and sustainable interventions. The governing body works collectively to ensure that every project reflects the values and mission of the organization.
              </p>
              <p className="mt-4">
                We believe that true development happens when governance is people-centered. Therefore, our policies and practices are designed to uphold dignity, inclusion, equality, and community participation at every level.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">The Visionary Board of Trustees</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                    <img src={michaelImage} alt="Mr. Michael A" className="w-full h-full object-cover" />
                  </div>
                  <p className="font-semibold text-gray-900 text-lg mb-1">Mr. Michael A</p>
                  <p className="text-sm text-teal-600 font-medium mb-3">A visionary Educationist</p>
                  <p className="text-sm text-gray-700">Mr. Michael A with 27 years of experience in operating and executing projects under Women Empowerment, Youth development and Child Welfare. He carries with him years of rich experience in operating various institutions and implementing and executing various projects. His forward thinking skills and innovative ideas has brought laurels to the institutions and success in the projects.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                    <img src={jacobImage} alt="Mr. Jacob Belly" className="w-full h-full object-cover" />
                  </div>
                  <p className="font-semibold text-gray-900 text-lg mb-1">Mr. Jacob Belly</p>
                  <p className="text-sm text-teal-600 font-medium mb-3">Social Work Expert</p>
                  <p className="text-sm text-gray-700">Mr. Jacob Belly brings extensive experience in the field of social work through his involvement with various organizations. He has served as a member of committees responsible for channeling CSR initiatives and has actively contributed as Project Director of Globethics, headquartered in Geneva.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                    <img src={jubairaImage} alt="Ms. Jubaira" className="w-full h-full object-cover" />
                  </div>
                  <p className="font-semibold text-gray-900 text-lg mb-1">Ms. Jubaira</p>
                  <p className="text-sm text-teal-600 font-medium mb-3">Women Empowerment Advocate</p>
                  <p className="text-sm text-gray-700">Ms. Jubaira is a compassionate and dedicated individual who actively contributes to women's empowerment initiatives, counselling and teaching, with a strong commitment to supporting and uplifting communities.</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Legal & Statutory Compliance</h4>
              <p className="mb-4">We are registered and compliant with the legal framework for NGOs in India.</p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 font-semibold">Certificate / Registration</th>
                      <th className="text-left py-2 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr><td className="py-2">Trust Registration</td><td className="py-2"><i className="fas fa-check-circle text-green-600 mr-2"></i>Registered</td></tr>
                    <tr><td className="py-2">PAN</td><td className="py-2"><i className="fas fa-check-circle text-green-600 mr-2"></i>Available</td></tr>
                    <tr><td className="py-2">12A</td><td className="py-2"><i className="fas fa-check-circle text-green-600 mr-2"></i>Approved</td></tr>
                    <tr><td className="py-2">80G</td><td className="py-2"><i className="fas fa-check-circle text-green-600 mr-2"></i>Approved</td></tr>
                    <tr><td className="py-2">CSR-1</td><td className="py-2"><i className="fas fa-check-circle text-green-600 mr-2"></i>Registered under MCA</td></tr>
                    <tr><td className="py-2">Annual Financial Audit</td><td className="py-2"><i className="fas fa-check-circle text-green-600 mr-2"></i>Conducted</td></tr>
                    <tr><td className="py-2">Banking & Accounting</td><td className="py-2"><i className="fas fa-check-circle text-green-600 mr-2"></i>Dedicated NGO bank account & bookkeeping</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Committed to Transparency, Ethics & Accountability</h4>
              <p className="mb-4">
                At Springs India Foundation, good governance is our foundation. We operate with ethical practices, strong compliance, and transparent reporting to ensure donor trust and community confidence.
              </p>
              <p className="mb-4">
                We follow statutory norms, internal controls, and structured processes to deliver sustainable social impact with accountability.
              </p>
              <p className="font-semibold mb-2">We are committed to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Ethical utilization of funds and resources</li>
                <li>Compliance with statutory and regulatory requirements</li>
                <li>Transparent financial practices</li>
                <li>Fair and inclusive decision-making</li>
                <li>Responsible project management and monitoring</li>
              </ul>
              <p className="mt-4">
                Through these measures, we aim to build confidence among beneficiaries, partners, donors, volunteers, and stakeholders.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Transparency & Accountability Practices</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Annual audited financial statements</li>
                <li>CSR & donor utilization certificates</li>
                <li>Program monitoring & field reports</li>
                <li>Impact measurement & dashboards</li>
                <li>Public communication & community feedback channels</li>
              </ul>
              <p className="mt-4">
                All funds are utilised for approved social development programs.
              </p>
              <p>
                Decision-making is based on transparency, accountability & community needs.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Ethical Partnership Promise</h4>
              <p className="mb-2 font-semibold">We ensure:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Responsible stakeholder engagement</li>
                <li>Respect for community dignity & culture</li>
                <li>Safe environment for children & women</li>
                <li>Honest reporting — no exaggerated claims</li>
                <li>Ethical volunteer & staff conduct</li>
              </ul>
              <p className="mt-4 italic">Our values guide every decision and every partnership.</p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Community-Centered Leadership</h4>
              <p>
                Our governance philosophy recognizes that communities themselves are important stakeholders in development. We encourage community participation, local leadership, and collaborative decision-making in our welfare initiatives, particularly in rural and underserved regions.
              </p>
              <p className="mt-4">
                Whether it is empowering rural women through educational training programs, supporting children's development, strengthening schools, or implementing community welfare projects, the Foundation ensures that the voices and needs of the people remain at the heart of every initiative.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Commitment to Ethical Social Impact</h4>
              <p className="mb-4">
                Springs India Foundation believes that social work must be carried out with compassion, professionalism, and accountability. We are dedicated to maintaining high standards of integrity in all partnerships, collaborations, and community engagements.
              </p>
              <p className="mb-2 font-semibold">Our governance approach helps us:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Strengthen institutional credibility</li>
                <li>Ensure sustainable program implementation</li>
                <li>Promote responsible leadership</li>
                <li>Build long-term partnerships</li>
                <li>Deliver measurable social impact</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Building a Better Future Together</h4>
              <p>
                Governance at Springs India Foundation is driven by the belief that every action taken today shapes the future of communities tomorrow. With integrity as our guiding principle and service as our mission, we continue to work towards building empowered communities, educated children, skilled women, and a more compassionate society.
              </p>
              <p className="mt-4">
                Through responsible governance and collective commitment, Springs India Foundation strives to become a trusted force for social transformation and inclusive development in India.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutGovernance;
