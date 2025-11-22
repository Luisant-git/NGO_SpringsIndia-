import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { getImpactYears, getImpactYear, createImpactYear, updateImpactYear, deleteImpactYear } from '../api/impactYearApi.js';

interface ImpactYear {
  id: number;
  year: string;
  fromMonth: number;
  fromYear: number;
  toMonth: number;
  toYear: number;
  description: string;
  isActive: boolean;
  impactMonths: any[];
}

const AdminImpactYears: React.FC = () => {
  const [impactYears, setImpactYears] = useState<ImpactYear[]>([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingYear, setEditingYear] = useState<ImpactYear | null>(null);
  const [formData, setFormData] = useState({ year: '', fromMonth: 1, fromYear: 2023, toMonth: 12, toYear: 2023, description: '' });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletingYear, setDeletingYear] = useState<ImpactYear | null>(null);

  const fetchImpactYears = async () => {
    try {
      setLoading(true);
      const data = await getImpactYears();
      setImpactYears(data);
    } catch (error) {
      toast.error('Failed to fetch impact years');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImpactYears();
  }, []);

  const handleDeleteClick = (year: ImpactYear) => {
    setDeletingYear(year);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    if (!deletingYear) return;
    
    try {
      await deleteImpactYear(deletingYear.id);
      toast.success('Impact year deleted successfully');
      fetchImpactYears();
      setShowDeleteModal(false);
      setDeletingYear(null);
    } catch (error) {
      toast.error('Failed to delete impact year');
    }
  };

  const handleCreateEdit = () => {
    setShowModal(true);
    setEditingYear(null);
    setFormData({ year: '', fromMonth: 1, fromYear: 2023, toMonth: 12, toYear: 2023, description: '' });
  };

  const handleEdit = async (id: number) => {
    try {
      const year = await getImpactYear(id);
      setEditingYear(year);
      setFormData({ year: year.year, fromMonth: year.fromMonth, fromYear: year.fromYear, toMonth: year.toMonth, toYear: year.toYear, description: year.description });
      setShowModal(true);
    } catch (error) {
      toast.error('Failed to fetch impact year');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingYear) {
        await updateImpactYear(editingYear.id, formData);
        toast.success('Impact year updated successfully');
      } else {
        await createImpactYear(formData);
        toast.success('Impact year created successfully');
      }
      setShowModal(false);
      fetchImpactYears();
    } catch (error) {
      toast.error(editingYear ? 'Failed to update impact year' : 'Failed to create impact year');
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Impact Years Management</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">All Impact Years</h2>
          <button 
            onClick={handleCreateEdit}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Add New Year
          </button>
        </div>
        
        {loading ? (
          <div className="text-center py-4">Loading...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Year</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Description</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Months</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Status</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {impactYears.length === 0 ? (
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-600 text-center" colSpan={5}>
                      No impact years found
                    </td>
                  </tr>
                ) : (
                  impactYears.map((year) => (
                    <tr key={year.id} className="border-b">
                      <td className="px-4 py-2 text-sm font-medium text-gray-900">{year.year}</td>
                      <td className="px-4 py-2 text-sm text-gray-600 max-w-xs truncate">{year.description}</td>
                      <td className="px-4 py-2 text-sm text-gray-600">{year.impactMonths?.length || 0}</td>
                      <td className="px-4 py-2">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          year.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {year.isActive ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td className="px-4 py-2 text-sm">
                        <button 
                          onClick={() => handleEdit(year.id)}
                          className="text-blue-600 hover:text-blue-800 mr-2"
                        >
                          Edit
                        </button>
                        <button 
                          onClick={() => handleDeleteClick(year)}
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
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-lg font-semibold mb-4 pr-8">
              {editingYear ? 'Edit Impact Year' : 'Create Impact Year'}
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                <input
                  type="text"
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">From Month</label>
                  <select
                    value={formData.fromMonth}
                    onChange={(e) => setFormData({ ...formData, fromMonth: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {Array.from({length: 12}, (_, i) => (
                      <option key={i+1} value={i+1}>{new Date(0, i).toLocaleString('default', { month: 'long' })}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">From Year</label>
                  <input
                    type="number"
                    value={formData.fromYear}
                    onChange={(e) => setFormData({ ...formData, fromYear: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">To Month</label>
                  <select
                    value={formData.toMonth}
                    onChange={(e) => setFormData({ ...formData, toMonth: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {Array.from({length: 12}, (_, i) => (
                      <option key={i+1} value={i+1}>{new Date(0, i).toLocaleString('default', { month: 'long' })}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">To Year</label>
                  <input
                    type="number"
                    value={formData.toYear}
                    onChange={(e) => setFormData({ ...formData, toYear: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  {editingYear ? 'Update' : 'Create'}
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

      {showDeleteModal && deletingYear && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60]">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4 relative">
            <button
              onClick={() => {
                setShowDeleteModal(false);
                setDeletingYear(null);
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 pr-8">Confirm Delete</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete <strong>"{deletingYear.year}"</strong>?
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
                  setDeletingYear(null);
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

export default AdminImpactYears;