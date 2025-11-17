import React from 'react';
import { Link } from 'react-router-dom';

const partnershipTypes = [
    { title: "CSR Funding", description: "Support sustainable social impact projects aligned with CSR mandate.", icon: "fas fa-hand-holding-usd", color: "bg-blue-500" },
    { title: "Adopt-a-Village Program", description: "Transform a village through integrated development initiatives.", icon: "fas fa-home", color: "bg-green-500" },
    { title: "Adopt-a-School Program", description: "Providing curriculum support and infrastructure facilities.", icon: "fas fa-school", color: "bg-purple-500" },
    { title: "Employee Volunteering", description: "Staff mentoring, teaching, workshops, and awareness drives.", icon: "fas fa-users", color: "bg-orange-500" },
    { title: "Livelihood & Women Entrepreneurship", description: "Setting up skill units, micro-enterprise support, SHGs.", icon: "fas fa-female", color: "bg-pink-500" },
    { title: "Capacity Building Support", description: "Technology, training, research & innovation support.", icon: "fas fa-cogs", color: "bg-teal-500" }
];

const whyPartner = [
    "Deep grassroots presence & community trust",
    "Sustainable, scalable programs",
    "Proven education & empowerment models",
    "Dedicated project monitoring & field team",
    "Proven grassroots impact",
    "Community-driven, values-centered approach",
    "SDG-aligned programs & global development vision",
    "Strong governance, documentation & ethics"
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
                    <h1 className="text-4xl font-bold">CSR Partnership</h1>
                    <p className="mt-4 text-lg max-w-3xl mx-auto">
                        Partner with us to build sustainable social impact. Together, we can create lasting change.
                    </p>
                </div>
            </section>
            
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Ways Corporates Can Partner with Us</h2>
                    <p className="text-center text-gray-600 mb-12">We offer multiple partnership pathways to match CSR goals, community needs, and sustainable outcomes.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {partnershipTypes.map(pt => (
                            <div key={pt.title} className="bg-white p-8 rounded-lg shadow-lg card-hover">
                                <div className="flex items-center justify-center h-16 w-16 rounded-full icon-container mx-auto">
                                    <i className={`${pt.icon} text-3xl`}></i>
                                </div>
                                <h3 className="mt-6 text-xl font-semibold text-center text-gray-900">{pt.title}</h3>
                                <p className="mt-2 text-gray-600 text-center">{pt.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800">Why Partner With Us?</h2>
                        <p className="mt-4 text-gray-600">Our work is rooted in values, dignity, and measurable impact. We bring emotional connection and grassroots trust—you bring resources and vision.</p>
                        <ul className="mt-6 space-y-3">
                            {whyPartner.map(item => <CheckItem key={item} text={item} />)}
                        </ul>
                    </div>
                     <div>
                        <img src="https://img.freepik.com/free-photo/handshake-businessmen_1098-742.jpg?semt=ais_hybrid&w=740&q=80" alt="Partnership meeting" className="rounded-lg shadow-xl" />
                    </div>
                </div>
            </section>
            
            <section className="py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Corporate CSR Benefits</h2>
                     <p className="text-center text-gray-600 mb-8">We believe in co-creating solutions and building long-term social value.</p>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {csrBenefits.map(benefit => (
                            <div key={benefit} className="bg-white p-6 rounded-lg shadow-md flex items-center card-hover">
                                <i className="fas fa-trophy text-2xl" style={{color: '#ff6f00'}}></i>
                                <p className="ml-4 text-gray-700 text-left">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="py-20" style={{backgroundColor: 'rgb(232, 245, 232)'}}>
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold" style={{color: '#00695c'}}>Let's Build Impact Together</h2>
                    <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
                        We invite corporates, institutions, and foundations to join hands in strengthening communities and building a future of dignity and opportunity.
                    </p>
                    <Link to="/contact" className="mt-8 inline-block btn-primary py-4 px-10 rounded-lg">
                        Connect with Our CSR Team
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Partnerships;