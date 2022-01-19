import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/soft-ui-dashboard.min.css';
import './Style.css';
import PageHome from './PageHome/PageHome';
import PageProfile from './PageProfile/PageProfile';
import PageSurvey from './PageSurvey/PageSurvey';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="Home" element={<PageHome />} />
          <Route path="Survey" element={<PageSurvey />} />
          <Route path="Profile" element={<PageProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
