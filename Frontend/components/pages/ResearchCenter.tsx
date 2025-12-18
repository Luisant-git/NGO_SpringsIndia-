import React from 'react';
import { Link } from 'react-router-dom';

const ResearchCenter: React.FC = () => {
    const objectives = [
        "Provide after-school education, digital literacy, and STEM learning for rural & tribal children.",
        "Equip women and youth with employable skills, entrepreneurship support, and market linkages.",
        "Incubate rural and indigenous livelihood ideas through training, mentoring, and seed support.",
        "Conduct research on rural development, livelihoods, tribal issues, and climate challenges.",
        "Promote environmental sustainability, green skills, and climate adaptation innovations."
    ];

    const keyComponents = [
        {
            title: "Learning & Education Lab",
            icon: "fas fa-laptop",
            features: [
                "After-school digital centre",
                "STEM & robotics kits",
                "Foundational literacy & numeracy programs",
                "Teacher capacity-building modules"
            ]
        },
        {
            title: "Women & Youth Skill Hub",
            icon: "fas fa-female",
            features: [
                "Tailoring, design, handicrafts",
                "Digital skills & entrepreneurship",
                "Food processing & micro-enterprise development",
                "Career guidance & job placement support"
            ]
        },
        {
            title: "Rural Livelihood Innovation Incubator",
            icon: "fas fa-lightbulb",
            features: [
                "Indigenous product development (honey, herbs, bamboo crafts)",
                "Agri-tech and eco-friendly product innovation",
                "Business mentoring",
                "CSR-supported seed funds"
            ]
        },
        {
            title: "Research & Knowledge Wing",
            icon: "fas fa-search",
            features: [
                "Rural baseline surveys & community assessments",
                "Tribal welfare research",
                "Climate vulnerability & environmental studies",
                "Annual Rural Development Reports"
            ]
        },
        {
            title: "Environment & Climate Innovation Lab",
            icon: "fas fa-leaf",
            features: [
                "Green skills training (solar, waste management, EV basics)",
                "Native tree nurseries & river ecosystem projects",
                "Climate action awareness",
                "Forest-fringe community engagement"
            ]
        }
    ];

    const beneficiaries = [
        { name: "Children", icon: "fas fa-child" },
        { name: "Women from low-income communities", icon: "fas fa-female" },
        { name: "Rural & tribal youth", icon: "fas fa-users" },
        { name: "Indigenous households", icon: "fas fa-home" },
        { name: "Community-based institutions", icon: "fas fa-building" },
        { name: "Local schools & SHGs", icon: "fas fa-school" }
    ];

    const csrCategories = [
        "Education",
        "Women empowerment",
        "Livelihood enhancement",
        "Environmental sustainability",
        "Rural development",
        "Skill development",
        "Tribal/Indigenous welfare"
    ];

    return (
        <div className="bg-gray-50">
            <section className="cta-gradient text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold">Research, Learning and Innovation Centre</h1>
                    <p className="mt-4 text-lg max-w-3xl mx-auto">
                        Springs India Foundation (Research, Learning and Innovation Centre)
                    </p>
                </div>
            </section>

            {/* About Us */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">About Us</h2>
                    <div className="max-w-4xl mx-auto">
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Springs India Foundation proposes to establish the Research, Learning & Innovation Centre (RLIC) — a pioneering hub designed to empower rural, low-income, and indigenous communities through education, skill development, livelihood innovation, and sustainable solutions.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            RLIC will serve as a knowledge centre, training facility, and rural incubation space, addressing the developmental needs of children, women, youth, and tribal families in Coimbatore, Mettupalayam, and The Nilgiris.
                        </p>
                    </div>
                </div>
            </section>

            {/* Vision */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8">Vision</h2>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <p className="text-xl text-gray-700 italic leading-relaxed">
                                To create a forward-looking ecosystem where education, innovation, and community-driven solutions uplift general and indigenous communities and promote inclusive development.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Objectives */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Objectives</h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-6">
                            {objectives.map((objective, index) => (
                                <div key={index} className="flex items-start bg-gray-50 p-6 rounded-lg">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-4" style={{backgroundColor: '#00695c'}}>
                                        {index + 1}
                                    </div>
                                    <p className="text-gray-700 text-lg">{objective}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Components */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Key Components of RLIC</h2>
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {keyComponents.map((component, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="text-center mb-6">
                                        <i className={`${component.icon} text-4xl mb-4`} style={{color: '#ff6f00'}}></i>
                                        <h3 className="text-xl font-bold" style={{color: '#00695c'}}>{component.title}</h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {component.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start">
                                                <i className="fas fa-check-circle text-sm mr-3 mt-1" style={{color: '#00695c'}}></i>
                                                <span className="text-gray-700 text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Beneficiaries */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Beneficiaries</h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {beneficiaries.map((beneficiary, index) => (
                                <div key={index} className="flex items-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <i className={`${beneficiary.icon} text-3xl mr-4`} style={{color: '#ff6f00'}}></i>
                                    <span className="text-gray-700 font-medium">{beneficiary.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CSR & Government Alignment */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">CSR & Government Alignment</h2>
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                        {/* CSR Categories */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold mb-6" style={{color: '#00695c'}}>CSR Schedule VII Categories Supported</h3>
                            <div className="space-y-3">
                                {csrCategories.map((category, index) => (
                                    <div key={index} className="flex items-center">
                                        <i className="fas fa-check text-lg mr-3" style={{color: '#ff6f00'}}></i>
                                        <span className="text-gray-700">{category}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* SDG & National Priorities */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold mb-6" style={{color: '#00695c'}}>SDG Alignment & National Priorities</h3>
                            <div className="mb-6">
                                <h4 className="font-bold mb-3" style={{color: '#ff6f00'}}>SDG Alignment:</h4>
                                <p className="text-gray-700 mb-6">SDG 1, 4, 5, 8, 10, 13, 15, 17</p>
                            </div>
                            <div>
                                <h4 className="font-bold mb-3" style={{color: '#ff6f00'}}>National Priorities:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['Digital India', 'Skill India', 'Atmanirbhar Bharat', 'NEP', 'Tribal Development', 'Climate Action'].map((priority, index) => (
                                        <span key={index} className="px-3 py-1 text-sm rounded-full text-white" style={{backgroundColor: '#00695c'}}>
                                            {priority}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partnership Request */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8">Request for Partnership</h2>
                        <p className="text-lg text-gray-700 mb-8">
                            Springs India Foundation seeks CSR partnerships, philanthropic funding, and government collaborations to establish and operate RLIC Centres. Corporate Partners will gain measurable impact, visibility, community transformation, and alignment with national and global development goals.
                        </p>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            <Link to="/contact" className="flex items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group border-2 border-gray-200 hover:border-orange-300">
                                <i className="fas fa-handshake text-2xl mr-4" style={{color: '#00695c'}}></i>
                                <div className="text-left">
                                    <h4 className="font-bold" style={{color: '#00695c'}}>Partner with us (CSR)</h4>
                                    <p className="text-sm text-gray-600">APPLY</p>
                                </div>
                            </Link>
                            
                            <Link to="/contact" className="flex items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group border-2 border-gray-200 hover:border-orange-300">
                                <i className="fas fa-chalkboard-teacher text-2xl mr-4" style={{color: '#00695c'}}></i>
                                <div className="text-left">
                                    <h4 className="font-bold" style={{color: '#00695c'}}>Be a Teacher/Mentor/Trainer</h4>
                                    <p className="text-sm text-gray-600">APPLY</p>
                                </div>
                            </Link>
                            
                            <Link to="/contact" className="flex items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group border-2 border-gray-200 hover:border-orange-300">
                                <i className="fas fa-hands-helping text-2xl mr-4" style={{color: '#00695c'}}></i>
                                <div className="text-left">
                                    <h4 className="font-bold" style={{color: '#00695c'}}>Volunteer / Intern</h4>
                                    <p className="text-sm text-gray-600">APPLY</p>
                                </div>
                            </Link>
                            
                            <Link to="/contact" className="flex items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group border-2 border-gray-200 hover:border-orange-300">
                                <i className="fas fa-heart text-2xl mr-4" style={{color: '#00695c'}}></i>
                                <div className="text-left">
                                    <h4 className="font-bold" style={{color: '#00695c'}}>Fund / Support a Program</h4>
                                    <p className="text-sm text-gray-600">DONATE NOW</p>
                                </div>
                            </Link>
                            
                            <Link to="/contact" className="flex items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group border-2 border-gray-200 hover:border-orange-300">
                                <i className="fas fa-share-alt text-2xl mr-4" style={{color: '#00695c'}}></i>
                                <div className="text-left">
                                    <h4 className="font-bold" style={{color: '#00695c'}}>Community Referrals/Collaboration</h4>
                                    <p className="text-sm text-gray-600">REFER</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ResearchCenter;