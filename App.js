import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard/Dashboard';
import LoginForm from './components/pages/Login/Login';
import SignupForm from './components/pages/Signup/Signup';

function AppRouter() {

  const userData = {
    __name: '',
    __email: ''
  }
  const getEmailHandler = (email) => {
    console.log(email)
    userData.__email = email;
  }
  const getNameHandler = (name) => {
    userData.__name = name;
    console.log(name)
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm onSaveEmail={getEmailHandler} />} />
        <Route path="/signup" element={<SignupForm onSaveName={getNameHandler} />} />
        <Route path="/dashboard" element={<Dashboard data={userData} />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
