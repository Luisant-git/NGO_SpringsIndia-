import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import homeImg from '../../home.JPG';
import st1 from '../../assets/st1.jpg';
import st2 from '../../assets/st2.jpg';
import st3 from '../../assets/st3.jpg';
import st4 from '../../assets/st4.jpg';

const runningSlides = [
    "Impacting Women, Youth, and Children through Women Empowerment, Youth Development, and Child Welfare through long-term sustainable programs",
    "Creating a future-ready society where every woman ‘LEADS’, every child 'THRIVES', every youth 'RISES', and every community 'SHINES' with a purpose."
];

const focusAreas = [
    { icon: "fas fa-users", title: "Community Development", description: "Strengthening women, fostering children, and leading youth through support and counselling." },
    { icon: "fas fa-graduation-cap", title: "Education", description: "Expanding quality education, teacher training, and skill development programs." },
    { icon: "fas fa-laptop-code", title: "Digital Literacy", description: "Providing digital education in rural areas, including coding, e-commerce, and safe online practices." },
    { icon: "fas fa-hand-holding-heart", title: "Livelihood Enhancement", description: "Promoting livelihood opportunities through entrepreneurship and vocational training." },
    { icon: "fas fa-seedling", title: "Nature Care", description: "Protecting the environment through tree plantation, waste management, and preservation." },
    { icon: "fas fa-spa", title: "Horticulture", description: "Encouraging modern horticulture and organic practices to improve livelihoods." },
    { icon: "fas fa-tractor", title: "Agriculture", description: "Promoting sustainable agricultural practices to strengthen farmers for food security." },
    { icon: "fas fa-briefcase-medical", title: "Health Care", description: "Providing accessible healthcare through hospitals, medical camps, and preventive programs." },
    { icon: "fas fa-brain", title: "Mental Health Care", description: "Supporting wellbeing through counselling, rehabilitation, and awareness drives." },
];

const impactNumbers = [
    { value: "7000+", label: "Children Reached" },
    { value: "79", label: "Women Empowered" },
    { value: "1276", label: "Children Trained" },
    { value: "250+", label: "Annual Learning Sessions" },
];

const homeSuccessStories = [
     {
        title: "Women Empowerment — A New Beginning",
        name: "Ms. Menaka",
        story: "A woman who was in crisis trained through our program now earns independently and supports her children's education...",
        image: st1
    },
    {
        title: "Child Education — A Journey of Learning",
        name: "Our Children",
        story: "Children enjoyed after-school activities, gained confidence, and won prizes in competitions, discovering their potential...",
        image: st2
    },
    {
        title: "Celebrating Culture, Together",
        name: "Our Children",
        story: "Our children learn not only academics, but also values, traditions and the joy of shared community moments. Festivals like Pongal help connect them with nature, gratitude, heritage and togetherness.",
        image: st3
    },
    {
        title: "Educational support for children",
        name: "Joyful Learning Environment",
        story: "Children participate in our after-school enrichment program, building foundational skills in reading, writing, numeracy and life values. We focus on confidence, curiosity, and character — not just marks. Learning becomes meaningful when every child feels seen, safe and inspired.",
        image: st4
    }
];

const upcomingEvents = [
    {
        date: "DEC 24",
        title: "Annual Christmas Celebration",
        description: "Join us for a day of joy, gifts, and community spirit as we celebrate the festive season with the children."
    },
    {
        date: "JAN 14",
        title: "Pongal & Republic Day Festival",
        description: "A celebration of harvest and national pride with traditional games, food, and cultural performances."
    },
    {
        date: "FEB 18",
        title: "Annual Science Expo",
        description: "Witness the creativity and innovation of our young learners as they present their science projects."
    }
];

const featuredPosts = [
    {
        title: "Empowering Rural Women Through Skill Development",
        date: "December 15, 2024",
        excerpt: "Our latest initiative focuses on providing vocational training to rural women, enabling them to become financially independent.",
        image: "https://picsum.photos/seed/post1/600/400"
    },
    {
        title: "Digital Literacy Program Reaches 500+ Students",
        date: "November 28, 2024",
        excerpt: "We've successfully trained over 500 students in digital skills, preparing them for the modern workforce.",
        image: "https://picsum.photos/seed/post2/600/400"
    },
    {
        title: "Community Health Camp Benefits 1000+ Families",
        date: "November 10, 2024",
        excerpt: "Our recent health camp provided free medical checkups and medicines to over 1000 families in rural areas.",
        image: "https://picsum.photos/seed/post3/600/400"
    }
];

const partners = [
    { name: "Corporate Partner", icon: "fas fa-building" },
    { name: "Education Partner", icon: "fas fa-graduation-cap" },
    { name: "Healthcare Partner", icon: "fas fa-hospital" },
    { name: "Technology Partner", icon: "fas fa-laptop-code" },
    { name: "Community Partner", icon: "fas fa-users" },
    { name: "Government Partner", icon: "fas fa-landmark" }
];

const awards = [
    {
        title: "Best NGO Award 2024",
        organization: "Social Impact Foundation",
        icon: "fas fa-trophy",
        color: "#FFD700"
    },
    {
        title: "Excellence in Community Service",
        organization: "National Welfare Council",
        icon: "fas fa-award",
        color: "#C0C0C0"
    },
    {
        title: "Women Empowerment Recognition",
        organization: "State Government",
        icon: "fas fa-medal",
        color: "#CD7F32"
    }
];

const AnimatedCounter: React.FC<{ targetValue: string; startAnimation: boolean }> = ({ targetValue, startAnimation }) => {
    const [count, setCount] = useState(0);
    const endValue = parseInt(targetValue.replace(/[^0-9]/g, ''), 10);
    const suffix = targetValue.includes('+') ? '+' : '';

    useEffect(() => {
        if (!startAnimation || isNaN(endValue)) return;

        const duration = 2000;
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
        <>
            {count.toLocaleString()}{count === endValue && suffix}
        </>
    );
};


const Home: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const impactRef = useRef<HTMLDivElement>(null);
    const [isImpactVisible, setIsImpactVisible] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % runningSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsImpactVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = impactRef.current;
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
        <div>
            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[80vh] bg-cover bg-center" style={{ backgroundImage: `url(${homeImg})` }}>
                <div className="hero-overlay absolute inset-0"></div>
                <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight animate-fade-in-down">
                        Empowering Lives. <br /> Building Futures. Creating Impact.
                    </h1>
                    <p className="mt-6 text-lg md:text-xl max-w-3xl text-orange-200 animate-fade-in-up">
                        A community-driven NGO transforming lives through education, skills, livelihood empowerment, health mental care and sustainable development.
                    </p>
                    <div className="mt-8 flex gap-4 animate-fade-in-up">
                        <Link to="/#" className="px-8 py-3 text-white font-semibold rounded-lg transition-colors" style={{background: 'linear-gradient(135deg, #ff6f00 0%, #d32f2f 100%)'}}>
                            Donate Now
                        </Link>
                        <Link to="/#" className="px-8 py-3 bg-white text-teal-700 hover:bg-gray-100 font-semibold rounded-lg transition-colors">
                            Our Programs
                        </Link>
                    </div>
                    {/* <div className="mt-12 p-6 bg-black/20 rounded-lg max-w-3xl"> */}
                    <div>
                        <div className="relative h-20 overflow-hidden">
                            {runningSlides.map((slide, index) => (
                                <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                                    <p className="text-white text-base md:text-lg italic">
                                        {slide}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                        Springs India Foundation is committed to building an inclusive, sustainable, and empowered society. We work across key areas to design the lives of women, youth, children, and communities through education, skill development, livelihood enhancement, and more.
                    </p>
                    <p className="mt-6 text-2xl md:text-3xl font-bold max-w-4xl mx-auto" style={{color: '#00695c'}}>
                        Our mission is to transform lives—ensuring that every individual has dignity, opportunity, and support to thrive and succeed in their life.
                    </p>
                </div>
            </section>
            
            {/* Focus Areas Section */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">Our Focus Areas</h2>
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {focusAreas.map((area, index) => (
                            <div key={index} className="bg-white p-8 rounded-lg shadow-lg card-hover">
                                <div className="flex items-center justify-center h-16 w-16 rounded-full icon-container mx-auto">
                                    <i className={`${area.icon} text-3xl`}></i>
                                </div>
                                <h3 className="mt-6 text-xl font-semibold text-center text-gray-900">{area.title}</h3>
                                <p className="mt-2 text-gray-600 text-center">{area.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

          

            {/* Inspiring Stories Section */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">Inspiring Stories of Change</h2>
                    <p className="text-center mt-2 text-gray-600">Real lives, real change, real hope.</p>
                    <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {homeSuccessStories.map(story => (
                            <div key={story.title} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                                <img src={story.image} alt={story.title} className="w-full h-56 object-cover"/>
                                <div className="p-5 flex flex-col flex-grow">
                                    <h3 className="text-lg font-bold" style={{color: '#00695c'}}>{story.title}</h3>
                                    <p className="text-sm font-semibold mt-1" style={{color: '#ff6f00'}}>{story.name}</p>
                                    <p className="mt-3 text-gray-700 text-sm flex-grow">{story.story}</p>
                                    <Link to="/impact" className="mt-3 font-semibold self-start text-sm" style={{color: '#00695c'}} onMouseEnter={(e) => e.currentTarget.style.color = '#2d7d32'} onMouseLeave={(e) => e.currentTarget.style.color = '#00695c'}>
                                        Read More &rarr;
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

               {/* Our Impact in Numbers Section */}
            <section ref={impactRef} className="py-16 md:py-24 bg-gray-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-white">Our Impact in Numbers</h2>
                    <p className="text-center mt-2 text-gray-300">Every number represents a life touched and a future brightened.</p>
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {impactNumbers.map(metric => (
                            <div key={metric.label} className="text-center bg-gray-700 p-6 rounded-lg">
                                <div className="text-4xl md:text-5xl font-bold" style={{color: '#ff6f00'}}>
                                    <AnimatedCounter targetValue={metric.value} startAnimation={isImpactVisible} />
                                </div>
                                <p className="text-gray-300 mt-2 font-medium">{metric.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Posts Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">Featured Posts</h2>
                    <p className="text-center mt-2 text-gray-600">Latest updates from our programs and initiatives.</p>
                    <div className="mt-12 grid md:grid-cols-3 gap-8">
                        {featuredPosts.map((post, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
                                <img src={post.image} alt={post.title} className="w-full h-48 object-cover"/>
                                <div className="p-6">
                                    <p className="text-sm text-orange-600 font-semibold">{post.date}</p>
                                    <h3 className="mt-2 text-xl font-bold text-gray-900">{post.title}</h3>
                                    <p className="mt-3 text-gray-600">{post.excerpt}</p>
                                    <Link to="/programs" className="mt-4 inline-block font-semibold" style={{color: '#00695c'}}>
                                        Read More &rarr;
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Upcoming Events Section */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">Upcoming Events</h2>
                    <p className="text-center mt-2 text-gray-600">Join us in our upcoming activities and be a part of the change.</p>
                    <div className="mt-12 max-w-4xl mx-auto">
                        {upcomingEvents.map((event, index) => (
                            <div key={index} className="flex items-center bg-white rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-shadow">
                                <div className="flex flex-col items-center justify-center text-white rounded-lg p-4 mr-6 w-20 text-center" style={{background: 'linear-gradient(135deg, #ff6f00 0%, #d32f2f 100%)'}}>
                                    <span className="text-3xl font-bold leading-none">{event.date.split(' ')[1]}</span>
                                    <span className="font-semibold">{event.date.split(' ')[0]}</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                                    <p className="mt-1 text-gray-600">{event.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Partners Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">Our Partners</h2>
                    <p className="text-center mt-2 text-gray-600">Collaborating with organizations to create lasting impact.</p>
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {partners.map((partner, index) => (
                            <div key={index} className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all hover:scale-105">
                                <i className={`${partner.icon} text-4xl`} style={{color: '#00695c'}}></i>
                                <p className="mt-3 text-sm font-semibold text-gray-700 text-center">{partner.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Awards and Recognition Section */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">Awards and Recognition</h2>
                    <p className="text-center mt-2 text-gray-600">Honored for our commitment to social change.</p>
                    <div className="mt-12 grid md:grid-cols-3 gap-8">
                        {awards.map((award, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center card-hover">
                                <div className="w-32 h-32 mx-auto rounded-full flex items-center justify-center" style={{backgroundColor: `${award.color}20`}}>
                                    <i className={`${award.icon} text-6xl`} style={{color: award.color}}></i>
                                </div>
                                <h3 className="mt-6 text-xl font-bold" style={{color: '#00695c'}}>{award.title}</h3>
                                <p className="mt-2 text-gray-600">{award.organization}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Call to Action Section */}
            <section className="py-20 cta-gradient text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold">Join Hands in Transforming Lives</h2>
                    <p className="mt-4 max-w-2xl mx-auto">Your support creates hope. We welcome discussions, visits, and exploratory calls with CSR teams and foundations.</p>
                    <Link to="/contact" className="mt-8 inline-block btn-primary py-3 px-8 transition-transform transform hover:scale-105">
                        Partner With Us
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;