import React from 'react';

const registrations = [
    { name: "Trust Registration", status: "Registered" },
    { name: "PAN", status: "Available" },
    { name: "12A", status: "Approved" },
    { name: "80G", status: "Approved" },
    { name: "CSR-1", status: "Registered under MCA" },
    { name: "Annual Financial Audit", status: "Conducted" }
];

const policies = [
    { name: "Child Protection & Safeguarding", purpose: "Ensuring safety & dignity of children" },
    { name: "Anti-Corruption & Ethics", purpose: "Zero-tolerance for fraud & misconduct" },
    { name: "Financial Management", purpose: "Proper accounting, fund utilization & audits" },
    { name: "Data Protection & Privacy", purpose: "Protecting donor & beneficiary information" },
    { name: "Volunteer & Staff Code of Conduct", purpose: "Professional behaviour & responsibilities" },
    { name: "Gender Equality & Inclusion", purpose: "Ensuring dignity & equal opportunity for all" }
];

const reports = [
    { type: "Annual Reports", years: ["2022-2023.pdf", "2023-2024.pdf", "2024-2025.pdf"] },
    { type: "Financial Reports", years: ["2022-2023.pdf", "2023-2024.pdf"] }
];

const Governance: React.FC = () => {
    return (
        <div className="bg-gray-50">
            <section className="bg-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-indigo-800">Governance & Policies</h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Committed to Transparency, Ethics & Accountability. At Springs India Foundation, good governance is our foundation.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Legal & Statutory Compliance</h2>
                    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                        <p className="text-gray-700 mb-6">We are registered and compliant with the legal framework for NGOs in India. Our decision-making is based on transparency, accountability & community needs.</p>
                        <ul className="space-y-3">
                            {registrations.map(reg => (
                                <li key={reg.name} className="flex justify-between items-center border-b pb-2">
                                    <span className="font-medium text-gray-800">{reg.name}</span>
                                    <span className="px-3 py-1 text-sm font-semibold text-green-800 bg-green-200 rounded-full">{reg.status}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Policies & Frameworks</h2>
                    <div className="max-w-4xl mx-auto">
                        <p className="text-center text-gray-600 mb-8">To ensure ethical and safe operations, we follow documented policies:</p>
                        <div className="shadow-lg rounded-lg overflow-hidden">
                            <table className="min-w-full bg-white">
                                <thead className="bg-indigo-700 text-white">
                                    <tr>
                                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Policy</th>
                                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Purpose</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                    {policies.map((policy, index) => (
                                        <tr key={policy.name} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                                            <td className="text-left py-3 px-4 font-medium">{policy.name}</td>
                                            <td className="text-left py-3 px-4">{policy.purpose}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-12">Annual & Financial Reports</h2>
                    <div className="flex flex-col md:flex-row justify-center gap-12">
                        {reports.map(report => (
                            <div key={report.type} className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/3">
                                <h3 className="text-2xl font-semibold text-indigo-700">{report.type}</h3>
                                <ul className="mt-6 space-y-3">
                                    {report.years.map(year => (
                                        <li key={year}>
                                            <a href="#" className="flex items-center justify-center p-3 border rounded-md text-gray-600 hover:bg-gray-100 hover:text-indigo-700 transition-colors">
                                                <i className="fas fa-file-pdf mr-3 text-red-500"></i>
                                                <span>{year}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Governance;