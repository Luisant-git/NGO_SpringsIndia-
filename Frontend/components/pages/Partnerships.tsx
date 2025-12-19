import React from 'react';
import { Link } from 'react-router-dom';

const csrFocusAreas = [
    { area: "Education & Digital Learning", programs: "School support, digital literacy, after-school learning,teacher training and scholarships", icon: "fas fa-graduation-cap" },
    { area: "Skill Development & Livelihoods", programs: "Vocational training, women skill centres, Learning hubs for kids,entrepreneurship support", icon: "fas fa-tools" },
    { area: "Women Empowerment", programs: "Self-help group support, leadership & life skills, income generation programs", icon: "fas fa-female" },
    { area: "Rural Development", programs: "Village transformation, water & sanitation, health awareness & nutrition support", icon: "fas fa-tractor" },
    { area: "Environment & Sustainability", programs: "Tree plantation, climate awareness, waste management & eco-initiatives", icon: "fas fa-leaf" },
    { area: "Community Well-being", programs: "Health camps, nutrition programs, youth development, senior citizen care", icon: "fas fa-heart" }
];

const partnershipTypes = [
    { title: "CSR Funding", description: "Support sustainable social impact projects aligned with CSR mandate", icon: "fas fa-hand-holding-usd" },
    { title: "Adopt-a-Village Program", description: "Transform a village through integrated development initiatives", icon: "fas fa-home" },
    { title: "Adopt-a-School Program", description: "Providing curriculum support and infrastructure facilities", icon: "fas fa-school" },
    { title: "Employee Volunteering", description: "Staff mentoring, teaching, workshops, and awareness drives", icon: "fas fa-users" },
    { title: "School & Community Development", description: "Infrastructure support, STEAM labs, libraries, digital classrooms", icon: "fas fa-building" },
    { title: "Livelihood & Women Entrepreneurship", description: "Setting up skill units, micro-enterprise support, SHGs", icon: "fas fa-female" },
    { title: "Capacity Building Support", description: "Technology, training, research & innovation support", icon: "fas fa-cogs" }
];

const documentation = [
    "CSR-1 Registration",
    "PAN & 12A",
    "80G (Tax Deduction)",
    "Annual Reports & Audited Statements",
    "Project Monitoring & MIS (Management Information System)",
    "Safeguarding & Governance Policies"
];

const impactReporting = [
    "Baseline assessment",
    "Measurable KPIs",
    "Monthly progress updates",
    "Beneficiary data & testimonials",
    "Impact dashboards & reports",
    "CSR utilization certificate & audit trail"
];

const whyPartner = [
    "Grassroots community reach",
    "Proven education & empowerment models",
    "Scalable programs with long-term sustainability",
    "Transparent fund utilization and reporting",
    "Motivated, mission-driven leadership",
    "Local networks and institutional partnerships"
];

const csrBenefits = [
    "Compliance with CSR Act (Companies Act 2013)",
    "Employee engagement & volunteering programs",
    "Brand visibility through community impact",
    "Annual CSR impact report & media outreach",
    "Recognition on website & events"
];

const CheckItem: React.FC<{ text: string }> = ({ text }) => (
    <li className="flex items-start">
        <div className="flex-shrink-0">
            <i className="fas fa-check-circle mt-1" style={{color: '#2d7d32'}}></i>
        </div>
        <span className="ml-3 text-gray-700">{text}</span>
    </li>
);

const Partnerships: React.FC = () => {
    return (
        <div className="bg-gray-50">
            <section className="cta-gradient text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold">CSR Partnerships</h1>
                    <p className="mt-4 text-lg max-w-4xl mx-auto">
                        Partner with Us to Build Sustainable Social Impact
                    </p>
                    <p className="mt-4 text-lg max-w-4xl mx-auto">
                        Springs India Foundation is a registered non-profit organisation recognised under the Government of India CSR-1 regulations. We collaborate with corporates, NGOs, institutions, philanthropies, and government agencies to implement high-impact, transparent, and scalable CSR projects across rural and semi-urban regions of Tamil Nadu.
                    </p>
                    <p className="mt-4 max-w-4xl mx-auto">
                        Our expertise lies in education, skill development, women empowerment, rural development, tribal welfare, environmental sustainability, and community welfare programs.
                    </p>
                </div>
            </section>

            {/* CSR Focus Areas */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our CSR Focus Areas</h2>
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {csrFocusAreas.map((item, index) => (
                                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <div className="flex items-center mb-4">
                                        <i className={`${item.icon} text-2xl mr-3`} style={{color: '#ff6f00'}}></i>
                                        <h3 className="text-lg font-bold" style={{color: '#00695c'}}>{item.area}</h3>
                                    </div>
                                    <p className="text-gray-700">{item.programs}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            {/* How Corporates Can Partner */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How Corporates Can Partner with Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {partnershipTypes.map((pt, index) => (
                            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                <div className="text-center mb-4">
                                    <i className={`${pt.icon} text-4xl`} style={{color: '#ff6f00'}}></i>
                                </div>
                                <h3 className="text-xl font-bold text-center mb-4" style={{color: '#00695c'}}>{pt.title}</h3>
                                <p className="text-gray-600 text-center">{pt.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Regulatory & Compliance */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-8">Regulatory & Compliance</h2>
                            <p className="text-lg text-gray-700 mb-6">
                                We ensure complete statutory compliance and transparency.
                            </p>
                            <h3 className="text-xl font-bold mb-4" style={{color: '#00695c'}}>Available Documentation:</h3>
                            <div className="space-y-3">
                                {documentation.map((doc, index) => (
                                    <div key={index} className="flex items-center">
                                        <i className="fas fa-check text-lg mr-3" style={{color: '#00695c'}}></i>
                                        <span className="text-gray-700">{doc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-8">Impact Measurement & Reporting</h2>
                            <p className="text-lg text-gray-700 mb-6">
                                We provide structured CSR reporting aligned with India's CSR governance standards:
                            </p>
                            <div className="space-y-3 mb-6">
                                {impactReporting.map((item, index) => (
                                    <div key={index} className="flex items-start">
                                        <i className="fas fa-chart-line text-lg mr-3 mt-1" style={{color: '#ff6f00'}}></i>
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-gradient-to-r from-teal-50 to-emerald-50 p-6 rounded-lg border-l-4" style={{borderColor: '#00695c'}}>
                                <p className="font-semibold" style={{color: '#00695c'}}>
                                    Your CSR contribution = measurable, transparent, accountable impact
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Why Partner With Us */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Partner With Springs India Foundation?</h2>
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                        {whyPartner.map((item, index) => (
                            <div key={index} className="flex items-start bg-white p-6 rounded-lg shadow-md">
                                <i className="fas fa-check-circle text-xl mr-4 mt-1" style={{color: '#00695c'}}></i>
                                <span className="text-gray-700">{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
                            <p className="text-lg font-semibold" style={{color: '#00695c'}}>
                                We believe in co-creating solutions and building long-term social value, not just completing projects.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Corporate CSR Benefits */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-12">Corporate CSR Benefits</h2>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                        {csrBenefits.map((benefit, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md flex items-start hover:shadow-lg transition-shadow">
                                <i className="fas fa-trophy text-2xl mr-4 mt-1" style={{color: '#ff6f00'}}></i>
                                <p className="text-gray-700 text-left">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Let's Build Impact Together */}
            <section className="py-20" style={{backgroundColor: 'rgb(232, 245, 232)'}}>
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8" style={{color: '#00695c'}}>Let's Build Impact Together</h2>
                    <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                        We invite corporates and institutions to join hands in strengthening communities and building a future of dignity and opportunity. We believe in co-creating solutions and building long-term social value, not just completing projects.
                    </p>
                    <p className="text-lg font-semibold mb-12" style={{color: '#00695c'}}>
                        Together, we can create lasting change.
                    </p>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <Link to="/contact" className="flex items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group">
                            <i className="fas fa-handshake text-2xl mr-4" style={{color: '#00695c'}}></i>
                            <div className="text-left">
                                <h4 className="font-bold" style={{color: '#00695c'}}>Partner with us (CSR)</h4>
                                <p className="text-sm text-gray-600">APPLY</p>
                            </div>
                        </Link>
                        
                        <Link to="/contact" className="flex items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group">
                            <i className="fas fa-chalkboard-teacher text-2xl mr-4" style={{color: '#00695c'}}></i>
                            <div className="text-left">
                                <h4 className="font-bold" style={{color: '#00695c'}}>Be a Teacher/Mentor/Trainer</h4>
                                <p className="text-sm text-gray-600">APPLY</p>
                            </div>
                        </Link>
                        
                        <Link to="/contact" className="flex items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group">
                            <i className="fas fa-hands-helping text-2xl mr-4" style={{color: '#00695c'}}></i>
                            <div className="text-left">
                                <h4 className="font-bold" style={{color: '#00695c'}}>Volunteer / Intern</h4>
                                <p className="text-sm text-gray-600">APPLY</p>
                            </div>
                        </Link>
                        
                        <Link to="/contact" className="flex items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group">
                            <i className="fas fa-heart text-2xl mr-4" style={{color: '#00695c'}}></i>
                            <div className="text-left">
                                <h4 className="font-bold" style={{color: '#00695c'}}>Fund / Support a Program</h4>
                                <p className="text-sm text-gray-600">DONATE NOW</p>
                            </div>
                        </Link>
                        
                        <Link to="/contact" className="flex items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group">
                            <i className="fas fa-share-alt text-2xl mr-4" style={{color: '#00695c'}}></i>
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

export default Partnerships;