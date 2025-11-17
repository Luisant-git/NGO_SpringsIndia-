import React from 'react';

const timelineEvents = {
    '2022': [
        "October: Launch and Registration of Spell Bee",
        "Women empowerment workshop",
        "Conduct of Spell Bee Competition",
        "Awarding Function of Spell Bee",
        "Christmas Celebration",
    ],
    '2023': [
        "January: Cultural Celebration & Weekend Learning Activity",
        "February: Science Expo",
        "March: Counselling session",
        "April-May: Summer Camp Sessions 1 & 2",
        "June: After School Program-Activity",
        "July: Counselling for Children",
        "August: Independence Day",
        "September: Weekend Activity",
        "October: Cultural Activity",
        "November: Red Day Celebration",
        "December: Christmas Celebration",
    ],
    '2024': [
        "January: Cultural Celebration",
        "February: Weekend Activity",
        "March: Women's Day Award Function",
        "April-May: Summer Camp Sessions & Award Function",
        "June: Launch of Teacher Training",
        "July: Launch of Teacher Training in Coimbatore",
        "August: Independence Day",
        "September: Teachers Day",
        "October: Orientation Program for Teachers",
    ],
};

const coreValues = [
    { title: "Integrity & Transparency", description: "Upholding ethical practices and ensuring honesty and accountability in all initiatives." },
    { title: "Equity & Inclusion", description: "Ensuring every individual, especially from marginalized communities, deserves access to quality resources." },
    { title: "Empowerment & Self-Reliance", description: "Supporting women, youth, and children to build their skills, confidence, and economic independence." },
    { title: "Accountability", description: "Delivering clear, measurable results that contribute to meaningful community development." },
    { title: "Sustainability & Responsibility", description: "Working towards long-term, meaningful change and community development." },
    { title: "Holistic Development", description: "Nurturing intellectual, emotional, physical, and moral growth to create responsible citizens." },
];

const TimelineItem: React.FC<{ year: string; events: string[]; isLeft: boolean }> = ({ year, events, isLeft }) => (
    <div className={`mb-8 flex md:justify-between items-center w-full ${isLeft ? 'md:flex-row-reverse left-timeline' : 'right-timeline'}`}>
        <div className="order-1 w-5/12 hidden md:block"></div>
        <div className="z-20 flex items-center order-1 shadow-xl w-14 h-14 rounded-full flex-shrink-0" style={{background: 'linear-gradient(135deg, #ff6f00 0%, #d32f2f 100%)'}}>
            <h1 className="mx-auto font-semibold text-lg text-white">{year}</h1>
        </div>
        <div className="order-1 bg-white rounded-lg shadow-xl w-5/12 md:w-5/12 w-full ml-4 md:ml-0 px-6 py-4">
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {events.map((event, index) => <li key={index}>{event}</li>)}
            </ul>
        </div>
    </div>
);


const About: React.FC = () => {
    return (
        <div className="bg-gray-50">
            <section className="cta-gradient text-white py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center">About Us</h1>
                    <p className="mt-4 text-center text-lg max-w-3xl mx-auto">
                        A Light in someone's darkest hour, to show the path of 'HOPE' and 'SUCCESS'.
                    </p>
                </div>
            </section>
            
            <section className="py-16">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img src="https://t3.ftcdn.net/jpg/06/06/47/44/360_F_606474445_KndjSzp1pWoFZM5Jd0kRY67ilfyZeOst.jpg" alt="Community gathering" className="rounded-lg shadow-2xl w-full h-64 object-cover"/>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800">Who We Are</h2>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            Springs India Foundation is a Non-Profit Organisation and an NGO - a social welfare trust that works for bringing in a social change in the community. We are registered with the Government of India and authorized to receive CSR funding under CSR-1 certification. Our mission is simple yet powerful — to empower people, uplift communities, and build a sustainable and inclusive future for all.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-teal-50 to-emerald-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-teal-100 to-emerald-100 mx-auto mb-6">
                                <i className="fas fa-eye text-3xl text-teal-600"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-center text-teal-700 mb-4">Our Vision</h3>
                            <p className="text-center text-gray-600 italic text-lg leading-relaxed">
                                'Save' to 'Protect', 'Serve' to 'Support', 'Secure' to 'Nurture', 'Set Free' to 'Survive'
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-orange-100 to-red-100 mx-auto mb-6">
                                <i className="fas fa-bullseye text-3xl text-orange-600"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-center text-teal-700 mb-4">Our Mission</h3>
                            <p className="text-center text-gray-600 leading-relaxed">
                                To save, protect and nurture every woman and child, guide every youth, and support them with care, dignity, and opportunity. We are committed to creating safety and helping each individual to come out of hardships and crisis.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide our work and define our commitment to the communities we serve.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full icon-container mx-auto">
                                <i className="fas fa-shield-alt text-3xl"></i>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold text-center text-gray-900">Integrity & Transparency</h3>
                            <p className="mt-2 text-gray-600 text-center">Upholding ethical practices and ensuring honesty and accountability in all initiatives.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full icon-container mx-auto">
                                <i className="fas fa-balance-scale text-3xl"></i>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold text-center text-gray-900">Equity & Inclusion</h3>
                            <p className="mt-2 text-gray-600 text-center">Ensuring every individual, especially from marginalized communities, deserves access to quality resources.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full icon-container mx-auto">
                                <i className="fas fa-fist-raised text-3xl"></i>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold text-center text-gray-900">Empowerment & Self-Reliance</h3>
                            <p className="mt-2 text-gray-600 text-center">Supporting women, youth, and children to build their skills, confidence, and economic independence.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full icon-container mx-auto">
                                <i className="fas fa-clipboard-check text-3xl"></i>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold text-center text-gray-900">Accountability</h3>
                            <p className="mt-2 text-gray-600 text-center">Delivering clear, measurable results that contribute to meaningful community development.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full icon-container mx-auto">
                                <i className="fas fa-leaf text-3xl"></i>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold text-center text-gray-900">Sustainability & Responsibility</h3>
                            <p className="mt-2 text-gray-600 text-center">Working towards long-term, meaningful change and community development.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full icon-container mx-auto">
                                <i className="fas fa-heart text-3xl"></i>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold text-center text-gray-900">Holistic Development</h3>
                            <p className="mt-2 text-gray-600 text-center">Nurturing intellectual, emotional, physical, and moral growth to create responsible citizens.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800">Our Journey</h2>
                    <p className="text-center mt-2 text-gray-600">Reflecting on our hope, resilience, and vision to serve.</p>
                    <div className="relative wrap overflow-hidden p-10 md:p-10 p-4 h-full">
                        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border hidden md:block" style={{left: '50%'}}></div>
                        {Object.keys(timelineEvents).map((year, index) => (
                            <TimelineItem key={year} year={year} events={timelineEvents[year as keyof typeof timelineEvents]} isLeft={index % 2 === 0} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;