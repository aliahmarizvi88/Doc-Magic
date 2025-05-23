import React, { useEffect } from 'react';
import { useSystem } from '../context/SystemContext';
import axios from 'axios';
import { Pencil } from 'lucide-react';
import { Trash2 } from 'lucide-react';

const HomePage = () => {
  const { data, setData } = useSystem();

  const fetchList = async () => {
    try {
      const res = await axios.get('http://localhost:5000/patient/display');
      setData(res.data);
    } catch (error) {
      console.error('falied to fetch patient list:', error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-4xl font-extrabold p-3">Patient List</h1>
      <table className=" table-auto border-collapse rounded- text-left">
        <thead>
          <tr className="bg-blue-800 text-xl text-white">
            <th className="p-8 border-b">Sr No.</th>
            <th className="p-8 border-b">Name</th>
            <th className="p-8 border-b">Age</th>
            <th className="p-8 border-b">Syntoms</th>
            <th className="p-8 border-b">Dignosis</th>
            <th className="p-8 border-b">Update/Delete</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) && data.length > 0 ? (
            data.map((patient, index) => (
              <tr
                key={patient._id || index}
                className="hover:scale-102 duration-300 text-xm bg-blue-50"
              >
                <td className="p-8 ">{index + 1}</td>
                <td className="p-8 ">{patient.name}</td>
                <td className="p-8 ">
                  {patient.DOB
                    ? new Date(patient.DOB).toLocaleDateString()
                    : ''}
                </td>
                <td className="p-8 ">{patient.syntoms}</td>
                <td className="p-8 ">{patient.dignosis}</td>
                <td className="p-8 ">
                  <button className="group m-2 p-2 bg-white rounded-2xl hover:bg-green-100 hover:scale-110 duration-300">
                    <Pencil
                      size={28}
                      className="text-[#04c304] group-hover:text-green-600 transition-colors duration-300"
                    />
                  </button>

                  <button className="group m-2 p-2 bg-white rounded-2xl hover:bg-red-100 hover:scale-110 duration-300">
                    <Trash2
                      size={28}
                      className="text-[#EE4B2B] group-hover:text-red-600 transition-colors duration-300"
                    />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="p-8" colSpan={6}>
                No patients found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
