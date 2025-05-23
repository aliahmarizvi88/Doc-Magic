import React, { useState } from 'react';
import { useSystem } from '../context/SystemContext';

const AddPatients = () => {
  const { isOpen, setIsOpen } = useSystem();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    symptoms: '',
    diagnosis: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-96">
        <h2 className="text-xl font-bold mb-4 text-center">Add New Patient</h2>
        <div className="space-y-3">
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <label htmlFor="">DOB</label>
          <input
            type="date"
            name="age"
            placeholder="Date of Birth"
            value={formData.age}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <label htmlFor="">Syntoms</label>
          <input
            type="text"
            name="symptoms"
            placeholder="Symptoms"
            value={formData.symptoms}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <label htmlFor="">Dignosis</label>
          <input
            type="text"
            name="diagnosis"
            placeholder="Diagnosis"
            value={formData.diagnosis}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="flex justify-between mt-6">
          <button
            onClick={() => setIsOpen(false)}
            className="mt-4 text-white text-sm bg-gray-300 block mx-auto p-4 rounded-2xl hover:bg-gray-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPatients;
