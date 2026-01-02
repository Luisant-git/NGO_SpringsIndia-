import React from 'react';
import { Link } from 'react-router-dom';

const Careers: React.FC = () => {
  const jobs = [
    {
      title: 'Front Office Executive',
      gender: 'Female only',
      description: 'The first point of contact at Springs India Foundation, responsible for welcoming visitors, trainees, beneficiaries, and partners with warmth and professionalism.',
      age: '21 to 35 years',
      qualification: 'Graduate / Diploma (any discipline preferred)',
      languages: 'Fluency in English and Tamil',
      skills: ['Good presentation and interpersonal skills', 'Clear verbal and written communication', 'Basic computer knowledge (MS Word, Excel, Email)']
    },
    {
      title: 'Public Relations Officer (PRO)',
      gender: 'No gender preferences',
      description: 'Represents Springs India Foundation with integrity, empathy, and professionalism by building meaningful relationships with communities, partners, donors, media, and institutions.',
      age: '25 to 45 years',
      qualification: 'Graduate (Mass Communication, Public Relations, Social Work, Humanities, or related fields preferred)',
      languages: 'Fluency in English and Tamil',
      skills: ['Strong communication and presentation skills', 'Public speaking and interpersonal abilities', 'Service-oriented mindset with empathy']
    },
    {
      title: 'Volunteering Head',
      gender: 'Female only',
      description: 'Responsible for building, guiding, and nurturing a strong volunteer ecosystem at Springs India Foundation.',
      age: '28 to 50 years',
      qualification: 'Graduate / Postgraduate (Social Work, Education, Human Resources, Development Studies, or related fields preferred)',
      languages: 'Fluency in English and Tamil',
      skills: ['Strong leadership and coordination skills', 'Excellent communication and presentation', 'Empathy, patience, and service mindset']
    },
    {
      title: 'Event Manager',
      gender: 'No gender preferences',
      description: 'Plans, coordinates, and executes events that reflect the mission and values of Springs India Foundation.',
      age: '25 to 45 years',
      qualification: 'Graduate (Event Management, Mass Communication, Management, Social Work, or related fields preferred)',
      languages: 'Fluency in English and Tamil',
      skills: ['Strong organisational and time-management skills', 'Excellent communication and coordination', 'Problem-solving and multitasking']
    },
    {
      title: 'Social Service Field Executives',
      gender: '3 Females and 2 Males',
      positions: '5 Positions',
      description: 'Work closely with communities to support the implementation of education, women empowerment, and social development programs.',
      age: '22 to 40 years',
      qualification: 'MSW (Master of Social Work) preferred. Graduates in Social Work / Sociology / Community Development may also apply',
      languages: 'Tamil required, Basic English communication preferred',
      skills: ['Strong service mindset and community orientation', 'Good communication and interpersonal skills', 'Willingness to travel locally']
    }
  ];

  return (
    <div className="bg-gray-50">
      <section className="cta-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Careers at Springs India Foundation</h1>
          <p className="mt-4 text-center text-lg max-w-3xl mx-auto">
            Join us for a meaningful career rooted in service, compassion, and purpose
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                At Springs India Foundation, we believe a meaningful career is one rooted in service, compassion, and purpose. Every role here is an opportunity to touch lives, uplift communities, and contribute to lasting social change.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                We are more than a workplace—we are a caring community that grows together. We value people who lead with empathy, honesty, and a willingness to learn.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed font-semibold" style={{color: '#00695c'}}>
                If you are seeking a career that enriches both your heart and your future, welcome to Springs India Foundation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Current Openings</h2>

          <div className="space-y-8">
            {jobs.map((job, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="cta-gradient text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="bg-white/20 px-3 py-1 rounded-full">{job.gender}</span>
                    {job.positions && <span className="bg-orange-500 px-3 py-1 rounded-full">{job.positions}</span>}
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-700 mb-6">{job.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2" style={{color: '#00695c'}}>Age Criteria</h4>
                      <p className="text-gray-600">{job.age}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2" style={{color: '#00695c'}}>Educational Qualification</h4>
                      <p className="text-gray-600">{job.qualification}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2" style={{color: '#00695c'}}>Language Preference</h4>
                      <p className="text-gray-600">{job.languages}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2" style={{color: '#00695c'}}>Key Skills</h4>
                      <ul className="text-gray-600 space-y-1">
                        {job.skills.map((skill, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-orange-500 mr-2">•</span>
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-gray-800" style={{ backgroundColor: "rgb(232, 245, 232)" }}>
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h3>
          <p className="text-lg mb-6">Join Springs India Foundation for your career/service and bring in a change in lives.</p>
          <Link to="/contact" className="inline-block bg-white font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors" style={{color: '#ff6f00', border: '2px solid #ff6f00'}}>
            Apply Now
          </Link>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Careers;
