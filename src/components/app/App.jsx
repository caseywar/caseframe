import React from 'react';
import Header from '../app/pages/Header.jsx'
import Body from '../app/pages/Body.jsx'
import MyCode from '../app/pages/MyCode.jsx'
import Resume from '../app/pages/Resume.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Header />} /> */}
        <Route path="/" element={<Body />} />
        <Route path="/mycode" element={<MyCode />} />
        <Route path="/resume" element={<Resume />} />

      </Routes>
    </Router>
    </>
  )
}
