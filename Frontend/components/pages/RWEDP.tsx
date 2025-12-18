import React from 'react';

const RWEDP: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="cta-gradient text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Rural Women Educator Development Program –(RWEDP)
          </h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto">
            Empowering rural women to become effective, confident, and professionally trained educators
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-6">
              <span className="font-bold">Springs India Foundation's Rural Women Educator Development Program</span> is a transformative initiative through <span className="font-bold">STEPS ACADEMY</span> dedicated to empowering women from rural and indigenous communities to become effective, confident, and professionally trained educators. Built on the philosophy of accessible, high-quality education, the program nurtures modern teaching professionals equipped with <span className="font-bold">21st-century skills, NEP 2020-aligned practices, and practical classroom competencies.</span>
            </p>
            <p className="text-lg leading-relaxed mb-6">
              The program offers comprehensive teacher education designed to meet current educational demands while addressing the unique needs of rural learners. Through <span className="font-bold">innovative pedagogies, technology-enabled learning, and hands-on training experiences,</span> participants are prepared to manage classrooms confidently, support foundational learning, and contribute meaningfully to their communities.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              This program stands as a commitment to building a future where <span className="font-bold">rural women are empowered change-makers,</span> capable of inspiring learning, shaping young minds, and contributing to the holistic development of their communities.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              The training focuses on building strong foundations in <span className="font-bold">child development, activity-based learning, Montessori and play-way methods, classroom management, and inclusive education.</span> Trainees receive practical, hands-on exposure through model classrooms, teaching demonstrations, micro-teaching sessions, and guided internships to ensure real-world classroom readiness.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Technology integration, creative teaching aids, storytelling, phonics, assessment techniques, and FLN (Foundational Literacy and Numeracy) methodologies form essential components of the curriculum—enabling trainees to confidently plan, deliver, and assess meaningful learning for the GenZ Kids
            </p>
            <p className="text-lg leading-relaxed">
              The program is committed to uplifting rural women by providing accessible, structured teacher education that enhances professional competence, builds self-confidence, and opens pathways to employment in schools, learning centres, and community education programs. By nurturing skilled women educators, Springs India Foundation aims to strengthen early education in rural communities and create a generation of teachers who inspire learning, support children's growth, and bring lasting educational change.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4" style={{color: '#00695c'}}>Vision Statement</h2>
              <p className="text-gray-700 leading-relaxed">
                To build a network of empowered rural women educators who deliver high-quality, child-centred education, strengthen foundational learning, and inspire positive change within their communities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4" style={{color: '#00695c'}}>Mission Statement</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our mission is to equip rural and indigenous women with professional teacher training that aligns with NEP 2020 and modern educational practices.
              </p>
              <p className="text-gray-700 font-semibold mb-2">We aim to:</p>
              <ul className="text-gray-700 space-y-2">
                <li>• Provide accessible, hands-on training in early childhood and primary education.</li>
                <li>• Develop skilled educators who use innovative, inclusive, and activity-based teaching methodologies.</li>
                <li>• Build confidence, leadership, and employability among rural women through structured training and mentorship.</li>
                <li>• Strengthen community education systems by preparing teachers who can deliver meaningful learning experiences and support foundational literacy and numeracy for all children.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Program Objectives */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: '#00695c'}}>Program Objectives</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {[
                "To provide structured, high-quality teacher training that equips rural and indigenous women with essential knowledge of child development, pedagogy, and classroom practices.",
                "To develop competency in modern teaching methodologies, including play-way, Montessori principles, activity-based learning, and NEP 2020–aligned approaches.",
                "To strengthen foundational teaching skills in literacy, numeracy, phonics, storytelling, classroom management, and assessment methods.",
                "To build confidence and professional identity among rural women, enabling them to become capable and independent educators in their communities.",
                "To offer hands-on, practice-based training, including micro-teaching, model classroom practice, internships, and teaching demonstrations to ensure classroom readiness.",
                "To promote inclusive education by training teachers to support diverse learners, including children with varied learning needs and backgrounds.",
                "To increase employment opportunities for rural women by preparing them for roles in preschools, primary schools, community learning centres, and educational initiatives.",
                "To encourage leadership and community engagement, empowering women to participate in improving early learning environments in rural areas.",
                "To integrate basic digital literacy and technology-enabled teaching, preparing future educators to use simple, effective digital tools even in low-resource settings.",
                "To contribute to long-term educational development in rural communities by creating a sustainable pool of well-trained, local women educators."
              ].map((objective, index) => (
                <div key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    {index + 1}
                  </span>
                  <p className="text-gray-700 leading-relaxed">{objective}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: '#00695c'}}>
            Key Features of Rural Women Educators' Development Program-(RWEDP)
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Specially designed for rural women with minimal educational background but high potential.",
                "Affordable and accessible teacher training programs with flexible learning modes.",
                "Focus on Primary and Montessori Teacher Education, aligned with NEP 2020 and child-centric methodologies.",
                "Integrated skill development and livelihood enhancement, enabling financial independence.",
                "Hands-on practical training, micro-teaching sessions, and community-based internships.",
                "Inclusive curriculum with local context, ensuring relevance to rural learning environments.",
                "Digital literacy & educational technology training to prepare them for modern classrooms.",
                "Training in early childhood care, vernacular-based teaching, and classroom management.",
                "Counselling, personality development, and communication skills workshops.",
                "Entrepreneurship training for starting tuition centers, home schools, and rural learning hubs.",
                "Ongoing mentorship and support even after course completion.",
                "Placement assistance and opportunities in local schools, NGOs, and community centers.",
                "Empowerment-focused approach, promoting confidence, leadership, and social change."
              ].map((feature, index) => (
                <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                  <i className="fas fa-check-circle text-orange-500 mr-3 mt-1 flex-shrink-0"></i>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CSR & Government Alignment */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: '#00695c'}}>CSR & Government Alignment</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-6" style={{color: '#ff6f00'}}>CSR Schedule and Categories Supported</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: 'fas fa-graduation-cap', title: 'Education' },
                  { icon: 'fas fa-female', title: 'Women Empowerment' },
                  { icon: 'fas fa-tools', title: 'Skill Development' },
                  { icon: 'fas fa-users', title: 'Indigenous Welfare' }
                ].map((category, index) => (
                  <div key={index} className="flex items-center">
                    <i className={`${category.icon} text-2xl mr-4`} style={{color: '#00695c'}}></i>
                    <span className="text-gray-700 font-medium">{category.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6" style={{color: '#ff6f00'}}>SDG Alignment</h3>
              <div className="grid grid-cols-4 md:grid-cols-7 gap-4">
                {['4', '5', '8', '10', '1', '13', '17'].map((sdg, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center text-white font-bold" style={{backgroundColor: '#00695c'}}>
                      {sdg}
                    </div>
                    <p className="text-xs mt-2 text-gray-600">SDG {sdg}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request for Partnership */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8" style={{color: '#00695c'}}>REQUEST FOR PARTNERSHIP-RWEDP</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-6">
              Springs India Foundation invites CSR partners, philanthropic organizations, and government agencies to join us in supporting and strengthening teacher education initiatives across rural communities.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              This partnership will support the establishment and execution of teacher education programs, particularly focused on Primary and Montessori Education, along with skill development and livelihood enhancement initiatives for rural women and aspiring educators.
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-xl font-bold mb-6" style={{color: '#ff6f00'}}>Through this collaboration, corporate partners will:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-orange-500 mr-3 mt-1 flex-shrink-0"></i>
                  <span className="text-gray-700">Contribute to education transformation and rural capacity building</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-orange-500 mr-3 mt-1 flex-shrink-0"></i>
                  <span className="text-gray-700">Enable women from underprivileged communities to become certified educators and skilled professionals</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-orange-500 mr-3 mt-1 flex-shrink-0"></i>
                  <span className="text-gray-700">Create sustainable livelihood opportunities and promote self-reliance</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-orange-500 mr-3 mt-1 flex-shrink-0"></i>
                  <span className="text-gray-700">Gain high CSR visibility through impactful field initiatives</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-orange-500 mr-3 mt-1 flex-shrink-0"></i>
                  <span className="text-gray-700">Align with Government priorities (NEP 2020, NSQF, Skill India, Samagra Shiksha)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-orange-500 mr-3 mt-1 flex-shrink-0"></i>
                  <span className="text-gray-700">Support progress toward UN Sustainable Development Goals – SDG 4 (Quality Education), SDG 5 (Gender Equality), SDG 8 (Decent Work & Economic Growth), and SDG 10 (Reduced Inequalities)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-xl font-bold mb-6" style={{color: '#ff6f00'}}>We invite partners to support:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-check mr-3 mt-1 flex-shrink-0" style={{color: '#00695c'}}></i>
                  <span className="text-gray-700">Scholarships for women and youth in teacher education</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check mr-3 mt-1 flex-shrink-0" style={{color: '#00695c'}}></i>
                  <span className="text-gray-700">Infrastructure and resource support for training centres</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check mr-3 mt-1 flex-shrink-0" style={{color: '#00695c'}}></i>
                  <span className="text-gray-700">Digital learning tools and technology integration</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check mr-3 mt-1 flex-shrink-0" style={{color: '#00695c'}}></i>
                  <span className="text-gray-700">Vocational and livelihood-linked training programs</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check mr-3 mt-1 flex-shrink-0" style={{color: '#00695c'}}></i>
                  <span className="text-gray-700">Community educator development under the Rural Women Educator Development Program</span>
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed mb-8 text-center">
              By partnering with Springs India Foundation, organisations can make a meaningful difference in education, empowerment, and sustainable rural development while achieving measurable CSR impact.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <a href="/partnerships" className="flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <i className="fas fa-handshake text-2xl mr-3" style={{color: '#00695c'}}></i>
                <div className="text-left">
                  <h4 className="font-bold" style={{color: '#00695c'}}>Partner with us (CSR)</h4>
                  <p className="text-sm text-gray-600">APPLY</p>
                </div>
              </a>
              <a href="/contact" className="flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <i className="fas fa-hands-helping text-2xl mr-3" style={{color: '#00695c'}}></i>
                <div className="text-left">
                  <h4 className="font-bold" style={{color: '#00695c'}}>Volunteer / Intern</h4>
                  <p className="text-sm text-gray-600">APPLY</p>
                </div>
              </a>
              <a href="/contact" className="flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <i className="fas fa-heart text-2xl mr-3" style={{color: '#00695c'}}></i>
                <div className="text-left">
                  <h4 className="font-bold" style={{color: '#00695c'}}>Fund a program</h4>
                  <p className="text-sm text-gray-600">DONATE NOW</p>
                </div>
              </a>
              <a href="/contact" className="flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <i className="fas fa-share-alt text-2xl mr-3" style={{color: '#00695c'}}></i>
                <div className="text-left">
                  <h4 className="font-bold" style={{color: '#00695c'}}>Community referrals / collaboration</h4>
                  <p className="text-sm text-gray-600">REFER</p>
                </div>
              </a>
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
            <a href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Involved
            </a>
            <a href="/contact" className="bg-white text-teal-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RWEDP;