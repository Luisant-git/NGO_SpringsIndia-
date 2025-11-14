import React from 'react';
import { Link } from 'react-router-dom';

const partnershipTypes = [
    { title: "CSR Funding", description: "Support sustainable social impact projects aligned with CSR mandate." },
    { title: "Adopt-a-Village Program", description: "Transform a village through integrated development initiatives." },
    { title: "Adopt-a-School Program", description: "Providing curriculum support and infrastructure facilities." },
    { title: "Employee Volunteering", description: "Staff mentoring, teaching, workshops, and awareness drives." },
    { title: "Livelihood & Women Entrepreneurship", description: "Setting up skill units, micro-enterprise support, SHGs." },
    { title: "Capacity Building Support", description: "Technology, training, research & innovation support." }
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
                            <div key={pt.title} className="bg-white p-8 rounded-lg shadow-lg border-t-4 card-hover" style={{borderColor: '#ff6f00'}}>
                                <h3 className="text-xl font-bold" style={{color: '#00695c'}}>{pt.title}</h3>
                                <p className="mt-3 text-gray-600">{pt.description}</p>
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
                        <img src="https://picsum.photos/seed/partner/600/450" alt="Partnership meeting" className="rounded-lg shadow-xl" />
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
            
            <section className="py-20" style={{backgroundColor: '#e0f2f1'}}>
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