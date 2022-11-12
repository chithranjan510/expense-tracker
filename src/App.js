import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
import {useSelector} from 'react-redux';

import './App.css';
import MainNavigation from './components/MainNavigation';
import Login from './pages/Login';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import About from './pages/About';
import Expenses from './pages/Expenses';
import ForgotPassword from './components/ForgotPassword';

function App() {
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);

  return (
    <React.Fragment>
      <MainNavigation />
      <Routes>
        <Route path='/' exact element={<Navigate replace to='/home' />} />
        <Route path='/home' element={<Home />} />

        {isLoggedIn ? (
          <Route path='/expenses' element={<Expenses />} />
        ) : (
          <Route path='/expenses' element={<Navigate replace to='/login' />} />
        )}

        <Route path='/about' element={<About />} />

        {isLoggedIn ? (
          <Route path='/profile' element={<UserProfile />} />
        ) : (
          <Route path='/profile' element={<Navigate replace to='/login' />} />
        )}

        <Route path='/login' element={<Login />} />
        <Route path='/resetpassword' element={<ForgotPassword />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
