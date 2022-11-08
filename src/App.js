import React from 'react';

import { Routes, Route } from 'react-router-dom';

import './App.css';
import MainNavigation from './components/MainNavigation';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <React.Fragment>
      <MainNavigation />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
