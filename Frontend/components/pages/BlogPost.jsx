import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlogById } from '../api/blogApi.js';
import { API_BASE_URL } from '../../config.js';

const BlogPost = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const data = await getBlogById(id);
                setPost(data);
            } catch (err) {
                setError('Blog not found');
            } finally {
                setLoading(false);
            }
        };
        if (id) fetchBlog();
    }, [id]);

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <div className="text-xl">Loading...</div>
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-3xl font-bold text-gray-800">Post Not Found</h1>
                <Link to="/blog" className="mt-4 inline-block text-teal-700 font-semibold">
                    &larr; Back to Blog
                </Link>
            </div>
        );
    }

    return (
        <div>
            <div className="bg-white">
                <div className="container mx-auto px-4 py-8">
                    <Link to="/blog" className="text-gray-600 hover:text-gray-800">
                        ← Back to Blog
                    </Link>
                </div>
            </div>

            <div className="bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
                    <div className="text-gray-500 mb-8">
                        <span>{post.author}</span> • <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span> • <span>{post.readTime}</span>
                    </div>
                   
                    <img src={`${API_BASE_URL}${post.image}`} alt={post.title} className="w-full mb-8"/>
                   
                    <div 
                        className="text-gray-700 leading-relaxed [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:my-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:my-3 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:my-2 [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:my-2 [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:my-2 [&_li]:my-1 [&_p]:my-2"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </div>
            </div>

            <div className="bg-gray-50 py-12">
                <div className="container mx-auto px-4 max-w-3xl text-center">
                    <h3 className="text-xl font-semibold mb-4">Get Involved</h3>
                    <p className="text-gray-600 mb-6">
                        Want to support our initiatives? Contact us to learn more.
                    </p>
                    <Link
                        to="/contact"
                        className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;