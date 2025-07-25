import React, { useState } from 'react';
import { useSystem } from '../context/SystemContext';
import axios from 'axios';

const AddPatients = () => {
  const { isOpen, setIsOpen } = useSystem();
  const [formData, setFormData] = useState({
    name: '',
    DOB: '',
    syntoms: '',
    dignosis: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/patient/submit', formData);
      setIsOpen(false);
      setFormData({ name: '', DOB: '', syntoms: '', dignosis: '' });
    } catch (error) {
      console.log('Failed to submit data: ', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-96">
        <h2 className="text-xl font-bold mb-4 text-center">Add New Patient</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-3">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
            <label>DOB</label>
            <input
              type="date"
              name="DOB"
              placeholder="Date of Birth"
              value={formData.DOB}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
            <label>Syntoms</label>
            <textarea
              name="syntoms"
              placeholder="Symptoms"
              value={formData.syntoms}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            <label>Dignosis</label>
            <textarea
              name="dignosis"
              placeholder="Diagnosis"
              value={formData.dignosis}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="mt-4 text-white text-sm bg-gray-300 block mx-auto p-4 rounded-2xl hover:bg-gray-200"
            >
              Close
            </button>
            <button
              type="submit"
              className="mt-4 text-white text-sm bg-green-500 block mx-auto p-4 rounded-2xl hover:bg-green-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPatients;
