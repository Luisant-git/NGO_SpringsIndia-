import React, { useState, useEffect, useRef } from 'react';

const impactMetrics = [
    { icon: "fas fa-child", value: "7000+", label: "Children reached (Awareness + Programs)" },
    { icon: "fas fa-chalkboard-teacher", value: "1276", label: "Children trained in camps & programs" },
    { icon: "fas fa-female", value: "79", label: "Women empowered through training & volunteering" },
    { icon: "fas fa-heartbeat", value: "25", label: "Mental Health Care sessions" },
    { icon: "fas fa-user-graduate", value: "30", label: "Teacher trainees enrolled" },
    { icon: "fas fa-hands-helping", value: "25", label: "Volunteers & local supporters" },
    { icon: "fas fa-users", value: "210", label: "Parent/Community involved" },
    { icon: "fas fa-calendar-alt", value: "250+", label: "Annual learning sessions per year" },
];

const successStories = [
    {
        title: "Women Empowerment — A New Beginning",
        name: "Ms. Menaka",
        story: "A woman who was in crisis trained through our program now earns independently and supports her children's education – gaining respect, confidence, and a new identity.",
        image: "https://picsum.photos/seed/success1/400/300"
    },
    {
        title: "Child Education — A Journey of Learning",
        name: "Our Children",
        story: "Children enjoyed the after-school activities and gained confidence and skills, and won prizes in the competition, discovering their potential in a joyful environment.",
        image: "https://picsum.photos/seed/success2/400/300"
    },
    {
        title: "Nurturing Talent — The Spell Bee Triumph",
        name: "Rural Students",
        story: "Our first-ever Spell Bee competition wasn't just about words; it was about building confidence. Over 350 children from rural areas participated, discovering a love for language and the courage to stand on a public stage, many for the first time.",
        image: "https://picsum.photos/seed/success3/400/300"
    },
    {
        title: "Sparking Curiosity — The Science Expo",
        name: "Young Innovators",
        story: "The Science Expo became a vibrant display of young talent, with children presenting models on water conservation and solar energy. It showed that when rural children are given a platform, they rise and shine, inspiring over 200 visitors.",
        image: "https://picsum.photos/seed/success4/400/300"
    }
];

const AnimatedCounter: React.FC<{ targetValue: string; startAnimation: boolean }> = ({ targetValue, startAnimation }) => {
    const [count, setCount] = useState(0);
    const endValue = parseInt(targetValue.replace(/[^0-9]/g, ''), 10);
    const suffix = targetValue.includes('+') ? '+' : '';

    useEffect(() => {
        if (!startAnimation || isNaN(endValue)) return;

        const duration = 2000; // 2 seconds animation
        let startTime: number | null = null;

        const animate = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            const newCount = Math.floor(progress * endValue);
            setCount(newCount);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);

    }, [startAnimation, endValue]);

    return (
        <div className="text-4xl font-bold text-gray-900">
            {count.toLocaleString()}{count === endValue && suffix}
        </div>
    );
};


const Impact: React.FC = () => {
    const dashboardRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1, // Start animation when 10% of the section is visible
            }
        );

        const currentRef = dashboardRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <div className="bg-gray-50">
            <section className="bg-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-indigo-800">Our Impact & Success Stories</h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Creating Real Change. Touching Real Lives. Impact is not just measured in numbers—it is seen in smiles, hope, dignity, and renewed confidence in the communities we serve.
                    </p>
                </div>
            </section>
            
            <section ref={dashboardRef} className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Impact Dashboard</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {impactMetrics.map(metric => (
                            <div key={metric.label} className="bg-white text-center p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-transform duration-300">
                                <div className="text-indigo-600 text-4xl mb-4">
                                    <i className={metric.icon}></i>
                                </div>
                                <AnimatedCounter targetValue={metric.value} startAnimation={isVisible} />
                                <p className="text-gray-600 mt-2">{metric.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Success Stories That Inspire Us</h2>
                     <p className="text-center text-gray-600 -mt-8 mb-12">Real lives. Real change. Real hope.</p>
                    <div className="grid md:grid-cols-2 gap-12">
                        {successStories.map(story => (
                            <div key={story.title} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
                                <img src={story.image} alt={story.title} className="w-full h-56 object-cover"/>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-indigo-700">{story.title}</h3>
                                    <p className="text-lg font-semibold text-red-600 mt-1">{story.name}</p>
                                    <p className="mt-4 text-gray-700">{story.story}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             <section className="py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">How We Track Impact</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Every initiative is designed with accountability, monitoring, and continuous improvement. We follow a structured model to ensure transparency and effectiveness.
                    </p>
                    <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm md:text-base">
                        <div className="p-4 bg-white rounded-lg shadow-md">Baseline Assessment</div>
                        <div className="p-4 bg-white rounded-lg shadow-md">Defined Outcomes & KPIs</div>
                        <div className="p-4 bg-white rounded-lg shadow-md">Progress Tracking</div>
                        <div className="p-4 bg-white rounded-lg shadow-md">Beneficiary Surveys</div>
                        <div className="p-4 bg-white rounded-lg shadow-md">Field Visits & Documentation</div>
                        <div className="p-4 bg-white rounded-lg shadow-md">Impact Reports</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Impact;