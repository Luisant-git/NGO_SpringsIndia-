import React from 'react';
import governanceImg from '../../assets/Governance.jpg';

const registrations = [
    { name: "Trust Registration", status: "Registered", icon: "fas fa-certificate", color: "bg-green-500" },
    { name: "PAN", status: "Available", icon: "fas fa-id-card", color: "bg-blue-500" },
    { name: "12A", status: "Approved", icon: "fas fa-check-circle", color: "bg-green-500" },
    { name: "80G", status: "Approved", icon: "fas fa-shield-alt", color: "bg-green-500" },
    { name: "CSR-1", status: "Registered under MCA", icon: "fas fa-building", color: "bg-purple-500" },
    { name: "Annual Financial Audit", status: "Conducted", icon: "fas fa-chart-line", color: "bg-teal-500" }
];

const policies = [
    { name: "Child Protection & Safeguarding", purpose: "Ensuring safety & dignity of children", icon: "fas fa-child", color: "bg-pink-500" },
    { name: "Anti-Corruption & Ethics", purpose: "Zero-tolerance for fraud & misconduct", icon: "fas fa-gavel", color: "bg-red-500" },
    { name: "Financial Management", purpose: "Proper accounting, fund utilization & audits", icon: "fas fa-calculator", color: "bg-blue-500" },
    { name: "Data Protection & Privacy", purpose: "Protecting donor & beneficiary information", icon: "fas fa-lock", color: "bg-gray-600" },
    { name: "Volunteer & Staff Code of Conduct", purpose: "Professional behaviour & responsibilities", icon: "fas fa-users-cog", color: "bg-orange-500" },
    { name: "Gender Equality & Inclusion", purpose: "Ensuring dignity & equal opportunity for all", icon: "fas fa-balance-scale", color: "bg-purple-500" }
];

const reports = [
    { type: "Annual Reports", years: ["2022-2023.pdf", "2023-2024.pdf", "2024-2025.pdf"], icon: "fas fa-file-alt", color: "bg-orange-500" },
    { type: "Financial Reports", years: ["2022-2023.pdf", "2023-2024.pdf"], icon: "fas fa-chart-pie", color: "bg-orange-500" }
];

const governanceHighlights = [
    "100% Transparency in Operations",
    "Regular Third-Party Audits",
    "Board Oversight & Accountability",
    "Ethical Decision Making",
    "Community-Centered Approach",
    "Zero Tolerance for Corruption"
];

const CheckItem: React.FC<{ text: string }> = ({ text }) => (
    <li className="flex items-start">
        <div className="flex-shrink-0">
            <i className="fas fa-check-circle mt-1" style={{color: '#2d7d32'}}></i>
        </div>
        <span className="ml-3 text-gray-700">{text}</span>
    </li>
);

const Governance: React.FC = () => {
    return (
        <div className="bg-gray-50">
            <section className="cta-gradient text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold">Governance & Transparency</h1>
                    <p className="mt-4 text-lg max-w-3xl mx-auto">
                        Building trust through accountability, ethics, and transparent operations. Good governance is the foundation of our impact.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Legal & Statutory Compliance</h2>
                    <p className="text-center text-gray-600 mb-12">Fully registered and compliant with Indian legal framework for NGOs</p>
                    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="px-6 py-4" style={{backgroundColor: '#00695c'}}>
                            <h3 className="text-xl font-semibold text-white">Compliance Status</h3>
                        </div>
                        <div className="divide-y divide-gray-200">
                            {registrations.map((reg, index) => (
                                <div key={reg.name} className="flex items-center justify-between p-6 hover:bg-gray-50 transition-colors">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-full" style={{background: 'linear-gradient(135deg, #ff6f00 0%, #d32f2f 100%)'}}>
                                            <i className={`${reg.icon} text-xl text-white`}></i>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900">{reg.name}</h4>
                                            <p className="text-sm text-gray-500">Registration & Compliance</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <span className="px-4 py-2 text-sm font-semibold text-green-800 bg-green-100 rounded-full">{reg.status}</span>
                                        <i className="fas fa-check-circle text-2xl text-green-500"></i>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800">Our Governance Commitment</h2>
                        <p className="mt-4 text-gray-600">We maintain the highest standards of governance to ensure every rupee creates maximum impact for the communities we serve.</p>
                        <ul className="mt-6 space-y-3">
                            {governanceHighlights.map(item => <CheckItem key={item} text={item} />)}
                        </ul>
                    </div>
                    <div>
                        <img src={governanceImg} alt="Governance meeting" className="rounded-lg shadow-xl" />
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Policies & Frameworks</h2>
                    <p className="text-center text-gray-600 mb-12">Comprehensive policies ensuring ethical operations and stakeholder protection</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {policies.map(policy => (
                            <div key={policy.name} className="bg-white p-6 rounded-lg shadow-lg card-hover">
                                <div className="flex items-center justify-center h-16 w-16 rounded-full icon-container mx-auto">
                                    <i className={`${policy.icon} text-3xl`}></i>
                                </div>
                                <h3 className="mt-4 text-lg font-semibold text-center text-gray-900">{policy.name}</h3>
                                <p className="mt-2 text-gray-600 text-center text-sm">{policy.purpose}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Reports & Documentation</h2>
                    <p className="text-center text-gray-600 mb-12">Access our annual reports and financial statements for complete transparency</p>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        {reports.map(report => (
                            <div key={report.type} className="bg-white p-8 rounded-lg shadow-lg card-hover">
                                <div className={`flex items-center justify-center h-16 w-16 rounded-full ${report.color} mx-auto`}>
                                    <i className={`${report.icon} text-3xl text-white`}></i>
                                </div>
                                <h3 className="mt-4 text-xl font-semibold text-center text-gray-900">{report.type}</h3>
                                <div className="mt-6 space-y-3">
                                    {report.years.map(year => (
                                        <a key={year} href="#" className="flex items-center justify-between p-4 border rounded-lg text-gray-600 hover:bg-gray-50 hover:text-indigo-700 transition-colors">
                                            <span className="font-medium">{year}</span>
                                            <i className="fas fa-download text-orange-600"></i>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20" style={{backgroundColor: '#e8f5e8'}}>
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold" style={{color: '#2d7d32'}}>Transparency in Action</h2>
                    <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
                        Our commitment to transparency ensures that donors, partners, and communities can trust our work and see the real impact of their contributions.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#" className="btn-primary py-3 px-8 rounded-lg">
                            View All Reports
                        </a>
                        <a href="#" className="bg-white text-gray-700 border border-gray-300 py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors">
                            Contact Governance Team
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Governance;