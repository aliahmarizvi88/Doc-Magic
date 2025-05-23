import React from 'react';
import { Plus } from 'lucide-react';
import { useSystem } from '../context/SystemContext';

const Header = () => {
  const { setIsOpen } = useSystem();

  return (
    <div className="bg-blue-400 flex flex-row justify-between px-8 py-4 items-baseline">
      <h1 className="font-extrabold text-4xl text-gray-300">DOC MAGIC</h1>
      <div>
        <button
          className="bg-orange-400 p-4 font-bold rounded-3xl text-white shadow-2xl hover:bg-orange-500 duration-300 flex flex-row gap-2"
          onClick={() => setIsOpen(true)}
        >
          <Plus color="#ffffff" strokeWidth={3} />
          ADD PATIENTS
        </button>
      </div>
    </div>
  );
};

export default Header;
