import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/Login';
import SignUp from './components/Signup';
import Home from './components/Home';
import Menu from './components/Menu';
import CrudOperations from './components/CrudOperations'; // Import the new component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/crud" element={<CrudOperations />} /> {/* Add a route for the new component */}
      </Routes>
    </Router>
  );
}

export default App;
