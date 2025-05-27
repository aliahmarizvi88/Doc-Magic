import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Update = ({ open, onClose, onConfirm, patient }) => {
  const [formData, setFormData] = useState({
    name: '',
    DOB: '',
    syntoms: '',
    dignosis: '',
  });

  useEffect(() => {
    if (patient) {
      setFormData({
        name: patient.name || '',
        DOB: patient.DOB ? patient.DOB.slice(0, 10) : '',
        syntoms: patient.syntoms || '',
        dignosis: patient.dignosis || '',
      });
    }
  }, [patient]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put('http://localhost:5000/patient/update', {
        param: patient.name,
        ...formData,
      });
      if (onConfirm) onConfirm();
      onClose();
    } catch (error) {
      alert('Failed to update patient.', error);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-96">
        <h2 className="text-lg font-bold mb-4 text-center">Update Patient</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-3">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
            <label>DOB</label>
            <input
              type="date"
              name="DOB"
              value={formData.DOB}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
            <label>Syntoms</label>
            <textarea
              name="syntoms"
              value={formData.syntoms}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            <label>Dignosis</label>
            <textarea
              name="dignosis"
              value={formData.dignosis}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
