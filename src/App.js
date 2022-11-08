import React from 'react';

import { Routes, Route } from 'react-router-dom';

import './App.css';
import MainNavigation from './components/MainNavigation';
import Login from './pages/Login';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <React.Fragment>
      <MainNavigation />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<UserProfile />}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
