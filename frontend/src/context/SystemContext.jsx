import { createContext, useContext, useState } from 'react';

const SystemContext = createContext(null);

export const SystemProvider = ({ children }) => {
  const [data, setData] = useState();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <SystemContext.Provider value={{ data, setData, isOpen, setIsOpen }}>
      {children}
    </SystemContext.Provider>
  );
};

export const useSystem = () => useContext(SystemContext);
