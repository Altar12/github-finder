import React from 'react';
import GithubState from './contexts/github/GithubState';
import Navbar from './components/Navbar';
import Home from './components/Home';
import User from './components/User';
import About from './components/About';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const App = () => {
  return (
    <GithubState>
    <div className="app">
    <BrowserRouter>
      <Navbar />
      <div className="container">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:login" element={<User />} />
      <Route path="/about" element={<About />} />
      </Routes>
      </div>
      </BrowserRouter>

    </div>
    </GithubState>
  );
}

export default App;