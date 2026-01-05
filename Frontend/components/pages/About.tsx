import React, { useState } from "react";
import aboutImage from '../../assets/about.jpeg';

const timelineEvents = {
  "2022": [
    "December: Christmas Celebration - Community gathering",
    "December: Awarding Ceremony of Spell Bee Competition - Child Education",
    "November: Women Empowerment Workshop - Women Empowerment",
    "October: Conduct of Spell Bee Competition - Child Education",
    "October: Launch of Spell Bee Competition - Child Education",
  ],
  "2023": [
    "October: Cultural Activity - Child Education",
    "September: Weekend Activity - Child Education",
    "July: Counselling for Children - Mental Health Care",
    "June: After School Program-Activity - Child Education",
    "May: Summer Camp-Session-2 - Child Education",
    "April: Summer Camp-Session-1 - Child Education",
    "March: Counselling Session - Mental Health Care",
    "February: Science Expo - Child Education",
    "January: Weekend Learning Activity - Child Education",
  ],
  "2024": [
    "November: Science Expo and Award Day for Children",
    "October: Orientation Program for Teachers - Women Empowerment",
    "June: Launch of Teacher Training Program - Women Empowerment",
    "May: Summer Camp (Session 2) & Award Function - Child Education",
    "April: Summer Camp (Session 1) - Child Education",
    "March: Award Function - Women Empowerment",
    "February: Weekend Activity - Child Education",
  ],
  "2025": [
    "March: Teacher Training Certification for Candidates - Women Empowerment",
    "March: Award Day for Students - Child Education",
    "March: Sports Day - Child Education",
    "February: Learning Activity Program - Child Education",
    "January: Pongal & Republic Day Celebrations - Community Involvement and Bonding",
  ],
};

const coreValues = [
  {
    title: "Integrity & Transparency",
    description:
      "Upholding ethical practices and ensuring honesty and accountability in all initiatives.",
  },
  {
    title: "Equity & Inclusion",
    description:
      "Ensuring every individual, especially from marginalized communities, deserves access to quality resources.",
  },
  {
    title: "Empowerment & Self-Reliance",
    description:
      "Supporting women, youth, and children to build their skills, confidence, and economic independence.",
  },
  {
    title: "Accountability",
    description:
      "Delivering clear, measurable results that contribute to meaningful community development.",
  },
  {
    title: "Sustainability & Responsibility",
    description:
      "Working towards long-term, meaningful change and community development.",
  },
  {
    title: "Holistic Development",
    description:
      "Nurturing intellectual, emotional, physical, and moral growth to create responsible citizens.",
  },
];

const TimelineItem: React.FC<{
  year: string;
  events: string[];
  isLeft: boolean;
}> = ({ year, events, isLeft }) => (
  <div
    className={`mb-8 flex md:justify-between items-center w-full ${
      isLeft ? "md:flex-row-reverse left-timeline" : "right-timeline"
    }`}
  >
    <div className="order-1 w-5/12 hidden md:block"></div>
    <div
      className="z-20 flex items-center order-1 shadow-xl w-14 h-14 rounded-full flex-shrink-0"
      style={{
        background: "linear-gradient(135deg, #ff6f00 0%, #d32f2f 100%)",
      }}
    >
      <h1 className="mx-auto font-semibold text-lg text-white">{year}</h1>
    </div>
    <div className="order-1 bg-white rounded-lg shadow-xl w-full md:w-5/12 ml-4 md:ml-0 px-6 py-4">
      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
        {events.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
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
            A Light in someone's darkest hour, to show the path of 'HOPE' and
            'SUCCESS'.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={aboutImage}
              alt="Community gathering"
              className="rounded-lg shadow-2xl w-full h-106 object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Who We Are</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We are registered with the{" "}
              <span className="font-bold">Government of India</span> and
              authorized to receive{" "}
              <span className="font-bold">CSR funding</span> under CSR-1
              certification. Our mission is simple yet powerful — to empower
              people, uplift communities, and build a sustainable and inclusive
              future for all.
              <br />
              <br />
              <span className="font-bold">
                Springs India Foundation- A Light in someone’s darkest hour, to
                show the path of <span className="text-orange-700">‘HOPE’</span>{" "}
                and <span className="text-green-700">‘SUCCESS’</span>.
              </span>
              <br />
              <br />
              Springs India Foundation is a Non -Profit Organisation and an NGO
              - a social welfare trust that works for bringing in a social
              change in the community.
              <br />
              <br />
              <span className="font-bold text-gray-800">
                Springs India Foundation
              </span>{" "}
              is on a mission to serve the human community by transforming human
              lives, aiming at the betterment of women empowerment, Youth
              development, child welfare, general and indigenous community
              welfare and upliftment
              <br />
              <br />
              Springs India Foundation is a value-driven trust and serves
              towards national developmental goals, that impact the lives of the
              Women, Youth, Children and general and indigenous community
              through long-term, sustainable programs. The trust aims to develop
              the skills of the community and thus helps them to come out of
              poverty and achieve inclusive growth, development, and success
              with its main focus on education, mental health, skill
              development, livelihood and environment. The project and programs
              of the trust always focus on the Women, Youth and Child Skill
              development, general and indigenous community welfare that led
              towards a better, sustainable way of life for the weaker sections
              of society and enhances their livelihood.
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
              <h3 className="text-2xl font-bold text-center text-teal-700 mb-4">
                Our Vision
              </h3>
              <p className="text-center text-gray-600 italic text-lg leading-relaxed">
                'Save' to 'Protect', 'Serve' to 'Support', 'Secure' to
                'Nurture', 'Set Free' to 'Survive'
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-orange-100 to-red-100 mx-auto mb-6">
                <i className="fas fa-bullseye text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-center text-teal-700 mb-4">
                Our Mission
              </h3>
              <p className="text-center text-gray-600 leading-relaxed">
                To save, protect and nurture every woman and child, guide every
                youth, and support them with care, dignity, and opportunity. We
                are committed to creating safety and helping each individual to
                come out of hardships and crisis. By providing access to
                education, wellness, and empowerment, we help general and
                indigenous communities not only survive—but to succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to
              the communities we serve.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
              <div className="flex items-center justify-center h-16 w-16 rounded-full icon-container mx-auto">
                <i className="fas fa-shield-alt text-3xl"></i>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-center text-gray-900">
                Integrity & Transparency
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                In all initiatives, Springs India Foundation upholds the ethical
                practices and ensures honesty and accountability in decisions,
                finances, and program implementation and execution.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
              <div className="flex items-center justify-center h-16 w-16 rounded-full icon-container mx-auto">
                <i className="fas fa-balance-scale text-3xl"></i>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-center text-gray-900">
                Equity & Inclusion
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                Every individual,especially from marginalized and indigenous
                communities, women, youth and children deserves access to
                quality education, skill development and livelihood
                opportunities for growth.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
              <div className="flex items-center justify-center h-16 w-16 rounded-full icon-container mx-auto">
                <i className="fas fa-fist-raised text-3xl"></i>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-center text-gray-900">
                Empowerment & Self-Reliance
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                We support women, youth, children general and indigenous
                communities to build their skills, confidence, and educate them
                for economic independence.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
              <div className="flex items-center justify-center h-16 w-16 rounded-full icon-container mx-auto">
                <i className="fas fa-clipboard-check text-3xl"></i>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-center text-gray-900">
                Accountability
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                Delivering clear, measurable results that contribute to
                meaningful community development.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
              <div className="flex items-center justify-center h-16 w-16 rounded-full icon-container mx-auto">
                <i className="fas fa-leaf text-3xl"></i>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-center text-gray-900">
                Sustainability & Responsibility
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                Long-term change, we work towards long-term, meaningful
                community development.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
              <div className="flex items-center justify-center h-16 w-16 rounded-full icon-container mx-auto">
                <i className="fas fa-heart text-3xl"></i>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-center text-gray-900">
                Holistic Development
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                We nurture intellectual, emotional, physical, and moral growth
                to create responsible and capable citizens and to have a
                sustainable life.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
              <div className="flex items-center justify-center h-16 w-16 rounded-full icon-container mx-auto">
                <i className="fas fa-users text-3xl"></i>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-center text-gray-900">
                Service to Society
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                We reach people with Compassion and take up the social
                responsibility to guide our programs, from education to welfare
                and general and indigenous community development.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
              <div className="flex items-center justify-center h-16 w-16 rounded-full icon-container mx-auto">
                <i className="fas fa-globe text-3xl"></i>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-center text-gray-900">
                Innovation & Excellence
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                We take up innovative, sustainable, scalable, replicable and
                creative approaches to enhance learning and community impact.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
              <div className="flex items-center justify-center h-16 w-16 rounded-full icon-container mx-auto">
                <i className="fas fa-handshake text-3xl"></i>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-center text-gray-900">
                Collaboration & Partnership
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                We actively work with governments, NGOs, CSR initiatives, and
                institutions to reach the deserving people to the maximum with
                effectiveness.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
              <div className="flex items-center justify-center h-16 w-16 rounded-full icon-container mx-auto">
                <i className="fas fa-hands-helping text-3xl"></i>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-center text-gray-900">
                Respect & Compassion
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                We reach every individual with empathy, understanding and with
                compassion and they are valued.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Our Story
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Springs India Foundation began with a simple belief — real
                change starts small, with one person, one child, one village at
                a time.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                With limited resources but unlimited determination, we started
                community-based education and empowerment programs in rural and
                semi-urban areas.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                From supporting children's education to empowering women and
                improving general community well-being, our journey reflects
                hope, resilience, and a vision to serve.
              </p>
              <p
                className="text-gray-700 leading-relaxed text-lg font-semibold"
                style={{ color: "#00695c" }}
              >
                Today, our initiatives are expanding across regions — and we are
                committed to scaling nationally & internationally with strong
                CSR partnerships, volunteer networks, and community support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Our Journey
          </h2>
          <p className="text-center mt-2 text-gray-600">
            Reflecting on our hope, resilience, and vision to serve.
          </p>

          <div className="max-w-4xl mx-auto mb-12 mt-8">
            <div
              className="bg-gradient-to-r from-teal-50 to-emerald-50 p-8 rounded-lg border-l-4"
              style={{ borderColor: "#00695c" }}
            >
              <p className="text-gray-700 leading-relaxed text-lg">
                The Springs India Foundation journey started in the year{" "}
                <span className="font-bold" style={{ color: "#00695c" }}>
                  2022
                </span>
                . As it started, the foundation introduced{" "}
                <span className="font-semibold">
                  after-school programs for kids
                </span>
                . The children were given literacy and numerical activities,
                reading, and celebrations to have a cultural and community
                engagement. They also had special weekend programs. Along with
                that{" "}
                <span className="font-semibold" style={{ color: "#ff6f00" }}>
                  women empowerment programs
                </span>{" "}
                like Teacher Training programs were introduced.
              </p>
            </div>
          </div>

          <div className="relative wrap overflow-hidden p-10 md:p-10 p-4 h-full">
            <div
              className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border hidden md:block"
              style={{ left: "50%" }}
            ></div>
            {Object.keys(timelineEvents)
              .reverse()
              .map((year, index) => (
                <TimelineItem
                  key={year}
                  year={year}
                  events={timelineEvents[year as keyof typeof timelineEvents]}
                  isLeft={index % 2 === 0}
                />
              ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Approach
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
              <i
                className="fas fa-users text-2xl mr-4 mt-1"
                style={{ color: "#00695c" }}
              ></i>
              <span className="text-gray-700">
                Grassroots engagement with community needs
              </span>
            </div>
            <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
              <i
                className="fas fa-expand-arrows-alt text-2xl mr-4 mt-1"
                style={{ color: "#00695c" }}
              ></i>
              <span className="text-gray-700">
                Scalable & replicable development models
              </span>
            </div>
            <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
              <i
                className="fas fa-handshake text-2xl mr-4 mt-1"
                style={{ color: "#00695c" }}
              ></i>
              <span className="text-gray-700">
                Collaboration with schools, panchayats, local institutions and
                Governments
              </span>
            </div>
            <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
              <i
                className="fas fa-laptop-code text-2xl mr-4 mt-1"
                style={{ color: "#00695c" }}
              ></i>
              <span className="text-gray-700">
                Digital tools and skill-based programs for future-readiness
              </span>
            </div>
            <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
              <i
                className="fas fa-chart-line text-2xl mr-4 mt-1"
                style={{ color: "#00695c" }}
              ></i>
              <span className="text-gray-700">
                Transparent monitoring, reporting & impact measurement
              </span>
            </div>
            <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
              <i
                className="fas fa-map-marker-alt text-2xl mr-4 mt-1"
                style={{ color: "#00695c" }}
              ></i>
              <span className="text-gray-700">
                Strong grassroots presence and local leadership
              </span>
            </div>
            <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
              <i
                className="fas fa-database text-2xl mr-4 mt-1"
                style={{ color: "#00695c" }}
              ></i>
              <span className="text-gray-700">Data-driven decision making</span>
            </div>
            <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
              <i
                className="fas fa-leaf text-2xl mr-4 mt-1"
                style={{ color: "#00695c" }}
              ></i>
              <span className="text-gray-700">
                Sustainability-focused initiatives
              </span>
            </div>
            <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
              <i
                className="fas fa-tools text-2xl mr-4 mt-1"
                style={{ color: "#00695c" }}
              ></i>
              <span className="text-gray-700">
                Capacity building and empowerment
              </span>
            </div>
            <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
              <i
                className="fas fa-eye text-2xl mr-4 mt-1"
                style={{ color: "#00695c" }}
              ></i>
              <span className="text-gray-700">Holistic development lens</span>
            </div>
            <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
              <i
                className="fas fa-lightbulb text-2xl mr-4 mt-1"
                style={{ color: "#00695c" }}
              ></i>
              <span className="text-gray-700">
                Innovation and technology integration
              </span>
            </div>
            <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
              <i
                className="fas fa-building text-2xl mr-4 mt-1"
                style={{ color: "#00695c" }}
              ></i>
              <span className="text-gray-700">Public–private partnerships</span>
            </div>
            <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
              <i
                className="fas fa-sync-alt text-2xl mr-4 mt-1"
                style={{ color: "#00695c" }}
              ></i>
              <span className="text-gray-700">
                Continuous learning and adaptation
              </span>
            </div>
            <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
              <i
                className="fas fa-balance-scale text-2xl mr-4 mt-1"
                style={{ color: "#00695c" }}
              ></i>
              <span className="text-gray-700">
                Equity and inclusion at the core
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Therefore We Exist To Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Therefore, We Exist To
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <i
                    className="fas fa-check-circle text-xl mr-3 mt-1"
                    style={{ color: "#ff6f00" }}
                  ></i>
                  <span className="text-gray-700">
                    Support children with{" "}
                    <strong>joyful learning and strong values</strong>
                  </span>
                </div>
                <div className="flex items-start">
                  <i
                    className="fas fa-check-circle text-xl mr-3 mt-1"
                    style={{ color: "#ff6f00" }}
                  ></i>
                  <span className="text-gray-700">
                    Empower women with{" "}
                    <strong>skills, confidence, and independence</strong>
                  </span>
                </div>
                <div className="flex items-start">
                  <i
                    className="fas fa-check-circle text-xl mr-3 mt-1"
                    style={{ color: "#ff6f00" }}
                  ></i>
                  <span className="text-gray-700">
                    Strengthen families through{" "}
                    <strong>community-driven programs</strong>
                  </span>
                </div>
                <div className="flex items-start">
                  <i
                    className="fas fa-check-circle text-xl mr-3 mt-1"
                    style={{ color: "#ff6f00" }}
                  ></i>
                  <span className="text-gray-700">
                    Build <strong>safe, emotional, and social spaces</strong>
                  </span>
                </div>
                <div className="flex items-start">
                  <i
                    className="fas fa-check-circle text-xl mr-3 mt-1"
                    style={{ color: "#ff6f00" }}
                  ></i>
                  <span className="text-gray-700">
                    Promote <strong>culture, belonging, and unity</strong>
                  </span>
                </div>
                <div className="flex items-start">
                  <i
                    className="fas fa-check-circle text-xl mr-3 mt-1"
                    style={{ color: "#ff6f00" }}
                  ></i>
                  <span className="text-gray-700">
                    Foster <strong>digital and financial literacy</strong> for
                    future readiness
                  </span>
                </div>
                <div className="flex items-start">
                  <i
                    className="fas fa-check-circle text-xl mr-3 mt-1"
                    style={{ color: "#ff6f00" }}
                  ></i>
                  <span className="text-gray-700">
                    Encourage <strong>youth leadership and volunteering</strong>{" "}
                    for community change
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i
                    className="fas fa-check-circle text-xl mr-3 mt-1"
                    style={{ color: "#ff6f00" }}
                  ></i>
                  <span className="text-gray-700">
                    Create{" "}
                    <strong>
                      platforms for local art, crafts, and traditions
                    </strong>{" "}
                    to thrive
                  </span>
                </div>
                <div className="flex items-start">
                  <i
                    className="fas fa-check-circle text-xl mr-3 mt-1"
                    style={{ color: "#ff6f00" }}
                  ></i>
                  <span className="text-gray-700">
                    Bridge <strong>rural–urban opportunity gaps</strong> through
                    awareness and collaboration
                  </span>
                </div>
                <div className="flex items-start">
                  <i
                    className="fas fa-check-circle text-xl mr-3 mt-1"
                    style={{ color: "#ff6f00" }}
                  ></i>
                  <span className="text-gray-700">
                    Cultivate{" "}
                    <strong>
                      resilience, mental well-being, and emotional strength
                    </strong>{" "}
                    in every individual
                  </span>
                </div>
                <div className="flex items-start">
                  <i
                    className="fas fa-check-circle text-xl mr-3 mt-1"
                    style={{ color: "#ff6f00" }}
                  ></i>
                  <span className="text-gray-700">
                    Nurture{" "}
                    <strong>
                      environmental awareness and sustainable living
                    </strong>{" "}
                    within general and indigenous communities
                  </span>
                </div>
                <div className="flex items-start">
                  <i
                    className="fas fa-check-circle text-xl mr-3 mt-1"
                    style={{ color: "#ff6f00" }}
                  ></i>
                  <span className="text-gray-700">
                    Ensure{" "}
                    <strong>transparency, accountability, and dignity</strong>{" "}
                    in every initiative
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <div
                className="bg-gradient-to-r from-teal-50 to-emerald-50 p-8 rounded-lg border-l-4"
                style={{ borderColor: "#00695c" }}
              >
                <p
                  className="text-lg font-semibold mb-4"
                  style={{ color: "#00695c" }}
                >
                  We exist to ensure{" "}
                  <strong>
                    every life is valued, every dream has a chance, and every
                    village or community grows with dignity and hope.
                  </strong>
                </p>
                <p className="text-gray-700">
                  These not only highlight growth not just in learning and
                  livelihood, but also in{" "}
                  <strong>
                    mindset, identity, and long-term community resilience.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Long-Term Goals Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Long-Term Goals
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-4">
                <i
                  className="fas fa-building text-4xl"
                  style={{ color: "#ff6f00" }}
                ></i>
              </div>
              <h4
                className="text-lg font-bold mb-3 text-center"
                style={{ color: "#00695c" }}
              >
                Regional Learning Centers
              </h4>
              <p className="text-gray-600 text-center">
                Establish regional community learning & skill centres
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-4">
                <i
                  className="fas fa-hands-helping text-4xl"
                  style={{ color: "#ff6f00" }}
                ></i>
              </div>
              <h4
                className="text-lg font-bold mb-3 text-center"
                style={{ color: "#00695c" }}
              >
                Indigenous Community Support
              </h4>
              <p className="text-gray-600 text-center">
                Supporting the underprivileged community, especially indigenous
                communities
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-4">
                <i
                  className="fas fa-leaf text-4xl"
                  style={{ color: "#ff6f00" }}
                ></i>
              </div>
              <h4
                className="text-lg font-bold mb-3 text-center"
                style={{ color: "#00695c" }}
              >
                Sustainable Development
              </h4>
              <p className="text-gray-600 text-center">
                Supporting and educating the community with sustainable
                development programs
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-4">
                <i
                  className="fas fa-handshake text-4xl"
                  style={{ color: "#ff6f00" }}
                ></i>
              </div>
              <h4
                className="text-lg font-bold mb-3 text-center"
                style={{ color: "#00695c" }}
              >
                Corporate Partnerships
              </h4>
              <p className="text-gray-600 text-center">
                Partner with corporates for sustainable CSR models
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-4">
                <i
                  className="fas fa-female text-4xl"
                  style={{ color: "#ff6f00" }}
                ></i>
              </div>
              <h4
                className="text-lg font-bold mb-3 text-center"
                style={{ color: "#00695c" }}
              >
                Women Entrepreneurship
              </h4>
              <p className="text-gray-600 text-center">
                Expand women entrepreneurship opportunities and networks
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-4">
                <i
                  className="fas fa-globe text-4xl"
                  style={{ color: "#ff6f00" }}
                ></i>
              </div>
              <h4
                className="text-lg font-bold mb-3 text-center"
                style={{ color: "#00695c" }}
              >
                Scalable Programs
              </h4>
              <p className="text-gray-600 text-center">
                Develop scalable programs that can be replicated nationally and
                internationally
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Leadership
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              Driven by purpose. Guided by values. Focused on measurable social
              impact.
            </p>
            <p className="text-gray-600 max-w-4xl mx-auto">
              Our leadership consists of educators, social development
              professionals, corporate mentors, and community leaders dedicated
              to building a better tomorrow.
            </p>
          </div>

          <LeadershipCarousel />
        </div>
      </section> */}

      {/* Join Our Movement Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Join Our Movement
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Whether you are an individual, corporate, volunteer, academic
              institution, or government body, we welcome you to collaborate and
              create impact.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <i
                  className="fas fa-handshake text-3xl mb-3"
                  style={{ color: "#ff6f00" }}
                ></i>
                <h4 className="font-semibold text-lg mb-2">CSR Partnerships</h4>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <i
                  className="fas fa-users text-3xl mb-3"
                  style={{ color: "#ff6f00" }}
                ></i>
                <h4 className="font-semibold text-lg mb-2">
                  Volunteer Programs
                </h4>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <i
                  className="fas fa-graduation-cap text-3xl mb-3"
                  style={{ color: "#ff6f00" }}
                ></i>
                <h4 className="font-semibold text-lg mb-2">
                  Skill Development Alliances
                </h4>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <i
                  className="fas fa-school text-3xl mb-3"
                  style={{ color: "#ff6f00" }}
                ></i>
                <h4 className="font-semibold text-lg mb-2">
                  School & Community Collaborations
                </h4>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <p className="text-gray-700 text-lg mb-4">
                Let's work together to create measurable, sustainable impact in
                rural education and general and indigenous community
                empowerment.
              </p>
              <p className="text-gray-700 mb-4">
                We invite CSR leaders, foundations, and institutional partners
                for strategic discussions, site visits, and project planning.
              </p>
              <p className="text-gray-700 font-semibold">
                Your partnership can transform lives and strengthen communities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <a
                href="#"
                className="bg-white hover:bg-teal-50 p-4 rounded-lg shadow-md transition-all"
              >
                <i
                  className="fas fa-briefcase text-2xl mb-2"
                  style={{ color: "#00695c" }}
                ></i>
                <p className="font-semibold">Partner with us (CSR)</p>
                <p className="text-sm text-gray-600">APPLY</p>
              </a>
              <a
                href="#"
                className="bg-white hover:bg-teal-50 p-4 rounded-lg shadow-md transition-all"
              >
                <i
                  className="fas fa-hands-helping text-2xl mb-2"
                  style={{ color: "#00695c" }}
                ></i>
                <p className="font-semibold">Volunteer / Intern</p>
                <p className="text-sm text-gray-600">APPLY</p>
              </a>
              <a
                href="#"
                className="bg-white hover:bg-teal-50 p-4 rounded-lg shadow-md transition-all"
              >
                <i
                  className="fas fa-donate text-2xl mb-2"
                  style={{ color: "#00695c" }}
                ></i>
                <p className="font-semibold">Fund a program</p>
                <p className="text-sm text-gray-600">DONATE NOW</p>
              </a>
              <a
                href="#"
                className="bg-white hover:bg-teal-50 p-4 rounded-lg shadow-md transition-all"
              >
                <i
                  className="fas fa-share-alt text-2xl mb-2"
                  style={{ color: "#00695c" }}
                ></i>
                <p className="font-semibold">Community referrals</p>
                <p className="text-sm text-gray-600">REFER</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const LeadershipCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const leadershipMembers = [
    {
      name: "President Name",
      role: "President",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "Leading the foundation with vision and dedication.",
    },
    {
      name: "Vice President Name",
      role: "Vice President",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
      description: "Supporting strategic initiatives and community outreach.",
    },
    {
      name: "Advisory Board",
      role: "Senior Board",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Providing strategic guidance and expertise.",
    },
    {
      name: "Media Head",
      role: "Communications Director",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      description: "Managing communications and media relations.",
    },
    {
      name: "Board Trustee 1",
      role: "Board Trustee",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
      description: "Ensuring governance and accountability.",
    },
    {
      name: "Board Trustee 2",
      role: "Board Trustee",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
      description: "Overseeing financial management and compliance.",
    },
    {
      name: "Volunteer 1",
      role: "Volunteer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      description:
        "Coordinating volunteer activities and community engagement.",
    },
    {
      name: "Volunteer 2",
      role: "Volunteer",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      description:
        "Coordinating volunteer activities and community engagement.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % leadershipMembers.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + leadershipMembers.length) % leadershipMembers.length
    );
  };

  return (
    <div className="relative max-w-7xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-6 md:transform-none"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {leadershipMembers.map((member, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-4 md:w-auto md:flex-shrink md:px-0"
            >
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4
                  className="text-lg font-bold mb-2"
                  style={{ color: "#00695c" }}
                >
                  {member.name}
                </h4>
                <p
                  className="text-sm font-semibold mb-3"
                  style={{ color: "#ff6f00" }}
                >
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons - Only show on mobile */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow md:hidden"
        style={{ color: "#00695c" }}
      >
        <i className="fas fa-chevron-left text-xl"></i>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow md:hidden"
        style={{ color: "#00695c" }}
      >
        <i className="fas fa-chevron-right text-xl"></i>
      </button>

      {/* Dots Indicator - Only show on mobile */}
      <div className="flex justify-center mt-8 space-x-2 md:hidden">
        {leadershipMembers.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="w-3 h-3 rounded-full transition-colors"
            style={{
              backgroundColor: index === currentSlide ? "#ff6f00" : "#d1d5db",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
