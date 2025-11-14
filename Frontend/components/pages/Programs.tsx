import React from 'react';

const pillars = [
    {
        title: "Child Education & Learning Support",
        quote: "Every child deserves the chance to learn, grow, and dream.",
        activities: ["After-school programs", "Weekend learning activities", "Summer camps", "Science expos & creative exhibitions"],
        focus: ["Foundational literacy & numeracy", "English communication", "Life skills & confidence building", "Arts and Crafts courses"],
        impact: ["7000+ children reached", "350+ children trained in Spell Bee", "190+ children trained via summer camps"]
    },
    {
        title: "Women Empowerment & Skills",
        quote: "When a woman rises, a family rises.",
        activities: ["Skill development programs", "Teacher-training (Montessori / Primary)", "Workshops & entrepreneurship support", "Confidence-building & leadership roles"],
        focus: ["Livelihood & employability", "Financial literacy", "Digital exposure", "Volunteering pathways"],
        impact: ["25+ women trained in empowerment (2022)", "14+ women trained as educators (2023-24)", "Rural women leadership networks formed"]
    },
    {
        title: "Youth Development & Counselling",
        quote: "Guiding today's youth to become tomorrow's leaders.",
        activities: ["Motivation & mentoring", "Academic and career coaching", "Mental health & counselling sessions", "Digital Learning"],
        impact: ["25 youth & children counselled individually", "Group emotional-wellness sessions"]
    },
    {
        title: "Community Engagement & Cultural Development",
        quote: "Stronger communities are built through belonging, values & shared culture.",
        activities: ["Independence Day, Republic Day", "Pongal & festival celebrations", "Community group events & food sharing", "Traditional games & values sessions"],
        impact: ["170+ families engaged in cultural events", "Children build empathy, teamwork & civic values"]
    },
    {
        title: "Teacher Training & Capacity Building",
        quote: "Equipping aspiring women educators to pursue meaningful careers in early childhood education.",
        activities: ["Montessori & primary teaching courses", "Practical classroom training", "Certification & career pathways", "Scholarship support for rural women"],
        impact: ["25 women (2024) trained", "Scholarships awarded for rural women trainees"]
    }
];

const PillarCard: React.FC<{ pillar: typeof pillars[0], index: number }> = ({ pillar, index }) => (
    <div className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-20 items-center`}>
        <div className="md:w-1/2 p-6">
            <img src={`https://picsum.photos/seed/program${index}/600/400`} alt={pillar.title} className="rounded-lg shadow-2xl w-full h-auto object-cover" />
        </div>
        <div className="md:w-1/2 p-6">
            <h2 className="text-3xl font-bold text-indigo-800">{pillar.title}</h2>
            <p className="mt-2 text-red-600 italic">"{pillar.quote}"</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <h4 className="font-semibold text-lg text-gray-700">Activities</h4>
                    <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                        {pillar.activities.map(item => <li key={item}>{item}</li>)}
                    </ul>
                </div>
                {pillar.focus && (
                <div>
                    <h4 className="font-semibold text-lg text-gray-700">Program Focus</h4>
                    <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                        {pillar.focus.map(item => <li key={item}>{item}</li>)}
                    </ul>
                </div>
                )}
            </div>
             <div className="mt-6">
                <h4 className="font-semibold text-lg text-gray-700">Impact Highlights</h4>
                <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                    {pillar.impact.map(item => <li key={item}>{item}</li>)}
                </ul>
            </div>
        </div>
    </div>
);

const Programs: React.FC = () => {
    return (
        <div>
            <section className="bg-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-indigo-800">Programs & Initiatives</h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Empowering Women. Developing Youth. Transforming Children. Strengthening Communities. One life, one village, one dream at a time.
                    </p>
                </div>
            </section>
            
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Core Program Pillars</h2>
                    {pillars.map((pillar, index) => (
                        <PillarCard key={pillar.title} pillar={pillar} index={index} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Programs;