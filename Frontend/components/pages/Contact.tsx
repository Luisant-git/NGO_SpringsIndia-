import React, { useState } from 'react';

const involvementButtons = [
    { label: "Volunteer", icon: "fas fa-hands-helping" },
    { label: "Intern", icon: "fas fa-user-graduate" },
    { label: "Collaborate", icon: "fas fa-handshake" },
    { label: "Donate", icon: "fas fa-donate" },
    { label: "Fund a Project", icon: "fas fa-tasks" },
    { label: "Be a Mentor", icon: "fas fa-chalkboard-teacher" }
];

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Thank you for your message! We've received it and will get back to you shortly.");
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="bg-gray-50">
            <section className="bg-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-indigo-800">Contact Us</h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        We welcome discussions, visits, and exploratory calls. Join hands in transforming lives — your support creates hope.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
                    <div className="bg-white p-8 rounded-lg">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                ></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="bg-white p-8 rounded-lg">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Get Involved</h2>
                         <p className="text-gray-600 mb-8">We welcome organisations and individuals to build a better future together.</p>
                        <div className="grid grid-cols-2 gap-4">
                            {involvementButtons.map(btn => (
                                <a href="#" key={btn.label} className="flex flex-col items-center justify-center text-center p-4 bg-indigo-100 rounded-lg hover:bg-indigo-200 hover:shadow-md transition-all">
                                    <i className={`${btn.icon} text-3xl text-indigo-700`}></i>
                                    <span className="mt-2 font-semibold text-gray-800">{btn.label}</span>
                                </a>
                            ))}
                        </div>
                        <div className="mt-10 border-t pt-8">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Details:</h3>
                             <ul className="space-y-4 text-gray-700">
                                <li className="flex items-start">
                                    <i className="fas fa-map-marker-alt w-6 text-center text-lg text-red-500 pt-1"></i>
                                    <span className="ml-3">9A, Kanthaswamy layout, kavundampalayam, Coimbatore, 641030</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-phone w-6 text-center text-lg text-red-500 pt-1"></i>
                                    <a href="tel:+919150931818" className="ml-3 hover:text-indigo-700">+91 91509 31818</a>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-envelope w-6 text-center text-lg text-red-500 pt-1"></i>
                                    <a href="mailto:info@springsindiafoundation.ngo" className="ml-3 hover:text-indigo-700">info@springsindiafoundation.ngo</a>
                                </li>
                            </ul>
                        </div>
                         <div className="mt-8 border-t pt-6">
                             <h3 className="text-xl font-semibold mb-4 text-gray-800">Follow us on:</h3>
                             <div className="flex space-x-6 text-3xl">
                                <a href="#" className="text-gray-500 hover:text-blue-600"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="text-gray-500 hover:text-pink-500"><i className="fab fa-instagram"></i></a>
                                <a href="#" className="text-gray-500 hover:text-blue-700"><i className="fab fa-linkedin-in"></i></a>
                                <a href="#" className="text-gray-500 hover:text-red-600"><i className="fab fa-youtube"></i></a>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

             <section className="py-20">
                <div className="container mx-auto px-4">
                     <div className="w-full h-96 rounded-lg shadow-xl overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.918118151591!2d76.95383331475253!3d11.043818992265078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858e4f1be20d7%3A0x808575033a39e075!2sKavundampalayam%2C%20Coimbatore%2C%20Tamil%20Nadu%20641030%2C%20India!5e0!3m2!1sen!2sus!4v1678886543210!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Office Location"
                        ></iframe>
                    </div>
                </div>
             </section>
        </div>
    );
};

export default Contact;