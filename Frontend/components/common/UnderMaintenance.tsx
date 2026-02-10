import React from 'react';
import { Link } from 'react-router-dom';
import { FaTools } from 'react-icons/fa';

const UnderMaintenance: React.FC = () => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
            <div className="bg-white p-12 rounded-2xl shadow-2xl text-center max-w-md mx-4">
                <FaTools className="text-6xl mx-auto mb-6" style={{color: '#ff6f00'}} />
                <h2 className="text-3xl font-bold mb-4" style={{color: '#00695c'}}>Under Maintenance</h2>
                <p className="text-gray-700 text-lg mb-6">This page is currently being updated. Please check back soon.</p>
                <Link to="/" className="inline-block px-8 py-3 text-white rounded-lg hover:opacity-90 transition-opacity font-semibold" style={{backgroundColor: '#00695c'}}>Go to Home</Link>
            </div>
        </div>
    );
};

export default UnderMaintenance;
