import React from 'react';
import { Link } from 'react-router-dom';

const ProjectBurgurHills: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="cta-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Project Burgur Hills</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            The Burgur Hills Community Development Project
          </p>
        </div>
      </section>

      {/* Project Burgur Hills Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4" style={{color: '#00695c'}}>
              Project Burgur Hills
            </h2>
            <p className="text-center text-xl mb-12" style={{color: '#ff6f00'}}>
              The Burgur Hills Community Development Project
            </p>

            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Amidst the beautiful yet underserved landscapes of the Burgur Hills in Erode District, thousands of families continue to live with limited access to essential opportunities that many take for granted. Behind the quiet villages and remote hill pathways are stories of struggle, resilience, hope, and untapped potential.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                With a deep commitment toward rural transformation and human dignity, <span className="font-bold">Springs India Foundation has launched Project Burgur Hills</span> — a heartfelt community development mission dedicated to uplifting the lives of people living in and around the Burgur Hills region.
              </p>
              <div className="bg-gradient-to-r from-teal-50 to-emerald-50 p-6 rounded-lg border-l-4 mb-6" style={{borderColor: '#00695c'}}>
                <p className="text-lg font-semibold" style={{color: '#00695c'}}>
                  The project aims to reach 36 villages with a population of nearly 73,000 people, bringing meaningful support and sustainable development to communities that have remained isolated from many mainstream facilities and opportunities.
                </p>
              </div>
            </div>

            {/* The Reality */}
            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-bold mb-6" style={{color: '#00695c'}}>The Reality of Life in Burgur Hills</h3>
              <p className="text-gray-700 mb-6">
                For many families in these villages, daily life is filled with challenges:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start bg-white p-4 rounded-lg">
                    <i className="fas fa-child text-2xl mr-4 mt-1" style={{color: '#ff6f00'}}></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Children's Education</h4>
                      <p className="text-gray-700 text-sm">Children often walk long distances with limited educational support and lack access to quality learning opportunities. Many schools struggle due to the shortage of trained teachers and educational resources.</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white p-4 rounded-lg">
                    <i className="fas fa-user-graduate text-2xl mr-4 mt-1" style={{color: '#ff6f00'}}></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Youth Opportunities</h4>
                      <p className="text-gray-700 text-sm">Young people with dreams and talents are often unable to find the guidance or opportunities needed to build a better future.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start bg-white p-4 rounded-lg">
                    <i className="fas fa-female text-2xl mr-4 mt-1" style={{color: '#ff6f00'}}></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Women's Empowerment</h4>
                      <p className="text-gray-700 text-sm">Women, despite their strength, dedication, and hard work, frequently remain without employment opportunities, financial independence, or skill development support. Many mothers silently sacrifice their own aspirations while striving to provide for their families.</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white p-4 rounded-lg">
                    <i className="fas fa-heartbeat text-2xl mr-4 mt-1" style={{color: '#ff6f00'}}></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Healthcare Access</h4>
                      <p className="text-gray-700 text-sm">Healthcare facilities and awareness programs remain limited in several areas, leaving vulnerable families without adequate support during times of illness and hardship.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Belief */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-lg border-l-4 mb-12" style={{borderColor: '#ff6f00'}}>
              <p className="text-xl font-semibold text-gray-800 text-center">
                Project Burgur Hills was born out of the belief that every rural family deserves dignity, opportunity, education, care, and hope.
              </p>
            </div>

            {/* Initiative Focus Areas */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-8 text-center" style={{color: '#00695c'}}>The initiative seeks to bring holistic development to the region through:</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: 'fas fa-hands-helping', title: 'Community welfare and rural support programs' },
                  { icon: 'fas fa-female', title: 'Women empowerment and livelihood initiatives' },
                  { icon: 'fas fa-graduation-cap', title: 'Educational support for children and youth' },
                  { icon: 'fas fa-chalkboard-teacher', title: 'Teacher training and skill development programs' },
                  { icon: 'fas fa-hospital', title: 'Healthcare awareness and wellness camps' },
                  { icon: 'fas fa-apple-alt', title: 'Nutrition, hygiene, and preventive care initiatives' },
                  { icon: 'fas fa-users', title: 'Youth empowerment and vocational guidance' },
                  { icon: 'fas fa-hand-holding-heart', title: 'Support for vulnerable and economically weaker families' },
                  { icon: 'fas fa-leaf', title: 'Social awareness and sustainable development activities' }
                ].map((area, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-center mb-4">
                      <i className={`${area.icon} text-4xl`} style={{color: '#00695c'}}></i>
                    </div>
                    <p className="text-gray-700 text-center font-medium">{area.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center" style={{color: '#00695c'}}>More Than Just a Development Project</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <span className="font-bold">Project Burgur Hills is a mission</span> to stand beside forgotten communities, listen to their struggles, nurture their strengths, and help create pathways toward a brighter future.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The foundation believes that when a child receives quality education, when a woman gains confidence and livelihood, when a family receives care and support, and when a village begins to believe in its own potential — true transformation begins.
              </p>
              <div className="bg-gradient-to-r from-teal-50 to-emerald-50 p-6 rounded-lg border-l-4" style={{borderColor: '#00695c'}}>
                <p className="text-lg font-semibold text-gray-800">
                  Through compassion, partnership, and sustained community engagement, Project Burgur Hills aspires to bring hope where there was uncertainty, opportunity where there was limitation, and empowerment where there was struggle.
                </p>
              </div>
            </div>

            {/* Closing Message */}
            <div className="text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-orange-100 to-red-100 px-8 py-6 rounded-lg border-2" style={{borderColor: '#ff6f00'}}>
                <p className="text-2xl font-bold" style={{color: '#00695c'}}>
                  Because every village matters.
                </p>
                <p className="text-2xl font-bold" style={{color: '#00695c'}}>
                  Every family matters.
                </p>
                <p className="text-2xl font-bold" style={{color: '#00695c'}}>
                  Every life matters.
                </p>
              </div>
            </div>

            {/* Partnership Call to Action */}
            <div className="bg-gradient-to-r from-teal-50 to-emerald-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-center" style={{color: '#00695c'}}>Join Us in Transforming Burgur Hills</h3>
              <p className="text-center text-gray-700 mb-8">
                We invite CSR partners, philanthropic organizations, and compassionate individuals to join us in bringing sustainable development and hope to the Burgur Hills communities.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link to="/partnerships" className="flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <i className="fas fa-handshake text-2xl mr-3" style={{color: '#00695c'}}></i>
                  <div className="text-left">
                    <h4 className="font-bold text-sm" style={{color: '#00695c'}}>Partner with us (CSR)</h4>
                    <p className="text-xs text-gray-600">APPLY</p>
                  </div>
                </Link>
                <Link to="/contact" className="flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <i className="fas fa-hands-helping text-2xl mr-3" style={{color: '#00695c'}}></i>
                  <div className="text-left">
                    <h4 className="font-bold text-sm" style={{color: '#00695c'}}>Volunteer / Intern</h4>
                    <p className="text-xs text-gray-600">APPLY</p>
                  </div>
                </Link>
                <Link to="/contact" className="flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <i className="fas fa-heart text-2xl mr-3" style={{color: '#00695c'}}></i>
                  <div className="text-left">
                    <h4 className="font-bold text-sm" style={{color: '#00695c'}}>Fund this project</h4>
                    <p className="text-xs text-gray-600">DONATE NOW</p>
                  </div>
                </Link>
                <Link to="/contact" className="flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <i className="fas fa-share-alt text-2xl mr-3" style={{color: '#00695c'}}></i>
                  <div className="text-left">
                    <h4 className="font-bold text-sm" style={{color: '#00695c'}}>Community referrals</h4>
                    <p className="text-xs text-gray-600">REFER</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-white" style={{background: 'linear-gradient(135deg, #00695c 0%, #2d7d32 100%)'}}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Be Part of the Change</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Together, we can bring hope, opportunity, and transformation to the Burgur Hills communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Involved
            </Link>
            <Link to="/contact" className="bg-white text-teal-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectBurgurHills;
