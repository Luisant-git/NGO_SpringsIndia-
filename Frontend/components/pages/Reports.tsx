import React, { useState, useEffect } from 'react';
import { FaFileAlt, FaDownload } from 'react-icons/fa';

const Reports: React.FC = () => {
    const [reports, setReports] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchReports();
    }, []);

    const fetchReports = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/reports/published`);
            if (response.ok) {
                const data = await response.json();
                setReports(Array.isArray(data) ? data : []);
            }
        } catch (error) {
            console.error('Error fetching reports:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDownload = async (reportId: string, title: string) => {
        const url = `${import.meta.env.VITE_API_URL}/reports/${reportId}/download`;
        window.open(url, '_blank');
    };

    return (
        <div className="bg-gray-50">
            <section className="cta-gradient text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold">Annual and Financial Reports</h1>
                    <p className="mt-4 text-lg max-w-4xl mx-auto">
                        Access our annual reports and financial statements
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                            <div className="text-center mb-6">
                                <FaFileAlt className="text-4xl mx-auto" style={{color: '#ff6f00'}} />
                            </div>
                            <h3 className="text-xl font-bold text-center mb-6" style={{color: '#00695c'}}>Download Our Reports</h3>
                            <div className="space-y-4">
                                {loading ? (
                                    <div className="text-center py-8">
                                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
                                        <p className="mt-2 text-gray-600">Loading reports...</p>
                                    </div>
                                ) : reports.length > 0 ? (
                                    reports.map((report) => (
                                        <div key={report.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                            <div className="flex items-center">
                                                <FaDownload className="text-lg mr-3" style={{color: '#00695c'}} />
                                                <span className="font-medium text-gray-800">{report.title}</span>
                                            </div>
                                            <button 
                                                onClick={() => handleDownload(report.id, report.title)}
                                                className="px-4 py-2 text-white rounded-lg hover:opacity-90 transition-opacity" 
                                                style={{backgroundColor: '#ff6f00'}}
                                            >
                                                View
                                            </button>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-8">
                                        <FaFileAlt className="text-3xl mx-auto mb-4 text-gray-400" />
                                        <p className="text-gray-600">No reports available at the moment.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Reports;
