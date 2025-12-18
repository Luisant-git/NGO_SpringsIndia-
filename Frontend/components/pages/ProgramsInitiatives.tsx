import React from 'react';
import { Link } from 'react-router-dom';
import pi1 from '../../assets/pi1.png';
import pi2 from '../../assets/pi2.png';

const ProgramsInitiatives: React.FC = () => {
    const corePillars = [
        {
            number: "1",
            title: "Child Education & Learning Support",
            subtitle: "Every child deserves the chance to learn, grow, and dream.",
            icon: "fas fa-child",
            programs: [
                "After-school programs",
                "Weekend learning activities", 
                "Summer camps",
                "Science expos & creative exhibitions",
                "Cultural learning events",
                "Spell Bee & academic competitions"
            ],
            focus: [
                "Foundational literacy & numeracy",
                "English communication",
                "Life skills & confidence building",
                "Reading, arts, values & culture",
                "Competitive Exam Foundation courses",
                "Arts and Crafts courses",
                "Vedic Math courses",
                "Communication Skills",
                "Digital Literacy"
            ],
            impact: [
                "7000+ children reached through awareness & camps",
                "350+ children trained in Spell Bee",
                "190+ children trained through summer camps yearly",
                "80 children in after-school batches annually"
            ],
            sdgs: "4 • 10 • 16"
        },
        {
            number: "2",
            title: "Women Empowerment & Skills",
            subtitle: "When a woman rises, a family rises.",
            icon: "fas fa-female",
            programs: [
                "Skill development programs through the Research, Learning and Innovation Centre ",
                "Teacher-training (Montessori / Primary) through Rural Educator Development Program",
                "Workshops & entrepreneurship support",
                "Confidence-building, leadership & community service roles",
                "Artisans Support",
                "Digital Literacy",
                "Self-help groups",
                "Handicrafts Workshop"
            ],
            focus: [
                "Livelihood & employability",
                "Financial literacy",
                "Communication & digital exposure",
                "Volunteering & leadership pathways"
            ],
            impact: [
                "25+ women trained in empowerment & volunteering (2022)",
                "14+ women trained as educators & facilitators (2023–2024)",
                "25 women enrolled in teacher-training (2024)",
                "Rural women leadership networks formed"
            ],
            sdgs: "5 • 4 • 8 • 10"
        },
        {
            number: "3",
            title: "Youth Development & Counselling",
            subtitle: "Guiding today's youth to become tomorrow's leaders.",
            icon: "fas fa-users",
            programs: [
                "Motivation & mentoring",
                "Academic and career coaching",
                "Mental health & counselling sessions",
                "Leadership and values-based training",
                "Digital Learning"
            ],
            focus: [],
            impact: [
                "25 youth & children counselled individually",
                "Group emotional-wellness sessions & parent counselling"
            ],
            sdgs: "3 • 4 • 5 • 16"
        },
        {
            number: "4",
            title: "Community Engagement & Cultural Development",
            subtitle: "Stronger communities are built through belonging, values & shared culture.",
            icon: "fas fa-heart",
            programs: [
                "Independence Day, Republic Day",
                "Pongal & festival celebrations",
                "Community group events & food sharing",
                "Award ceremonies & talent recognition",
                "Traditional games & values sessions"
            ],
            focus: [],
            impact: [
                "170+ families engaged in cultural events",
                "Children build empathy, teamwork & civic values"
            ],
            sdgs: "11 • 16"
        },
        {
            number: "5",
            title: "Teacher Training & Capacity Building",
            subtitle: "We equip aspiring women educators to pursue meaningful careers in early childhood education. We especially focus on rural women to have Teacher training to build better communities.",
            icon: "fas fa-chalkboard-teacher",
            programs: [
                "Montessori & primary teaching courses",
                "Practical classroom training",
                "Certification & career pathways",
                "Scholarship support for rural women",
                "TET Training",
                "Teacher Training Workshop"
            ],
            focus: [],
            impact: [
                "25 women (2024) trained",
                "Scholarships awarded for rural women trainees"
            ],
            sdgs: "4 • 5 • 8"
        },
        {
            number: "6",
            title: "Indigenous Community Welfare Programs",
            subtitle: "Uplifting indigenous voices through respect, opportunity, and inclusion. We work closely with indigenous communities to improve their quality of life while preserving their culture and identity. Our programs blend education, livelihood support, and cultural preservation to ensure sustainable community progress.",
            icon: "fas fa-people-carry",
            programs: [
                "Community-based education and literacy programs for children and youth",
                "Health, hygiene, and nutrition awareness drives",
                "Skill-building and livelihood projects for women and artisans",
                "Preservation of traditional knowledge, crafts, and performing arts",
                "Access to welfare schemes, documentation, and entitlements",
                "Awareness workshops on rights, inclusion, and sustainability"
            ],
            focus: [
                "Promoting education and life skills among indigenous children",
                "Strengthening livelihood and entrepreneurship among women",
                "Preserving indigenous culture, traditions, and ecological wisdom",
                "Building community leadership and participation in development",
                "Bridging gaps between indigenous communities and mainstream opportunities"
            ],
            impact: [],
            sdgs: "1 • 4 • 5 • 10 • 11"
        }
    ];

    const impactMetrics = [
        { metric: "Children reached (Awareness + Programs)", result: "7000+" },
        { metric: "Children trained in camps & programs", result: "1276" },
        { metric: "Women empowered through training & volunteering", result: "79" },
        { metric: "Mental Health Care", result: "25" },
        { metric: "Teacher trainees enrolled", result: "30" },
        { metric: "Volunteers & local supporters", result: "25" },
        { metric: "Parent/Community involved", result: "210" },
        { metric: "Annual learning sessions", result: "250+ sessions per year" }
    ];

    const successStories = [
        {
            title: "Women Empowerment — A New Beginning",
            story: "A woman who was in crisis trained through our program now earns independently and supports her children's education — gaining respect, confidence, and a new identity.",
            image: pi1
        },
        {
            title: "Child Education — A Journey of Learning",
            story: "Children enjoyed the after-school activities and gained confidence and skills, and won prizes in the competition, discovering their potential in a joyful environment.",
            image: pi2
        }
    ];

    const trackingMethods = [
        "Baseline community assessment",
        "Defined outcomes & KPIs",
        "Program attendance & progress tracking",
        "Beneficiary surveys & feedback",
        "Field visits & documentation",
        "Impact reports for partners"
    ];

    return (
        <div className="bg-gray-50">
            <section className="cta-gradient text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold">Programs and Initiatives</h1>
                    <p className="mt-4 text-lg max-w-4xl mx-auto">
                        Empowering Women. Developing Youth. Transforming Children. Strengthening general and indigenous communities.
                    </p>
                    <p className="mt-4 text-lg max-w-4xl mx-auto">
                        Springs India Foundation works across interconnected pillars that build confident individuals, capable families, and resilient communities. We empower women, support children's learning, guide youth, strengthen rural livelihoods, and nurture general and indigenous community well-being — one life, one village, one dream at a time.
                    </p>
                </div>
            </section>

            {/* Core Program Pillars */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-12">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Core Program Pillars</h2>
                    <div className="space-y-16">
                        {corePillars.map((pillar, index) => (
                            <div key={index} className={`grid md:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4" style={{backgroundColor: '#ff6f00'}}>
                                            {pillar.number}
                                        </div>
                                        <i className={`${pillar.icon} text-3xl`} style={{color: '#00695c'}}></i>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4" style={{color: '#00695c'}}>{pillar.title}</h3>
                                    <p className="text-lg italic mb-6 text-gray-600">"{pillar.subtitle}"</p>
                                    
                                    {pillar.programs.length > 0 && (
                                        <div className="mb-6">
                                            <h4 className="font-bold mb-3" style={{color: '#ff6f00'}}>{pillar.number === "6" ? "We support indigenous families through:" : "We provide joyful learning environments through:"} </h4>
                                            <ul className="space-y-2">
                                                {pillar.programs.map((program, pIndex) => (
                                                    <li key={pIndex} className="flex items-start">
                                                        <i className="fas fa-check-circle text-sm mr-3 mt-1" style={{color: '#00695c'}}></i>
                                                        <span className="text-gray-700">{program}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {pillar.focus.length > 0 && (
                                        <div className="mb-6">
                                            <h4 className="font-bold mb-3" style={{color: '#ff6f00'}}>Program Focus:</h4>
                                            <ul className="space-y-2">
                                                {pillar.focus.map((focus, fIndex) => (
                                                    <li key={fIndex} className="flex items-start">
                                                        <i className="fas fa-arrow-right text-sm mr-3 mt-1" style={{color: '#ff6f00'}}></i>
                                                        <span className="text-gray-700">{focus}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-sm font-semibold" style={{color: '#00695c'}}>SDGs: {pillar.sdgs}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <h4 className="font-bold mb-4" style={{color: '#00695c'}}>Impact Snapshot (2022–2025) :</h4>
                                        <ul className="space-y-3">
                                            {pillar.impact.map((impact, iIndex) => (
                                                <li key={iIndex} className="flex items-start">
                                                    <i className="fas fa-chart-line text-lg mr-3 mt-1" style={{color: '#ff6f00'}}></i>
                                                    <span className="text-gray-700">{impact}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Dashboard */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Impact Dashboard</h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-6">
                            {impactMetrics.map((item, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
                                    <span className="text-gray-700 font-medium">{item.metric}</span>
                                    <span className="text-2xl font-bold" style={{color: '#ff6f00'}}>{item.result}</span>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-8">
                            <p className="text-lg font-semibold" style={{color: '#00695c'}}>
                                Every number represents a life touched. Every life inspires us to serve more.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Our Impact Means */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">What Our Impact Means</h2>
                    <p className="text-center text-xl font-semibold mb-2" style={{color: '#ff6f00'}}>Creating Real Change. Touching Real Lives.</p>
                    <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
                        At Springs India Foundation, impact is not just measured in numbers — it is seen in smiles, hope, dignity, and renewed confidence in communities we serve.
                    </p>
                    <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
                        We focus on meaningful and measurable transformation across education, skills, livelihood, women's empowerment, and rural community development.
                    </p>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <i className="fas fa-arrow-up text-xl mr-3 mt-1" style={{color: '#ff6f00'}}></i>
                                    <span className="text-gray-700">Children rising with confidence & learning skills</span>
                                </div>
                                <div className="flex items-start">
                                    <i className="fas fa-arrow-up text-xl mr-3 mt-1" style={{color: '#ff6f00'}}></i>
                                    <span className="text-gray-700">Women gaining income & identity</span>
                                </div>
                                <div className="flex items-start">
                                    <i className="fas fa-arrow-up text-xl mr-3 mt-1" style={{color: '#ff6f00'}}></i>
                                    <span className="text-gray-700">Youth becoming capable and future-ready</span>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <i className="fas fa-arrow-up text-xl mr-3 mt-1" style={{color: '#ff6f00'}}></i>
                                    <span className="text-gray-700">Rural families accessing support & awareness</span>
                                </div>
                                <div className="flex items-start">
                                    <i className="fas fa-arrow-up text-xl mr-3 mt-1" style={{color: '#ff6f00'}}></i>
                                    <span className="text-gray-700">Villages and indigenous communities growing with dignity and participation</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-12">
                            <div className="bg-gradient-to-r from-teal-50 to-emerald-50 p-8 rounded-lg border-l-4" style={{borderColor: '#00695c'}}>
                                <p className="text-xl font-bold" style={{color: '#00695c'}}>
                                    Our goal is not charity — it is empowerment, opportunity, and long-term transformation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Track Impact */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">How We Track Impact</h2>
                    <p className="text-center text-gray-600 mb-4 max-w-3xl mx-auto">
                        We follow a structured model:
                    </p>
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {trackingMethods.map((method, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4" style={{backgroundColor: '#00695c'}}>
                                    {index + 1}
                                </div>
                                <p className="text-gray-700 font-medium">{method}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-gray-700 mt-8 max-w-3xl mx-auto">
                        Every initiative is designed with accountability, monitoring, and continuous improvement.
                    </p>
                </div>
            </section>

            {/* Success Stories */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Success Stories That Inspire Us</h2>
                    <p className="text-center text-gray-600 mb-12">Real lives. Real change. Real hope.</p>
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                        {successStories.map((story, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
                                <img src={story.image} alt={story.title} className="w-full h-64 object-cover"/>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2" style={{color: '#00695c'}}>{story.title}</h3>
                                    <p className="text-gray-700">{story.story}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call for Action */}
            <section className="py-20 text-gray-800" style={{backgroundColor: 'rgb(232, 245, 232)'}}>
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">With Your Support, We Can Do More</h2>
                    <p className="text-lg mb-8 max-w-3xl mx-auto">
                        We invite corporates, individuals, and institutions to partner with us in scaling impact and reaching more communities. Together, let us create a future full of education, dignity, opportunity, and hope.
                    </p>
                    <p className="mb-8">We welcome discussions, visits, and exploratory calls with CSR teams and foundations.</p>
                    
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

export default ProgramsInitiatives;