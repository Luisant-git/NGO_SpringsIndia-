import React, { useState, useEffect } from 'react';
import { getAllBlogsAdmin, createBlog, updateBlog, deleteBlog } from '../api/blogApi.js';
import { API_BASE_URL } from '../../config.js';
import toast from 'react-hot-toast';

interface Blog {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
  published: boolean;
  publishedAt?: string;
  createdAt: string;
}

const AdminBlogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [currentFontSize, setCurrentFontSize] = useState('3');
  const isInitialMount = React.useRef(true);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    author: 'Springs India Foundation',
    category: 'Education',
    readTime: '5 min read',
    published: false,
    image: null as File | null
  });

  const execCommand = (command: string, value?: string) => {
    if (contentRef.current) {
      contentRef.current.focus();
      document.execCommand(command, false, value);
    }
  };

  const categories = ['Education', 'Women Empowerment', 'Digital Literacy', 'Community Development', 'Health Care', 'Environment', 'General'];

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (showForm && contentRef.current) {
      contentRef.current.innerHTML = formData.content;
      if (!editingBlog) {
        contentRef.current.focus();
        document.execCommand('fontSize', false, '3');
      }
    }
  }, [showForm, editingBlog]);

  const fetchBlogs = async () => {
    try {
      const data = await getAllBlogsAdmin();
      setBlogs(data);
    } catch (error) {
      toast.error('Failed to fetch blogs');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingBlog) {
        await updateBlog(editingBlog.id, formData);
        toast.success('Blog updated successfully');
      } else {
        await createBlog(formData);
        toast.success('Blog created successfully');
      }
      resetForm();
      fetchBlogs();
    } catch (error) {
      toast.error('Failed to save blog');
    }
  };

  const handleEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      content: blog.content,
      excerpt: blog.excerpt,
      author: blog.author,
      category: blog.category,
      readTime: blog.readTime,
      published: blog.published,
      image: null
    });
    setShowForm(true);
  };

  const handleRemoveImage = () => {
    setFormData({...formData, image: null});
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        await deleteBlog(id);
        toast.success('Blog deleted successfully');
        fetchBlogs();
      } catch (error) {
        toast.error('Failed to delete blog');
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      content: '',
      excerpt: '',
      author: 'Springs India Foundation',
      category: 'Education',
      readTime: '5 min read',
      published: false,
      image: null
    });
    setEditingBlog(null);
    setShowForm(false);
    isInitialMount.current = true;
  };

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Blog Management</h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add New Blog
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={resetForm}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-xl font-bold mb-4 pr-8">
              {editingBlog ? 'Edit Blog' : 'Add New Blog'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Excerpt</label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                  className="w-full border rounded px-3 py-2 h-20"
                  maxLength={200}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Content</label>
                <div className="border border-gray-300 rounded-lg">
                  <div className="flex gap-1 p-2 border-b border-gray-300 bg-gray-50 flex-wrap">
                    <select value={currentFontSize} onChange={(e) => { setCurrentFontSize(e.target.value); execCommand('fontSize', e.target.value); }} className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-200 text-sm">
                      <option value="1">8</option>
                      <option value="2">10</option>
                      <option value="3">12</option>
                      <option value="4">14</option>
                      <option value="5">18</option>
                      <option value="6">24</option>
                      <option value="7">36</option>
                    </select>
                    <div className="w-px bg-gray-300 mx-1"></div>
                    <button type="button" onMouseDown={(e) => { e.preventDefault(); execCommand('formatBlock', '<h1>'); }} className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200 text-sm font-bold">H1</button>
                    <button type="button" onMouseDown={(e) => { e.preventDefault(); execCommand('formatBlock', '<h2>'); }} className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200 text-sm font-semibold">H2</button>
                    <button type="button" onMouseDown={(e) => { e.preventDefault(); execCommand('formatBlock', '<h3>'); }} className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200 text-sm font-medium">H3</button>
                    <button type="button" onMouseDown={(e) => { e.preventDefault(); execCommand('formatBlock', '<p>'); }} className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200 text-sm">Normal</button>
                    <div className="w-px bg-gray-300 mx-1"></div>
                    <button type="button" onMouseDown={(e) => { e.preventDefault(); execCommand('bold'); }} className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200 font-bold">B</button>
                    <button type="button" onMouseDown={(e) => { e.preventDefault(); execCommand('italic'); }} className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200 italic">I</button>
                    <button type="button" onMouseDown={(e) => { e.preventDefault(); execCommand('underline'); }} className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200 underline">U</button>
                    <div className="w-px bg-gray-300 mx-1"></div>
                    <button type="button" onMouseDown={(e) => { e.preventDefault(); execCommand('justifyLeft'); }} className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-200" title="Align Left"><svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor"><path d="M0 2h16v2H0V2zm0 4h10v2H0V6zm0 4h16v2H0v-2zm0 4h10v2H0v-2z"/></svg></button>
                    <button type="button" onMouseDown={(e) => { e.preventDefault(); execCommand('justifyCenter'); }} className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-200" title="Align Center"><svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor"><path d="M0 2h16v2H0V2zm3 4h10v2H3V6zm-3 4h16v2H0v-2zm3 4h10v2H3v-2z"/></svg></button>
                    <button type="button" onMouseDown={(e) => { e.preventDefault(); execCommand('justifyRight'); }} className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-200" title="Align Right"><svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor"><path d="M0 2h16v2H0V2zm6 4h10v2H6V6zm-6 4h16v2H0v-2zm6 4h10v2H6v-2z"/></svg></button>
                    <button type="button" onMouseDown={(e) => { e.preventDefault(); execCommand('justifyFull'); }} className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-200" title="Justify"><svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor"><path d="M0 2h16v2H0V2zm0 4h16v2H0V6zm0 4h16v2H0v-2zm0 4h16v2H0v-2z"/></svg></button>
                    <div className="w-px bg-gray-300 mx-1"></div>
                    <button type="button" onMouseDown={(e) => { e.preventDefault(); execCommand('insertUnorderedList'); }} className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200">• List</button>
                    <button type="button" onMouseDown={(e) => { e.preventDefault(); execCommand('insertOrderedList'); }} className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200">1. List</button>
                  </div>
                  <div
                    ref={contentRef}
                    contentEditable
                    suppressContentEditableWarning
                    onInput={(e) => setFormData({...formData, content: e.currentTarget.innerHTML})}
                    className="min-h-[160px] max-h-[400px] p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-b-lg overflow-y-auto [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:my-2 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:my-2 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:my-1 [&_ul]:list-disc [&_ul]:ml-6 [&_ol]:list-decimal [&_ol]:ml-6 [&_li]:my-1"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Author</label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData({...formData, author: e.target.value})}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full border rounded px-3 py-2"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Read Time</label>
                <input
                  type="text"
                  value={formData.readTime}
                  onChange={(e) => setFormData({...formData, readTime: e.target.value})}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Image</label>
                {editingBlog && editingBlog.image && !formData.image && (
                  <div className="mb-2">
                    <img 
                      src={`${API_BASE_URL}${editingBlog.image}`} 
                      alt="Current" 
                      className="w-32 h-32 object-cover rounded border"
                    />
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFormData({...formData, image: e.target.files?.[0] || null})}
                  className="w-full border rounded px-3 py-2"
                  required={!editingBlog && !formData.image}
                />
                {formData.image && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-600 mb-2">New image selected: {formData.image.name}</p>
                    <img 
                      src={URL.createObjectURL(formData.image)} 
                      alt="New image preview" 
                      className="w-32 h-32 object-cover rounded border"
                    />
                  </div>
                )}
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="published"
                  checked={formData.published}
                  onChange={(e) => setFormData({...formData, published: e.target.checked})}
                  className="mr-2"
                />
                <label htmlFor="published" className="text-sm font-medium">Published</label>
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  {editingBlog ? 'Update' : 'Create'}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="grid gap-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="border rounded-lg p-4 flex gap-4">
            <img
              src={`${API_BASE_URL}${blog.image}`}
              alt={blog.title}
              className="w-24 h-24 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-bold text-lg">{blog.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{blog.excerpt}</p>
              <div className="text-xs text-gray-500 mb-2">
                {blog.author} • {blog.category} • {blog.readTime}
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-2 py-1 rounded text-xs ${blog.published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                  {blog.published ? 'Published' : 'Draft'}
                </span>
                <button
                  onClick={() => handleEdit(blog)}
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(blog.id)}
                  className="text-red-600 hover:text-red-800 text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminBlogs;