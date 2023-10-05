import React from "react";
import "./App.css";

import { BrowserRouter as Router,Routes ,Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="" exact Component={<Login/>}/> 
      </Routes>
    </Router>
  );
};

export default App;
