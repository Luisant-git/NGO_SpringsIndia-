import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import banner1 from "../../assets/banner1.jpeg";
import banner2 from "../../assets/banner2.jpeg";
import banner3 from "../../assets/banner3.jpeg";
import banner4 from "../../assets/banner4.jpeg";
import banner5 from "../../assets/banner5.jpeg";
import st1 from "../../assets/st1.jpg";
import st2 from "../../assets/st2.jpg";
import st3 from "../../assets/st3.jpg";
import ph1 from "../../assets/ph1.png";
import ph2 from "../../assets/ph2.png";
import ph3 from "../../assets/ph3.png";
import styles from "./Home.module.css";

const heroSlides = [
  {
    image: banner1,
    headline: "Stronger Communities. Brighter Futures.",
    subheadline: "Grassroots initiatives that uplift families and improve wellbeing.",
    cta: "View Community Work",
    link: "#"
  },
  {
    image: banner2,
    headline: "Scale Your CSR Impact With Us",
    subheadline: "Partnering with corporates to build sustainable community solutions.",
    cta: "Collaborate With Us",
    link: "#"
  },
  {
    image: banner3,
    headline: "Impact That Scales. Change That Matters.",
    subheadline: "CSR-ready programs across education, women empowerment, and youth development.",
    cta: "Explore CSR Projects",
    link: "#"
  },
  {
    image: banner4,
    headline: "Transforming Lives Through Partnerships.",
    subheadline: "Together, we create solutions that uplift rural India.",
    cta: "Partner With Us",
    link: "#"
  },
  {
    image: banner5,
    headline: "Together, We Create Change That Lasts.",
    subheadline: "Join our mission to strengthen rural communities with dignity.",
    cta: "Join the Movement",
    link: "#"
  }
];

const sliderImages = [banner1, banner2, banner3];

const runningSlides = [
  "Impacting Women, Youth, Children, general and Indigenous Community through Women Empowerment, Youth Development, and Child, General and Indigenous Community Welfare through long-term sustainable programs",
  "Creating a future-ready society where every woman ‘LEADS’, every child 'THRIVES', every youth 'RISES', and every community 'SHINES' with a purpose.",
];

const focusAreas = [
  {
    icon: "fas fa-users",
    title: "Community Development: (Women, Children and Youth)",
    description:
      "Springs India Foundation works to empower the communities by strengthening the women, fostering the children, and leading the youth by supporting, counselling, and various long-term activities.",
  },
  {
    icon: "fas fa-child",
    title: "Child Education",
    description:
      "Initiatives to ensure quality learning for every child through foundational literacy and numeracy support, after-school programs, digital learning access, and guidance for overall academic development.\n\nOutcome: Improved learning levels, stronger academic confidence, reduced dropouts, and better opportunities for children to progress toward a brighter future.",
  },
  {
    icon: "fas fa-graduation-cap",
    title: "Education",
    description:
      "Expanding the quality education, teacher training, vocational training, and skill development programs, financial literacy, scholarships, and creating equal opportunities for all deprived women and to help them in placements.",
  },
  {
    icon: "fas fa-laptop-code",
    title: "Digital Literacy",
    description:
      "To provide digital Education in the rural areas and educate them with basic computer skills, coding, online learning and tutoring, e-commerce, digital marketing training and safe online practices for women, youth, and children.",
  },
  {
    icon: "fas fa-hand-holding-heart",
    title: "Livelihood Enhancement",
    description:
      "Creating sustainability of life by promoting livelihood opportunities, supporting entrepreneurship, vocational training, and sustainable income-generation.",
  },
  {
    icon: "fas fa-seedling",
    title: "Nature Care",
    description:
      "Activities to protect the environment through tree plantation, waste management, preservation of natural resources, and and encouraging nature protection activities.",
  },
  {
    icon: "fas fa-spa",
    title: "Horticulture",
    description:
      "Encouraging modern horticulture, organic practices, floriculture, and value-added farming to improve livelihoods and community well-being.",
  },
  {
    icon: "fas fa-tractor",
    title: "Agriculture",
    description:
      "Promoting organic and sustainable agricultural practices, organic farming methods, and supporting and strengthening farmers for food security and rural development.",
  },
  {
    icon: "fas fa-briefcase-medical",
    title: "Health Care",
    description:
      "Initiatives to provide accessible healthcare through hospitals, medical camps, preventive programs, yoga centres, and traditional systems of healing.",
  },
  {
    icon: "fas fa-brain",
    title: "Mental Health Care",
    description:
      "Supporting wellbeing through counselling, rehabilitation, awareness drives, mobile deaddiction, and affordable mental health treatment for individuals and families.",
  },
  {
    icon: "fas fa-people-carry",
    title: "Indigenous Community Welfare programs",
    description:
      "Enhancing the quality of life of indigenous populations via access to health, education, livelihood opportunities, and cultural and traditional preservation initiatives, in partnership with civil society and government programs.",
  },
  {
    icon: "fas fa-hands-helping",
    title: "General Welfare programs and projects",
    description:
      "Delivering welfare schemes, disaster relief, animal care, housing and infrastructure support in partnership with government and civil society. food security and rural development.",
  },
];

const impactNumbers = [
  { value: "1276", label: "Students Supported", icon: "fas fa-child" },
  {
    value: "30",
    label: "Women Trained as Educators",
    icon: "fas fa-chalkboard-teacher",
  },
  { value: "73", label: "Women Empowered", icon: "fas fa-female" },
  { value: "318", label: "Community Members Involved", icon: "fas fa-users" },
  { value: "83", label: "Parents Counselled", icon: "fas fa-user-friends" },
  { value: "41", label: "Volunteers Trained", icon: "fas fa-hands-helping" },
  { value: "1821", label: "People Served in Society", icon: "fas fa-globe" },
];

const homeSuccessStories = [
  {
    title: "Celebrating Culture, Together",
    name: "Community Programs",
    story:
      "Our children learn not only academics, but also values, traditions, and the joy of shared community moments. Festivals like Pongal help connect them with nature, gratitude, heritage, and togetherness.",
    image: st1,
  },
  {
    title: "Teacher Training — Women Empowerment",
    name: "Teacher Training Program",
    story:
      "The teachers enrolled in our Teacher Training program gained valuable skills in teaching methodologies and creating effective learning materials.",
    image: st2,
  },
  {
    title: "Joyful Learning Environment",
    name: "Educational Support for Children",
    story:
      "Children participate in our after-school enrichment program, building foundational skills in reading, writing, numeracy, and life values. We focus on confidence, curiosity, and character — not just marks. Learning becomes meaningful when every child feels seen, safe and inspired.",
    image: st3,
  },
];

const upcomingEvents = [
  {
    date: "DEC 24",
    title: "Annual Christmas Celebration",
    description:
      "Join us for a day of joy, gifts, and community spirit as we celebrate the festive season with the children.",
  },
  {
    date: "JAN 14",
    title: "Pongal & Republic Day Festival",
    description:
      "A celebration of harvest and national pride with traditional games, food, and cultural performances.",
  },
  {
    date: "FEB 18",
    title: "Annual Science Expo",
    description:
      "Witness the creativity and innovation of our young learners as they present their science projects.",
  },
];

const featuredPosts = [
  {
    title: "Empowering Rural Women Through Skill Development",
    date: "December 15, 2024",
    excerpt:
      "Our latest initiative focuses on providing vocational training to rural women, enabling them to become financially independent.",
    image: "https://picsum.photos/seed/post1/600/400",
  },
  {
    title: "Digital Literacy Program Reaches 500+ Students",
    date: "November 28, 2024",
    excerpt:
      "We've successfully trained over 500 students in digital skills, preparing them for the modern workforce.",
    image: "https://picsum.photos/seed/post2/600/400",
  },
  {
    title: "Community Health Camp Benefits 1000+ Families",
    date: "November 10, 2024",
    excerpt:
      "Our recent health camp provided free medical checkups and medicines to over 1000 families in rural areas.",
    image: "https://picsum.photos/seed/post3/600/400",
  },
];

const partners = [
  { name: "Corporate Partner", icon: "fas fa-building" },
  { name: "Education Partner", icon: "fas fa-graduation-cap" },
  { name: "Healthcare Partner", icon: "fas fa-hospital" },
  { name: "Technology Partner", icon: "fas fa-laptop-code" },
  { name: "Community Partner", icon: "fas fa-users" },
  { name: "Government Partner", icon: "fas fa-landmark" },
];

const certifications = [
  { title: "Trust Regn No: 167/2022", icon: "fas fa-certificate" },
  { title: "12A-Certified", icon: "fas fa-certificate" },
  { title: "80G Certified", icon: "fas fa-certificate" },
  { title: "CSR-1 Certified", icon: "fas fa-certificate" },
  { title: "NGO Darpan-Registered", icon: "fas fa-certificate" },
  { title: "E-Anudhaan-Registered", icon: "fas fa-certificate" },
  { title: "Udyam-Registered", icon: "fas fa-certificate" },
];

const programHighlights = [
  {
    title: "Community Programs",
    image: ph1,
    icon: "fas fa-users",
  },
  {
    title: "Skill Trainings",
    image: ph2,
    icon: "fas fa-tools",
  },
  {
    title: "Educational Support",
    image: ph3,
    icon: "fas fa-graduation-cap",
  },
];

const AnimatedCounter: React.FC<{
  targetValue: string;
  startAnimation: boolean;
}> = ({ targetValue, startAnimation }) => {
  const [count, setCount] = useState(0);
  const endValue = parseInt(targetValue.replace(/[^0-9]/g, ""), 10);
  const suffix = targetValue.includes("+") ? "+" : "";

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
      {count.toLocaleString()}
      {count === endValue && suffix}
    </>
  );
};

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImageSlide, setCurrentImageSlide] = useState(0);
  const impactRef = useRef<HTMLDivElement>(null);
  const [isImpactVisible, setIsImpactVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      setCurrentImageSlide((prev) => (prev + 1) % sliderImages.length);
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
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
        <div className="hero-overlay absolute inset-0"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white -mt-16">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight animate-fade-in-down px-2 sm:px-4">
            {heroSlides[currentSlide].headline}
          </h1>
          <p className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-2xl md:max-w-3xl text-orange-200 animate-fade-in-up px-2 sm:px-4">
            {heroSlides[currentSlide].subheadline}
          </p>
          <div className="mt-4 sm:mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up px-2 sm:px-4">
            <Link
              to={heroSlides[currentSlide].link}
              className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-white font-semibold rounded-lg transition-colors text-center text-sm sm:text-base"
              style={{
                background: "linear-gradient(135deg, #ff6f00 0%, #d32f2f 100%)",
              }}
            >
              {heroSlides[currentSlide].cta}
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Main Text */}
          <p className="text-lg md:text-xl text-gray-800 max-w-5xl mx-auto leading-relaxed text-center">
            Springs India Foundation is committed to building an{" "}
            <span className="font-bold" style={{ color: "#00695c" }}>
              inclusive, sustainable, and empowered society
            </span>
            . We work across key areas to design the lives of women, youth,
            children, general and indigenous communities through education,
            skill development, livelihood enhancement, digital literacy,
            environment, agriculture, healthcare, welfare, and disaster relief.
            Our developmental initiatives empower women, youth, children,
            indigenous and vulnerable communities by fuelling them with
            self-confidence, enhancing livelihoods, improving health and
            wellbeing, filling the gaps of the digital divide, and protecting
            nature. With a holistic approach that blends education, skill
            development, sustainability, and social welfare, we strive to create
            strong, future-ready communities prepared for the future.
          </p>

          {/* Highlighted Box */}
          <div className="mt-12 max-w-5xl mx-auto">
            <div
              className="rounded-2xl p-8 md:p-12 text-white text-center"
              style={{ backgroundColor: "#00695c" }}
            >
              <p className="text-xl md:text-2xl font-bold leading-relaxed">
                Our mission is to transform lives—ensuring that every individual
                has dignity, opportunity, and support to thrive and succeed in
                their life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
            Our Focus Areas
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg card-hover"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full icon-container mx-auto">
                  <i className={`${area.icon} text-3xl`}></i>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-center text-gray-900">
                  {area.title}
                </h3>
                <p className="mt-2 text-gray-600 text-center whitespace-pre-line">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiring Stories Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
            Real Stories of Change
          </h2>
          <p className="text-center mt-2 text-gray-600">
            Voices from the communities we serve.
          </p>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeSuccessStories.map((story) => (
              <div
                key={story.title}
                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5 flex flex-col flex-grow">
                  <h3
                    className="text-lg font-bold"
                    style={{ color: "#00695c" }}
                  >
                    {story.title}
                  </h3>
                  <p
                    className="text-sm font-semibold mt-1"
                    style={{ color: "#ff6f00" }}
                  >
                    {story.name}
                  </p>
                  <p className="mt-3 text-gray-700 text-sm flex-grow">
                    {story.story}
                  </p>
                  <Link
                    to="/programs-impacts"
                    className="mt-3 font-semibold self-start text-sm"
                    style={{ color: "#00695c" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#2d7d32")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#00695c")
                    }
                  >
                    Read More &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact in Numbers Section */}
      <section
        ref={impactRef}
        className="py-4 md:py-8"
        style={{ backgroundColor: "rgba(17, 24, 39)" }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
            Our Impact in Numbers
          </h2>
          <p className="text-center mt-2 text-gray-300">
            Every number represents a life touched and a future brightened.
          </p>
          <div className="mt-12 overflow-hidden">
            <div className={`${styles.scrollContainer} gap-8`}>
              {[...impactNumbers, ...impactNumbers].map((metric, index) => (
                <div
                  key={`${metric.label}-${index}`}
                  className="text-center p-4 md:p-8 rounded-lg flex-shrink-0 min-w-[200px] md:min-w-[250px]"
                >
                  <div
                    className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-full mx-auto mb-3"
                    style={{
                      background:
                        "linear-gradient(135deg, #ff6f00 0%, #d32f2f 100%)",
                    }}
                  >
                    <i
                      className={`${metric.icon} text-2xl md:text-3xl text-white`}
                    ></i>
                  </div>
                  <div
                    className="text-2xl md:text-3xl lg:text-4xl font-bold"
                    style={{ color: "#ff6f00" }}
                  >
                    <AnimatedCounter
                      targetValue={metric.value}
                      startAnimation={isImpactVisible}
                    />
                  </div>
                  <p className="text-white mt-2 font-medium text-sm md:text-base">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
            Upcoming Events
          </h2>
          <p className="text-center mt-2 text-gray-600">
            Join us in our upcoming activities and be a part of the change.
          </p>
          <div className="mt-12 max-w-4xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="flex items-center bg-white rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-shadow"
              >
                <div
                  className="flex flex-col items-center justify-center text-white rounded-lg p-4 mr-6 w-20 text-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #ff6f00 0%, #d32f2f 100%)",
                  }}
                >
                  <span className="text-3xl font-bold leading-none">
                    {event.date.split(" ")[1]}
                  </span>
                  <span className="font-semibold">
                    {event.date.split(" ")[0]}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {event.title}
                  </h3>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
            Our Partners
          </h2>
          <p className="text-center mt-2 text-gray-600">
            Collaborating with organizations to create lasting impact.
          </p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all hover:scale-105"
              >
                <i
                  className={`${partner.icon} text-4xl`}
                  style={{ color: "#00695c" }}
                ></i>
                <p className="mt-3 text-sm font-semibold text-gray-700 text-center">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications and Recognitions Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
            Certifications and Recognitions
          </h2>
          <p className="text-center mt-2 text-gray-600">
            Officially registered and recognized by Government of India
          </p>
          <div className="mt-12 flex gap-6 overflow-x-auto pb-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow flex-shrink-0 min-w-[180px]"
              >
                <i
                  className={`${cert.icon} text-4xl mb-3`}
                  style={{ color: "#00695c" }}
                ></i>
                <p className="text-sm font-semibold text-gray-800">
                  {cert.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR & Government Partnership Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              CSR & Government Partnership
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">
              We are registered under the Government of India with the required
              statutory approvals. At Springs India Foundation, we believe
              meaningful social change happens when communities, corporates, and
              government work{" "}
              <span className="font-bold">
                together with purpose, transparency, and compassion.
              </span>{" "}
              We welcome partnerships that strengthen education, women
              empowerment, youth development, and general and indigenous
              community wellbeing across rural India
            </p>
          </div>

          {/* Government Collaboration */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{ color: "#00695c" }}
                >
                  <i className="fas fa-landmark mr-3"></i>Government
                  Collaboration
                </h3>
                <p className="text-gray-600 mb-6">
                  We support government missions and policies that uplift rural
                  communities, including:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i
                      className="fas fa-check-circle mt-1 mr-3"
                      style={{ color: "#00695c" }}
                    ></i>
                    <span>Education & foundational learning support</span>
                  </li>
                  <li className="flex items-start">
                    <i
                      className="fas fa-check-circle mt-1 mr-3"
                      style={{ color: "#00695c" }}
                    ></i>
                    <span>
                      Skill development & women empowerment initiatives
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i
                      className="fas fa-check-circle mt-1 mr-3"
                      style={{ color: "#00695c" }}
                    ></i>
                    <span>Youth values & personality development programs</span>
                  </li>
                  <li className="flex items-start">
                    <i
                      className="fas fa-check-circle mt-1 mr-3"
                      style={{ color: "#00695c" }}
                    ></i>
                    <span>Environment & cultural preservation activities</span>
                  </li>
                  <li className="flex items-start">
                    <i
                      className="fas fa-check-circle mt-1 mr-3"
                      style={{ color: "#00695c" }}
                    ></i>
                    <span>
                      Public welfare & indigenous and general community
                      wellbeing campaigns
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="text-center">
                  <i
                    className="fas fa-handshake text-6xl mb-4"
                    style={{ color: "#00695c" }}
                  ></i>
                  <h4 className="text-xl font-bold mb-4">
                    Together We Strengthen
                  </h4>
                  <p className="text-gray-600">
                    Our on-ground teams mobilize indigenous and general
                    communities, schools, volunteers, and families to implement
                    programs with dignity and trust. Together, we strengthen
                    public systems and ensure development reaches the last mile.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Corporate CSR Collaboration */}
          <div className="mb-16">
            <h3
              className="text-2xl font-bold text-center mb-12"
              style={{ color: "#00695c" }}
            >
              <i className="fas fa-building mr-3"></i>Corporate CSR
              Collaboration
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h4
                  className="text-xl font-bold mb-4"
                  style={{ color: "#ff6f00" }}
                >
                  We partner with corporates to co-create sustainable community
                  programs through:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i
                      className="fas fa-arrow-right mt-1 mr-3"
                      style={{ color: "#ff6f00" }}
                    ></i>
                    <span>CSR funded education & learning centres</span>
                  </li>
                  <li className="flex items-start">
                    <i
                      className="fas fa-arrow-right mt-1 mr-3"
                      style={{ color: "#ff6f00" }}
                    ></i>
                    <span>Women skill & livelihood training</span>
                  </li>
                  <li className="flex items-start">
                    <i
                      className="fas fa-arrow-right mt-1 mr-3"
                      style={{ color: "#ff6f00" }}
                    ></i>
                    <span>
                      Indigenous and general community livelihood enhancement
                      programs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i
                      className="fas fa-arrow-right mt-1 mr-3"
                      style={{ color: "#ff6f00" }}
                    ></i>
                    <span>Digital literacy & youth employability</span>
                  </li>
                  <li className="flex items-start">
                    <i
                      className="fas fa-arrow-right mt-1 mr-3"
                      style={{ color: "#ff6f00" }}
                    ></i>
                    <span>
                      School development & community engagement activities
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i
                      className="fas fa-arrow-right mt-1 mr-3"
                      style={{ color: "#ff6f00" }}
                    ></i>
                    <span>Environmental and cultural enrichment programs</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h4
                  className="text-xl font-bold mb-4"
                  style={{ color: "#ff6f00" }}
                >
                  We Provide:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i
                      className="fas fa-star mt-1 mr-3"
                      style={{ color: "#ff6f00" }}
                    ></i>
                    <span>Structured project plans</span>
                  </li>
                  <li className="flex items-start">
                    <i
                      className="fas fa-star mt-1 mr-3"
                      style={{ color: "#ff6f00" }}
                    ></i>
                    <span>Monitoring & reporting</span>
                  </li>
                  <li className="flex items-start">
                    <i
                      className="fas fa-star mt-1 mr-3"
                      style={{ color: "#ff6f00" }}
                    ></i>
                    <span>Financial accountability</span>
                  </li>
                  <li className="flex items-start">
                    <i
                      className="fas fa-star mt-1 mr-3"
                      style={{ color: "#ff6f00" }}
                    ></i>
                    <span>Impact stories & documentation</span>
                  </li>
                  <li className="flex items-start">
                    <i
                      className="fas fa-star mt-1 mr-3"
                      style={{ color: "#ff6f00" }}
                    ></i>
                    <span>Employee volunteering opportunities</span>
                  </li>
                </ul>
                <div
                  className="mt-6 p-4 bg-white rounded-lg border-l-4"
                  style={{ borderColor: "#00695c" }}
                >
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "#00695c" }}
                  >
                    We bring emotional connection and grassroots trust. You
                    bring resources and vision. Together, we create long-term
                    impact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Partnership Models */}
          <div className="mb-16">
            <h3
              className="text-2xl font-bold text-center mb-12"
              style={{ color: "#00695c" }}
            >
              CSR Partnership Models
            </h3>
            <div className="text-center max-w-3xl mx-auto mb-8">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Let's create sustainable impact together through aligned
                programs <span className="mx-1">&</span> transparent reporting.
              </p>

              <h4
                className="mt-4 text-xl md:text-2xl font-bold"
                style={{ color: "#00695c" }}
              >
                Ways Corporates Can Partner with Us
              </h4>

              <div className="mx-auto w-20 h-1 bg-orange-500 rounded mt-3"></div>

              <p className="mt-4 text-gray-600">
                At Springs India Foundation, we believe meaningful social change
                happens through collaboration. We offer multiple partnership
                pathways to match CSR goals, community needs, and sustainable
                outcomes.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <i
                    className="fas fa-hand-holding-usd text-4xl"
                    style={{ color: "#ff6f00" }}
                  ></i>
                </div>
                <h4 className="text-lg font-bold mb-2">Program Funding</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Support a specific initiative such as:
                </p>
                <ul className="text-sm text-gray-600 mb-3 space-y-1">
                  <li>• After-school learning centres</li>
                  <li>• Women skill development</li>
                  <li>• Digital literacy for rural youth</li>
                  <li>• Community wellbeing & culture programs</li>
                </ul>
                <p
                  className="text-xs font-semibold"
                  style={{ color: "#00695c" }}
                >
                  Outcome: Measurable impact with transparent reporting
                </p>
              </div>
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <i
                    className="fas fa-home text-4xl"
                    style={{ color: "#ff6f00" }}
                  ></i>
                </div>
                <h4 className="text-lg font-bold mb-2">
                  Adopt a Community or an Indigenous Community/Learning Centre
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  Sponsor a specific village or indigenous community or learning
                  hub:
                </p>
                <ul className="text-sm text-gray-600 mb-3 space-y-1">
                  <li>• Full program operations</li>
                  <li>• Staff/teacher support</li>
                  <li>• Learning materials & technology</li>
                </ul>
                <p
                  className="text-xs font-semibold"
                  style={{ color: "#00695c" }}
                >
                  Outcome: Deep, long-term transformation in one community
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <i
                    className="fas fa-graduation-cap text-4xl"
                    style={{ color: "#ff6f00" }}
                  ></i>
                </div>
                <h4 className="text-lg font-bold mb-2">
                  Scholarships & Beneficiary Sponsorship
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  Sponsor for direct empowerment:
                </p>
                <ul className="text-sm text-gray-600 mb-3 space-y-1">
                  <li>• Children</li>
                  <li>• Women trainees</li>
                  <li>• Youth scholars</li>
                </ul>
                <p
                  className="text-xs font-semibold"
                  style={{ color: "#00695c" }}
                >
                  Outcome: Direct empowerment, personal impact stories
                </p>
              </div>
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <i
                    className="fas fa-users text-4xl"
                    style={{ color: "#ff6f00" }}
                  ></i>
                </div>
                <h4 className="text-lg font-bold mb-2">
                  Employee Volunteering
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  Engage employees through:
                </p>
                <ul className="text-sm text-gray-600 mb-3 space-y-1">
                  <li>• Mentoring & skill-sessions</li>
                  <li>• Career guidance for youth</li>
                  <li>• Community event participation</li>
                </ul>
                <p
                  className="text-xs font-semibold"
                  style={{ color: "#00695c" }}
                >
                  Outcome: Skill-based & time-based volunteering programs
                </p>
              </div>
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <i
                    className="fas fa-gift text-4xl"
                    style={{ color: "#ff6f00" }}
                  ></i>
                </div>
                <h4 className="text-lg font-bold mb-2">In-Kind Support</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Provide resources such as:
                </p>
                <ul className="text-sm text-gray-600 mb-3 space-y-1">
                  <li>• Computers, books & learning tools</li>
                  <li>• Sewing machines & vocational support</li>
                  <li>• Basic infrastructure / furniture</li>
                </ul>
                <p
                  className="text-xs font-semibold"
                  style={{ color: "#00695c" }}
                >
                  Outcome: Strengthening grassroots capabilities
                </p>
              </div>
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <i
                    className="fas fa-chart-line text-4xl"
                    style={{ color: "#ff6f00" }}
                  ></i>
                </div>
                <h4 className="text-lg font-bold mb-2">
                  CSR Impact Reporting & Branding
                </h4>
                <ul className="text-sm text-gray-600 mb-3 space-y-1">
                  <li>• Quarterly / Annual Impact reports</li>
                  <li>• Photos, stories & video documentation</li>
                  <li>• Branding on supported centers/events</li>
                  <li>• Public recognition (when desired)</li>
                </ul>
                <p
                  className="text-xs font-semibold"
                  style={{ color: "#00695c" }}
                >
                  Outcome: Compliance + Visibility + Real Social Impact
                </p>
              </div>
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow lg:col-start-2">
                <div className="text-center mb-4">
                  <i
                    className="fas fa-handshake text-4xl"
                    style={{ color: "#ff6f00" }}
                  ></i>
                </div>
                <h4 className="text-lg font-bold mb-2">
                  Co-Branded Impact Initiatives
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  Partner for awareness campaigns & thematic programs:
                </p>
                <ul className="text-sm text-gray-600 mb-3 space-y-1">
                  <li>• Education for all</li>
                  <li>• Women empowerment</li>
                  <li>• Environment & wellness</li>
                  <li>• Values & culture initiatives</li>
                </ul>
                <p
                  className="text-xs font-semibold"
                  style={{ color: "#00695c" }}
                >
                  Outcome: Shared mission, shared voice
                </p>
              </div>
            </div>
          </div>

          {/* Why Partner with Us */}
          <div className="mb-16">
            <h3
              className="text-2xl font-bold text-center mb-8"
              style={{ color: "#00695c" }}
            >
              Why Partner with Us?
            </h3>
            <div className="bg-white border-2 border-gray-200 p-8 rounded-lg">
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <i
                    className="fas fa-check-circle mt-1 mr-3"
                    style={{ color: "#ff6f00" }}
                  ></i>
                  <span>Deep grassroots presence & community trust</span>
                </li>
                <li className="flex items-start">
                  <i
                    className="fas fa-check-circle mt-1 mr-3"
                    style={{ color: "#ff6f00" }}
                  ></i>
                  <span>Sustainable, scalable programs</span>
                </li>
                <li className="flex items-start">
                  <i
                    className="fas fa-check-circle mt-1 mr-3"
                    style={{ color: "#ff6f00" }}
                  ></i>
                  <span>Dedicated project monitoring & field team</span>
                </li>
                <li className="flex items-start">
                  <i
                    className="fas fa-check-circle mt-1 mr-3"
                    style={{ color: "#ff6f00" }}
                  ></i>
                  <span>Proven grassroots impact</span>
                </li>
                <li className="flex items-start">
                  <i
                    className="fas fa-check-circle mt-1 mr-3"
                    style={{ color: "#ff6f00" }}
                  ></i>
                  <span>Community-driven, values-centred approach</span>
                </li>
                <li className="flex items-start">
                  <i
                    className="fas fa-check-circle mt-1 mr-3"
                    style={{ color: "#ff6f00" }}
                  ></i>
                  <span>SDG-aligned programs & global development vision</span>
                </li>
                <li className="flex items-start">
                  <i
                    className="fas fa-check-circle mt-1 mr-3"
                    style={{ color: "#ff6f00" }}
                  ></i>
                  <span>Strong governance, documentation & ethics</span>
                </li>
                <li className="flex items-start">
                  <i
                    className="fas fa-check-circle mt-1 mr-3"
                    style={{ color: "#ff6f00" }}
                  ></i>
                  <span>Impact reports, stories & visibility for partners</span>
                </li>
              </ul>
              <p
                className="text-center mt-6 text-lg font-semibold"
                style={{ color: "#00695c" }}
              >
                Together, we can create sustainable change with dignity and
                love.
              </p>
            </div>
          </div>

          {/* Alignment & Credibility */}
          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h3
              className="text-2xl font-bold text-center mb-8"
              style={{ color: "#00695c" }}
            >
              Alignment & Credibility
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold mb-4">
                  Springs India Foundation is a registered trust with the
                  following approvals:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <i
                      className="fas fa-certificate mr-3"
                      style={{ color: "#00695c" }}
                    ></i>
                    <span>CSR-1 Registered</span>
                  </li>
                  <li className="flex items-center">
                    <i
                      className="fas fa-certificate mr-3"
                      style={{ color: "#00695c" }}
                    ></i>
                    <span>PAN, 80G, 12A approved</span>
                  </li>
                  <li className="flex items-center">
                    <i
                      className="fas fa-certificate mr-3"
                      style={{ color: "#00695c" }}
                    ></i>
                    <span>SDG-aligned initiatives</span>
                  </li>
                </ul>
                <p className="mt-6 text-gray-700 font-medium">
                  Our work is rooted in values, dignity, and measurable impact.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">
                  Invite to Partner with us
                </h4>
                <p className="text-gray-700 mb-4">
                  We welcome partnerships from:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <i
                      className="fas fa-check mr-3"
                      style={{ color: "#ff6f00" }}
                    ></i>
                    <span>Corporates & CSR Foundations and other NGOs</span>
                  </li>
                  <li className="flex items-center">
                    <i
                      className="fas fa-check mr-3"
                      style={{ color: "#ff6f00" }}
                    ></i>
                    <span>District & State Government Departments</span>
                  </li>
                  <li className="flex items-center">
                    <i
                      className="fas fa-check mr-3"
                      style={{ color: "#ff6f00" }}
                    ></i>
                    <span>Philanthropy Networks & Development Agencies</span>
                  </li>
                  <li className="flex items-center">
                    <i
                      className="fas fa-check mr-3"
                      style={{ color: "#ff6f00" }}
                    ></i>
                    <span>Educational Institutions & Skill Missions</span>
                  </li>
                  <li className="flex items-center">
                    <i
                      className="fas fa-check mr-3"
                      style={{ color: "#ff6f00" }}
                    ></i>
                    <span>Other Voluntary organisations</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-lg font-semibold" style={{ color: "#00695c" }}>
                We welcome partnerships with NGOS, corporates, schools,
                institutions & government departments to create scalable social
                impact.
              </p>
            </div>
          </div>

          {/* Program Highlights */}
          <div className="mb-16">
            <h3
              className="text-2xl font-bold text-center mb-12"
              style={{ color: "#00695c" }}
            >
              Our Program Highlights
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {programHighlights.map((program, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <i
                        className={`${program.icon} text-2xl mr-3`}
                        style={{ color: "#ff6f00" }}
                      ></i>
                      <h4
                        className="text-xl font-bold"
                        style={{ color: "#00695c" }}
                      >
                        {program.title}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "#00695c" }}
            >
              Let's Create Sustainable Impact Together
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Through aligned programs & transparent reporting, we can build a
              future where every community thrives with dignity and opportunity.
            </p>
            <Link
              to="/partnerships"
              className="inline-block px-4 md:px-8 py-3 text-white font-semibold rounded-lg transition-colors mb-4 md:mb-0 md:mr-4 text-sm md:text-base"
              style={{
                background: "linear-gradient(135deg, #ff6f00 0%, #d32f2f 100%)",
              }}
            >
              Explore Partnership Models
            </Link>
            <Link
              to="/contact"
              className="inline-block px-4 md:px-8 py-3 bg-white border-2 font-semibold rounded-lg transition-colors text-sm md:text-base"
              style={{ borderColor: "#00695c", color: "#00695c" }}
            >
              Connect with Our CSR Team
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="py-20 text-gray-800"
        style={{ backgroundColor: "rgb(232, 245, 232)" }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">
            Join Hands in Transforming Lives — Your Support Creates Hope
          </h2>
          <p className="mt-4 max-w-2xl mx-auto">
            We welcome discussions, visits, and exploratory calls with CSR teams
            and foundations.
          </p>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link
              to="/partnerships"
              className="flex items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
            >
              <i
                className="fas fa-handshake text-2xl mr-4"
                style={{ color: "#00695c" }}
              ></i>
              <div className="text-left">
                <h4 className="font-bold" style={{ color: "#00695c" }}>
                  Partner with us (CSR)
                </h4>
                <p className="text-sm text-gray-600">APPLY</p>
              </div>
            </Link>

            <Link
              to="/contact"
              className="flex items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
            >
              <i
                className="fas fa-chalkboard-teacher text-2xl mr-4"
                style={{ color: "#00695c" }}
              ></i>
              <div className="text-left">
                <h4 className="font-bold" style={{ color: "#00695c" }}>
                  Be a Teacher/Mentor/Trainer
                </h4>
                <p className="text-sm text-gray-600">APPLY</p>
              </div>
            </Link>

            <Link
              to="/contact"
              className="flex items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
            >
              <i
                className="fas fa-hands-helping text-2xl mr-4"
                style={{ color: "#00695c" }}
              ></i>
              <div className="text-left">
                <h4 className="font-bold" style={{ color: "#00695c" }}>
                  Volunteer / Intern
                </h4>
                <p className="text-sm text-gray-600">APPLY</p>
              </div>
            </Link>

            <Link
              to="/contact"
              className="flex items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
            >
              <i
                className="fas fa-heart text-2xl mr-4"
                style={{ color: "#00695c" }}
              ></i>
              <div className="text-left">
                <h4 className="font-bold" style={{ color: "#00695c" }}>
                  Fund / Support a Program
                </h4>
                <p className="text-sm text-gray-600">DONATE NOW</p>
              </div>
            </Link>

            <Link
              to="/contact"
              className="flex items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
            >
              <i
                className="fas fa-share-alt text-2xl mr-4"
                style={{ color: "#00695c" }}
              ></i>
              <div className="text-left">
                <h4 className="font-bold" style={{ color: "#00695c" }}>
                  Community Referrals/Collaboration
                </h4>
                <p className="text-sm text-gray-600">REFER</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
