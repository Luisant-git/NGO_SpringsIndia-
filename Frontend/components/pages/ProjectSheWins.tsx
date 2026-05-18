import React from 'react';
import { Link } from 'react-router-dom';

const ProjectSheWins: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="cta-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Project SheWins</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            Winning Through Learning - Empowering Rural Women Educators
          </p>
        </div>
      </section>

      {/* Project SheWins Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4" style={{color: '#00695c'}}>
              Project SHEWINS – Winning Through Learning
            </h2>
            <p className="text-center text-xl mb-12" style={{color: '#ff6f00'}}>
              Rural Women Educator Development Program (RWEDP)
            </p>

            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In many rural communities, women dream of building better futures for their families, yet opportunities for stable and meaningful employment remain limited. At the same time, schools across the country are facing a serious shortage of trained Early Childhood and Primary educators.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <span className="font-bold">Project SHEWINS – Rural Women Educator Development Program (RWEDP)</span>, implemented by Springs India Foundation, was created to bridge this gap by empowering rural women to become skilled, certified educators while strengthening the quality of foundational education in schools.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                SHEWINS is more than a teacher training initiative — it is a pathway toward dignity, confidence, financial independence, and long-term transformation for rural women. Through structured training, practical classroom exposure, mentorship, certification, and placement support, women are prepared to enter the education sector with confidence.
              </p>
            </div>

            {/* The Growing Need */}
            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-bold mb-6" style={{color: '#00695c'}}>The Growing Need for Trained Teachers</h3>
              <p className="text-gray-700 mb-6">
                Schools today are urgently and desperately searching for trained, classroom-ready educators who understand child development, foundational learning, and activity-based teaching methods. With the rapid growth of preschools, CBSE schools, and early learning centres, the demand for qualified women educators has increased significantly.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3" style={{color: '#ff6f00'}}>Many institutions continue to face:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-exclamation-circle text-red-500 mr-3 mt-1"></i>
                      <span className="text-gray-700">Shortage of trained teachers</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-exclamation-circle text-red-500 mr-3 mt-1"></i>
                      <span className="text-gray-700">Lack of practical classroom skills</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-exclamation-circle text-red-500 mr-3 mt-1"></i>
                      <span className="text-gray-700">Difficulty recruiting women educators in rural areas</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-exclamation-circle text-red-500 mr-3 mt-1"></i>
                      <span className="text-gray-700">Gaps in foundational literacy and numeracy teaching</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <p className="text-gray-700 italic">
                    The early years of a child's life are critical, and trained educators play a vital role in shaping confidence, learning, and emotional development.
                  </p>
                </div>
              </div>
            </div>

            {/* Empowering Rural Women */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6" style={{color: '#00695c'}}>Empowering Rural Women Through Education</h3>
              <p className="text-lg text-gray-700 mb-6">SHEWINS equips women with practical teaching skills, including:</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Classroom management and communication',
                  'Child psychology and learning methods',
                  'Activity-based teaching',
                  'Foundational literacy and numeracy',
                  'Digital teaching tools and leadership skills'
                ].map((skill, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-start">
                    <i className="fas fa-check-circle text-xl mr-3 mt-1" style={{color: '#00695c'}}></i>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-gradient-to-r from-teal-50 to-emerald-50 p-6 rounded-lg border-l-4" style={{borderColor: '#00695c'}}>
                <p className="text-lg font-semibold" style={{color: '#00695c'}}>
                  The initiative aims to facilitate placement for at least 80% of trained women in nearby schools.
                </p>
              </div>
            </div>

            {/* Creating Lasting Social Impact */}
            <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
              <h3 className="text-2xl font-bold mb-6" style={{color: '#00695c'}}>Creating Lasting Social Impact</h3>
              <p className="text-gray-700 mb-6">
                Through training, certification, and employment support, SHEWINS enables women to achieve financial independence, gain confidence, and become respected contributors within their communities. At the same time, schools gain access to trained educators who can strengthen the quality of early education.
              </p>
              <p className="text-gray-700 mb-6">
                The program aligns with key Sustainable Development Goals, including Quality Education, Gender Equality, Decent Work, and Reduced Inequalities.
              </p>
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border-l-4" style={{borderColor: '#ff6f00'}}>
                <p className="text-lg font-semibold text-gray-800">
                  At its heart, SHEWINS is about transformation — helping women rise from limitation to leadership while shaping brighter futures for children, families, and communities.
                </p>
              </div>
            </div>

            {/* Teacher Training Programs Offered */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center" style={{color: '#00695c'}}>TEACHER TRAINING PROGRAMS OFFERED</h3>
              <div className="bg-gray-50 p-8 rounded-lg">
                <p className="text-center mb-6 font-semibold text-gray-700">
                  Certification - Bharat Sewak Samaj, a National Development Agency developed by the Planning Commission of India
                </p>
                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <i className="fas fa-graduation-cap text-4xl mb-4" style={{color: '#ff6f00'}}></i>
                    <h4 className="font-bold text-lg mb-2" style={{color: '#00695c'}}>Diploma in Primary Education</h4>
                    <p className="text-gray-600">1 Year</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <i className="fas fa-graduation-cap text-4xl mb-4" style={{color: '#ff6f00'}}></i>
                    <h4 className="font-bold text-lg mb-2" style={{color: '#00695c'}}>Diploma in Montessori Education</h4>
                    <p className="text-gray-600">1 Year</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rural Women Educator Program Details */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12" style={{color: '#00695c'}}>
              Rural Women Educator Development Program (RWEDP)
            </h2>

            {/* Program Overview */}
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <span className="font-bold">Springs India Foundation's Rural Women Educator Development Program</span> is a transformative initiative through <span className="font-bold">STEPS ACADEMY</span> dedicated to empowering women from rural and indigenous communities to become effective, confident, and professionally trained educators. Built on the philosophy of accessible, high-quality education, the program nurtures modern teaching professionals equipped with <span className="font-bold">21st-century skills, NEP 2020-aligned practices, and practical classroom competencies.</span>
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The program offers comprehensive teacher education designed to meet current educational demands while addressing the unique needs of rural learners. Through <span className="font-bold">innovative pedagogies, technology-enabled learning, and hands-on training experiences,</span> participants are prepared to manage classrooms confidently, support foundational learning, and contribute meaningfully to their communities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This program stands as a commitment to building a future where <span className="font-bold">rural women are empowered change-makers,</span> capable of inspiring learning, shaping young minds, and contributing to the holistic development of their communities.
              </p>
            </div>

            {/* Vision & Mission */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4" style={{color: '#00695c'}}>Vision Statement</h3>
                <p className="text-gray-700 leading-relaxed">
                  To build a network of empowered rural women educators who deliver high-quality, child-centred education, strengthen foundational learning, and inspire positive change within their communities.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4" style={{color: '#00695c'}}>Mission Statement</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our mission is to equip rural and indigenous women with professional teacher training that aligns with NEP 2020 and modern educational practices.
                </p>
                <p className="text-gray-700 font-semibold mb-2">We aim to:</p>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Provide accessible, hands-on training in early childhood and primary education.</li>
                  <li>• Develop skilled educators who use innovative, inclusive, and activity-based teaching methodologies.</li>
                  <li>• Build confidence, leadership, and employability among rural women through structured training and mentorship.</li>
                  <li>• Strengthen community education systems by preparing teachers who can deliver meaningful learning experiences.</li>
                </ul>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-8 text-center" style={{color: '#00695c'}}>
                Key Features of Rural Women Educators' Development Program (RWEDP)
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Specially designed for rural women with minimal educational background but high potential',
                  'Affordable and accessible teacher training programs with flexible learning modes',
                  'Focus on Primary and Montessori Teacher Education, aligned with NEP 2020',
                  'Integrated skill development and livelihood enhancement',
                  'Hands-on practical training, micro-teaching sessions, and community-based internships',
                  'Inclusive curriculum with local context',
                  'Digital literacy & educational technology training',
                  'Training in early childhood care and classroom management',
                  'Counselling, personality development, and communication skills workshops',
                  'Entrepreneurship training for starting tuition centers and rural learning hubs',
                  'Ongoing mentorship and support even after course completion',
                  'Placement assistance and opportunities in local schools, NGOs, and community centers',
                  'Empowerment-focused approach, promoting confidence, leadership, and social change'
                ].map((feature, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-start">
                      <i className="fas fa-check-circle text-xl mr-3 mt-1" style={{color: '#ff6f00'}}></i>
                      <p className="text-gray-700 text-sm">{feature}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CSR & Government Alignment */}
            <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
              <h3 className="text-2xl font-bold mb-8 text-center" style={{color: '#00695c'}}>CSR & Government Alignment</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-4" style={{color: '#ff6f00'}}>CSR Schedule and Categories Supported</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: 'fas fa-graduation-cap', title: 'Education' },
                      { icon: 'fas fa-female', title: 'Women Empowerment' },
                      { icon: 'fas fa-tools', title: 'Skill Development' },
                      { icon: 'fas fa-users', title: 'Indigenous Welfare' }
                    ].map((category, index) => (
                      <div key={index} className="flex items-center">
                        <i className={`${category.icon} text-2xl mr-3`} style={{color: '#00695c'}}></i>
                        <span className="text-gray-700 font-medium text-sm">{category.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4" style={{color: '#ff6f00'}}>SDG Alignment</h4>
                  <div className="flex flex-wrap gap-3">
                    {['4', '5', '8', '10', '1', '13', '17'].map((sdg, index) => (
                      <div key={index} className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl" style={{backgroundColor: '#00695c'}}>
                        {sdg}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-4">Quality Education, Gender Equality, Decent Work, Reduced Inequalities</p>
                </div>
              </div>
            </div>

            {/* Request for Partnership */}
            <div className="bg-gradient-to-r from-teal-50 to-emerald-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-center" style={{color: '#00695c'}}>REQUEST FOR PARTNERSHIP - RWEDP</h3>
              <p className="text-lg text-gray-700 mb-6">
                Springs India Foundation invites CSR partners, philanthropic organizations, and government agencies to join us in supporting and strengthening teacher education initiatives across rural communities.
              </p>
              <p className="text-gray-700 mb-8">
                This partnership will support the establishment and execution of teacher education programs, particularly focused on Primary and Montessori Education, along with skill development and livelihood enhancement initiatives for rural women and aspiring educators.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-bold mb-4" style={{color: '#ff6f00'}}>Through this collaboration, corporate partners will:</h4>
                  <ul className="space-y-2">
                    {[
                      'Contribute to education transformation and rural capacity building',
                      'Enable women from underprivileged communities to become certified educators',
                      'Create sustainable livelihood opportunities and promote self-reliance',
                      'Gain high CSR visibility through impactful field initiatives',
                      'Align with Government priorities (NEP 2020, NSQF, Skill India)',
                      'Support progress toward UN Sustainable Development Goals'
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <i className="fas fa-check-circle mr-3 mt-1" style={{color: '#00695c'}}></i>
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-bold mb-4" style={{color: '#ff6f00'}}>We invite partners to support:</h4>
                  <ul className="space-y-2">
                    {[
                      'Scholarships for women and youth in teacher education',
                      'Infrastructure and resource support for training centres',
                      'Digital learning tools and technology integration',
                      'Vocational and livelihood-linked training programs',
                      'Community educator development under the Rural Women Educator Program'
                    ].map((support, index) => (
                      <li key={index} className="flex items-start">
                        <i className="fas fa-check mr-3 mt-1" style={{color: '#ff6f00'}}></i>
                        <span className="text-gray-700 text-sm">{support}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-center text-lg font-semibold mb-8" style={{color: '#00695c'}}>
                By partnering with Springs India Foundation, organisations can make a meaningful difference in education, empowerment, and sustainable rural development while achieving measurable CSR impact.
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
                    <h4 className="font-bold text-sm" style={{color: '#00695c'}}>Fund a program</h4>
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
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Be part of transforming rural education by empowering women educators in your community.
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

export default ProjectSheWins;
