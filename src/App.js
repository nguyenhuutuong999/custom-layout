import React from 'react';
import { Route,  BrowserRouter as Router, Routes } from 'react-router-dom';
import Menu from './pages/Menu';
import Layout from './pages/Layout';

const App = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/layout" element={<Layout />} />
        </Routes>
      </Router>
    );
}

export default App;
