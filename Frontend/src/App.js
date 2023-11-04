import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/Login';
import SignUp from './components/Signup'; // Import the SignUp component
import Home from './components/Home';
import Menu from './components/Menu';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<SignIn />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} /> {/* Add a route for SignUp */}
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} /> {/* Update the path to "menu" */}
      </Routes>
    </Router>
  );
}

export default App;
