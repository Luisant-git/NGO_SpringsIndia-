import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllBlogs } from '../api/blogApi.js';
import { API_BASE_URL } from '../../config.js';
 

 
const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const data = await getAllBlogs();
                setBlogs(data);
            } catch (err) {
                setError('Failed to load blogs');
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <div className="text-xl">Loading blogs...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <div className="text-xl text-red-600">{error}</div>
            </div>
        );
    }
    return (
        <div>
            <section className="cta-gradient text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold">Our Blog</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
                        Stories, updates, and insights from our journey of creating positive change
                    </p>
                </div>
            </section>
 
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((post) => (
                            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                <img src={`${API_BASE_URL}${post.image}`} alt={post.title} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <span className="text-sm text-blue-600 font-semibold">{post.category}</span>
                                    <h2 className="text-xl font-bold mt-2 mb-3">{post.title}</h2>
                                    <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                                    <div className="flex justify-between items-center text-sm text-gray-500">
                                        <span>{post.author}</span>
                                        <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                    </div>
                                    <Link to={`/blog/${post.id}`} className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-semibold">
                                        Read More →
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
 
export default Blog;