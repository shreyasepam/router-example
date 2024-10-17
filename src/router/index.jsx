import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Users from '../pages/Users';
import UserDetails from '../pages/UserDetails';
import Header from '../components/Header';

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <div className="mx-auto h-[calc(100%-56px)] max-w-7xl overflow-auto bg-gray-100 px-4">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/users" Component={Users} />
          <Route path="/users/:id" Component={UserDetails} />
        </Routes>
      </div>
    </Router>
  );
}
