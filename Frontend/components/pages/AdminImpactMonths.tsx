import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { getImpactMonths, getImpactMonth, createImpactMonth, updateImpactMonth, deleteImpactMonth } from '../api/impactMonthApi.js';
import { getImpactYears } from '../api/impactYearApi.js';
import { uploadImages } from '../api/uploadApi.js';

interface ImpactMonth {
  id: number;
  title: string;
  images: string[];
  description: string;
  impactTitle: string;
  impactDescription: string;
  isActive: boolean;
  impactYear: {
    id: number;
    year: string;
  };
}

const AdminImpactMonths: React.FC = () => {
  const [impactMonths, setImpactMonths] = useState<ImpactMonth[]>([]);
  const [impactYears, setImpactYears] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingMonth, setEditingMonth] = useState<ImpactMonth | null>(null);
  const descriptionRef = React.useRef<HTMLDivElement>(null);
  const [currentFontSize, setCurrentFontSize] = useState('3');
  const isInitialMount = React.useRef(true);
  const [formData, setFormData] = useState({
    title: '',
    monthNumber: 1,
    description: '',
    impactTitle: '',
    impactDescription: '',
    impactYearId: '',
    images: [] as string[]
  });
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [yearSearch, setYearSearch] = useState('');
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletingMonth, setDeletingMonth] = useState<ImpactMonth | null>(null);

  const execCommand = (command: string, value?: string) => {
    if (descriptionRef.current) {
      descriptionRef.current.focus();
      document.execCommand(command, false, value);
    }
  };

  useEffect(() => {
    if (showModal && descriptionRef.current) {
      descriptionRef.current.innerHTML = formData.description;
      if (!editingMonth) {
        descriptionRef.current.focus();
        document.execCommand('fontSize', false, '3');
      }
    }
  }, [showModal, editingMonth]);

  const fetchImpactMonths = async () => {
    try {
      setLoading(true);
      const data = await getImpactMonths();
      setImpactMonths(data);
    } catch (error) {
      toast.error('Failed to fetch impact months');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImpactMonths();
    fetchImpactYears();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showYearDropdown && !(event.target as Element).closest('.relative')) {
        setShowYearDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showYearDropdown]);

  const fetchImpactYears = async () => {
    try {
      const data = await getImpactYears();
      setImpactYears(data);
    } catch (error) {
      toast.error('Failed to fetch impact years');
    }
  };

  const handleDeleteClick = (month: ImpactMonth) => {
    setDeletingMonth(month);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    if (!deletingMonth) return;
    
    try {
      await deleteImpactMonth(deletingMonth.id);
      toast.success('Impact month deleted successfully');
      fetchImpactMonths();
      setShowDeleteModal(false);
      setDeletingMonth(null);
    } catch (error) {
      toast.error('Failed to delete impact month');
    }
  };

  const handleCreateEdit = () => {
    setShowModal(true);
    setEditingMonth(null);
    setFormData({
      title: '',
      monthNumber: 1,
      description: '',
      impactTitle: '',
      impactDescription: '',
      impactYearId: '',
      images: []
    });
    setSelectedFiles([]);
    isInitialMount.current = true;
  };

  const handleEdit = async (id: number) => {
    try {
      const month = await getImpactMonth(id);
      setEditingMonth(month);
      setFormData({
        title: month.title,
        monthNumber: month.monthNumber || 1,
        description: month.description,
        impactTitle: month.impactTitle,
        impactDescription: month.impactDescription,
        impactYearId: month.impactYear.id.toString(),
        images: month.images || []
      });
      setShowModal(true);
    } catch (error) {
      toast.error('Failed to fetch impact month');
    }
  };

  const handleFileUpload = async (files: File[]) => {
    if (files.length === 0) return;
    
    const remainingSlots = 5 - formData.images.length;
    const filesToUpload = files.slice(0, remainingSlots);
    
    try {
      const uploadResult = await uploadImages(filesToUpload);
      const newImages = [...formData.images, ...uploadResult.files];
      setFormData({ ...formData, images: newImages });
      toast.success(`${uploadResult.files.length} image(s) uploaded successfully`);
    } catch (error) {
      toast.error('Failed to upload images');
    }
  };

  const removeImage = (index: number) => {
    const newImages = formData.images.filter((_, i) => i !== index);
    setFormData({ ...formData, images: newImages });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const submitData = {
        ...formData,
        impactYearId: parseInt(formData.impactYearId)
      };

      if (editingMonth) {
        await updateImpactMonth(editingMonth.id, submitData);
        toast.success('Impact month updated successfully');
      } else {
        await createImpactMonth(submitData);
        toast.success('Impact month created successfully');
      }
      setShowModal(false);
      fetchImpactMonths();
    } catch (error) {
      toast.error(editingMonth ? 'Failed to update impact month' : 'Failed to create impact month');
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Impact Months Management</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">All Impact Months</h2>
          <button 
            onClick={handleCreateEdit}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Add New Month
          </button>
        </div>
        
        {loading ? (
          <div className="text-center py-4">Loading...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Title</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Year</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Images</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Status</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {impactMonths.length === 0 ? (
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-600 text-center" colSpan={5}>
                      No impact months found
                    </td>
                  </tr>
                ) : (
                  impactMonths.map((month) => (
                    <tr key={month.id} className="border-b">
                      <td className="px-4 py-2 text-sm font-medium text-gray-900 max-w-xs truncate">{month.title}</td>
                      <td className="px-4 py-2 text-sm text-gray-600">{month.impactYear?.year}</td>
                      <td className="px-4 py-2 text-sm text-gray-600">{month.images?.length || 0}</td>
                      <td className="px-4 py-2">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          month.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {month.isActive ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td className="px-4 py-2 text-sm">
                        <button 
                          onClick={() => handleEdit(month.id)}
                          className="text-blue-600 hover:text-blue-800 mr-2"
                        >
                          Edit
                        </button>
                        <button 
                          onClick={() => handleDeleteClick(month)}
                          className="text-red-600 hover:text-red-800"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-lg font-semibold mb-4 pr-8">
              {editingMonth ? 'Edit Impact Month' : 'Create Impact Month'}
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Month</label>
                  <select
                    value={formData.monthNumber}
                    onChange={(e) => setFormData({ ...formData, monthNumber: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {Array.from({length: 12}, (_, i) => (
                      <option key={i+1} value={i+1}>{new Date(0, i).toLocaleString('default', { month: 'long' })}</option>
                    ))}
                  </select>
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Impact Year</label>
                  <input
                    type="text"
                    value={yearSearch || impactYears.find(y => y.id.toString() === formData.impactYearId)?.year || ''}
                    onChange={(e) => {
                      setYearSearch(e.target.value);
                      setShowYearDropdown(true);
                    }}
                    onFocus={() => setShowYearDropdown(true)}
                    placeholder="Search and select year"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  {showYearDropdown && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto">
                      {impactYears
                        .filter(year => year.year.toLowerCase().includes(yearSearch.toLowerCase()))
                        .map(year => (
                          <div
                            key={year.id}
                            onClick={() => {
                              setFormData({ ...formData, impactYearId: year.id.toString() });
                              setYearSearch('');
                              setShowYearDropdown(false);
                            }}
                            className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                          >
                            {year.year}
                          </div>
                        ))
                      }
                    </div>
                  )}
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
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
                    ref={descriptionRef}
                    contentEditable
                    suppressContentEditableWarning
                    onInput={(e) => setFormData({ ...formData, description: e.currentTarget.innerHTML })}
                    className="min-h-[120px] max-h-[300px] p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-b-lg overflow-y-auto [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:my-2 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:my-2 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:my-1 [&_ul]:list-disc [&_ul]:ml-6 [&_ol]:list-decimal [&_ol]:ml-6 [&_li]:my-1"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Impact Title (Optional)</label>
                <input
                  type="text"
                  value={formData.impactTitle}
                  onChange={(e) => setFormData({ ...formData, impactTitle: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Impact Description (Optional)</label>
                <textarea
                  value={formData.impactDescription}
                  onChange={(e) => setFormData({ ...formData, impactDescription: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Images (max 5)</label>
                
                {formData.images.length > 0 && (
                  <div className="mb-3">
                    <p className="text-sm text-gray-600 mb-2">Uploaded Images:</p>
                    <div className="flex gap-2 flex-wrap">
                      {formData.images.map((image, index) => (
                        <div key={index} className="relative">
                          <img 
                            src={`${import.meta.env.VITE_API_URL || 'http://localhost:3050'}/uploads/${image}`}
                            alt={`Image ${index + 1}`}
                            className="w-20 h-20 object-cover rounded border"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {formData.images.length < 5 && (
                  <>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const files = Array.from(e.target.files || []) as File[];
                        handleFileUpload(files);
                        e.target.value = ''; // Reset input
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <p className="text-sm text-gray-600 mt-1">
                      {formData.images.length}/5 images uploaded. Can add {5 - formData.images.length} more.
                    </p>
                  </>
                )}
                
                {formData.images.length >= 5 && (
                  <p className="text-sm text-green-600">Maximum 5 images uploaded.</p>
                )}
              </div>
              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  {editingMonth ? 'Update' : 'Create'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showDeleteModal && deletingMonth && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60]">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4 relative">
            <button
              onClick={() => {
                setShowDeleteModal(false);
                setDeletingMonth(null);
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 pr-8">Confirm Delete</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete <strong>"{deletingMonth.title}"</strong>?
            </p>
            <div className="flex space-x-3">
              <button
                onClick={handleDeleteConfirm}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setDeletingMonth(null);
                }}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminImpactMonths;