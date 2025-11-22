import React from 'react';
import { Link } from 'react-router-dom';
import { FaCertificate, FaIdCard, FaCheckCircle, FaShieldAlt, FaBuilding, FaChartLine, FaUniversity, FaChild, FaGavel, FaCalculator, FaLock, FaUsersCog, FaBullhorn, FaBalanceScale, FaUsers, FaHeart, FaCog, FaFileAlt, FaDownload, FaHandshake, FaChalkboardTeacher, FaHandsHelping, FaShareAlt } from 'react-icons/fa';

const registrations = [
    { name: "Trust Registration", status: "Registered", icon: FaCertificate },
    { name: "PAN", status: "Available", icon: FaIdCard },
    { name: "12A", status: "Approved", icon: FaCheckCircle },
    { name: "80G", status: "Approved", icon: FaShieldAlt },
    { name: "CSR-1", status: "Registered under MCA", icon: FaBuilding },
    { name: "Annual Financial Audit", status: "Conducted", icon: FaChartLine },
    { name: "Banking & Accounting", status: "Dedicated NGO bank account & bookkeeping", icon: FaUniversity }
];

const governanceStructure = [
    "Board of Trustees",
    "Advisory Committee (education, social work, corporate mentors)",
    "Finance & Compliance Oversight",
    "Volunteer Management Cell",
    "Program & Community Development Team",
    "Child Safety & Safeguarding Committee"
];

const policies = [
    { name: "Child Protection & Safeguarding Policy", purpose: "Ensuring safety & dignity of children", icon: FaChild },
    { name: "Anti-Corruption & Ethics Policy", purpose: "Zero-tolerance for fraud & misconduct", icon: FaGavel },
    { name: "Financial Management Policy", purpose: "Proper accounting, fund utilization & audits", icon: FaCalculator },
    { name: "Data Protection & Privacy Policy", purpose: "Protecting donor & beneficiary information", icon: FaLock },
    { name: "Volunteer & Staff Code of Conduct", purpose: "Professional behavior & responsibilities", icon: FaUsersCog },
    { name: "Whistleblower Policy", purpose: "Safe reporting of any concern or violations", icon: FaBullhorn },
    { name: "Gender Equality & Inclusion Policy", purpose: "Ensuring dignity & equal opportunity for all", icon: FaBalanceScale }
];

const transparencyPractices = [
    "Annual audited financial statements",
    "CSR & donor utilization certificates",
    "Program monitoring & field reports",
    "Impact measurement & dashboards",
    "Public communication & community feedback channels"
];

const ethicalPromises = [
    "Responsible stakeholder engagement",
    "Respect for community dignity & culture",
    "Safe environment for children & women",
    "Honest reporting — no exaggerated claims",
    "Ethical volunteer & staff conduct"
];

const boardOversight = [
    "Strategic planning",
    "Financial management",
    "Project monitoring",
    "Legal compliance",
    "Safeguarding & ethics"
];

const annualReports = [
    "2022-2023.pdf",
    "2023-2024.pdf",
    "2024-2025.pdf"
];

const Governance: React.FC = () => {
    return (
        <div className="bg-gray-50">
            <section className="cta-gradient text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold">Governance & Policies</h1>
                    <p className="mt-4 text-lg max-w-4xl mx-auto">
                        Committed to Transparency, Ethics & Accountability
                    </p>
                    <p className="mt-4 max-w-4xl mx-auto">
                        At Springs India Foundation, good governance is our foundation. We operate with ethical practices, strong compliance, and transparent reporting to ensure donor trust and community confidence. We follow statutory norms, internal controls, and structured processes to deliver sustainable social impact with accountability.
                    </p>
                </div>
            </section>

            {/* Legal & Statutory Compliance */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Legal & Statutory Compliance</h2>
                    <p className="text-center text-gray-600 mb-12">We are registered and compliant with the legal framework for NGOs in India.</p>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-6">
                            {registrations.map((reg, index) => (
                                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md flex items-center">
                                    <reg.icon className="text-2xl mr-4" style={{color: '#00695c'}} />
                                    <div>
                                        <h4 className="font-bold text-gray-800">{reg.name}</h4>
                                        <p className="text-gray-600">{reg.status}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Governance Structure */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Governance Structure</h2>
                    <p className="text-center text-gray-600 mb-12">We follow a structured governance system with:</p>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {governanceStructure.map((item, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                                    <FaUsers className="text-3xl mb-4 mx-auto" style={{color: '#ff6f00'}} />
                                    <p className="text-gray-700 font-medium">{item}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-12">
                            <div className="bg-white p-8 rounded-lg shadow-lg">
                                <p className="text-lg font-semibold" style={{color: '#00695c'}}>
                                    Decision-making is based on transparency, accountability & community needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Policies & Frameworks */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Policies & Frameworks</h2>
                    <p className="text-center text-gray-600 mb-12">To ensure ethical and safe operations, we follow documented policies:</p>
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-6">
                            {policies.map((policy, index) => (
                                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                                    <div className="flex items-start">
                                        <policy.icon className="text-2xl mr-4 mt-1" style={{color: '#ff6f00'}} />
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-800 mb-2">{policy.name}</h3>
                                            <p className="text-gray-600">{policy.purpose}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Transparency & Accountability */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Transparency & Accountability Practices</h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <div className="space-y-4">
                                    {transparencyPractices.map((practice, index) => (
                                        <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-md">
                                            <FaCheckCircle className="text-xl mr-3 mt-1" style={{color: '#00695c'}} />
                                            <span className="text-gray-700">{practice}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-lg">
                                <h3 className="text-xl font-bold mb-4" style={{color: '#00695c'}}>Fund Utilization Promise</h3>
                                <p className="text-lg font-semibold text-gray-700">
                                    All funds are utilised for approved social development programs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ethical Partnership Promise */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Ethical Partnership Promise</h2>
                    <div className="max-w-4xl mx-auto">
                        <p className="text-center text-lg text-gray-700 mb-8">We ensure:</p>
                        <div className="grid md:grid-cols-2 gap-6">
                            {ethicalPromises.map((promise, index) => (
                                <div key={index} className="flex items-start bg-gray-50 p-6 rounded-lg shadow-md">
                                    <FaHeart className="text-xl mr-3 mt-1" style={{color: '#ff6f00'}} />
                                    <span className="text-gray-700">{promise}</span>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-12">
                            <div className="bg-gradient-to-r from-teal-50 to-emerald-50 p-8 rounded-lg border-l-4" style={{borderColor: '#00695c'}}>
                                <p className="text-xl font-bold" style={{color: '#00695c'}}>
                                    Our values guide every decision and every partnership.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Board & Leadership Oversight */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Board & Leadership Oversight</h2>
                    <div className="max-w-4xl mx-auto">
                        <p className="text-center text-lg text-gray-700 mb-8">
                            Our board consists of professionals committed to social upliftment and transparent governance.
                        </p>
                        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                            <h3 className="text-xl font-bold mb-6 text-center" style={{color: '#00695c'}}>They oversee:</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {boardOversight.map((item, index) => (
                                    <div key={index} className="flex items-center">
                                        <FaCog className="text-lg mr-3" style={{color: '#ff6f00'}} />
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-gray-600 italic">
                                Names & profiles will be listed below (we will create crisp professional bios later)
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Annual and Financial Reports */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Annual and Financial Reports</h2>
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                            <div className="text-center mb-6">
                                <FaFileAlt className="text-4xl mx-auto" style={{color: '#ff6f00'}} />
                            </div>
                            <h3 className="text-xl font-bold text-center mb-6" style={{color: '#00695c'}}>Download Our Reports</h3>
                            <div className="space-y-4">
                                {annualReports.map((report, index) => (
                                    <div key={index} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                        <div className="flex items-center">
                                            <FaDownload className="text-lg mr-3" style={{color: '#00695c'}} />
                                            <span className="font-medium text-gray-800">{report}</span>
                                        </div>
                                        <button className="px-4 py-2 text-white rounded-lg hover:opacity-90 transition-opacity" style={{backgroundColor: '#ff6f00'}}>
                                            Download
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Governance Cell */}
            <section className="py-20 text-gray-800" style={{backgroundColor: 'rgb(232, 245, 232)'}}>
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8" style={{color: '#00695c'}}>Report Concerns / Contact Governance Cell</h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto">
                        For any compliance or governance-related communication:
                    </p>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <Link to="/contact" className="flex items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group">
                            <FaHandshake className="text-2xl mr-4" style={{color: '#00695c'}} />
                            <div className="text-left">
                                <h4 className="font-bold" style={{color: '#00695c'}}>Partner with us (CSR)</h4>
                                <p className="text-sm text-gray-600">APPLY</p>
                            </div>
                        </Link>
                        
                        <Link to="/contact" className="flex items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group">
                            <FaChalkboardTeacher className="text-2xl mr-4" style={{color: '#00695c'}} />
                            <div className="text-left">
                                <h4 className="font-bold" style={{color: '#00695c'}}>Be a Teacher/Mentor/Trainer</h4>
                                <p className="text-sm text-gray-600">APPLY</p>
                            </div>
                        </Link>
                        
                        <Link to="/contact" className="flex items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group">
                            <FaHandsHelping className="text-2xl mr-4" style={{color: '#00695c'}} />
                            <div className="text-left">
                                <h4 className="font-bold" style={{color: '#00695c'}}>Volunteer / Intern</h4>
                                <p className="text-sm text-gray-600">APPLY</p>
                            </div>
                        </Link>
                        
                        <Link to="/contact" className="flex items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group">
                            <FaHeart className="text-2xl mr-4" style={{color: '#ff6f00'}} />
                            <div className="text-left">
                                <h4 className="font-bold" style={{color: '#ff6f00'}}>Fund / Support a Program</h4>
                                <p className="text-sm text-gray-600">DONATE NOW</p>
                            </div>
                        </Link>
                        
                        <Link to="/contact" className="flex items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group">
                            <FaShareAlt className="text-2xl mr-4" style={{color: '#00695c'}} />
                            <div className="text-left">
                                <h4 className="font-bold" style={{color: '#00695c'}}>Community Referrals/Collaboration</h4>
                                <p className="text-sm text-gray-600">REFER</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Governance;