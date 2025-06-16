import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import FormPage from './Pages/FormPage';
import ConfirmPage from './Pages/ConfirmPage';
import DataPage from './Pages/DataPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/confirm/:id" element={<ConfirmPage />} />
        <Route path="/data/:id" element={<DataPage />} />
      </Routes>
    </Router>
  );
}
