import React from 'react';
import { Routes, Route } from 'react-router-dom';
import classes from './App.module.scss';

import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Register from '../../pages/Register';

function App() {
  return (
    <div className={classes.container}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
