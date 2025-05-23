import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Header from './Header';
import AddPatients from '../pages/AddPatients';

const Index = () => {
  return (
    <div>
      <Header />
      <AddPatients />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default Index;
