import React from 'react';
import { Link } from 'react-router-dom';

const StepsAcademy: React.FC = () => {
    const objectives = [
        "To provide high-quality teacher education programs aligned with NEP 2020, NCF, and modern pedagogical standards.",
        "To equip aspiring educators with 21st-century teaching competencies, including technology integration, experiential learning, and innovative classroom practices.",
        "To deliver vocational and skill development courses that enhance employability and promote sustainable livelihood, especially among women, youth, and indigenous communities.",
        "To empower rural and disadvantaged learners through inclusive, accessible, and context-based education models.",
        "To foster professional ethics, values-based teaching, and leadership qualities among trainee educators.",
        "To integrate technology, AI tools, and modern educational apps to prepare future-ready teachers.",
        "To promote continuous professional development through workshops, internships, field experiences, and practical teaching engagements.",
        "To support women's empowerment through targeted teacher training and entrepreneurship-oriented educational programs.",
        "To collaborate with educational institutions, NGOs, and industry partners for innovation, research, and expanded learning opportunities.",
        "To develop competency-based, skill-oriented, and outcome-focused curricula that cater to evolving educational demands.",
        "To create a learning environment that fosters creativity, inclusivity, critical thinking, and problem-solving abilities.",
        "To extend specialized programs for rural women educators, enabling them to become community educators and facilitators."
    ];

    const teacherEducationCourses = [
        { name: "Diploma in Primary Education", duration: "1 Year" },
        { name: "Advanced Diploma in Primary Education", duration: "6 Months" },
        { name: "Diploma in Primary Education", duration: "6 Months crash course" },
        { name: "Diploma in Montessori Education", duration: "1 Year" },
        { name: "Advanced Diploma in Montessori Education", duration: "6 Months" },
        { name: "Diploma in Montessori Education", duration: "6 Months crash course" },
        { name: "Diploma in Montessori, Kindergarten and Nursery Education", duration: "1 Year" },
        { name: "Advanced Diploma in Montessori, Kindergarten and Nursery Education", duration: "6 Months" },
        { name: "Diploma in Montessori, Kindergarten and Nursery Education", duration: "6 Months crash course" }
    ];

    const vocationalCourses = [
        "Digital Learning",
        "Beauty and Wellness",
        "E-Commerce",
        "Handicrafts making"
    ];

    const ruralWomenFeatures = [
        "Specially designed for rural women with minimal educational background but high potential.",
        "Affordable and accessible teacher training programs with flexible learning modes.",
        "Focus on Primary and Montessori Teacher Education, aligned with NEP 2020 and child-centric methodologies.",
        "Integrated skill development and livelihood enhancement, enabling financial independence.",
        "Hands-on practical training, micro-teaching sessions, and community-based internships.",
        "Inclusive curriculum with local context, ensuring relevance to rural learning environments.",
        "Digital literacy & educational technology training to prepare them for modern classrooms.",
        "Training in early childhood care, vernacular-based teaching, and classroom management.",
        "Counselling, personality development, and communication skills workshops.",
        "Entrepreneurship training for starting tuition centres, home schools, and rural learning hubs.",
        "Ongoing mentorship and support even after course completion.",
        "Placement assistance and opportunities in local schools, NGOs, and community centres.",
        "Empowerment-focused approach, promoting confidence, leadership, and social change."
    ];

    return (
        <div className="bg-gray-50">
            <section className="cta-gradient text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold">Steps Academy</h1>
                    <p className="mt-4 text-lg max-w-3xl mx-auto">
                        Steps Academy for Teacher Education and Professional Studies
                    </p>
                </div>
            </section>

            {/* About Steps Academy */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">About Steps Academy</h2>
                    <div className="max-w-4xl mx-auto">
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Steps Academy is a dedicated institution committed to nurturing competent, modern educators equipped with 21st-century teaching skills. It offers high-quality teacher education and vocational training programs aligned with current educational trends, NEP 2020, and practical classroom needs.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            The academy focuses on empowering aspiring teachers with innovative pedagogies, technology integration, and hands-on learning experiences to create impactful educators for tomorrow. It also provides Vocational and skill development programs that will increase the employability and enhance their livelihood for the general and indigenous community, women, youth and children.
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
                                "To become a centre of excellence in teacher education and vocational learning, fostering empowered educators and skilled individuals capable of leading social change and sustainable livelihood development."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Objectives */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Objectives of Steps Academy</h2>
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-6">
                            {objectives.map((objective, index) => (
                                <div key={index} className="flex items-start bg-gray-50 p-6 rounded-lg">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-4" style={{backgroundColor: '#00695c'}}>
                                        {index + 1}
                                    </div>
                                    <p className="text-gray-700">{objective}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Rural Women Educators Program */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Rural Women Educators' Development Program</h2>
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {ruralWomenFeatures.map((feature, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <div className="flex items-start">
                                        <i className="fas fa-check-circle text-xl mr-3 mt-1" style={{color: '#ff6f00'}}></i>
                                        <p className="text-gray-700 text-sm">{feature}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Courses</h2>
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                        {/* Teacher Education */}
                        <div>
                            <h3 className="text-2xl font-bold mb-8" style={{color: '#00695c'}}>
                                <i className="fas fa-graduation-cap mr-3"></i>Teacher Education
                            </h3>
                            <div className="space-y-4">
                                {teacherEducationCourses.map((course, index) => (
                                    <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4" style={{borderColor: '#00695c'}}>
                                        <h4 className="font-semibold text-gray-800">{course.name}</h4>
                                        <p className="text-sm" style={{color: '#ff6f00'}}>Duration: {course.duration}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Vocational Education */}
                        <div>
                            <h3 className="text-2xl font-bold mb-8" style={{color: '#00695c'}}>
                                <i className="fas fa-tools mr-3"></i>Vocational Education
                            </h3>
                            <div className="space-y-4">
                                {vocationalCourses.map((course, index) => (
                                    <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4" style={{borderColor: '#ff6f00'}}>
                                        <h4 className="font-semibold text-gray-800">{course}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Beneficiaries & Alignment */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                        {/* Beneficiaries */}
                        <div>
                            <h3 className="text-2xl font-bold mb-8" style={{color: '#00695c'}}>Beneficiaries</h3>
                            <div className="space-y-4">
                                {['Women', 'Rural and Indigenous communities', 'Youth', 'Indigenous households', 'Government Schools'].map((beneficiary, index) => (
                                    <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-md">
                                        <i className="fas fa-users text-2xl mr-4" style={{color: '#ff6f00'}}></i>
                                        <span className="text-gray-700 font-medium">{beneficiary}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CSR & Government Alignment */}
                        <div>
                            <h3 className="text-2xl font-bold mb-8" style={{color: '#00695c'}}>CSR & Government Alignment</h3>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h4 className="font-bold mb-4" style={{color: '#ff6f00'}}>CSR Categories Supported:</h4>
                                <ul className="space-y-2 mb-6">
                                    {['Education', 'Women Empowerment', 'Skill Development', 'Indigenous Welfare', 'Vocational Skills'].map((category, index) => (
                                        <li key={index} className="flex items-center">
                                            <i className="fas fa-check mr-2" style={{color: '#00695c'}}></i>
                                            <span className="text-gray-700">{category}</span>
                                        </li>
                                    ))}
                                </ul>
                                <h4 className="font-bold mb-4" style={{color: '#ff6f00'}}>SDG Alignment:</h4>
                                <p className="text-gray-700">SDG 4, 5, 8, 10, 1, 13, 17</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partnership Request */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-800 mb-8">Request for Partnership - Steps Academy</h2>
                            <p className="text-lg text-gray-700 mb-6">
                                Steps Academy, under the institutional support of Springs India Foundation, invites CSR partners, philanthropic organisations, and government bodies to collaborate in strengthening teacher education, vocational training, and rural community empowerment.
                            </p>
                            <p className="text-gray-700 mb-8">
                                This partnership will support the establishment and execution of teacher training programs, particularly focused on Primary and Montessori Education, along with skill development and livelihood enhancement initiatives for rural women, youth, and aspiring educators.
                            </p>
                        </div>

                        {/* Corporate Benefits */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold text-center mb-8" style={{color: '#00695c'}}>Through this collaboration, corporate partners will:</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="bg-gray-50 p-6 rounded-lg border-l-4" style={{borderColor: '#ff6f00'}}>
                                    <i className="fas fa-graduation-cap text-2xl mb-3" style={{color: '#ff6f00'}}></i>
                                    <p className="text-gray-700">Contribute to education transformation and rural capacity building</p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg border-l-4" style={{borderColor: '#ff6f00'}}>
                                    <i className="fas fa-users text-2xl mb-3" style={{color: '#ff6f00'}}></i>
                                    <p className="text-gray-700">Enable women and youth from underprivileged communities to become certified educators and skilled professionals</p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg border-l-4" style={{borderColor: '#ff6f00'}}>
                                    <i className="fas fa-seedling text-2xl mb-3" style={{color: '#ff6f00'}}></i>
                                    <p className="text-gray-700">Create sustainable livelihood opportunities and promote self-reliance</p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg border-l-4" style={{borderColor: '#ff6f00'}}>
                                    <i className="fas fa-eye text-2xl mb-3" style={{color: '#ff6f00'}}></i>
                                    <p className="text-gray-700">Gain high CSR visibility through impactful field initiatives</p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg border-l-4" style={{borderColor: '#ff6f00'}}>
                                    <i className="fas fa-flag text-2xl mb-3" style={{color: '#ff6f00'}}></i>
                                    <p className="text-gray-700">Align with Government priorities (NEP 2020, NSQF, Skill India, Samagra Shiksha)</p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg border-l-4" style={{borderColor: '#ff6f00'}}>
                                    <i className="fas fa-globe text-2xl mb-3" style={{color: '#ff6f00'}}></i>
                                    <p className="text-gray-700">Support progress toward UN SDGs – SDG 4, 5, 8, and 10</p>
                                </div>
                            </div>
                        </div>

                        {/* Support Areas */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold text-center mb-8" style={{color: '#00695c'}}>We invite partners to support:</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <i className="fas fa-check text-xl mr-3 mt-1" style={{color: '#00695c'}}></i>
                                        <span className="text-gray-700">Scholarships for women and youth in teacher education</span>
                                    </div>
                                    <div className="flex items-start">
                                        <i className="fas fa-check text-xl mr-3 mt-1" style={{color: '#00695c'}}></i>
                                        <span className="text-gray-700">Infrastructure and resource support for training centres</span>
                                    </div>
                                    <div className="flex items-start">
                                        <i className="fas fa-check text-xl mr-3 mt-1" style={{color: '#00695c'}}></i>
                                        <span className="text-gray-700">Digital learning tools and technology integration</span>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <i className="fas fa-check text-xl mr-3 mt-1" style={{color: '#00695c'}}></i>
                                        <span className="text-gray-700">Vocational and livelihood-linked training programs</span>
                                    </div>
                                    <div className="flex items-start">
                                        <i className="fas fa-check text-xl mr-3 mt-1" style={{color: '#00695c'}}></i>
                                        <span className="text-gray-700">Community educator development under the Rural Women Educator Program</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Impact Statement */}
                        <div className="text-center mb-12">
                            <div className="bg-gradient-to-r from-teal-50 to-emerald-50 p-8 rounded-lg border-l-4" style={{borderColor: '#00695c'}}>
                                <p className="text-lg font-semibold" style={{color: '#00695c'}}>
                                    By partnering with Steps Academy, organisations can make a meaningful difference in education, empowerment, and sustainable rural development while achieving measurable CSR impact.
                                </p>
                            </div>
                        </div>
                        
                        {/* Action Cards */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                <i className="fas fa-heart text-2xl mr-4" style={{color: '#ff6f00'}}></i>
                                <div className="text-left">
                                    <h4 className="font-bold" style={{color: '#ff6f00'}}>Fund / Support a Program</h4>
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

export default StepsAcademy;